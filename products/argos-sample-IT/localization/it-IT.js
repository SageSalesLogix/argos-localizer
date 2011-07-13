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
		yesText : 'Sì',
		noText : 'No',
		currencySymbol : '₤',
		currencySymbolPlacement : 'front', // 'back'
		thousandsSeparator : '.',
		decimalSeparator : ',',
		trueText : 'Allineare',
		falseText : 'Falso'
	});
				
		
	localize('Mobile.SalesLogix.AddAccountContact', {
		accountNameText : 'azienda',
		accountStatusTitleText : 'Status azienda',
		accountSubTypeTitleText : 'SubCat. Azienda',
		accountText : 'Azienda',
		accountTypeTitleText : 'Tipo Azienda',
		addressText : ' Indi. ',
		contactTitleText : 'Titolo',
		detailsAccountText : 'Info Azienda',
		detailsContactText : 'InfoContatto',
		detailsText : 'InfoContatto/Azienda',
		emailText : 'email',
		faxText : 'fax',
		homePhoneText : 'Tel. fisso',
		industryText : ' settore',
		lastNameText : 'cogn',
		mobileText : 'cell. ',
		nameText : 'nome',
		statusText : 'status',
		subTypeText : 'sub-cat.',
		titleText : 'Agg.Account / Contact',
		typeText : 'tipo',
		webText : 'web',
		workText : 'TelUfficio',
		industryTitleText : 'Settore'
	});

	localize('Mobile.SalesLogix.AreaCategoryIssueLookup', {
		titleText : 'Aziende'
	});

	localize('Mobile.SalesLogix.Configure', {
		titleText : 'Config. '
	});

	localize('Mobile.SalesLogix.ContextDialog', {
		activitiesText : 'Attività',
		addAccountContactText : 'Agg.Account/Contact',
		cancelText : 'Canc.',
		notesText : 'Note',
		scheduleText : 'Progetta'
	});

	localize('Mobile.SalesLogix.FooterToolbar', {
		copyrightText : '&copy; 2011 Sage Software, Inc. All rights reserved.',
		logOutConfirmText : 'Sei sicuro di voler uscire?      ',
		settingsText : 'Opzioni ',
		helpText : 'Help',
		topText : 'Su ',
		logOutText : 'Uscita '
	});

	localize('Mobile.SalesLogix.Help', {
		titleText : 'Help',
		errorText : 'Err.',
		errorMessageText : 'Documento di Help non caricato   '
	});

	localize('Mobile.SalesLogix.Home', {
		configureText : 'Config.',
		addAccountContactText : 'Agg.Account/Contact',
		titleText : 'Home',
		actionsText : 'Azioni rapide',
		viewsText : 'Va iA'
	});

	localize('Mobile.SalesLogix.Login', {
		copyrightText : '&copy; 2011 Sage Software, Inc. All rights reserved.',
		logOnText : 'Entra',
		passText : 'password',
		rememberText : 'ricorda',
		titleText : 'Sage SalesLogix',
		userText : 'Nome ',
		invalidUserText : 'Nome o password errati ',
		missingUserText : 'Utente non trovato.',
		serverProblemText : 'Errore sul server',
		requestAbortedText : 'Richiesta interrotta'
	});

	localize('Mobile.SalesLogix.NameEdit', {
		prefixTitleText : 'Titolo',
		suffixTitleText : 'Titoli est.'
	});

	localize('Mobile.SalesLogix.Settings', {
		localStorageClearedText : 'Memoria locale svuotatata',
		credentialsClearedText : 'Credenziali salvate eliminate',
		titleText : 'Opzioni'
	});

	localize('Mobile.SalesLogix.TextEdit', {
		titleText : 'Text'
	});

	localize('Mobile.SalesLogix.UpdateToolbar', {
		updateText : 'Clicca per effettuare l"aggiornamento'
	});

	localize('Mobile.SalesLogix.Account.Detail', {
		accountText : 'azienda',
		acctMgrText : 'resp.',
		addressText : 'ind.',
		businessDescriptionText : 'desc.att.',
		createDateText : 'creato il',
		createUserText : 'creato da',
		faxText : 'fax',
		importSourceText : 'Fonte Nom.',
		industryText : 'settore',
		notesText : 'note',
		ownerText : 'prop.',
		phoneText : 'tel.',
		activityTypeText : {
			'atPhoneCall' : 'Telefonata'
		},
		actionsText : 'Azioni rapide',
		relatedActivitiesText : 'Attività',
		relatedContactsText : 'Contatti',
		relatedHistoriesText : 'Note/Cron.',
		relatedItemsText : 'VociCorrelate',
		relatedNotesText : 'Note',
		relatedOpportunitiesText : 'Opportunità',
		relatedTicketsText : 'Ticket',
		statusText : 'status',
		subTypeText : 'cat.',
		titleText : 'Azienda',
		typeText : 'tipo',
		webText : 'web',
		callMainNumberText : 'Tel. num. princ.',
		scheduleActivityText : 'PianificaAttività',
		addNoteText : 'Agg.nota',
		viewAddressText : 'Vedi Ind.',
		moreDetailsText : 'Più Dettagli',
		calledText : 'Tel. {0}'
	});

	localize('Mobile.SalesLogix.Account.Edit', {
		accountStatusTitleText : 'Status azienda',
		accountSubTypeTitleText : 'Account SubCat.',
		accountText : 'azienda',
		accountTypeTitleText : 'Tipo Azienda',
		acctMgrText : 'resp.',
		businessDescriptionText : 'desc.att.',
		businessDescriptionTitleText : 'Descrizione Attività',
		descriptionText : 'desc',
		faxText : 'fax',
		fullAddressText : 'ind.',
		importSourceText : 'fonte Nom.',
		industryText : 'settore',
		industryTitleText : 'Settore',
		ownerText : 'prop.',
		phoneText : 'tel.',
		statusText : 'stato',
		subTypeText : 'cat.',
		titleText : 'Azienda',
		typeText : 'tipo',
		webText : 'web'
	});

	localize('Mobile.SalesLogix.Account.List', {
		titleText : 'Aziende',
		activitiesText : 'Attività',
		notesText : 'Note',
		scheduleText : 'Progetta'
	});

	localize('Mobile.SalesLogix.Activity.Complete', {
		activityInfoText : 'Info Attività',
		accountText : 'azienda',
		contactText : 'cont.',
		opportunityText : 'opportunità',
		ticketNumberText : 'ticket',
		companyText : 'società',
		leadText : 'nom.',
		asScheduledText : 'come prog.',
		categoryText : 'cat.',
		categoryTitleText : 'Cat. Attività',
		completedText : 'completato il',
		completionText : 'Completata',
		durationText : 'durata',
		carryOverNotesText : 'riporta note',
		followUpText : 'seguito',
		followUpTitleText : 'Attività Seguenti',
		leaderText : 'leader',
		longNotesText : 'note',
		longNotesTitleText : 'Note',
		otherInfoText : 'Altro',
		priorityText : 'priorità',
		priorityTitleText : 'Priorità',
		regardingText : 'argomento',
		regardingTitleText : 'Attività Argomento',
		resultText : 'esito',
		resultTitleText : 'Esito',
		startingText : 'data iniz.',
		timelessText : 'NoOrario',
		durationValueText : {
			0 : 'ness',
			15 : '15 minuti',
			30 : '30 minuti',
			60 : '1 Ora',
			90 : '1.5 ore',
			120 : '2 ore'
		},
		followupValueText : {
			'none' : 'Ness',
			'atPhoneCall' : 'Telefonata',
			'atAppointment' : 'Meeting',
			'atToDo' : 'Imp.'
		}
	});

	localize('Mobile.SalesLogix.Activity.Detail', {
		activityTypeText : {
			'atToDo' : 'Imp.',
			'atPhoneCall' : 'Telefonata',
			'atAppointment' : 'Meeting',
			'atLiterature' : 'Rich.Mat. info',
			'atPersonal' : 'Attività pers.'
		},
		actionsText : 'Azioni rapide',
		completeActivityText : 'Completa attività',
		alarmText : 'avviso',
		alarmTimeText : 'avviso',
		categoryText : 'cat.',
		durationText : 'durata',
		leaderText : 'leader',
		longNotesText : 'note',
		priorityText : 'priorità',
		regardingText : 'argomento',
		rolloverText : 'rinvio autom.',
		startTimeText : 'ora iniz.',
		allDayText : '1g int',
		timelessText : 'NoOrario',
		titleText : 'Attività',
		typeText : 'tipo',
		companyText : 'società',
		leadText : 'nom.',
		accountText : 'azienda',
		contactText : 'cont.',
		opportunityText : 'opportunità',
		ticketNumberText : 'ticket',
		whenText : 'Data',
		whoText : 'Chi',
		startDateFormatString : 'g/M/aaaa h:mm:ss tt',
		timelessDateFormatString : 'a/M/aaaa'
	});

	localize('Mobile.SalesLogix.Activity.Edit', {
		activityCategoryTitleText : 'Cat. Attività',
		activityDescriptionTitleText : 'Descrizione Attività',
		activityTypeTitleText : 'Tipo attività',
		alarmText : 'avviso',
		alarmTimeText : '',
		categoryText : 'cat.',
		durationText : 'durata',
		leaderText : 'leader',
		longNotesText : 'note',
		longNotesTitleText : 'Note',
		priorityText : 'priorità',
		priorityTitleText : 'Priorità',
		regardingText : 'argomento',
		rolloverText : 'rinvio autom.',
		startingText : 'ora iniz.',
		timelessText : 'NoOrario',
		titleText : 'Attività',
		typeText : 'tipo',
		accountText : 'azienda',
		contactText : 'cont.',
		opportunityText : 'opportunità',
		ticketNumberText : 'ticket',
		companyText : 'società',
		leadText : 'nom.',
		isLeadText : 'per nom.',
		yesText : 'SI',
		noText : 'NO',
		updateUserActErrorText : 'Errore aggiornamento attività utente',
		reminderValueText : {
			0 : 'ness',
			5 : '5 minuti',
			15 : '15 minuti',
			30 : '30 minuti',
			60 : '1 Ora',
			1440 : '1 g'
		},
		durationValueText : {
			0 : 'ness',
			15 : '15 minuti',
			30 : '30 minuti',
			60 : '1 Ora',
			90 : '1.5 ore',
			120 : '2 ore'
		}
	});

	localize('Mobile.SalesLogix.Activity.List', {
		titleText : 'Attività'
	});

	localize('Mobile.SalesLogix.Activity.TypesList', {
		titleText : 'Progetta...',
		activityTypeText : {
			'atToDo' : 'Imp.',
			'atPhoneCall' : 'Telefonata',
			'atAppointment' : 'Meeting',
			'atLiterature' : 'Rich.Mat info',
			'atPersonal' : 'Attività pers.'
		}
	});

	localize('Mobile.SalesLogix.Address.Edit', {
		address1Text : 'ind. 1',
		address2Text : 'ind. 2',
		address3Text : 'ind. 3',
		cityText : 'city',
		cityTitleText : 'City',
		countryText : 'nazione',
		countryTitleText : 'Nazione',
		descriptionText : 'descrizione',
		descriptionTitleText : 'Descrizione',
		isMailingText : 'sped.',
		isPrimaryText : 'princ.',
		postalCodeText : 'post.',
		salutationText : 'att.',
		stateText : 'stato',
		stateTitleText : 'Prov.',
		titleText : 'Ind.'
	});

	localize('Mobile.SalesLogix.Calendar.MonthView', {
		titleText : 'Calend.',
		todayText : 'Oggi',
		dayText : 'G.',
		monthText : 'Mese'
	});
	
	
	localize('Mobile.SalesLogix.Calendar.UserActivityList', {
		titleText : 'Calend.',
		dateHeaderFormatText : 'dddd, dd/MM/yyyy',
		todayText : 'Oggi',
		dayText : 'G.',
		monthText : 'Mese'
	});

	localize('Mobile.SalesLogix.Campaign.Detail', {
		acctMgrText : 'resp.',
		codeText : 'cod.',
		createDateText : 'creato il',
		createUserText : 'creato da',
		fbarHomeTitleText : 'Home',
		fbarScheduleTitleText : 'progetta',
		nameText : 'nome',
		startText : 'iniz.',
		titleText : 'Campagna'
	});

	localize('Mobile.SalesLogix.Campaign.Edit', {
		codeText : 'cod.',
		nameText : 'nome',
		startText : 'iniz.',
		titleText : 'Campagna'
	});

	localize('Mobile.SalesLogix.Campaign.List', {
		titleText : 'Campagne'
	});

	localize('Mobile.SalesLogix.Contact.Detail', {
		activityTypeText : {
			'atPhoneCall' : 'Telefonata',
			'atEMail' : 'E-mail'
		},
		accountText : 'azienda',
		acctMgrText : 'resp.',
		addressText : 'ind.',
		contactTitleText : 'tit.',
		createDateText : 'creato il',
		createUserText : 'creato da',
		emailText : 'email',
		faxText : 'fax',
		homeText : 'tel. fisso',
		nameText : 'cont.',
		ownerText : 'prop.',
		actionsText : 'Azioni rapide',
		relatedAccountsText : 'Aziende',
		relatedActivitiesText : 'Attività',
		relatedHistoriesText : 'Note/Cron.',
		relatedItemsText : 'VociCorrelate',
		relatedNotesText : 'Note',
		relatedOpportunitiesText : 'Opportunità',
		relatedTicketsText : 'Ticket',
		titleText : 'Cont.',
		webText : 'web',
		workText : 'tel.',
		callMobileNumberText : 'Tel. cell.',
		callWorkNumberText : 'Tel. num. princ.',
		scheduleActivityText : 'Progetta Attività',
		addNoteText : 'Agg.nota',
		sendEmailText : 'Inv. email',
		viewAddressText : 'Vedi Ind.',
		moreDetailsText : 'Più Dettagli'
	});

	localize('Mobile.SalesLogix.Contact.Edit', {
		titleText : 'Cont.',
		nameText : 'nome',
		workText : 'tel.',
		mobileText : 'cell.',
		emailText : 'email',
		webText : 'web',
		acctMgrText : 'resp.',
		accountNameText : 'azienda',
		homePhoneText : 'tel. fisso',
		faxText : 'fax',
		addressText : 'ind.',
		contactTitleText : 'tit.',
		titleTitleText : 'Tit.',
		addressTitleText : 'Ind.',
		ownerText : 'prop.'
	});

	localize('Mobile.SalesLogix.Contact.List', {
		titleText : 'Contatti',
		activitiesText : 'Attività',
		notesText : 'Note',
		scheduleText : 'Progetta'
	});

	localize('Mobile.SalesLogix.Contract.Detail', {
		accountText : 'azienda',
		activeText : 'attivo',
		contactText : 'cont.',
		contractTypeText : 'Tipo Contr.',
		createDateText : 'creato il',
		createUserText : 'creato da',
		endText : 'end',
		fbarHomeTitleText : 'home',
		fbarScheduleTitleText : 'progetta',
		quantityText : 'quantità',
		refNumText : 'refNum',
		relatedItemsText : 'VociCorrelate',
		relatedTicketsText : 'Ticket',
		remainingText : 'restante',
		startText : 'iniz.',
		svcTypeText : 'Tipo-svc',
		titleText : 'Contr.'
	});

	localize('Mobile.SalesLogix.Contract.Edit', {
		titleText : 'Contr.',
		refNumText : 'refNum',
		quantityText : 'quantità',
		activeText : 'attivo'
	});

	localize('Mobile.SalesLogix.Contract.List', {
		titleText : 'Contratti'
	});

	localize('Mobile.SalesLogix.Defect.Detail', {
		areaText : 'area',
		assignedText : 'assegn.',
		categoryText : 'cat.',
		createDateText : 'creato il',
		createUserText : 'creato da',
		defectIdText : 'ID dif.',
		fbarHomeTitleText : 'home',
		fbarNewTitleText : 'new',
		fbarScheduleTitleText : 'progetta',
		moreText : 'più &gt;&gt;',
		priorityText : 'priorità',
		relatedDefectProblemsText : 'Prob.',
		relatedDefectSolutionsText : 'Sol.',
		relatedItemsText : 'VociCorrelate',
		reportDateText : 'data report',
		severityText : 'gravità',
		statusText : 'stato',
		subjectText : 'sogg.',
		titleText : 'Dif.'
	});

	localize('Mobile.SalesLogix.Defect.Edit', {
		idPrefixText : 'id pref.',
		idSuffixText : 'id suff.',
		titleText : 'Dif.',
		areaText : 'area',
		categoryText : 'cat.',
		subjectText : 'sogg.'
	});

	localize('Mobile.SalesLogix.Defect.List', {
		titleText : 'Difetti'
	});

	localize('Mobile.SalesLogix.DefectProblem.Detail', {
		createDateText : 'creato il',
		createUserText : 'creato da',
		notesText : 'note',
		titleText : 'Prob. Difetto'
	});

	localize('Mobile.SalesLogix.DefectProblem.Edit', {
		notesText : 'note',
		titleText : 'Sol. Difetto'
	});

	localize('Mobile.SalesLogix.DefectSolution.Detail', {
		createDateText : 'creato il',
		createUserText : 'creato da',
		notesText : 'note',
		titleText : 'Sol. Difetto'
	});

	localize('Mobile.SalesLogix.DefectSolution.Edit', {
		notesText : 'notes',
		titleText : 'Sol. Difetto'
	});

	localize('Mobile.SalesLogix.History.Detail', {
		categoryText : 'cat.',
		completedText : 'concluso',
		durationText : 'durata',
		leaderText : 'resp.',
		longNotesText : 'note',
		notesText : 'Note',
		priorityText : 'priorità',
		regardingText : 'argomento',
		scheduledText : 'pianif.',
		timelessText : 'NoOrario',
		companyText : 'società',
		leadText : 'nom.',
		titleText : 'Cron.',
		accountText : 'azienda',
		contactText : 'cont.',
		opportunityText : 'opportunità',
		ticketNumberText : 'ticket',
		moreDetailsText : 'Più Dettagli',
		relatedItemsText : 'VociCorrelate',
		modifiedText : 'mod.',
		typeText : 'tipo',
		activityTypeText : {
			'atToDo' : 'Imp.',
			'atPhoneCall' : 'Telefonata',
			'atAppointment' : 'Meeting',
			'atLiterature' : 'Rich.Mat info',
			'atPersonal' : 'Attività pers.',
			'atQuestion' : 'Domanda',
			'atEMail' : 'E-mail'
		},
		dateFormatString : 'd/M/yyyy h:mm:ss tt'
	});

	localize('Mobile.SalesLogix.History.Edit', {
		accountText : 'azienda',
		noteDescriptionTitleText : 'Descrizione Nota',
		contactText : 'cont.',
		longNotesText : 'note',
		longNotesTitleText : 'Note',
		opportunityText : 'opportunità',
		ticketNumberText : 'ticket',
		regardingText : 'argomento',
		isLeadText : 'per nom.',
		startingText : 'ora',
		titleText : 'Nota',
		companyText : 'società',
		leadText : 'nom.',
		relatedItemsText : 'VociCorrelate'
	});

	localize('Mobile.SalesLogix.History.List', {
		activityTypeText : {
			'atToDo' : 'Imp.',
			'atPhoneCall' : 'Telefonata',
			'atAppointment' : 'Meeting',
			'atLiterature' : 'Rich. Mat. info',
			'atPersonal' : 'Attività pers.',
			'atQuestion' : 'Domanda',
			'atEMail' : 'E-mail'
		},
		titleText : 'Note/Cron.'
	});

	localize('Mobile.SalesLogix.Lead.Detail', {
		activityTypeText : {
			'atPhoneCall' : 'Telefonata',
			'atEMail' : 'E-mail'
		},
		accountText : 'società',
		addressText : 'ind.',
		businessDescriptionText : 'desc.att.',
		createDateText : 'creato il',
		createUserText : 'creato da',
		eMailText : 'email',
		leadSourceText : 'fonte nom.',
		industryText : 'settore',
		interestsText : 'interessi',
		leadTitleText : 'tit.',
		nameText : 'nome',
		notesText : 'commenti',
		ownerText : 'prop.',
		relatedActivitiesText : 'Attività',
		relatedHistoriesText : 'Note/Cron.',
		relatedItemsText : 'VociCorrelate',
		relatedNotesText : 'Note',
		sicCodeText : 'cod.sic ',
		titleText : 'Nom.',
		tollFreeText : 'n. verde',
		webText : 'web',
		workText : 'tel.',
		actionsText : 'Azioni rapide',
		callWorkNumberText : 'Tel. num. princ.',
		scheduleActivityText : 'Progetta Attività',
		addNoteText : 'Agg note',
		sendEmailText : 'Inv. email',
		viewAddressText : 'Vedi ind.',
		moreDetailsText : 'Più Dettagli',
		calledText : 'Called {0}',
		emailedText : 'Emailed {0}'
	});

	localize('Mobile.SalesLogix.Lead.Edit', {
		accountText : 'azienda',
		addressText : 'ind.',
		businessText : 'desc.att.',
		businessTitleText : 'Descrizione Attività',
		companyText : 'società',
		contactTitleText : 'tit.',
		emailText : 'email',
		faxText : 'fax',
		importSourceText : 'fonte nom.',
		industryText : 'settore',
		industryTitleText : 'Settore',
		interestsText : 'interessi',
		leadNameLastFirstText : 'nome',
		leadOwnerText : 'prop.',
		nameText : 'nome',
		notesText : 'commenti',
		notesTitleText : 'Commenti',
		sicCodeText : 'cod.sic ',
		titleText : 'Nom.',
		titleTitleText : 'Tit.',
		tollFreeText : 'n. verde',
		webText : 'web',
		workText : 'tel.'
	});

	localize('Mobile.SalesLogix.Lead.List', {
		titleText : 'Nom.',
		activitiesText : 'Attività',
		notesText : 'Note',
		scheduleText : 'Progetta'
	});

	localize('Mobile.SalesLogix.LeadSource.List', {
		titleText : 'Fonte Nom.'
	});

	localize('Mobile.SalesLogix.Opportunity.Detail', {
		accountText : 'az.',
		acctMgrText : 'resp.',
		estCloseText : 'chiusura',
		fbarHomeTitleText : 'home',
		fbarScheduleTitleText : 'progetta',
		importSourceText : 'fonte Nom.',
		opportunityText : 'opportunità',
		ownerText : 'prop.',
		actionsText : 'Azioni rapide',
		potentialText : 'pot. vendita',
		probabilityText : 'stima prob',
		relatedActivitiesText : 'Attività',
		relatedContactsText : 'Contatti',
		relatedHistoriesText : 'Note/Cron.',
		relatedItemsText : 'VociCorrelate',
		relatedNotesText : 'Note',
		relatedProductsText : 'Prodotti',
		resellerText : 'rivend.',
		statusText : 'stato',
		titleText : 'Opportunità',
		typeText : 'tipo',
		scheduleActivityText : 'Progetta Attività',
		addNoteText : 'Agg nota',
		moreDetailsText : 'Più Dettagli'
	});

	localize('Mobile.SalesLogix.Opportunity.Edit', {
		accountText : 'az.',
		acctMgrText : 'resp.',
		estCloseText : 'chiusura',
		importSourceText : 'fonte Nom.',
		opportunityText : 'opportunità',
		ownerText : 'prop.',
		potentialText : 'pot. vendita',
		probabilityText : 'Prob.Chiu%',
		resellerText : 'rivend',
		statusText : 'stato',
		titleText : 'Opportunità',
		typeText : 'tipo'
	});

	localize('Mobile.SalesLogix.Opportunity.List', {
		titleText : 'Opportunità',
		activitiesText : 'Attività',
		notesText : 'Note',
		scheduleText : 'Progetta'
	});

	localize('Mobile.SalesLogix.OpportunityProduct.List', {
		titleText : 'Prodotti'
	});

	localize('Mobile.SalesLogix.Owner.List', {
		titleText : 'Propr.'
	});

	localize('Mobile.SalesLogix.Return.Detail', {
		accountText : 'azienda',
		assignedToText : 'AssegnatoA',
		createDateText : 'creato il',
		createUserText : 'creato da',
		fbarHomeTitleText : 'home',
		fbarScheduleTitleText : 'progetta',
		priorityText : 'priorità',
		regDateText : 'data reg',
		returnedByText : 'reso da',
		returnIdText : 'ID reso',
		shipToText : 'invia a',
		titleText : 'Reso',
		typeText : 'tipo'
	});

	localize('Mobile.SalesLogix.Return.Edit', {
		titleText : 'Reso',
		returnIdText : 'ID reso',
		priorityText : 'priorità',
		typeText : 'tipo',
		regDateText : 'data reg',
		returnedByText : 'reso da'
	});

	localize('Mobile.SalesLogix.Return.List', {
		titleText : 'Resi'
	});

	localize('Mobile.SalesLogix.SalesOrder.Detail', {
		accountText : 'azienda',
		acctMgrText : 'resp.',
		commentsText : 'commenti',
		createDateText : 'creato il',
		createUserText : 'creato da',
		fbarHomeTitleText : 'home',
		fbarScheduleTitleText : 'progetta',
		reqDateText : 'chiesto',
		salesOrderIdText : 'ID ord.vendita',
		statusText : 'stato',
		titleText : 'OrdVendita',
		totalText : 'tot',
		typeText : 'tipo'
	});

	localize('Mobile.SalesLogix.SalesOrder.Edit', {
		commentsText : 'commenti',
		reqDateText : 'chiesto',
		salesOrderIdText : 'ID ord.vendita',
		statusText : 'stato',
		titleText : 'OrdVendita',
		totalText : 'tot',
		typeText : 'tipo'
	});

	localize('Mobile.SalesLogix.SalesOrder.List', {
		titleText : 'OrdVendita'
	});

	localize('Mobile.SalesLogix.Ticket.Detail', {
		accountText : 'azienda',
		areaText : 'area',
		assignedDateText : 'assegnato il',
		assignedToText : 'assegnato a',
		categoryText : 'cat.',
		contactText : 'cont.',
		contractText : 'contr.',
		descriptionText : 'desc',
		issueText : 'prob.',
		needByText : 'data limite',
		notesText : 'commenti',
		phoneText : 'phone',
		actionsText : 'Azioni rapide',
		relatedActivitiesText : 'Attività',
		relatedItemsText : 'VociCorrelate',
		resolutionText : 'soluzione',
		sourceText : 'fonte',
		statusText : 'stato',
		subjectText : 'sogg.',
		ticketIdText : 'num. ticket ',
		titleText : 'Ticket',
		urgencyText : 'urgenza',
		scheduleActivityText : 'Progetta Attività',
		moreDetailsText : 'Più Dettagli'
	});

	localize('Mobile.SalesLogix.Ticket.Edit', {
		accountText : 'az.',
		areaText : 'area',
		assignedDateText : 'assegnato il',
		assignedToText : 'assegnato a',
		categoryText : 'cat.',
		contactText : 'cont.',
		contractText : 'contr.',
		descriptionText : 'desc',
		descriptionTitleText : 'Descrizione',
		issueText : 'prob.',
		needByText : 'data limite',
		notesText : 'commenti',
		notesTitleText : 'Commenti',
		phoneText : 'tel.',
		relatedActivitiesText : 'Attività',
		relatedItemsText : 'VociCorrelate',
		resolutionText : 'soluzione',
		resolutionTitleText : 'Soluzione',
		sourceText : 'fonte',
		sourceTitleText : 'Fonte',
		statusText : 'stato',
		subjectText : 'sogg.',
		ticketAreaTitleText : 'Area Ticket',
		ticketCategoryTitleText : 'Cat. Ticket ',
		ticketIdText : 'num ticket ',
		ticketIssueTitleText : 'Prob.Ticket ',
		ticketStatusTitleText : 'Stato Ticket',
		ticketUrgencyTitleText : 'Urgenza Ticket',
		titleText : 'Ticket',
		urgencyText : 'urgenza'
	});

	localize('Mobile.SalesLogix.Ticket.List', {
		titleText : 'Ticket',
		activitiesText : 'Attività',
		scheduleText : 'Progetta'
	});

	localize('Mobile.SalesLogix.Ticket.UrgencyLookup', {
		titleText : 'Urgenza Ticket'
	});

	localize('Mobile.SalesLogix.User.List', {
		titleText : 'Users'
	});

	localize('Sage.Platform.Mobile.Calendar', {
		validationSummaryText : 'Sintesi Convalida',
		titleText : 'Calendar',
		amText : 'AM',
		pmText : 'PM'
	});

	localize('Sage.Platform.Mobile.Controls.AddressField', {
		lookupLabelText : 'mod.',
		emptyText : 'nessun ind'
	});

	localize('Sage.Platform.Mobile.Controls.BooleanField', {
		onText : 'ON',
		offText : 'OFF'
	});

	localize('Sage.Platform.Mobile.Controls.DateField', {
		emptyText : '',
		formatString : 'dd/MM/yyyy'
	});

	localize('Sage.Platform.Mobile.Controls.EditorField', {
		lookupLabelText : 'mod.',
		lookupText : '...',
		emptyText : 'vuoto',
		completeText : 'Ok'
	});

	localize('Sage.Platform.Mobile.Controls.LookupField', {
		dependentErrorText : 'Selezionare un valore per  "{0}" .',
		emptyText : '',
		completeText : 'Sel.',
		lookupLabelText : 'cerca',
		lookupText : '...'
	});

	localize('Sage.Platform.Mobile.Controls.NameField', {
		emptyText : 'no nome'
	});

	localize('Sage.Platform.Mobile.Controls.NoteField', {
		emptyText : ''
	});

	localize('Sage.Platform.Mobile.Detail', {
		editText : 'Mod.',
		titleText : 'Dett.',
		detailsText : 'Dett.',
		toggleCollapseText : 'espandi compr.',
		loadingText : 'carica...',
		requestErrorText : 'Errore server durante la richiesta dei dati.',
		notAvailableText : 'La voce richiesta non è disponibile.'
	});

	localize('Sage.Platform.Mobile.Edit', {
		saveText : 'Save',
		titleText : 'Mod.',
		toggleCollapseText : 'espandi compr.',
		validationSummaryText : 'Sommario Convalida',
		detailsText : 'Dett.',
		loadingText : 'carica...',
		requestErrorText : 'Errore server durante la richiesta dei dati.'
	});

	localize('Sage.Platform.Mobile.GroupedList', {
		toggleCollapseText : 'espandi compr.'
	});

	localize('Sage.Platform.Mobile.List', {
		moreText : 'Recupera più record',
		titleText : 'List',
		remainingText : '{0} record restanti',
		searchText : 'Cerca',
		cancelText : 'Cancel',
		insertText : 'New',
		noDataText : 'no record',
		loadingText : 'carica...',
		requestErrorText : 'Errore server durante la richiesta dei dati.'
	});

	localize('Sage.Platform.Mobile.MainToolbar', {
		titleText : 'Cell.'
	});

	localize('Sage.Platform.Mobile.View', {
		titleText : 'Vista Gen.'
	});

})();
