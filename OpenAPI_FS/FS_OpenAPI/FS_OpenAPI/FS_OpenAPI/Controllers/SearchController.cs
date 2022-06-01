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
    public class SearchController : Controller
    {
        //public IActionResult Index()
        //{
        //    return View();
        //}

        [HttpGet(Name = "Search")]
        public async Task<string> GetSearchData(string s)
        {
            var client = new RestClient($"https://api.chucknorris.io/jokes/search?query=" + s);


            var request = new RestRequest("", Method.Get);
            var response = await client.ExecuteAsync(request);

            //TODO: transform the response here to suit your needs

            return response.Content;
        }
    }
}
