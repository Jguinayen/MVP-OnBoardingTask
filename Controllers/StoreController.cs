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
    public class StoreController : Controller
    {
        StoreData objstore = new StoreData();

        [HttpGet]
        [Route("api/Store/Index")]
        public IEnumerable<Store> Index()
        {
            return objstore.GetAllStores();
        }

        [HttpPost]
        [Route("api/Store/Create")]
        public int Create(Store store)
        {
            return objstore.AddStore(store);
        }

        [HttpGet]
        [Route("api/Store/Details/{id}")]
        public Store Details(int id)
        {
            return objstore.GetStoreData(id);
        }

        [HttpPut]
        [Route("api/Store/Edit")]
        public int Edit(Store store)
        {
            return objstore.UpdateStore(store);
        }

        [HttpDelete]
        [Route("api/Store/Delete/{id}")]
        public int Delete(int id)
        {
            return objstore.DeleteStore(id);
        }
    }
}
