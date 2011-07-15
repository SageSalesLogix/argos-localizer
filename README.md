### Requirements
This requires the `rkelly`, `trollop`, `erb` and `nokogiri` gems to be installed.
These provide: A JS to Ruby parser, command line parser, string templating and XML parser.

```
gem install rkelly
gem install nokogiri
gem install trollop
```

(erb is typically installed by default)


###Usage:
Start a command prompt with Ruby

Run the argos-localizer.rb file passing the --help parameter to see the full list of options

####Generating an XML WorkSheet

Use the --project-path and --xml-path command line options

Full Example:

```
"C:\code\mobile\argos-localizer\argos-localizer.rb" --project-path "C:\code\mobile\products\argos-sample\src"  --xml-path "C:\code\mobile\products\argos-sample\de-DE.xml"
```

A 'Finished Generating' message will appear.

Open your XML file in your editor of choice and edit the value fields to your new language.

Identify each string by it's class (namespace) and property

Note the type of data listed as seen in the type attribute of the data node:

text = you can safely translate the value to its equivalent in another language

format = this is a special format value that needs special attention on how to re-arrange the given format

Replace the text of the `value` node with your localized version of that property

Example:

```
	<data class="Mobile.SalesLogix.Account.Detail" property="accountText" type="text">

		<description></description>

		<value>konte</value> 

	</data>
```

Save the file

Now that you have your modified XML file (ex: de-DE.xml) you need to generate the localized javascript file

####Generating the localize JS file

Use the --xml-path and --js-path command line options

Full Example:

```
"C:\code\mobile\argos-localizer\argos-localjs.rb" --xml-path "C:\code\mobile\products\argos-sample\de-DE.xml"  --js-path "C:\code\mobile\products\argos-sample\de-DE.js"
```

A 'Finished Generating' message will appear.

Include the localized js file into the localization folder of your mobile product.


### Optional Command Line Flags:

--include-sdk can be set to false to not include argos-sdk when compiling the language worksheet

--xml-template can be set to a different relative path than xml-template.erb

--js-template can be set to a different relative path than js-template.erb

