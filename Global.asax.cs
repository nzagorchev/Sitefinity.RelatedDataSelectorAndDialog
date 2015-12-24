using System;
using System.Globalization;
using System.Threading;
using Telerik.Microsoft.Practices.Unity;
using Telerik.Sitefinity.Abstractions;
using Telerik.Sitefinity.Services;
using Telerik.Sitefinity.Utilities.TypeConverters;
using Telerik.Sitefinity.Web;
using Telerik.Sitefinity.Web.UI;
using Telerik.Sitefinity.Model;
using Telerik.Sitefinity;
using Telerik.Sitefinity.Localization;
using System.Linq;
using Telerik.Sitefinity.Data;
using SitefinityWebApp.RelatedDataServices.Plugins;
using System.Web.Routing;
using Telerik.Sitefinity.Abstractions.VirtualPath.Configuration;
using Telerik.Sitefinity.Configuration;

namespace SitefinityWebApp
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            Bootstrapper.Initialized += new EventHandler<Telerik.Sitefinity.Data.ExecutedEventArgs>(Bootstrapper_Initialized);        
        }

        protected void Bootstrapper_Initialized(object sender, Telerik.Sitefinity.Data.ExecutedEventArgs e)
        {
            if (e.CommandName == "RegisterRoutes")
            {
		// RelatedDataServices - get from GitHub: https://github.com/nzagorchev/Sitefinity.RelatedDataServices
                SystemManager.RegisterServiceStackPlugin(new GenericDataServiceCustomPlugin(), true);
                SystemManager.RegisterServiceStackPlugin(new RelatedDataServiceCustomPlugin(), true);

                var route = new Route("SFHtml/{resourceName}", ObjectFactory.Resolve<ResourceRouteHandler>());
                RouteTable.Routes.Add("SFHtml", route);

                ConfigManager configManager = ConfigManager.GetManager();
                var virtualPathConfig = configManager.GetSection<VirtualPathSettingsConfig>();
                var isRegistered = virtualPathConfig.VirtualPaths.Keys.Contains("~/SFHtml/*");
                if (!isRegistered)
                {
                    var sfHtmlVirtualPath = new VirtualPathElement(virtualPathConfig.VirtualPaths)
                    {
                        VirtualPath = "~/SFHtml/*",
                        ResolverName = "EmbeddedResourceResolver",
                        ResourceLocation = "SitefinityWebApp"
                    };
                    virtualPathConfig.VirtualPaths.Add(sfHtmlVirtualPath);
                    configManager.SaveSection(virtualPathConfig);
                }
            }
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}
