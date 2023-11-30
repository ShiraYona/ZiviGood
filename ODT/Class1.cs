namespace ODT
{
    public class UserDTO
    {
        public int UserId { get; set; }

        public string Email { get; set; } = null!;

        public string Password{get; set;  } = null!;


        public string FirstName { get; set; } = null!;

        public string LastName { get; set; } = null!;

        public int OrderId { get; set; }

        public DateTime OrderDate { get; set; }

        public int OrderSum { get; set; }


    }
}