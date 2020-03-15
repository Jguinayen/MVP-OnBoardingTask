using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using OnBoardingTask.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MVPOnBoardingTask.Controllers
{
    //[Route("api/[controller]")]
    public class ProductController : Controller
    {
        ProductData objproduct = new ProductData();

        [HttpGet]
        [Route("api/Product/Index")]
        public IEnumerable<Product> Index()
        {
            return objproduct.GetAllProducts();
        }

        [HttpPost]
        [Route("api/Product/Create")]
        public int Create(Product product)
        {
            return objproduct.AddProduct(product);
        }

        [HttpGet]
        [Route("api/Product/Details/{id}")]
        public Product Details(int id)
        {
            return objproduct.GetProductData(id);
        }

        [HttpPut]
        [Route("api/Product/Edit")]
        public int Edit(Product product)
        {
            return objproduct.UpdateProduct(product);
        }

        [HttpDelete]
        [Route("api/Product/Delete/{id}")]
        public int Delete(int id)
        {
            return objproduct.DeleteProduct(id);
        }
    }
}
