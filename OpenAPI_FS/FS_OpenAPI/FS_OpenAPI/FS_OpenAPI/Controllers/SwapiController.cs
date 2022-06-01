using Microsoft.AspNetCore.Mvc;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FS_OpenAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SwapiController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet(Name = "Swapi")]
        public async Task<string> GetCategories()
        {
            var client = new RestClient($"https://swapi.dev/api/people/");
            var request = new RestRequest("", Method.Get);
            var response = await client.ExecuteAsync(request);

            //TODO: transform the response here to suit your needs

            return response.Content;
        }
    }
}
