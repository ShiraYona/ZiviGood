const register = async () => {

    const email = document.getElementById("userNameRegister").value
    const password = document.getElementById("passwordRegister").value

    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const user = { email, password, firstName, lastName }
    try {
        const res = await fetch('api/User', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const dataPost = await res.json();
    }
    catch (er) {
        alert(er.message)
    }
}
var users;
const login = async () => {

    try {
        const Email = document.getElementById("userNameLogin").value
        const password = document.getElementById("passwordLogin").value
        const user = {
            Email, password
        }
        var url = 'api/User/login'
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!res.ok) {
            throw new Error("eror!!!")
        }
        else {
            var data = await res.json()
            sessionStorage.setItem("user", JSON.stringify(data))
            window.location.href = "./update.html"

        }
    }
    catch (er) {
        alert(er.message+"5h6yh")
    }
    sessionStorage.setItem('userId', JSON.stringify(user));

}
const checkCode = async () => {
    var strength = {
        0: "Worst",
        1: "Bad",
        2: "Weak",
        3: "Good",
        4: "Strong"
    }
    const meter = document.getElementById('password-strength-meter');
    const text = document.getElementById('password-strength-text');
    const Code = document.getElementById("passwordRegister").value;
    const res = await fetch('api/User/check', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Code)
    })
    if (!res.ok)
        throw new Error("error in adding your details to our site")
    const data = await res.json();
    if (data <= 2) alert("your password is weak!! try again")
    meter.value = data;

    if (Code !== "") {
        text.innerHTML = "Strength: " + strength[data.score];
    } else {
        text.innerHTML = "";
    }

}
