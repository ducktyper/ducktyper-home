using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ducktyper_home.Models
{
    public class Project
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Details { get; set; }
        public string Link { get; set; }
        public string Body { get; set; }
    }
}