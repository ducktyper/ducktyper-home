using ducktyper_home.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ducktyper_home.Controllers
{
    public class ProjectsController : ApiController
    {
        private DucktyperHomeContext db = new DucktyperHomeContext();

        public IEnumerable<Project> GetAllProjects()
        {
            return db.Projects.OrderByDescending(x => x.ID);
        }
    }
}
