using Microsoft.AspNetCore.Mvc;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FS_OpenAPI.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ChuckController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        //[HttpGet]
        //public IEnumerable<WeatherForecast> Get()
        //{
        //    return null;
        //}

        [HttpGet(Name = "Categories")]
        public async Task<string> GetCategories()
        {
            var client = new RestClient($"https://api.chucknorris.io/jokes/categories");
            var request = new RestRequest("",Method.Get);
            var response = await client.ExecuteAsync(request);

            //TODO: transform the response here to suit your needs

            return response.Content;
        }

        [HttpGet(Name = "SearchCategory")]
        public async Task<string> GetSearchCategory(string s)
        {
            var client = new RestClient($"https://api.chucknorris.io/jokes/random?category=" + s);


            var request = new RestRequest("", Method.Get);
            var response = await client.ExecuteAsync(request);

            //TODO: transform the response here to suit your needs

            return response.Content;
        }
    }
}
