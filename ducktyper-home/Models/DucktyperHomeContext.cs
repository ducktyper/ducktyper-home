using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace ducktyper_home.Models
{
    public class DucktyperHomeContext : DbContext
    {
        public DucktyperHomeContext() : base("DucktyperHomeContext")
        {
        }
        public DbSet<Project> Projects { get; set; }
    }
}