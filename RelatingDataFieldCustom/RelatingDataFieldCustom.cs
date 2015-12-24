using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using Telerik.Sitefinity.Web.UI.Fields;

namespace SitefinityWebApp.RelatingDataFieldCustom
{
    public class RelatingDataFieldCustom : RelatingDataField
    {
        //public override IEnumerable<System.Web.UI.ScriptReference> GetScriptReferences()
        //{
        //    var baseScripts = base.GetScriptReferences().ToList();
        //    baseScripts.Add(new System.Web.UI.ScriptReference("~/RelatingDataFieldCustom/RelatingDataFieldCustom.js"));

        //    return baseScripts;
        //}

        public override IEnumerable<System.Web.UI.ScriptReference> GetScriptReferences()
        {
            var scripts = new List<ScriptReference>(base.GetScriptReferences());
            scripts.Add(new ScriptReference("Telerik.Sitefinity.Web.UI.Fields.Scripts.ILocalizableFieldControl.js", "Telerik.Sitefinity"));
            scripts.Add(new ScriptReference("Telerik.Sitefinity.Web.UI.Fields.Scripts.IRelatingDataField.js", "Telerik.Sitefinity"));
            scripts.Add(new ScriptReference("Telerik.Sitefinity.Web.UI.Fields.Scripts.RelatingDataField.js", "Telerik.Sitefinity"));

            scripts.Add(new System.Web.UI.ScriptReference("~/RelatingDataFieldCustom/RelatingDataFieldCustom.js"));

            return scripts;
        }

        //protected override string ScriptDescriptorType
        //{
        //    get
        //    {
        //        return typeof(RelatingDataFieldCustom).FullName;
        //    }
        //}

        //protected override string ScriptDescriptorTypeName
        //{
        //    get
        //    {
        //        return typeof(RelatingDataFieldCustom).FullName;
        //    }
        //}
    }
}