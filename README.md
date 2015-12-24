# Sitefinity.RelatedDataSelectorAndDialog
Custom Related data dialog and selector

Installation:

1. Get the related data services from https://github.com/nzagorchev/Sitefinity.RelatedDataServices or write your own.
2. Modify your Global Application class to register:
	- related data services;
	- sfhtml route resolver;
	- shtml virtual path resolver;
5. Change the relating data field in the configs with the custom relating data field type. Example:
	<field wrapperTag="Li" fieldType="SitefinityWebApp.RelatingDataFieldCustom.RelatingDataFieldCustom, SitefinityWebApp" fieldName="RelatingDataField" type:this="Telerik.Sitefinity.Web.UI.Fields.Config.RelatingDataFieldDefinitionElement, Telerik.Sitefinity">
		<validator expectedFormat="None" maxLength="-1" minLength="-1" required="False" validateIfInvisible="True" />
		<expandableDefinition expanded="True" />
	</field>
6. Embed the sfhtml file.