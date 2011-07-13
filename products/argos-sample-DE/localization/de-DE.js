(function() {
	var getV = Sage.Platform.Mobile.Utility.getValue,
		scope = this,
		localize = function(name, values) {
			var target = getV(scope, name);
			if (target) Ext.override(target, values);
		},
		localizeBase = function(name,values){
			name = getV(scope,name);
			for (k in values){
				if(name[k]!==undefined){
					name[k] = values[k];
				}
			}
		};

	localizeBase('Mobile.SalesLogix.Format', {
		dateFormat : 'd/M/yyyy',
		yesText : 'Ja',
		noText : 'Nein',
		currencySymbol : 'DM',
		currencySymbolPlacement : 'front', // 'back'
		thousandsSeparator : '.',
		decimalSeparator : ',',
		trueText : 'Zutreffend',
		falseText : 'Falsch'
	});
		
		
		
	localize('Mobile.SalesLogix.AddAccountContact', {
		accountNameText : 'Firma',
		accountStatusTitleText : 'Firmenstatus',
		accountSubTypeTitleText : 'Firmenuntertyp',
		accountText : 'Firma',
		accountTypeTitleText : 'Firmentyp',
		addressText : 'Adresse',
		contactTitleText : 'Titel',
		detailsAccountText : 'Firmeninfo',
		detailsContactText : 'Kontaktinfo',
		detailsText : 'Kontakt-/Firmeninfo',
		emailText : 'E-Mail',
		faxText : 'Fax',
		homePhoneText : 'Tel privat',
		industryText : 'Branche',
		lastNameText : 'Nachname',
		mobileText : 'Mobil',
		nameText : 'Name',
		statusText : 'Status',
		subTypeText : 'Untertyp',
		titleText : 'Firma/Kontakt hinzuf',
		typeText : 'Typ',
		webText : 'Web',
		workText : 'Geschäftl.',
		industryTitleText : 'Branche'
	});

	localize('Mobile.SalesLogix.AreaCategoryIssueLookup', {
		titleText : 'Firmen'
	});

	localize('Mobile.SalesLogix.Configure', {
		titleText : 'Konfigur.'
	});

	localize('Mobile.SalesLogix.ContextDialog', {
		activitiesText : 'Aktivitäten',
		addAccountContactText : 'Firma/Kontakt hinzuf',
		cancelText : 'Abbrechen',
		notesText : 'Notizen',
		scheduleText : 'Planen'
	});

	localize('Mobile.SalesLogix.FooterToolbar', {
		copyrightText : '&copy; 2011 Sage Software, Inc. Alle Rechte vorbeh.',
		logOutConfirmText : 'Möchten Sie sich wirkl. abmelden?',
		settingsText : 'Einstell',
		helpText : 'Hilfe',
		topText : 'Oben',
		logOutText : 'Abmelden'
	});

	localize('Mobile.SalesLogix.Help', {
		titleText : 'Hilfe',
		errorText : 'Fehler',
		errorMessageText : 'Laden von Hilfedok. nicht möglich'
	});

	localize('Mobile.SalesLogix.Home', {
		configureText : 'Konfigur.',
		addAccountContactText : 'Firma/Kontakt hinzuf',
		titleText : 'Startseite',
		actionsText : 'Schnellaktionen',
		viewsText : 'Gehe zu'
	});

	localize('Mobile.SalesLogix.Login', {
		copyrightText : '&copy; 2011 Sage Software, Inc. Alle Rechte vorbeh.',
		logOnText : 'Anmelden',
		passText : 'Passwort',
		rememberText : 'Speichern',
		titleText : 'Sage SalesLogix',
		userText : 'Ben.name',
		invalidUserText : 'Benutzername/Passwort ist ungültig.',
		missingUserText : 'Benutzerdatensatz nicht gefund',
		serverProblemText : 'Problem auf dem Server.',
		requestAbortedText : 'Anforderung abgebrochen.'
	});

	localize('Mobile.SalesLogix.NameEdit', {
		prefixTitleText : 'Präfix',
		suffixTitleText : 'Suffix'
	});

	localize('Mobile.SalesLogix.Settings', {
		localStorageClearedText : 'Lokaler Speicher erfolgr. gelöscht.',
		credentialsClearedText : 'Gesp. Anmeldedaten erfolgr. gelöscht.',
		titleText : 'Einstell'
	});

	localize('Mobile.SalesLogix.TextEdit', {
		titleText : 'Text'
	});

	localize('Mobile.SalesLogix.UpdateToolbar', {
		updateText : 'Update verfügbar.  Zum Neuladen klicken.'
	});

	localize('Mobile.SalesLogix.Account.Detail', {
		accountText : 'Firma',
		acctMgrText : 'Acct Mgr',
		addressText : 'Adresse',
		businessDescriptionText : 'Beschreibg',
		createDateText : 'Erstellt am',
		createUserText : 'Erstellt von',
		faxText : 'Fax',
		importSourceText : 'Int.quelle',
		industryText : 'Branche',
		notesText : 'Notizen',
		ownerText : 'Eigentümer',
		phoneText : 'Tel.',
		activityTypeText : {
			'atPhoneCall' : 'Anruf'
		},
		actionsText : 'Schnellaktionen',
		relatedActivitiesText : 'Aktivitäten',
		relatedContactsText : 'Kontakte',
		relatedHistoriesText : 'Notizen/Historie',
		relatedItemsText : 'Zugeh. Elemente',
		relatedNotesText : 'Notizen',
		relatedOpportunitiesText : 'Verkaufschancen',
		relatedTicketsText : 'Tickets',
		statusText : 'Status',
		subTypeText : 'Untertyp',
		titleText : 'Firma',
		typeText : 'Typ',
		webText : 'Web',
		callMainNumberText : 'Hauptnr. anrufen',
		scheduleActivityText : 'Aktivität planen',
		addNoteText : 'Notiz hinzuf',
		viewAddressText : 'Adresse anz.',
		moreDetailsText : 'Mehr Details',
		calledText : '{0} angeruf.'
	});

	localize('Mobile.SalesLogix.Account.Edit', {
		accountStatusTitleText : 'Firmenstatus',
		accountSubTypeTitleText : 'Firmenuntertyp',
		accountText : 'Firma',
		accountTypeTitleText : 'Firmentyp',
		acctMgrText : 'Acct Mgr',
		businessDescriptionText : 'Beschreibg',
		businessDescriptionTitleText : 'Unternehmensbeschreibung',
		descriptionText : 'Beschr.',
		faxText : 'Fax',
		fullAddressText : 'Adresse',
		importSourceText : 'Int.quelle',
		industryText : 'Branche',
		industryTitleText : 'Branche',
		ownerText : 'Eigentümer',
		phoneText : 'Tel.',
		statusText : 'Status',
		subTypeText : 'Untertyp',
		titleText : 'Firma',
		typeText : 'Typ',
		webText : 'Web'
	});

	localize('Mobile.SalesLogix.Account.List', {
		titleText : 'Firmen',
		activitiesText : 'Aktivitäten',
		notesText : 'Notizen',
		scheduleText : 'Planen'
	});

	localize('Mobile.SalesLogix.Activity.Complete', {
		activityInfoText : 'Aktivitätsinfo',
		accountText : 'Firma',
		contactText : 'Kontakt',
		opportunityText : 'Verk.chance',
		ticketNumberText : 'Ticket',
		companyText : 'Unternehmen',
		leadText : 'Inter.',
		asScheduledText : 'wie geplant',
		categoryText : 'Kategorie',
		categoryTitleText : 'Aktivit.kategorie',
		completedText : 'Abschlussdatum',
		completionText : 'Abschluss',
		durationText : 'Dauer',
		carryOverNotesText : 'Notizen übertr.',
		followUpText : 'Folgeakt.',
		followUpTitleText : 'Folgeaktivität',
		leaderText : 'Organisator',
		longNotesText : 'Notizen',
		longNotesTitleText : 'Notizen',
		otherInfoText : 'Weit. Info',
		priorityText : 'Priorität',
		priorityTitleText : 'Priorität',
		regardingText : 'Betreff',
		regardingTitleText : 'Aktivität bezüglich',
		resultText : 'Ergebnis',
		resultTitleText : 'Ergebnis',
		startingText : 'Startdatum',
		timelessText : 'ohne Zeitangabe',
		durationValueText : {
			0 : 'keine',
			15 : '15 Minuten',
			30 : '30 Minuten',
			60 : '1 Stunde',
			90 : '1,5 Stunden',
			120 : '2 Stunden'
		},
		followupValueText : {
			'none' : 'Keine',
			'atPhoneCall' : 'Anruf',
			'atAppointment' : 'Meeting',
			'atToDo' : 'Aufgabe'
		}
	});

	localize('Mobile.SalesLogix.Activity.Detail', {
		activityTypeText : {
			'atToDo' : 'Aufgabe',
			'atPhoneCall' : 'Anruf',
			'atAppointment' : 'Meeting',
			'atLiterature' : 'Literaturanfrage',
			'atPersonal' : 'Persönliche Aktivität'
		},
		actionsText : 'Schnellaktionen',
		completeActivityText : 'Aktivität abschließen',
		alarmText : 'Erinnerung',
		alarmTimeText : 'Erinnerung',
		categoryText : 'Kategorie',
		durationText : 'Dauer',
		leaderText : 'Organisator',
		longNotesText : 'Notizen',
		priorityText : 'Priorität',
		regardingText : 'Betreff',
		rolloverText : 'Auto-Rollover',
		startTimeText : 'Startzeit',
		allDayText : 'Ganztäg.',
		timelessText : 'ohne Zeitangabe',
		titleText : 'Aktivität',
		typeText : 'Typ',
		companyText : 'Unternehmen',
		leadText : 'Inter.',
		accountText : 'Firma',
		contactText : 'Kontakt',
		opportunityText : 'Verk.chance',
		ticketNumberText : 'Ticket',
		whenText : 'Wann',
		whoText : 'Wer',
		startDateFormatString : 'T/M/JJJJ h:mm:ss tt',
		timelessDateFormatString : 'T/M/JJJJ'
	});

	localize('Mobile.SalesLogix.Activity.Edit', {
		activityCategoryTitleText : 'Aktivit.kategorie',
		activityDescriptionTitleText : 'Aktivitätsbeschreibung',
		activityTypeTitleText : 'Aktivitätstyp',
		alarmText : 'Erinnerung',
		alarmTimeText : ' ',
		categoryText : 'Kategorie',
		durationText : 'Dauer',
		leaderText : 'Organisator',
		longNotesText : 'Notizen',
		longNotesTitleText : 'Notizen',
		priorityText : 'Priorität',
		priorityTitleText : 'Priorität',
		regardingText : 'Betreff',
		rolloverText : 'Auto-Rollover',
		startingText : 'Startzeit',
		timelessText : 'ohne Zeitangabe',
		titleText : 'Aktivität',
		typeText : 'Typ',
		accountText : 'Firma',
		contactText : 'Kontakt',
		opportunityText : 'Verk.chance',
		ticketNumberText : 'Ticket',
		companyText : 'Unternehmen',
		leadText : 'Inter.',
		isLeadText : 'für Inter.',
		yesText : 'JA',
		noText : 'NEIN',
		updateUserActErrorText : 'Fehler beim Aktualis. von Ben.aktivitäten.',
		reminderValueText : {
			0 : 'keine',
			5 : '5 Minuten',
			15 : '15 Minuten',
			30 : '30 Minuten',
			60 : '1 Stunde',
			1440 : '1 Tag'
		},
		durationValueText : {
			0 : 'keine',
			15 : '15 Minuten',
			30 : '30 Minuten',
			60 : '1 Stunde',
			90 : '1,5 Stunden',
			120 : '2 Stunden'
		}
	});

	localize('Mobile.SalesLogix.Activity.List', {
		titleText : 'Aktivitäten'
	});

	localize('Mobile.SalesLogix.Activity.TypesList', {
		titleText : 'Planen...',
		activityTypeText : {
			'atToDo' : 'Aufgabe',
			'atPhoneCall' : 'Anruf',
			'atAppointment' : 'Meeting',
			'atLiterature' : 'Literaturanfrage',
			'atPersonal' : 'Persönliche Aktivität'
		}
	});

	localize('Mobile.SalesLogix.Address.Edit', {
		address1Text : 'Adresse 1',
		address2Text : 'Adresse 2',
		address3Text : 'Adresse 3',
		cityText : 'Stadt',
		cityTitleText : 'Stadt',
		countryText : 'Land',
		countryTitleText : 'Land',
		descriptionText : 'Beschreib.',
		descriptionTitleText : 'Beschreibung',
		isMailingText : 'Lieferung',
		isPrimaryText : 'Haupt',
		postalCodeText : 'PLZ',
		salutationText : 'Zu Händen',
		stateText : 'Bundesland',
		stateTitleText : 'Bundesland/Kanton',
		titleText : 'Adresse'
	});

	localize('Mobile.SalesLogix.Calendar.MonthView', {
		titleText : 'Kalender',
		todayText : 'Heute',
		dayText : 'Tag',
		monthText : 'Monat'
	});
	

	localize('Mobile.SalesLogix.Calendar.UserActivityList', {
		titleText : 'Kalender',
		dateHeaderFormatText : 'dddd, dd/MM/yyyy',
		todayText : 'Heute',
		dayText : 'Tag',
		monthText : 'Monat'
	});

	localize('Mobile.SalesLogix.Campaign.Detail', {
		acctMgrText : 'Acct Mgr',
		codeText : 'Code',
		createDateText : 'Erstellt am',
		createUserText : 'Erstellt von',
		fbarHomeTitleText : 'Startseite',
		fbarScheduleTitleText : 'Planen',
		nameText : 'Name',
		startText : 'Start',
		titleText : 'Kampagne'
	});

	localize('Mobile.SalesLogix.Campaign.Edit', {
		codeText : 'Code',
		nameText : 'Name',
		startText : 'Start',
		titleText : 'Kampagne'
	});

	localize('Mobile.SalesLogix.Campaign.List', {
		titleText : 'Kampagnen'
	});

	localize('Mobile.SalesLogix.Contact.Detail', {
		activityTypeText : {
			'atPhoneCall' : 'Anruf',
			'atEMail' : 'E-Mail'
		},
		accountText : 'Firma',
		acctMgrText : 'Acct Mgr',
		addressText : 'Adresse',
		contactTitleText : 'Titel',
		createDateText : 'Erstellt am',
		createUserText : 'Erstellt von',
		emailText : 'E-Mail',
		faxText : 'Fax',
		homeText : 'Tel privat',
		nameText : 'Kontakt',
		ownerText : 'Eigentümer',
		actionsText : 'Schnellaktionen',
		relatedAccountsText : 'Firmen',
		relatedActivitiesText : 'Aktivitäten',
		relatedHistoriesText : 'Notizen/Historie',
		relatedItemsText : 'Zugeh. Elemente',
		relatedNotesText : 'Notizen',
		relatedOpportunitiesText : 'Verkaufschancen',
		relatedTicketsText : 'Tickets',
		titleText : 'Kontakt',
		webText : 'Web',
		workText : 'Tel.',
		callMobileNumberText : 'Auf Handy anr.',
		callWorkNumberText : 'Hauptnr. anrufen',
		scheduleActivityText : 'Aktivität planen',
		addNoteText : 'Notiz hinzuf',
		sendEmailText : 'E-Mail senden',
		viewAddressText : 'Adresse anz.',
		moreDetailsText : 'Mehr Details'
	});

	localize('Mobile.SalesLogix.Contact.Edit', {
		titleText : 'Kontakt',
		nameText : 'Name',
		workText : 'Tel.',
		mobileText : 'Mobil',
		emailText : 'E-Mail',
		webText : 'Web',
		acctMgrText : 'Acct Mgr',
		accountNameText : 'Firma',
		homePhoneText : 'Tel privat',
		faxText : 'Fax',
		addressText : 'Adresse',
		contactTitleText : 'Titel',
		titleTitleText : 'Titel',
		addressTitleText : 'Adresse',
		ownerText : 'Eigentümer'
	});

	localize('Mobile.SalesLogix.Contact.List', {
		titleText : 'Kontakte',
		activitiesText : 'Aktivitäten',
		notesText : 'Notizen',
		scheduleText : 'Planen'
	});

	localize('Mobile.SalesLogix.Contract.Detail', {
		accountText : 'Firma',
		activeText : 'aktiv',
		contactText : 'Kontakt',
		contractTypeText : 'Vertragstyp',
		createDateText : 'Erstellt am',
		createUserText : 'Erstellt von',
		endText : 'Ende',
		fbarHomeTitleText : 'Startseite',
		fbarScheduleTitleText : 'Planen',
		quantityText : 'Menge',
		refNumText : 'Ref.nr',
		relatedItemsText : 'Zugeh. Elemente',
		relatedTicketsText : 'Tickets',
		remainingText : 'Rest',
		startText : 'Start',
		svcTypeText : 'Srvc-Typ',
		titleText : 'Vertrag'
	});

	localize('Mobile.SalesLogix.Contract.Edit', {
		titleText : 'Vertrag',
		refNumText : 'Ref.nr',
		quantityText : 'Menge',
		activeText : 'aktiv'
	});

	localize('Mobile.SalesLogix.Contract.List', {
		titleText : 'Verträge'
	});

	localize('Mobile.SalesLogix.Defect.Detail', {
		areaText : 'Bereich',
		assignedText : 'zugewiesen',
		categoryText : 'Kategorie',
		createDateText : 'Erstellt am',
		createUserText : 'Erstellt von',
		defectIdText : 'Fehler-ID',
		fbarHomeTitleText : 'Startseite',
		fbarNewTitleText : 'neu',
		fbarScheduleTitleText : 'Planen',
		moreText : 'mehr &gt;&gt;',
		priorityText : 'Priorität',
		relatedDefectProblemsText : 'Problem',
		relatedDefectSolutionsText : 'Lösung',
		relatedItemsText : 'Zugeh. Elemente',
		reportDateText : 'Gemeldet am',
		severityText : 'Schwere',
		statusText : 'Status',
		subjectText : 'Betreff',
		titleText : 'Fehler'
	});

	localize('Mobile.SalesLogix.Defect.Edit', {
		idPrefixText : 'ID-Präfix',
		idSuffixText : 'ID-Suffix',
		titleText : 'Fehler',
		areaText : 'Bereich',
		categoryText : 'Kategorie',
		subjectText : 'Betreff'
	});

	localize('Mobile.SalesLogix.Defect.List', {
		titleText : 'Fehler'
	});

	localize('Mobile.SalesLogix.DefectProblem.Detail', {
		createDateText : 'Erstellt am',
		createUserText : 'Erstellt von',
		notesText : 'Notizen',
		titleText : 'Fehlerproblem'
	});

	localize('Mobile.SalesLogix.DefectProblem.Edit', {
		notesText : 'Notizen',
		titleText : 'Fehlerlösung'
	});

	localize('Mobile.SalesLogix.DefectSolution.Detail', {
		createDateText : 'Erstellt am',
		createUserText : 'Erstellt von',
		notesText : 'Notizen',
		titleText : 'Fehlerlösung'
	});

	localize('Mobile.SalesLogix.DefectSolution.Edit', {
		notesText : 'Notizen',
		titleText : 'Fehlerlösung'
	});

	localize('Mobile.SalesLogix.History.Detail', {
		categoryText : 'Kategorie',
		completedText : 'abgeschl.',
		durationText : 'Dauer',
		leaderText : 'Organisator',
		longNotesText : 'Notizen',
		notesText : 'Notizen',
		priorityText : 'Priorität',
		regardingText : 'Betreff',
		scheduledText : 'geplant',
		timelessText : 'ohne Zeitangabe',
		companyText : 'Unternehmen',
		leadText : 'Inter.',
		titleText : 'Historie',
		accountText : 'Firma',
		contactText : 'Kontakt',
		opportunityText : 'Verk.chance',
		ticketNumberText : 'Ticket',
		moreDetailsText : 'Mehr Details',
		relatedItemsText : 'Zugeh. Elemente',
		modifiedText : 'geändert',
		typeText : 'Typ',
		activityTypeText : {
			'atToDo' : 'Aufgabe',
			'atPhoneCall' : 'Anruf',
			'atAppointment' : 'Meeting',
			'atLiterature' : 'Literaturanfrage',
			'atPersonal' : 'Persönliche Aktivität',
			'atQuestion' : 'Frage',
			'atEMail' : 'E-Mail'
		},
		dateFormatString : 'd/M/yyyy h:mm:ss tt'
	});

	localize('Mobile.SalesLogix.History.Edit', {
		accountText : 'Firma',
		noteDescriptionTitleText : 'Notizbeschreibg.',
		contactText : 'Kontakt',
		longNotesText : 'Notizen',
		longNotesTitleText : 'Notizen',
		opportunityText : 'Verk.chance',
		ticketNumberText : 'Ticket',
		regardingText : 'Betreff',
		isLeadText : 'für Inter.',
		startingText : 'Zeit',
		titleText : 'Notiz',
		companyText : 'Unternehmen',
		leadText : 'Inter.',
		relatedItemsText : 'Zugeh. Elemente'
	});

	localize('Mobile.SalesLogix.History.List', {
		activityTypeText : {
			'atToDo' : 'Aufgabe',
			'atPhoneCall' : 'Anruf',
			'atAppointment' : 'Meeting',
			'atLiterature' : 'Literaturanfrage',
			'atPersonal' : 'Persönliche Aktivität',
			'atQuestion' : 'Frage',
			'atEMail' : 'E-Mail'
		},
		titleText : 'Notizen/Historie'
	});

	localize('Mobile.SalesLogix.Lead.Detail', {
		activityTypeText : {
			'atPhoneCall' : 'Anruf',
			'atEMail' : 'E-Mail'
		},
		accountText : 'Unternehmen',
		addressText : 'Adresse',
		businessDescriptionText : 'Beschreibg',
		createDateText : 'Erstellt am',
		createUserText : 'Erstellt von',
		eMailText : 'E-Mail',
		leadSourceText : 'Int.quelle',
		industryText : 'Branche',
		interestsText : 'Interessen',
		leadTitleText : 'Titel',
		nameText : 'Name',
		notesText : 'Kommentare',
		ownerText : 'Eigentümer',
		relatedActivitiesText : 'Aktivitäten',
		relatedHistoriesText : 'Notizen/Historie',
		relatedItemsText : 'Zugeh. Elemente',
		relatedNotesText : 'Notizen',
		sicCodeText : 'BDI-Code',
		titleText : 'Interessent',
		tollFreeText : 'Gebührenfrei',
		webText : 'Web',
		workText : 'Tel.',
		actionsText : 'Schnellaktionen',
		callWorkNumberText : 'Hauptnr. anrufen',
		scheduleActivityText : 'Aktivität planen',
		addNoteText : 'Notiz hinzuf',
		sendEmailText : 'E-Mail senden',
		viewAddressText : 'Adresse anz.',
		moreDetailsText : 'Mehr Details',
		calledText : '{0} angeruf.',
		emailedText : 'E-Mail an {0}'
	});

	localize('Mobile.SalesLogix.Lead.Edit', {
		accountText : 'Firma',
		addressText : 'Adresse',
		businessText : 'Beschreibg',
		businessTitleText : 'Unternehmensbeschreibung',
		companyText : 'Unternehmen',
		contactTitleText : 'Titel',
		emailText : 'E-Mail',
		faxText : 'Fax',
		importSourceText : 'Int.quelle',
		industryText : 'Branche',
		industryTitleText : 'Branche',
		interestsText : 'Interessen',
		leadNameLastFirstText : 'Name',
		leadOwnerText : 'Eigentümer',
		nameText : 'Name',
		notesText : 'Kommentare',
		notesTitleText : 'Kommentare',
		sicCodeText : 'BDI-Code',
		titleText : 'Interessent',
		titleTitleText : 'Titel',
		tollFreeText : 'Gebührenfrei',
		webText : 'Web',
		workText : 'Tel.'
	});

	localize('Mobile.SalesLogix.Lead.List', {
		titleText : 'Interessenten',
		activitiesText : 'Aktivitäten',
		notesText : 'Notizen',
		scheduleText : 'Planen'
	});

	localize('Mobile.SalesLogix.LeadSource.List', {
		titleText : 'Interessentenquellen'
	});

	localize('Mobile.SalesLogix.Opportunity.Detail', {
		accountText : 'Firma',
		acctMgrText : 'Acct Mgr',
		estCloseText : 'Vor. Abschluss',
		fbarHomeTitleText : 'Startseite',
		fbarScheduleTitleText : 'Planen',
		importSourceText : 'Int.quelle',
		opportunityText : 'Verk.chance',
		ownerText : 'Eigentümer',
		actionsText : 'Schnellaktionen',
		potentialText : 'VK-Potenzial',
		probabilityText : 'Abschl.wahrsch.',
		relatedActivitiesText : 'Aktivitäten',
		relatedContactsText : 'Kontakte',
		relatedHistoriesText : 'Notizen/Historie',
		relatedItemsText : 'Zugeh. Elemente',
		relatedNotesText : 'Notizen',
		relatedProductsText : 'Produkte',
		resellerText : 'Wiederverk.',
		statusText : 'Status',
		titleText : 'Verkaufschance',
		typeText : 'Typ',
		scheduleActivityText : 'Aktivität planen',
		addNoteText : 'Notiz hinzuf',
		moreDetailsText : 'Mehr Details'
	});

	localize('Mobile.SalesLogix.Opportunity.Edit', {
		accountText : 'Firma',
		acctMgrText : 'Acct Mgr',
		estCloseText : 'Vor. Abschluss',
		importSourceText : 'Int.quelle',
		opportunityText : 'Verk.chance',
		ownerText : 'Eigentümer',
		potentialText : 'VK-Potenzial',
		probabilityText : 'Abschl.wahrsch.',
		resellerText : 'Wiederverk.',
		statusText : 'Status',
		titleText : 'Verkaufschance',
		typeText : 'Typ'
	});

	localize('Mobile.SalesLogix.Opportunity.List', {
		titleText : 'Verkaufschancen',
		activitiesText : 'Aktivitäten',
		notesText : 'Notizen',
		scheduleText : 'Planen'
	});

	localize('Mobile.SalesLogix.OpportunityProduct.List', {
		titleText : 'Produkte'
	});

	localize('Mobile.SalesLogix.Owner.List', {
		titleText : 'Zugriffsberechtigte'
	});

	localize('Mobile.SalesLogix.Return.Detail', {
		accountText : 'Firma',
		assignedToText : 'Zugewiesen zu',
		createDateText : 'Erstellt am',
		createUserText : 'Erstellt von',
		fbarHomeTitleText : 'Startseite',
		fbarScheduleTitleText : 'Planen',
		priorityText : 'Priorität',
		regDateText : 'Reg.datum',
		returnedByText : 'Retoure von',
		returnIdText : 'Retouren-ID',
		shipToText : 'Lieferadr.',
		titleText : 'Retoure',
		typeText : 'Typ'
	});

	localize('Mobile.SalesLogix.Return.Edit', {
		titleText : 'Retoure',
		returnIdText : 'Retouren-ID',
		priorityText : 'Priorität',
		typeText : 'Typ',
		regDateText : 'Reg.datum',
		returnedByText : 'Retoure von'
	});

	localize('Mobile.SalesLogix.Return.List', {
		titleText : 'Retouren'
	});

	localize('Mobile.SalesLogix.SalesOrder.Detail', {
		accountText : 'Firma',
		acctMgrText : 'Acct Mgr',
		commentsText : 'Kommentare',
		createDateText : 'Erstellt am',
		createUserText : 'Erstellt von',
		fbarHomeTitleText : 'Startseite',
		fbarScheduleTitleText : 'Planen',
		reqDateText : 'Anf.datum',
		salesOrderIdText : 'VK-Auftrags-ID',
		statusText : 'Status',
		titleText : 'Verkaufsauftrag',
		totalText : 'Summe',
		typeText : 'Typ'
	});

	localize('Mobile.SalesLogix.SalesOrder.Edit', {
		commentsText : 'Kommentare',
		reqDateText : 'Anf.datum',
		salesOrderIdText : 'VK-Auftrags-ID',
		statusText : 'Status',
		titleText : 'Verkaufsauftrag',
		totalText : 'Summe',
		typeText : 'Typ'
	});

	localize('Mobile.SalesLogix.SalesOrder.List', {
		titleText : 'Verkaufsauftrag'
	});

	localize('Mobile.SalesLogix.Ticket.Detail', {
		accountText : 'Firma',
		areaText : 'Bereich',
		assignedDateText : 'Zugewiesen am',
		assignedToText : 'Zugewiesen zu',
		categoryText : 'Kategorie',
		contactText : 'Kontakt',
		contractText : 'Vertrag',
		descriptionText : 'Beschr.',
		issueText : 'Problem',
		needByText : 'Fälligk.datum',
		notesText : 'Kommentare',
		phoneText : 'Tel.',
		actionsText : 'Schnellaktionen',
		relatedActivitiesText : 'Aktivitäten',
		relatedItemsText : 'Zugeh. Elemente',
		resolutionText : 'Lösung',
		sourceText : 'Quelle',
		statusText : 'Status',
		subjectText : 'Betreff',
		ticketIdText : 'Ticket-Nr.',
		titleText : 'Ticket',
		urgencyText : 'Dringlichk.',
		scheduleActivityText : 'Aktivität planen',
		moreDetailsText : 'Mehr Details'
	});

	localize('Mobile.SalesLogix.Ticket.Edit', {
		accountText : 'Firma',
		areaText : 'Bereich',
		assignedDateText : 'Zugewiesen am',
		assignedToText : 'Zugewiesen zu',
		categoryText : 'Kategorie',
		contactText : 'Kontakt',
		contractText : 'Vertrag',
		descriptionText : 'Beschr.',
		descriptionTitleText : 'Beschreibung',
		issueText : 'Problem',
		needByText : 'Fälligk.datum',
		notesText : 'Kommentare',
		notesTitleText : 'Kommentare',
		phoneText : 'Tel.',
		relatedActivitiesText : 'Aktivitäten',
		relatedItemsText : 'Zugeh. Elemente',
		resolutionText : 'Lösung',
		resolutionTitleText : 'Lösung',
		sourceText : 'Quelle',
		sourceTitleText : 'Quelle',
		statusText : 'Status',
		subjectText : 'Betreff',
		ticketAreaTitleText : 'Ticket-Bereich',
		ticketCategoryTitleText : 'Ticket-Kategorie',
		ticketIdText : 'Ticket-Nr.',
		ticketIssueTitleText : 'Ticket-Probl.',
		ticketStatusTitleText : 'Ticket-Status',
		ticketUrgencyTitleText : 'Ticket-Dringlichk.',
		titleText : 'Ticket',
		urgencyText : 'Dringlichk.'
	});

	localize('Mobile.SalesLogix.Ticket.List', {
		titleText : 'Tickets',
		activitiesText : 'Aktivitäten',
		scheduleText : 'Planen'
	});

	localize('Mobile.SalesLogix.Ticket.UrgencyLookup', {
		titleText : 'Ticket-Dringlichk.'
	});

	localize('Mobile.SalesLogix.User.List', {
		titleText : 'Benutzer'
	});

	localize('Sage.Platform.Mobile.Calendar', {
		validationSummaryText : 'Validierungszus.fass.',
		titleText : 'Kalender',
		amText : 'AM',
		pmText : 'PM'
	});

	localize('Sage.Platform.Mobile.Controls.AddressField', {
		lookupLabelText : 'Bearb.',
		emptyText : 'keine Adr.'
	});

	localize('Sage.Platform.Mobile.Controls.BooleanField', {
		onText : 'AN',
		offText : 'AUS'
	});

	localize('Sage.Platform.Mobile.Controls.DateField', {
		emptyText : ' ',
		formatString : 'dd/MM/yyyy'
	});

	localize('Sage.Platform.Mobile.Controls.EditorField', {
		lookupLabelText : 'Bearb.',
		lookupText : '...',
		emptyText : 'leer',
		completeText : 'OK'
	});

	localize('Sage.Platform.Mobile.Controls.LookupField', {
		dependentErrorText : 'Wert für "{0}" muss ausgewählt sein.',
		emptyText : ' ',
		completeText : 'Auswählen',
		lookupLabelText : 'Suchen',
		lookupText : '...'
	});

	localize('Sage.Platform.Mobile.Controls.NameField', {
		emptyText : 'kein Name'
	});

	localize('Sage.Platform.Mobile.Controls.NoteField', {
		emptyText : ' '
	});

	localize('Sage.Platform.Mobile.Detail', {
		editText : 'Bearbeiten',
		titleText : 'Detail',
		detailsText : 'Details',
		toggleCollapseText : 'Ein-/Ausblenden',
		loadingText : 'Laden...',
		requestErrorText : 'Serverfehler beim Anfordern von Daten.',
		notAvailableText : 'Angeforderter Eintrag nicht verfügbar.'
	});

	localize('Sage.Platform.Mobile.Edit', {
		saveText : 'Speichern',
		titleText : 'Bearbeiten',
		toggleCollapseText : 'Ein-/Ausblenden',
		validationSummaryText : 'Validierungszus.fass.',
		detailsText : 'Details',
		loadingText : 'Laden...',
		requestErrorText : 'Serverfehler beim Anfordern von Daten.'
	});

	localize('Sage.Platform.Mobile.GroupedList', {
		toggleCollapseText : 'Ein-/Ausblenden'
	});

	localize('Sage.Platform.Mobile.List', {
		moreText : 'Mehr Datensätze abr.',
		titleText : 'Liste',
		remainingText : '{0} Datens. verbleiben',
		searchText : 'Suchen',
		cancelText : 'Abbrechen',
		insertText : 'Neu',
		noDataText : 'keine Datensätze',
		loadingText : 'Laden...',
		requestErrorText : 'Serverfehler beim Anfordern von Daten.'
	});

	localize('Sage.Platform.Mobile.MainToolbar', {
		titleText : 'Mobil'
	});

	localize('Sage.Platform.Mobile.View', {
		titleText : 'Allg. Ansicht'
	});

})();
