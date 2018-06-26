using Microsoft.AspNetCore.Mvc.Razor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Helpers
{
    public class MyViewLocationExpander : IViewLocationExpander
    {

        public IEnumerable<string> ExpandViewLocations(ViewLocationExpanderContext context,
            IEnumerable<string> viewLocations)
        {

            //replace the Views to MyViews..  
            List<string> locations = new List<string>(viewLocations);

            locations.Add("/Templates/{0}.cshtml");
            return locations;
        }

        public void PopulateValues(ViewLocationExpanderContext context)
        {
            //nothing to do here.  
        }
    }
}
