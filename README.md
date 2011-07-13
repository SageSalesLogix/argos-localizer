# Culture Tests
Samples of SalesLogix in various languages using the argos-sample module

### Change Log
* index-dev.html - script to add specific datejs culture file
* argos-sdk/src/Calendar.js - month and weekdays to use datejs culture info
* argos-saleslogix/src/calendar/MonthView.js - attempted to add cell width normalization (still working on it)
* argos-saleslogix/src/Format.js - exposed various currency culture information
* argos-sample/localization/x-Y.js - added localizeObj which manually overwrites values instead of Ext.override the prototype

### Running The Samples
Look in products/argos-saleslogix and you will find these files:
* index-dev-DE.html
* index-dev-FR.html
* index-dev-IT.html
* index-dev-RU.html

Open them up to see saleslogix in that language - Calendar MonthView and places that use Format.currency should also respect the designated culture.

### Development Process

1. Run argos-localizer.rb on a product folder to generate an english XML file
2. Edit the english XML file with new language &lt;value%gt;s
3. Run argos-localjs.rb on the edited XML
4. Place the generated local.js file and place into argos-sample (your product) / localization
5. Edit the index.html file near the bottom and rename the following line to your file

	<!-- Argos Sample Localization -->
	<script type="text/javascript" src="../argos-sample-RU/localization/en-US.js"></script>

6. At the top we need to adjust the datejs culture inclusion. Change the var culture line to the appropiate designation

	<!-- DateJS -->
	<!-- script type="text/javascript" src="../../argos-sdk/libraries/datejs/build/date.js"></script -->
	<script type="text/javascript">
		var culture = 'ru-RU';
		var scr = document.createElement('script');
		scr.src = '../../argos-sdk/libraries/datejs/build/date-'+culture+'.js';
		scr.type = 'text/javascript';
		document.documentElement.appendChild(scr);
	</script>

