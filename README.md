# Sitefinity.RelatedDataSelectorAndDialog
Custom Related data dialog and selector

## Installation

1. Get the related data services from https://github.com/nzagorchev/Sitefinity.RelatedDataServices or write your own.
2. Modify your Global Application class to register:
	- related data services;
	- sfhtml route resolver;
	- shtml virtual path resolver;
5. Change the relating data field in the configs with the custom relating data field type. Example:
```xml
	<field wrapperTag="Li" fieldType="SitefinityWebApp.RelatingDataFieldCustom.RelatingDataFieldCustom, SitefinityWebApp" fieldName="RelatingDataField" type:this="Telerik.Sitefinity.Web.UI.Fields.Config.RelatingDataFieldDefinitionElement, Telerik.Sitefinity">
		<validator expectedFormat="None" maxLength="-1" minLength="-1" required="False" validateIfInvisible="True" />
		<expandableDefinition expanded="True" />
	</field>
```
6. Embed the sfhtml file.

## Functionality

The field and services resolve dynamically all simple type fields of the module (string, Lstring, number, datetime etc.), as well as, all classification fields (including custom classification fields).
![related data selector and dialog functionality gif](https://github.com/nzagorchev/Sitefinity.RelatedDataSelectorAndDialog/blob/master/Media/related-data-selector-and-dialog.gif)
