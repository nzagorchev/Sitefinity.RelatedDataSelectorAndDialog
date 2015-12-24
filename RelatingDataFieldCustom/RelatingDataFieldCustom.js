/// <reference name="MicrosoftAjax.js"/>
Type.registerNamespace("SitefinityWebApp.RelatingDataFieldCustom");

SitefinityWebApp.RelatingDataFieldCustom.RelatingDataFieldCustom = function (element) {

    SitefinityWebApp.RelatingDataFieldCustom.RelatingDataFieldCustom.initializeBase(this, [element]);
};

SitefinityWebApp.RelatingDataFieldCustom.RelatingDataFieldCustom.prototype = {

    /* --------------------------------- set up and tear down --------------------------------- */

    initialize: function () {
        SitefinityWebApp.RelatingDataFieldCustom.RelatingDataFieldCustom.callBaseMethod(this, 'initialize');

        requirejs.config({
            paths: {
                FlatContentSelector: '/RelatingDataFieldCustom/FlatContentSelectorCustom',
                RelatedDataGridTemplate: '/SFHtml/SitefinityWebApp.RelatingDataFieldCustom.RelatedDataGrid.sfhtml',
                FlatContentSelectorOriginal: 'Telerik.Sitefinity.RelatedData.Web.UI.Scripts.FlatContentSelector'
            }
        });
    },
    dispose: function () {
        SitefinityWebApp.RelatingDataFieldCustom.RelatingDataFieldCustom.callBaseMethod(this, 'dispose');
    }
};

SitefinityWebApp.RelatingDataFieldCustom.RelatingDataFieldCustom
    .registerClass('SitefinityWebApp.RelatingDataFieldCustom.RelatingDataFieldCustom',
    Telerik.Sitefinity.Web.UI.Fields.RelatingDataField);