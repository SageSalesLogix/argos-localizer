### Description
Argos-localizer is a ruby script that will create an XML file of all the strings to be localized.

Once the XML file has been translated you then run the same script with different options to convert the translated XML file to a javascript 
override file which, upon loading, will replace all the strings in the application with the new localized ones.

### Requirements
First you must have a installation of Ruby on your machine.

The following Ruby Gems must be installed: `rkelly`, `erb`, `json`, `trollop`, `nokogiri`, `pathname` and `fileutils`

```
gem install rkelly
gem install erb
gem install json
gem install trollop
gem install nokogiri
gem install pathname
gem install fileutils
```

(Some of these may have been included already in your Ruby installation)

###Life Cycle
In your javascript code files (ending with .js) the localizer script will create an xml file of all the
variables ending with `Text`. Example:

```
MyClass = { titleText: "My title" };
```

will result in:

```
<data class="MyClass" property="titleText" type="text">
  <description/>
  <value>My title</value>
</data>
```

Variables ending with `FormatText` will have a `type="format"` which designates to not translate this value directly
but change it to the proper format. A common example is date string formatting.

Running the localizer script again with the proper import options will output this:

    localize('MyClass', {
        titleText : 'title in German'
    });


###Usage:
Before starting, open the `/config` folder and identify which configuration you are planning to use. Then open that json file and verify that all pathnames under `export` and `projects` exist and are correct. All paths will be prepended with a base directory defined when the tool is run.

A typical folder tree would look like:

```
C:\code\mobile
            \argos-sdk
            \localization\argos-saleslogix
            \products
                \argos-saleslogix
```

####Generating an XML WorkSheet
Start a command prompt with Ruby and run:

```
"C:\code\argos-localizer\argos-localizer.rb" export --base-path "C:/code/mobile" --config-path "config/argos-saleslogix.json"
```

Using the default options three xml files will be generated in the `C:\code\mobile\localization\argos-saleslogix\` folder:

`slx-mobile-strings-format.xml`
Just the format strings. Useful if only converting date (say for en-GB).

`slx-mobile-strings-text.xml`
Just the text strings. 

`slx-mobile-strings.xml`
Combined format and text strings.

####Generating the localize JS file
Now that you've translated the xml file into various languages it's time to take the translated xml and import it to javascript. The javascript file will be placed in your application.

Go back to your config file and verify that the `import` section has the correct `map` of translated xml files. The `in` should point to the xml and the `out` to the new javascript.

```
"C:\code\argos-localizer\argos-localizer.rb" import --base-path "C:/code/mobile" --config-path "config/argos-saleslogix.json"
```

Include the localized js file into the localization folder of your mobile product, for `argos-saleslogix` that is: `/products/argos-saleslogix/localization/saleslogix/`.
