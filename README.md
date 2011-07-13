### Requirements
This requires the `rkelly`, `erb` and `nokogiri` gems to be installed.
These provide: A JS to Ruby parser, string templating and XML parser.

```
gem install rkelly
gem install nokogiri
```

(erb is typically installed by default)


###Usage:
Start a command prompt with Ruby

Run the argos-localizer.rb file passing two parameters

a. First Parameter: Path to 'src' folder of product

```
	"C:\code\mobile\products\argos-sample\src"
```

b. Second Parameter: Path of desired XML file

```
		"C:\code\mobile\products\argos-sample\de-DE.xml"
```

Full Example:

```
"C:\code\mobile\argos-localizer\argos-localizer.rb" "C:\code\mobile\products\argos-sample\src" "C:\code\mobile\products\argos-sample\de-DE.xml"
```


A 'Finished Generating' message will appear.

Open your XML file in your editor of choice.

### Adding A Localization:

Identify each string by it's class (namespace) and property

Replace the text of the `value` node with your localized version of that property

Example:
```
	<data class="Mobile.SalesLogix.Account.Detail" property="accountText">
	   <description>Context for the value string below</description>
	   <value>konte</value> 
	</data>
```

Save the file

Now that you have your modified XML file (ex: de-DE.xml) you need to generate the localization.js file

Open the Ruby CLI and run the argos-localjs.rb file passing two parameters

a. First Parameter: Path to your new XML file

```
		"C:\code\mobile\products\argos-sample\de-DE.xml"
```

b. Second Parameter: Path of desired localization.js file

```
		"C:\code\mobile\products\argos-sample\de-DE.js"
```

Full Example:

```
"C:\code\mobile\argos-localizer\argos-localjs.rb" "C:\code\mobile\products\argos-sample\de-DE.xml" "C:\code\mobile\products\argos-sample\de-DE.js"
```


A 'Finished Generating' message will appear.
