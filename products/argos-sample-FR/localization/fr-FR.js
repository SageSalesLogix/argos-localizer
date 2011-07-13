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
		yesText : 'Oui',
		noText : 'Non',
		currencySymbol : '₣',
		currencySymbolPlacement : 'back', // 'back'
		thousandsSeparator : ' ',
		decimalSeparator : ',',
		trueText : 'Vrai',
		falseText : 'Faux'
	});
		
		
	localize('Mobile.SalesLogix.AddAccountContact', {
		accountNameText : 'compte',
		accountStatusTitleText : 'Etat Comptes',
		accountSubTypeTitleText : 'Sous-Type Compte',
		accountText : 'Compte',
		accountTypeTitleText : 'Type de compte',
		addressText : 'adresse',
		contactTitleText : 'Titre',
		detailsAccountText : 'Infos Compte',
		detailsContactText : 'Infos Contact',
		detailsText : 'Infos Contact / Compte',
		emailText : 'e-mail',
		faxText : 'fax',
		homePhoneText : 'tél domicile',
		industryText : 'secteur',
		lastNameText : 'nom',
		mobileText : 'mobile',
		nameText : 'nom',
		statusText : 'état',
		subTypeText : 'sous-type',
		titleText : 'Ajout Compte / Contact',
		typeText : 'type',
		webText : 'web',
		workText : 'tél bureau',
		industryTitleText : 'Secteur'
	});

	localize('Mobile.SalesLogix.AreaCategoryIssueLookup', {
		titleText : 'Comptes'
	});

	localize('Mobile.SalesLogix.Configure', {
		titleText : 'Configurer'
	});

	localize('Mobile.SalesLogix.ContextDialog', {
		activitiesText : 'Activités',
		addAccountContactText : 'Ajout Compte/Contact',
		cancelText : 'Annuler',
		notesText : 'Notes',
		scheduleText : 'Planification'
	});

	localize('Mobile.SalesLogix.FooterToolbar', {
		copyrightText : '&copy; 2011 Sage Software, Inc. Tous droits réservés.',
		logOutConfirmText : 'Voulez-vous vous déconnecter ?',
		settingsText : 'Param.',
		helpText : 'Aide',
		topText : 'Haut',
		logOutText : 'Quitter'
	});

	localize('Mobile.SalesLogix.Help', {
		titleText : 'Aide',
		errorText : 'Erreur',
		errorMessageText : 'Impossible de charger l"aide.'
	});

	localize('Mobile.SalesLogix.Home', {
		configureText : 'Configurer',
		addAccountContactText : 'Ajout Compte/Contact',
		titleText : 'Acc.',
		actionsText : 'Actions rapides',
		viewsText : 'Aller à'
	});

	localize('Mobile.SalesLogix.Login', {
		copyrightText : '&copy; 2011 Sage Software, Inc. Tous droits réservés.',
		logOnText : 'Connexion',
		passText : 'motdepasse',
		rememberText : 'sesouvenir',
		titleText : 'Sage SalesLogix',
		userText : 'identifiant',
		invalidUserText : 'Identifiant ou mot de passe non valide.',
		missingUserText : 'Enregistr. util. introuvable.',
		serverProblemText : 'Problème sur le serveur.',
		requestAbortedText : 'Demande abandonnée.'
	});

	localize('Mobile.SalesLogix.NameEdit', {
		prefixTitleText : 'Préfixe Nom',
		suffixTitleText : 'Suffixe Nom'
	});

	localize('Mobile.SalesLogix.Settings', {
		localStorageClearedText : 'Stockage local supprimé.',
		credentialsClearedText : 'Paramètres d"identification supprimés.',
		titleText : 'Param.'
	});

	localize('Mobile.SalesLogix.TextEdit', {
		titleText : 'Texte'
	});

	localize('Mobile.SalesLogix.UpdateToolbar', {
		updateText : 'Mise à jour disponible.  Cliquer charger.'
	});

	localize('Mobile.SalesLogix.Account.Detail', {
		accountText : 'compte',
		acctMgrText : 'resp cpte',
		addressText : 'adresse',
		businessDescriptionText : 'activité',
		createDateText : 'date création',
		createUserText : 'créé par',
		faxText : 'fax',
		importSourceText : 'source lead',
		industryText : 'secteur',
		notesText : 'notes',
		ownerText : 'prop.',
		phoneText : 'tél.',
		activityTypeText : {
			'atPhoneCall' : 'Appel'
		},
		actionsText : 'Actions rapides',
		relatedActivitiesText : 'Activités',
		relatedContactsText : 'Contacts',
		relatedHistoriesText : 'Notes/Historique',
		relatedItemsText : 'Art. connexes',
		relatedNotesText : 'Notes',
		relatedOpportunitiesText : 'Opportunités',
		relatedTicketsText : 'Tickets',
		statusText : 'état',
		subTypeText : 'Sous-type',
		titleText : 'Compte',
		typeText : 'type',
		webText : 'web',
		callMainNumberText : 'Appel n° principal',
		scheduleActivityText : 'Planifier activité',
		addNoteText : 'Ajout note',
		viewAddressText : 'Aff. adresse',
		moreDetailsText : 'Plus de détails',
		calledText : 'Appelé {0}'
	});

	localize('Mobile.SalesLogix.Account.Edit', {
		accountStatusTitleText : 'Etat Comptes',
		accountSubTypeTitleText : 'Sous-type compte',
		accountText : 'compte',
		accountTypeTitleText : 'Type de compte',
		acctMgrText : 'resp cpte',
		businessDescriptionText : 'activité',
		businessDescriptionTitleText : 'Description de l"activité professionnelle',
		descriptionText : 'desc',
		faxText : 'fax',
		fullAddressText : 'adresse',
		importSourceText : 'source lead',
		industryText : 'secteur',
		industryTitleText : 'Secteur',
		ownerText : 'prop.',
		phoneText : 'tél.',
		statusText : 'état',
		subTypeText : 'Sous-type',
		titleText : 'Compte',
		typeText : 'type',
		webText : 'web'
	});

	localize('Mobile.SalesLogix.Account.List', {
		titleText : 'Comptes',
		activitiesText : 'Activités',
		notesText : 'Notes',
		scheduleText : 'Planification'
	});

	localize('Mobile.SalesLogix.Activity.Complete', {
		activityInfoText : 'Infos activité',
		accountText : 'compte',
		contactText : 'contact',
		opportunityText : 'opportunité',
		ticketNumberText : 'ticket',
		companyText : 'société',
		leadText : 'lead',
		asScheduledText : 'comme planifié',
		categoryText : 'catégorie',
		categoryTitleText : 'Categorie activité',
		completedText : 'date achèvement',
		completionText : 'Achèvement',
		durationText : 'durée',
		carryOverNotesText : 'reporter notes',
		followUpText : 'suivi',
		followUpTitleText : 'Suivi d"activité',
		leaderText : 'resp.',
		longNotesText : 'notes',
		longNotesTitleText : 'Notes',
		otherInfoText : 'Autre info',
		priorityText : 'priorité',
		priorityTitleText : 'Priorité',
		regardingText : 'objet',
		regardingTitleText : 'Activité concernant',
		resultText : 'résultat',
		resultTitleText : 'Résultat',
		startingText : 'date début',
		timelessText : 'Heure indéfinie',
		durationValueText : {
			0 : 'aucune',
			15 : '15 minutes',
			30 : '30 minutes',
			60 : '1 heure',
			90 : '1,5 heures',
			120 : '2 heures'
		},
		followupValueText : {
			'none' : 'Aucun',
			'atPhoneCall' : 'Appel',
			'atAppointment' : 'Rendez-vous',
			'atToDo' : 'Tâche à faire'
		}
	});

	localize('Mobile.SalesLogix.Activity.Detail', {
		activityTypeText : {
			'atToDo' : 'Tâche à faire',
			'atPhoneCall' : 'Appel',
			'atAppointment' : 'Rendez-vous',
			'atLiterature' : 'Demande de documentation',
			'atPersonal' : 'Activité personnelle'
		},
		actionsText : 'Actions rapides',
		completeActivityText : 'Terminer l"activité',
		alarmText : 'rappel',
		alarmTimeText : 'rappel',
		categoryText : 'catégorie',
		durationText : 'durée',
		leaderText : 'resp.',
		longNotesText : 'notes',
		priorityText : 'priorité',
		regardingText : 'objet',
		rolloverText : 'report auto',
		startTimeText : 'heure début',
		allDayText : 'journée',
		timelessText : 'Heure indéfinie',
		titleText : 'Activité',
		typeText : 'type',
		companyText : 'société',
		leadText : 'lead',
		accountText : 'compte',
		contactText : 'contact',
		opportunityText : 'opportunité',
		ticketNumberText : 'ticket',
		whenText : 'Quand',
		whoText : 'Qui',
		startDateFormatString : 'M/j/aaaa h:mm:ss tt',
		timelessDateFormatString : 'M/j/aaaa'
	});

	localize('Mobile.SalesLogix.Activity.Edit', {
		activityCategoryTitleText : 'Categorie activité',
		activityDescriptionTitleText : 'Description de l"activité',
		activityTypeTitleText : 'Type d"activité',
		alarmText : 'rappel',
		alarmTimeText : ' ',
		categoryText : 'catégorie',
		durationText : 'durée',
		leaderText : 'resp.',
		longNotesText : 'notes',
		longNotesTitleText : 'Notes',
		priorityText : 'priorité',
		priorityTitleText : 'Priorité',
		regardingText : 'objet',
		rolloverText : 'report auto',
		startingText : 'heure début',
		timelessText : 'Heure indéfinie',
		titleText : 'Activité',
		typeText : 'type',
		accountText : 'compte',
		contactText : 'contact',
		opportunityText : 'opportunité',
		ticketNumberText : 'ticket',
		companyText : 'société',
		leadText : 'lead',
		isLeadText : 'pour lead',
		yesText : 'OUI',
		noText : 'NON',
		updateUserActErrorText : 'Erreur lors de mise à jour activités util.',
		reminderValueText : {
			0 : 'aucun',
			5 : '5 minutes',
			15 : '15 minutes',
			30 : '30 minutes',
			60 : '1 heure',
			1440 : '1 jour'
		},
		durationValueText : {
			0 : 'aucune',
			15 : '15 minutes',
			30 : '30 minutes',
			60 : '1 heure',
			90 : '1,5 heures',
			120 : '2 heures'
		}
	});

	localize('Mobile.SalesLogix.Activity.List', {
		titleText : 'Activités'
	});

	localize('Mobile.SalesLogix.Activity.TypesList', {
		titleText : 'Planification...',
		activityTypeText : {
			'atToDo' : 'Tâche à faire',
			'atPhoneCall' : 'Appel',
			'atAppointment' : 'Rendez-vous',
			'atLiterature' : 'Demande de documentation',
			'atPersonal' : 'Activité personnelle'
		}
	});

	localize('Mobile.SalesLogix.Address.Edit', {
		address1Text : 'adresse 1',
		address2Text : 'adresse 2',
		address3Text : 'adresse 3',
		cityText : 'ville',
		cityTitleText : 'Ville',
		countryText : 'pays',
		countryTitleText : 'Pays',
		descriptionText : 'description',
		descriptionTitleText : 'Description',
		isMailingText : 'expédition',
		isPrimaryText : 'principal',
		postalCodeText : 'CP',
		salutationText : 'attention',
		stateText : 'Dép.',
		stateTitleText : 'Département',
		titleText : 'Adresse'
	});

	localize('Mobile.SalesLogix.Calendar.MonthView', {
		titleText : 'Agenda',
		todayText : 'Aujourd"hui',
		dayText : 'Jour',
		monthText : 'Mois'
	});

	localize('Mobile.SalesLogix.Calendar.UserActivityList', {
		titleText : 'Agenda',
		dateHeaderFormatText : 'dddd, MM/dd/yyyy',
		todayText : 'Aujourd"hui',
		dayText : 'Jour',
		monthText : 'Mois'
	});

	localize('Mobile.SalesLogix.Campaign.Detail', {
		acctMgrText : 'resp cpte',
		codeText : 'code',
		createDateText : 'date création',
		createUserText : 'créé par',
		fbarHomeTitleText : 'dom.',
		fbarScheduleTitleText : 'planif.',
		nameText : 'nom',
		startText : 'démarrer',
		titleText : 'Campagne'
	});

	localize('Mobile.SalesLogix.Campaign.Edit', {
		codeText : 'code',
		nameText : 'nom',
		startText : 'démarrer',
		titleText : 'Campagne'
	});

	localize('Mobile.SalesLogix.Campaign.List', {
		titleText : 'Campagnes'
	});

	localize('Mobile.SalesLogix.Contact.Detail', {
		activityTypeText : {
			'atPhoneCall' : 'Appel',
			'atEMail' : 'Envoyer par e-mail'
		},
		accountText : 'compte',
		acctMgrText : 'resp cpte',
		addressText : 'adresse',
		contactTitleText : 'titre',
		createDateText : 'date création',
		createUserText : 'créé par',
		emailText : 'e-mail',
		faxText : 'fax',
		homeText : 'tél domicile',
		nameText : 'contact',
		ownerText : 'prop.',
		actionsText : 'Actions rapides',
		relatedAccountsText : 'Comptes',
		relatedActivitiesText : 'Activités',
		relatedHistoriesText : 'Notes/Historique',
		relatedItemsText : 'Art. connexes',
		relatedNotesText : 'Notes',
		relatedOpportunitiesText : 'Opportunités',
		relatedTicketsText : 'Tickets',
		titleText : 'Contact',
		webText : 'web',
		workText : 'tél.',
		callMobileNumberText : 'Appel mobile',
		callWorkNumberText : 'Appel n° principal',
		scheduleActivityText : 'Planifier activité',
		addNoteText : 'Ajout note',
		sendEmailText : 'Envoi e-mail',
		viewAddressText : 'Aff. adresse',
		moreDetailsText : 'Plus de détails'
	});

	localize('Mobile.SalesLogix.Contact.Edit', {
		titleText : 'Contact',
		nameText : 'nom',
		workText : 'tél.',
		mobileText : 'mobile',
		emailText : 'e-mail',
		webText : 'web',
		acctMgrText : 'resp cpte',
		accountNameText : 'compte',
		homePhoneText : 'tél domicile',
		faxText : 'fax',
		addressText : 'adresse',
		contactTitleText : 'titre',
		titleTitleText : 'Titre',
		addressTitleText : 'Adresse',
		ownerText : 'prop.'
	});

	localize('Mobile.SalesLogix.Contact.List', {
		titleText : 'Contacts',
		activitiesText : 'Activités',
		notesText : 'Notes',
		scheduleText : 'Planification'
	});

	localize('Mobile.SalesLogix.Contract.Detail', {
		accountText : 'compte',
		activeText : 'actif',
		contactText : 'contact',
		contractTypeText : 'TypeContrat',
		createDateText : 'date création',
		createUserText : 'créé par',
		endText : 'fin',
		fbarHomeTitleText : 'dom.',
		fbarScheduleTitleText : 'planif.',
		quantityText : 'quantité',
		refNumText : 'Numréf',
		relatedItemsText : 'Art. connexes',
		relatedTicketsText : 'Tickets',
		remainingText : 'restant',
		startText : 'démarrer',
		svcTypeText : 'Type svce',
		titleText : 'Contrat'
	});

	localize('Mobile.SalesLogix.Contract.Edit', {
		titleText : 'Contrat',
		refNumText : 'Numréf',
		quantityText : 'quantité',
		activeText : 'actif'
	});

	localize('Mobile.SalesLogix.Contract.List', {
		titleText : 'Contrats'
	});

	localize('Mobile.SalesLogix.Defect.Detail', {
		areaText : 'zone',
		assignedText : 'affecté',
		categoryText : 'catégorie',
		createDateText : 'date création',
		createUserText : 'créé par',
		defectIdText : 'ID défaut',
		fbarHomeTitleText : 'dom.',
		fbarNewTitleText : 'nouv.',
		fbarScheduleTitleText : 'planif.',
		moreText : 'plus &gt;&gt;',
		priorityText : 'priorité',
		relatedDefectProblemsText : 'Problème',
		relatedDefectSolutionsText : 'Solution',
		relatedItemsText : 'Art. connexes',
		reportDateText : 'date rapport',
		severityText : 'gravité',
		statusText : 'état',
		subjectText : 'objet',
		titleText : 'Défaut'
	});

	localize('Mobile.SalesLogix.Defect.Edit', {
		idPrefixText : 'préfixe id',
		idSuffixText : 'suffixe id',
		titleText : 'Défaut',
		areaText : 'zone',
		categoryText : 'catégorie',
		subjectText : 'objet'
	});

	localize('Mobile.SalesLogix.Defect.List', {
		titleText : 'Défauts'
	});

	localize('Mobile.SalesLogix.DefectProblem.Detail', {
		createDateText : 'date création',
		createUserText : 'créé par',
		notesText : 'notes',
		titleText : 'Problème de défaut'
	});

	localize('Mobile.SalesLogix.DefectProblem.Edit', {
		notesText : 'notes',
		titleText : 'Solution de défaut'
	});

	localize('Mobile.SalesLogix.DefectSolution.Detail', {
		createDateText : 'date création',
		createUserText : 'créé par',
		notesText : 'notes',
		titleText : 'Solution de défaut'
	});

	localize('Mobile.SalesLogix.DefectSolution.Edit', {
		notesText : 'notes',
		titleText : 'Solution de défaut'
	});

	localize('Mobile.SalesLogix.History.Detail', {
		categoryText : 'catégorie',
		completedText : 'terminé',
		durationText : 'durée',
		leaderText : 'resp.',
		longNotesText : 'notes',
		notesText : 'Notes',
		priorityText : 'priorité',
		regardingText : 'objet',
		scheduledText : 'planifié',
		timelessText : 'Heure indéfinie',
		companyText : 'société',
		leadText : 'lead',
		titleText : 'Historique',
		accountText : 'compte',
		contactText : 'contact',
		opportunityText : 'opportunité',
		ticketNumberText : 'ticket',
		moreDetailsText : 'Plus de détails',
		relatedItemsText : 'Art. connexes',
		modifiedText : 'modifié',
		typeText : 'type',
		activityTypeText : {
			'atToDo' : 'Tâche à faire',
			'atPhoneCall' : 'Appel',
			'atAppointment' : 'Rendez-vous',
			'atLiterature' : 'Demande de documentation',
			'atPersonal' : 'Activité personnelle',
			'atQuestion' : 'Question',
			'atEMail' : 'Envoyer par e-mail'
		},
		dateFormatString : 'M/d/yyyy h:mm:ss tt'
	});

	localize('Mobile.SalesLogix.History.Edit', {
		accountText : 'compte',
		noteDescriptionTitleText : 'Description note',
		contactText : 'contact',
		longNotesText : 'notes',
		longNotesTitleText : 'Notes',
		opportunityText : 'opportunité',
		ticketNumberText : 'ticket',
		regardingText : 'objet',
		isLeadText : 'pour lead',
		startingText : 'heure',
		titleText : 'Note',
		companyText : 'société',
		leadText : 'lead',
		relatedItemsText : 'Art. connexes'
	});

	localize('Mobile.SalesLogix.History.List', {
		activityTypeText : {
			'atToDo' : 'Tâche à faire',
			'atPhoneCall' : 'Appel',
			'atAppointment' : 'Rendez-vous',
			'atLiterature' : 'Demande de documentation',
			'atPersonal' : 'Activité personnelle',
			'atQuestion' : 'Question',
			'atEMail' : 'Envoyer par e-mail'
		},
		titleText : 'Notes/Historique'
	});

	localize('Mobile.SalesLogix.Lead.Detail', {
		activityTypeText : {
			'atPhoneCall' : 'Appel',
			'atEMail' : 'Envoyer par e-mail'
		},
		accountText : 'société',
		addressText : 'adresse',
		businessDescriptionText : 'activité',
		createDateText : 'date création',
		createUserText : 'créé par',
		eMailText : 'e-mail',
		leadSourceText : 'source lead',
		industryText : 'secteur',
		interestsText : 'intérêts',
		leadTitleText : 'titre',
		nameText : 'nom',
		notesText : 'comment.',
		ownerText : 'prop.',
		relatedActivitiesText : 'Activités',
		relatedHistoriesText : 'Notes/Historique',
		relatedItemsText : 'Art. connexes',
		relatedNotesText : 'Notes',
		sicCodeText : 'Code SIC',
		titleText : 'Lead',
		tollFreeText : 'numéro vert',
		webText : 'web',
		workText : 'tél.',
		actionsText : 'Actions rapides',
		callWorkNumberText : 'Appel n° principal',
		scheduleActivityText : 'Planifier activité',
		addNoteText : 'Ajout note',
		sendEmailText : 'Envoi e-mail',
		viewAddressText : 'Aff. adresse',
		moreDetailsText : 'Plus de détails',
		calledText : 'Appelé {0}',
		emailedText : 'Envoyé {0}'
	});

	localize('Mobile.SalesLogix.Lead.Edit', {
		accountText : 'compte',
		addressText : 'adresse',
		businessText : 'activité',
		businessTitleText : 'Description de l"activité professionnelle',
		companyText : 'société',
		contactTitleText : 'titre',
		emailText : 'e-mail',
		faxText : 'fax',
		importSourceText : 'source lead',
		industryText : 'secteur',
		industryTitleText : 'Secteur',
		interestsText : 'intérêts',
		leadNameLastFirstText : 'nom',
		leadOwnerText : 'prop.',
		nameText : 'nom',
		notesText : 'comment.',
		notesTitleText : 'Commentaires',
		sicCodeText : 'Code SIC',
		titleText : 'Lead',
		titleTitleText : 'Titre',
		tollFreeText : 'numéro vert',
		webText : 'web',
		workText : 'tél.'
	});

	localize('Mobile.SalesLogix.Lead.List', {
		titleText : 'Leads',
		activitiesText : 'Activités',
		notesText : 'Notes',
		scheduleText : 'Planification'
	});

	localize('Mobile.SalesLogix.LeadSource.List', {
		titleText : 'Sources des leads'
	});

	localize('Mobile.SalesLogix.Opportunity.Detail', {
		accountText : 'cpte',
		acctMgrText : 'resp cpte',
		estCloseText : 'Clôt. est.',
		fbarHomeTitleText : 'dom.',
		fbarScheduleTitleText : 'planif.',
		importSourceText : 'source lead',
		opportunityText : 'opportunité',
		ownerText : 'prop.',
		actionsText : 'Actions rapides',
		potentialText : 'potentiel ventes',
		probabilityText : 'Prob. clôt.',
		relatedActivitiesText : 'Activités',
		relatedContactsText : 'Contacts',
		relatedHistoriesText : 'Notes/Historique',
		relatedItemsText : 'Art. connexes',
		relatedNotesText : 'Notes',
		relatedProductsText : 'Produits',
		resellerText : 'revendeur',
		statusText : 'état',
		titleText : 'Opportunité',
		typeText : 'type',
		scheduleActivityText : 'Planifier activité',
		addNoteText : 'Ajout note',
		moreDetailsText : 'Plus de détails'
	});

	localize('Mobile.SalesLogix.Opportunity.Edit', {
		accountText : 'cpte',
		acctMgrText : 'resp cpte',
		estCloseText : 'Clôt. est.',
		importSourceText : 'source lead',
		opportunityText : 'opportunité',
		ownerText : 'prop.',
		potentialText : 'potentiel ventes',
		probabilityText : 'Prob. clôt.',
		resellerText : 'revendeur',
		statusText : 'état',
		titleText : 'Opportunité',
		typeText : 'type'
	});

	localize('Mobile.SalesLogix.Opportunity.List', {
		titleText : 'Opportunités',
		activitiesText : 'Activités',
		notesText : 'Notes',
		scheduleText : 'Planification'
	});

	localize('Mobile.SalesLogix.OpportunityProduct.List', {
		titleText : 'Produits'
	});

	localize('Mobile.SalesLogix.Owner.List', {
		titleText : 'Propriétaires'
	});

	localize('Mobile.SalesLogix.Return.Detail', {
		accountText : 'compte',
		assignedToText : 'Affecté à',
		createDateText : 'date création',
		createUserText : 'créé par',
		fbarHomeTitleText : 'dom.',
		fbarScheduleTitleText : 'planif.',
		priorityText : 'priorité',
		regDateText : 'date enr.',
		returnedByText : 'retourné par',
		returnIdText : 'id retour',
		shipToText : 'expéd. à',
		titleText : 'Retour',
		typeText : 'type'
	});

	localize('Mobile.SalesLogix.Return.Edit', {
		titleText : 'Retour',
		returnIdText : 'id retour',
		priorityText : 'priorité',
		typeText : 'type',
		regDateText : 'date enr.',
		returnedByText : 'retourné par'
	});

	localize('Mobile.SalesLogix.Return.List', {
		titleText : 'Retours'
	});

	localize('Mobile.SalesLogix.SalesOrder.Detail', {
		accountText : 'compte',
		acctMgrText : 'resp cpte',
		commentsText : 'comment.',
		createDateText : 'date création',
		createUserText : 'créé par',
		fbarHomeTitleText : 'dom.',
		fbarScheduleTitleText : 'planif.',
		reqDateText : 'Date dem.',
		salesOrderIdText : 'id bon commande',
		statusText : 'état',
		titleText : 'Bon de commande',
		totalText : 'total',
		typeText : 'type'
	});

	localize('Mobile.SalesLogix.SalesOrder.Edit', {
		commentsText : 'comment.',
		reqDateText : 'Date dem.',
		salesOrderIdText : 'id bon commande',
		statusText : 'état',
		titleText : 'Bon de commande',
		totalText : 'total',
		typeText : 'type'
	});

	localize('Mobile.SalesLogix.SalesOrder.List', {
		titleText : 'Bon de commande'
	});

	localize('Mobile.SalesLogix.Ticket.Detail', {
		accountText : 'compte',
		areaText : 'zone',
		assignedDateText : 'date affectée',
		assignedToText : 'affecter à',
		categoryText : 'catégorie',
		contactText : 'contact',
		contractText : 'contrat',
		descriptionText : 'desc',
		issueText : 'problème',
		needByText : 'échéance',
		notesText : 'comment.',
		phoneText : 'tél.',
		actionsText : 'Actions rapides',
		relatedActivitiesText : 'Activités',
		relatedItemsText : 'Art. connexes',
		resolutionText : 'résolution',
		sourceText : 'source',
		statusText : 'état',
		subjectText : 'objet',
		ticketIdText : 'numéro ticket',
		titleText : 'Ticket',
		urgencyText : 'priorité',
		scheduleActivityText : 'Planifier activité',
		moreDetailsText : 'Plus de détails'
	});

	localize('Mobile.SalesLogix.Ticket.Edit', {
		accountText : 'cpte',
		areaText : 'zone',
		assignedDateText : 'date affectée',
		assignedToText : 'affecter à',
		categoryText : 'catégorie',
		contactText : 'contact',
		contractText : 'contrat',
		descriptionText : 'desc',
		descriptionTitleText : 'Description',
		issueText : 'problème',
		needByText : 'échéance',
		notesText : 'comment.',
		notesTitleText : 'Commentaires',
		phoneText : 'tél.',
		relatedActivitiesText : 'Activités',
		relatedItemsText : 'Art. connexes',
		resolutionText : 'résolution',
		resolutionTitleText : 'Résolution',
		sourceText : 'source',
		sourceTitleText : 'Source',
		statusText : 'état',
		subjectText : 'objet',
		ticketAreaTitleText : 'Zone de ticket',
		ticketCategoryTitleText : 'Catégorie ticket',
		ticketIdText : 'numéro ticket',
		ticketIssueTitleText : 'Prob. ticket',
		ticketStatusTitleText : 'Etat du ticket',
		ticketUrgencyTitleText : 'Priorité ticket',
		titleText : 'Ticket',
		urgencyText : 'priorité'
	});

	localize('Mobile.SalesLogix.Ticket.List', {
		titleText : 'Tickets',
		activitiesText : 'Activités',
		scheduleText : 'Planification'
	});

	localize('Mobile.SalesLogix.Ticket.UrgencyLookup', {
		titleText : 'Priorité ticket'
	});

	localize('Mobile.SalesLogix.User.List', {
		titleText : 'Utilisateurs'
	});

	localize('Sage.Platform.Mobile.Calendar', {
		validationSummaryText : 'Synthèse validation',
		titleText : 'Agenda',
		amText : 'AM',
		pmText : 'PM'
	});

	localize('Sage.Platform.Mobile.Controls.AddressField', {
		lookupLabelText : 'modif.',
		emptyText : 'pas adresse'
	});

	localize('Sage.Platform.Mobile.Controls.BooleanField', {
		onText : 'ON',
		offText : 'OFF'
	});

	localize('Sage.Platform.Mobile.Controls.DateField', {
		emptyText : ' ',
		formatString : 'MM/dd/yyyy'
	});

	localize('Sage.Platform.Mobile.Controls.EditorField', {
		lookupLabelText : 'modif.',
		lookupText : '...',
		emptyText : 'vide',
		completeText : 'OK'
	});

	localize('Sage.Platform.Mobile.Controls.LookupField', {
		dependentErrorText : 'Sélectionner une valeur de "{0}".',
		emptyText : ' ',
		completeText : 'Sélectionner',
		lookupLabelText : 'recherche',
		lookupText : '...'
	});

	localize('Sage.Platform.Mobile.Controls.NameField', {
		emptyText : 'aucun nom'
	});

	localize('Sage.Platform.Mobile.Controls.NoteField', {
		emptyText : ' '
	});

	localize('Sage.Platform.Mobile.Detail', {
		editText : 'Modifier',
		titleText : 'Détail',
		detailsText : 'Détails',
		toggleCollapseText : 'basculer réduire',
		loadingText : 'chargement',
		requestErrorText : 'Erreur de serveur lors de la demande de données.',
		notAvailableText : 'L"action demandée n"est pas disponible.'
	});

	localize('Sage.Platform.Mobile.Edit', {
		saveText : 'Enregis.',
		titleText : 'Modifier',
		toggleCollapseText : 'basculer réduire',
		validationSummaryText : 'Synthèse validation',
		detailsText : 'Détails',
		loadingText : 'chargement',
		requestErrorText : 'Erreur de serveur lors de la demande de données.'
	});

	localize('Sage.Platform.Mobile.GroupedList', {
		toggleCollapseText : 'basculer réduire'
	});

	localize('Sage.Platform.Mobile.List', {
		moreText : 'Récupérer plus enreg.',
		titleText : 'Liste',
		remainingText : '{0} enreg. restants',
		searchText : 'Rechercher',
		cancelText : 'Annuler',
		insertText : 'Nouveau',
		noDataText : 'aucun enreg.',
		loadingText : 'chargement',
		requestErrorText : 'Erreur de serveur lors de la demande de données.'
	});

	localize('Sage.Platform.Mobile.MainToolbar', {
		titleText : 'Mobile'
	});

	localize('Sage.Platform.Mobile.View', {
		titleText : 'Aff. générique'
	});

})();
