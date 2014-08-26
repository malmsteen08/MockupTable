using MockupCustomTable.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MockupCustomTable.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
//            private DataDBContext db = new DataDBContext();



            //string url = @"C:\work\MockupTable\MockupCustomTable\MockupCustomTable\Data\data.xml";

            //XDocument data = XDocument.Load(url);
            //XElement objectName = new XElement("ObjectName", InputType.Radio);
            //XElement fieldName = new XElement("FieldName", InputType.Radio);

            //data.Descendants("Object").First().Add(objectName, fieldName);
            //data.Save(url);
			
            return View();
        }
        public ActionResult InsertField()
        {
            return View();
        }
    }
}
