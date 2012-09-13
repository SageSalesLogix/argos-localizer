Argos-localizer is a ruby script that provides exporting/importing of strings from and to [Argos](https://github.com/Sage/argos-sdk) applications.

###Life Cycle
When coding your javascript dojo modules make sure to end any localizable strings with `Text` and format strings as `FormatText`:

```javascript
declare('MyModule', null, { 
   titleText: 'My title',
   startDateFormatText: 'MM/DD/YYYY'
});
```

Running the tool will generate an XML "worksheet" for translation:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<localization>
   <data class="MyClass" property="titleText" type="text">
     <description/>
     <value>My title</value>
   </data>
   <data class="MyClass" property="startDateFormatText" type="format">
     <description/>
     <value>MM/DD/YYYY</value>
   </data>
</localization>
```

Variables ending with `FormatText` will have a `type="format"` which designates to not translate this value directly
but change it to the proper format. A common example is date string formatting.

The translation person/team should use this single xml file to duplicate into `strings-de.xml`, `strings-fr.xml`, 
`strings-ru.xml` and so forth. Each time replacing the `<value>` with that locales value.

Running the localizer script again with the `import` option will read each of the xml files and generate a `.js` for each one:

####de.js
```javascript
localize('MyClass', {
   titleText : 'Mein Titel',
   startDateFormatText : 'DD/MM/YYYY'
});
```

##Quick Usage For Windows
For Windows users there is a bundled version with an `.exe` and the needed support files to be used without installing Ruby:

[Download bundle](https://github.com/downloads/SageScottsdalePlatform/argos-localizer/argos-localizer-windows.zip)

Skip over the Requirements for Ruby and go straight to [Before You Start](#before-you-start).

## Requirements for Running the Ruby Script
First you must have a installation of Ruby on your machine.

The following Ruby Gems must be installed: `rkelly`, `erb`, `json`, `trollop`, `nokogiri`, `pathname` and `fileutils`

```rubycon
gem install rkelly erb json trollop nokogiri pathname fileutils
```

(Some of these may have been included already in your Ruby installation)

###Before You Start
Before starting, open the `/config` folder and identify which configuration you are planning to use. Then open that json file and verify that all pathnames under `export` and `projects` exist and are correct. All paths will be prepended with the `base-path` defined when the tool is ran.

A typical folder tree would look like:

```
C:\code\mobile
            \argos-sdk
            \localization\argos-saleslogix
            \products
                \argos-saleslogix
```

####Generating the XML WorkSheet
Using Ruby - Start a command prompt with Ruby

```bat
"C:\path\to\argos-localizer.rb" export --base-path "C:\path\to\code\root" --config-path "C:\path\to\config\argos-saleslogix.json"
```

Using .exe - Open Windows Run (winkey+r)

```bat
"C:\path\to\argos-localizer.exe" export --base-path "C:\path\to\code\root" --config-path "C:\path\to\config\argos-saleslogix.json"
```

The default options will generate three xml files in `C:\code\mobile\localization\argos-saleslogix\`:

`slx-mobile-strings-format.xml`
Just the format strings. Useful if only converting date (say for en-GB).

`slx-mobile-strings-text.xml`
Just the text strings. 

`slx-mobile-strings.xml`
Combined format and text strings.

####Generating the localize JS file
Now that you've translated the xml file into various languages it's time to take the translated xml and import it to javascript. The javascript file will be placed in your application.

Go back to your config file and verify that the `import` section has the correct `map` of translated xml files. The `in` should point to the xml and the `out` to the new javascript.

Using Ruby:

```bat
"C:\path\to\argos-localizer.rb" import --base-path "C:\path\to\code\root" --config-path "C:\path\to\config\argos-saleslogix.json"
```

Using .exe:

```bat
"C:\path\to\argos-localizer.exe" import --base-path "C:\path\to\code\root" --config-path "C:\path\to\config\argos-saleslogix.json"
```

Include the localized js file(s) into the localization folder of your mobile product, for `argos-saleslogix` that is: `/products/argos-saleslogix/localization/saleslogix/`.


