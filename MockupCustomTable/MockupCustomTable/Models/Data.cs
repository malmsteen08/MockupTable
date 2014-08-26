using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Data.Entity;

namespace MockupCustomTable.Models
{
    public class Data
    {
        public string CustomObjectName { get; set; }
        public string CustomFieldName { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string HelpText { get; set; }
        public bool IsActive { get; set; }
        public bool IsRequired { get; set; }
    }

    public class DataDBContext : DbContext
    {
        public DbSet<Data> Datas { get; set; }
    }
}