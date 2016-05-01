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
        Project[] projects = new Project[]
        {
            new Project { ID = 1, Name = "Teaching Ruby", Details = "Learn ruby from building simple application", Link = "https://github.com/ducktyper/countdown" },
            new Project { ID = 2, Name = "Let's Play", Details = "Playground for javascript and c#", Link = "https://github.com/ducktyper/letsplay" }
        };

        public IEnumerable<Project> GetAllProjects()
        {
            return projects.OrderByDescending(x => x.ID);
        }
    }
}
