### Description
Argos-localizer is a ruby script that will create an XML file of all the strings to be localized, or translated.

Once the XML file has been translated you then run the same script with different options to conver that to a javascript 
override file which, upon loading, will replace all the strings in the application with the new localized ones.


### Requirements
This requires the `rkelly`, `trollop`, `erb` and `nokogiri` gems to be installed.
These provide: A JS to Ruby parser, command line parser, string templating and XML parser.

```
gem install rkelly
gem install nokogiri
gem install trollop
```

(erb is typically installed by default)

###Life Cycle
In your javascript code files (ending with .js) the localizer script will create an xml file of all the
variables ending with `Text`. Example:

```
MyClass = { this.titleText: "My title" };
```

will result in:

	<data class="MyClass" property="titleText" type="text">
		<description> </description>
		<value>My title</value>
	</data>

Variables ending with `FormatText` will have a `type="format"` which designates to not translate this value directly
but change it to the proper format. A common example is date string formatting.

Running the localizer script again with the proper options will output this:

    localize('MyClass',{
        titleText : 'title in German'
    });

There will be a localize call for each class (object).


###Usage:
Start a command prompt with Ruby

Run the argos-localizer.rb file passing the --help parameter to see the full list of options

####Generating an XML WorkSheet

Use the --project-path and --xml-path command line options

Full Example:

```
"C:\code\mobile\argos-localizer\argos-localizer.rb" --project-path "C:\code\mobile\products\argos-sample\src"  --xml-path "C:\code\mobile\products\argos-sample\de.xml"
```

A 'Finished Generating' message will appear.

Open your XML file in your editor of choice and edit the value fields to your new language.

Identify each string by it's class (namespace) and property

Note the type of data listed as seen in the type attribute of the data node:

`text =` you can safely translate the value to its equivalent in another language

`format =` this is a special format value that needs special attention on how to re-arrange the given format

Replace the text of the `value` node with your localized version of that property

Example:

	<data class="Mobile.SalesLogix.Account.Detail" property="accountText" type="text">
		<description></description>
		<value>konte</value> 
	</data>

Save the file

Now that you have your modified XML file (de.xml) you need to generate the localized javascript file

####Generating the localize JS file

Use the --xml-path and --js-path command line options

Full Example:

```
"C:\code\mobile\argos-localizer\argos-localizer.rb" --xml-path "C:\code\mobile\products\argos-sample\de.xml"  --js-path "C:\code\mobile\products\argos-sample\de.js"
```

A 'Finished Generating' message will appear.

Include the localized js file into the localization folder of your mobile product.


### Optional Command Line Flags:

--include-sdk can be set to false to not include argos-sdk when compiling the language worksheet

--sdk-path can be set to the full file path of the argos-sdk src folder

--xml-template can be set to a different relative path than xml-template.erb

--xslt-template can be set to a different relative path than xslt-template.xslt

--js-template can be set to a different relative path than js-template.erb

