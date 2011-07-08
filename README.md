This requires the `rkelly`, `builder` and `nokogiri` gems to be installed.
These provide: A JS to Ruby parser, XML generator and XML parser.

```
gem install rkelly
gem install builder
gem install nokogiri
```

Usage:
1. Start a command prompt with Ruby
2. Run the argos-localizer.rb file passing two parameters
	a. First Parameter: Path to 'src' folder of product
```
		"C:\code\mobile\products\argos-sample\src"
```

	b. Second Parameter: Path of desired XML file
```
		"C:\code\mobile\products\argos-sample\de-DE.xml"
```

Example:
```
"C:\code\mobile\argos-localizer\argos-localizer.rb" "C:\code\mobile\products\argos-sample\src" "C:\code\mobile\products\argos-sample\de-DE.xml"
```

3. Please wait ~5 - 20 seconds for localization to be built.

4. A 'Finished Generating' message will appear.

5. Open your XML file in your editor of choice.


Adding A Localization:
1. Identify each string by it's class (namespace) and property
2. Replace the text of the `value` node with your localized version of that property

   Example:
```
<data class=”Mobile.SalesLogix.Account.Detail” property=”accountText”>
   <description>Context for the value string below</description>
   <value>konte</value> 
</data>
```

3. Save the file

4. Now that you have your modified XML file (ex: de-DE.xml) you need to generate the localization.js file

5. Open the Ruby CLI and run the argos-localjs.rb file passing two parameters
	a. First Parameter: Path to your new XML file
```
		"C:\code\mobile\products\argos-sample\de-DE.xml"
```

	b. Second Parameter: Path of desired localization.js file
```
		"C:\code\mobile\products\argos-sample\de-DE.js"
```

Example:
```
"C:\code\mobile\argos-localizer\argos-localjs.rb" "C:\code\mobile\products\argos-sample\de-DE.xml" "C:\code\mobile\products\argos-sample\de-DE.js"
```

6. Please wait ~5 - 20 seconds for the localization js to be built.

s7. A 'Finished Generating' message will appear.

## TODO: Describe where to place file
8. Place your new .js file into x... do we need to update (from en-US.js to our name?) in index.html ?


 
	
=======
This requires the `rkelly` gem to be installed.

```
gem install rkelly
```
