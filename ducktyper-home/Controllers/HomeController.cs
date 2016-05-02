using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;

namespace ducktyper_home.Controllers
{
    public class HomeController : ApiController
    {
        [System.Web.Http.HttpGet]
        public HttpResponseMessage Index()
        {
            var response = new HttpResponseMessage();
            response.Content = new StringContent(
                System.IO.File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + "/index.html"),
                System.Text.Encoding.UTF8, "text/html"
            );
            return response;
        }
    }
}
