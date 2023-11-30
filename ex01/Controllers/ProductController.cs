using Entytess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using servies;

namespace project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : Controller
    {
        private readonly IProductServies _product;


        public ProductController(IProductServies _Product)
        {
            _product = _Product;

        }
        [HttpGet]

        public async Task<IEnumerable<Product>> getAllProducts(string? desc, int? minPrice, int? maxPrice,
         [FromQuery]   int?[] categoryIds)
        {

           return await  _product.getAllProducts(desc, minPrice, maxPrice,
            categoryIds);
        }







    }

}