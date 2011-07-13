(function() {
	var getV = Sage.Platform.Mobile.Utility.getValue,
		scope = this,
		localize = function(name, values) {
			var target = getV(scope, name);
			if (target)
				Ext.override(target, values);
		},
		localizeBase = function(name,values){
			name = getV(scope,name);
			for (k in values){
				if(name[k]!==undefined){
					name[k] = values[k];
				}
			}
		};
	localizeBase('Mobile.SalesLogix.Format',{
		dateFormat : 'd/M/yyyy',
		yesText : 'Да',
		noText : 'Нет',
		currencySymbol : 'руб',
		currencySymbolPlacement : 'back', 
		thousandsSeparator : ' ',
		decimalSeparator : ',',
		trueText : 'Истинно',
		falseText : 'Ложно'
	});
		
	localize('Mobile.SalesLogix.AddAccountContact', {
		accountNameText : 'субъект',
		accountStatusTitleText : 'Статус субъекта',
		accountSubTypeTitleText : 'Подтип субъекта',
		accountText : 'Субъект',
		accountTypeTitleText : 'Тип субъекта',
		addressText : 'адрес',
		contactTitleText : 'Должность',
		detailsAccountText : 'Информация субъекта',
		detailsContactText : 'Информация контакта',
		detailsText : 'Информация Контакта/Субъекта',
		emailText : 'эл.почта',
		faxText : 'факс',
		homePhoneText : 'домашний тел.',
		industryText : 'отрасль',
		lastNameText : 'последний',
		mobileText : 'мобильный',
		nameText : 'имя',
		statusText : 'статус',
		subTypeText : 'Подтип',
		titleText : 'Добавить Субъект/Контакт',
		typeText : 'тип',
		webText : 'Веб',
		workText : 'раб. телефон',
		industryTitleText : 'Отрасль'
	});

	localize('Mobile.SalesLogix.AreaCategoryIssueLookup', {
		titleText : 'Субъекты'
	});

	localize('Mobile.SalesLogix.Configure', {
		titleText : 'Конфигурировать'
	});

	localize('Mobile.SalesLogix.ContextDialog', {
		activitiesText : 'Дела',
		addAccountContactText : 'Добавить Субъект/Контакт',
		cancelText : 'Отмена',
		notesText : 'Заметки',
		scheduleText : 'Планировать'
	});

	localize('Mobile.SalesLogix.FooterToolbar', {
		copyrightText : '&copy; 2011 Sage Software, Inc. All rights reserved.',
		logOutConfirmText : 'Вы уверены, что хотите выйти?',
		settingsText : 'Установки',
		helpText : 'Помощь',
		topText : 'Верх',
		logOutText : 'Отключение'
	});

	localize('Mobile.SalesLogix.Help', {
		titleText : 'Помощь',
		errorText : 'Ошибка',
		errorMessageText : 'Невозможно загрузить документ помощи'
	});

	localize('Mobile.SalesLogix.Home', {
		configureText : 'Конфигурировать',
		addAccountContactText : 'Добавить Субъект/Контакт',
		titleText : 'Дом.',
		actionsText : 'Быстрые действия',
		viewsText : 'Перейти'
	});

	localize('Mobile.SalesLogix.Login', {
		copyrightText : '&copy; 2011 Sage Software, Inc. All rights reserved.',
		logOnText : 'Вход ',
		passText : 'пароль',
		rememberText : 'помнить',
		titleText : 'Sage SalesLogix',
		userText : 'пользователь',
		invalidUserText : 'Имя Пользователя или пароль неверен.',
		missingUserText : 'Запись пользователя не найдена',
		serverProblemText : 'Проблема на сервере.',
		requestAbortedText : 'Запрос прерван.'
	});

	localize('Mobile.SalesLogix.NameEdit', {
		prefixTitleText : 'Префикс имени',
		suffixTitleText : 'Суффикс имени'
	});

	localize('Mobile.SalesLogix.Settings', {
		localStorageClearedText : 'Локальная память очищена успешно.',
		credentialsClearedText : 'Сохраненные учетные записы очищены успешно.',
		titleText : 'Установки'
	});

	localize('Mobile.SalesLogix.TextEdit', {
		titleText : 'Текст'
	});

	localize('Mobile.SalesLogix.UpdateToolbar', {
		updateText : 'Доступно обновление.  Кликните для новой загрузки.'
	});

	localize('Mobile.SalesLogix.Account.Detail', {
		accountText : 'субъект',
		acctMgrText : 'менеджер',
		addressText : 'адрес',
		businessDescriptionText : 'описание бизнеса',
		createDateText : 'дата создания',
		createUserText : 'создал',
		faxText : 'факс',
		importSourceText : 'источник наводки',
		industryText : 'отрасль',
		notesText : 'заметки',
		ownerText : 'куратор',
		phoneText : 'телефон',
		activityTypeText : {
			'atPhoneCall' : 'Звонок'
		},
		actionsText : 'Быстрые действия',
		relatedActivitiesText : 'Дела',
		relatedContactsText : 'Контакты',
		relatedHistoriesText : 'Заметки/История',
		relatedItemsText : 'Связанные элементы',
		relatedNotesText : 'Заметки',
		relatedOpportunitiesText : 'Сделки',
		relatedTicketsText : 'Заявки',
		statusText : 'статус',
		subTypeText : 'подтип',
		titleText : 'Субъект',
		typeText : 'тип',
		webText : 'Веб',
		callMainNumberText : 'Позвонить по основному номеру',
		scheduleActivityText : 'Планировать дело',
		addNoteText : 'Добавить заметку',
		viewAddressText : 'Показать адрес',
		moreDetailsText : 'Больше инфо',
		calledText : 'Вызов {0}'
	});

	localize('Mobile.SalesLogix.Account.Edit', {
		accountStatusTitleText : 'Статус субъекта',
		accountSubTypeTitleText : 'Подтип субъекта',
		accountText : 'субъект',
		accountTypeTitleText : 'Тип субъекта',
		acctMgrText : 'менеджер',
		businessDescriptionText : 'описание бизнеса',
		businessDescriptionTitleText : 'Описание бизнеса',
		descriptionText : 'описан.',
		faxText : 'факс',
		fullAddressText : 'адрес',
		importSourceText : 'источник наводки',
		industryText : 'отрасль',
		industryTitleText : 'Отрасль',
		ownerText : 'куратор',
		phoneText : 'телефон',
		statusText : 'статус',
		subTypeText : 'подтип',
		titleText : 'Субъект',
		typeText : 'тип',
		webText : 'Веб'
	});

	localize('Mobile.SalesLogix.Account.List', {
		titleText : 'Субъекты',
		activitiesText : 'Дела',
		notesText : 'Заметки',
		scheduleText : 'Планировать'
	});

	localize('Mobile.SalesLogix.Activity.Complete', {
		activityInfoText : 'Информация дела',
		accountText : 'субъект',
		contactText : 'контакт',
		opportunityText : 'сделка',
		ticketNumberText : 'заявка',
		companyText : 'компания',
		leadText : 'наводка',
		asScheduledText : 'как запланировано',
		categoryText : 'категория',
		categoryTitleText : 'Категория дела',
		completedText : 'дата завершения',
		completionText : 'Завершение',
		durationText : 'длительность',
		carryOverNotesText : 'перенести заметки',
		followUpText : 'следующее ',
		followUpTitleText : 'Следующее дело',
		leaderText : 'руководитель',
		longNotesText : 'заметки',
		longNotesTitleText : 'Заметки',
		otherInfoText : 'Другая информация',
		priorityText : 'приоритет',
		priorityTitleText : 'Приоритет',
		regardingText : 'тема',
		regardingTitleText : ' Дело касательно',
		resultText : 'результат',
		resultTitleText : 'Результат',
		startingText : 'дата начала',
		timelessText : 'вневременный',
		durationValueText : {
			0 : 'нет',
			15 : '15 минут',
			30 : '30 минут',
			60 : '1 час',
			90 : '1.5 часа',
			120 : '2 часа'
		},
		followupValueText : {
			'none' : 'Нет',
			'atPhoneCall' : 'Звонок',
			'atAppointment' : 'Встреча',
			'atToDo' : 'Выполнить'
		}
	});

	localize('Mobile.SalesLogix.Activity.Detail', {
		activityTypeText : {
			'atToDo' : 'Выполнить',
			'atPhoneCall' : 'Звонок',
			'atAppointment' : 'Встреча',
			'atLiterature' : 'Инф. материалы',
			'atPersonal' : 'Личные дела'
		},
		actionsText : 'Быстрые действия',
		completeActivityText : 'Завершить дело',
		alarmText : 'напоминание',
		alarmTimeText : 'напоминание',
		categoryText : 'категория',
		durationText : 'длительность',
		leaderText : 'руководитель',
		longNotesText : 'заметки',
		priorityText : 'приоритет',
		regardingText : 'тема',
		rolloverText : 'Авто прокрутка',
		startTimeText : 'время начала',
		allDayText : 'весь день',
		timelessText : 'вневременный',
		titleText : 'Дело',
		typeText : 'тип',
		companyText : 'компания',
		leadText : 'наводка',
		accountText : 'субъект',
		contactText : 'контакт',
		opportunityText : 'сделка',
		ticketNumberText : 'заявка',
		whenText : 'Когда',
		whoText : 'Кто',
		startDateFormatString : 'М/д/гггг ч:мин:сс тт',
		timelessDateFormatString : 'М/д/гггг'
	});

	localize('Mobile.SalesLogix.Activity.Edit', {
		activityCategoryTitleText : 'Категория дела',
		activityDescriptionTitleText : 'Описание Дела',
		activityTypeTitleText : 'Тип дела',
		alarmText : 'напоминание',
		alarmTimeText : '',
		categoryText : 'категория',
		durationText : 'длительность',
		leaderText : 'руководитель',
		longNotesText : 'заметки',
		longNotesTitleText : 'Заметки',
		priorityText : 'приоритет',
		priorityTitleText : 'Приоритет',
		regardingText : 'тема',
		rolloverText : 'Авто прокрутка',
		startingText : 'время начала',
		timelessText : 'вневременный',
		titleText : 'Дело',
		typeText : 'тип',
		accountText : 'субъект',
		contactText : 'контакт',
		opportunityText : 'сделка',
		ticketNumberText : 'заявка',
		companyText : 'компания',
		leadText : 'наводка',
		isLeadText : 'для наводки',
		yesText : 'Да',
		noText : 'Нет',
		updateUserActErrorText : 'Ошибка обновления дел пользователя.',
		reminderValueText : {
			0 : 'нет',
			5 : '5 минут',
			15 : '15 минут',
			30 : '30 минут',
			60 : '1 час',
			1440 : '1 день'
		},
		durationValueText : {
			0 : 'нет',
			15 : '15 минут',
			30 : '30 минут',
			60 : '1 час',
			90 : '1.5 часа',
			120 : '2 часа'
		}
	});

	localize('Mobile.SalesLogix.Activity.List', {
		titleText : 'Дела'
	});

	localize('Mobile.SalesLogix.Activity.TypesList', {
		titleText : 'Планировать...',
		activityTypeText : {
			'atToDo' : 'Выполнить',
			'atPhoneCall' : 'Звонок',
			'atAppointment' : 'Встреча',
			'atLiterature' : 'Инф. материалы',
			'atPersonal' : 'Личные дела'
		}
	});

	localize('Mobile.SalesLogix.Address.Edit', {
		address1Text : 'Адрес 1',
		address2Text : 'Адрес 2',
		address3Text : 'Адрес 3',
		cityText : 'город',
		cityTitleText : 'Город',
		countryText : 'страна',
		countryTitleText : 'Страна',
		descriptionText : 'описание',
		descriptionTitleText : 'Описание',
		isMailingText : 'доставка',
		isPrimaryText : 'основной',
		postalCodeText : 'почтовый',
		salutationText : 'адресат',
		stateText : 'регион',
		stateTitleText : 'Штат',
		titleText : 'Адрес'
	});

	localize('Mobile.SalesLogix.Calendar.MonthView', {
		titleText : 'Календарь',
		todayText : 'Сегодня',
		dayText : 'День',
		monthText : 'Месяц'
	});
	
	
	localize('Mobile.SalesLogix.Calendar.UserActivityList', {
		titleText : 'Календарь',
		dateHeaderFormatText : 'dddd, ММ/dd/yyyy',
		todayText : 'Сегодня',
		dayText : 'День',
		monthText : 'Месяц'
	});

	localize('Mobile.SalesLogix.Campaign.Detail', {
		acctMgrText : 'менеджер',
		codeText : 'код',
		createDateText : 'дата создания',
		createUserText : 'создал',
		fbarHomeTitleText : 'Дом.',
		fbarScheduleTitleText : 'планировать',
		nameText : 'имя',
		startText : 'старт',
		titleText : 'Маркетинг'
	});

	localize('Mobile.SalesLogix.Campaign.Edit', {
		codeText : 'код',
		nameText : 'имя',
		startText : 'старт',
		titleText : 'Маркетинг'
	});

	localize('Mobile.SalesLogix.Campaign.List', {
		titleText : 'Маркетинг'
	});

	localize('Mobile.SalesLogix.Contact.Detail', {
		activityTypeText : {
			'atPhoneCall' : 'Звонок',
			'atEMail' : 'Эл. почта'
		},
		accountText : 'субъект',
		acctMgrText : 'менеджер',
		addressText : 'адрес',
		contactTitleText : 'заголовок',
		createDateText : 'дата создания',
		createUserText : 'создал',
		emailText : 'эл.почта',
		faxText : 'факс',
		homeText : 'домашний тел.',
		nameText : 'контакт',
		ownerText : 'куратор',
		actionsText : 'Быстрые действия',
		relatedAccountsText : 'Субъекты',
		relatedActivitiesText : 'Дела',
		relatedHistoriesText : 'Заметки/История',
		relatedItemsText : 'Связанные элементы',
		relatedNotesText : 'Заметки',
		relatedOpportunitiesText : 'Сделки',
		relatedTicketsText : 'Заявки',
		titleText : 'Контакт',
		webText : 'Веб',
		workText : 'телефон',
		callMobileNumberText : 'Звонок на мобильный',
		callWorkNumberText : 'Позвонить по основному номеру',
		scheduleActivityText : 'Планировать дело',
		addNoteText : 'Добавить заметку',
		sendEmailText : 'Послать Эл.почта',
		viewAddressText : 'Показать адрес',
		moreDetailsText : 'Больше инфо'
	});

	localize('Mobile.SalesLogix.Contact.Edit', {
		titleText : 'Контакт',
		nameText : 'имя',
		workText : 'телефон',
		mobileText : 'мобильный',
		emailText : 'эл.почта',
		webText : 'Веб',
		acctMgrText : 'менеджер',
		accountNameText : 'субъект',
		homePhoneText : 'домашний тел.',
		faxText : 'факс',
		addressText : 'адрес',
		contactTitleText : 'заголовок',
		titleTitleText : 'Должность',
		addressTitleText : 'Адрес',
		ownerText : 'куратор'
	});

	localize('Mobile.SalesLogix.Contact.List', {
		titleText : 'Контакты',
		activitiesText : 'Дела',
		notesText : 'Заметки',
		scheduleText : 'Планировать'
	});

	localize('Mobile.SalesLogix.Contract.Detail', {
		accountText : 'субъект',
		activeText : 'активн.',
		contactText : 'контакт',
		contractTypeText : 'Тип контракта',
		createDateText : 'дата создания',
		createUserText : 'создал',
		endText : 'конец',
		fbarHomeTitleText : 'Дом.',
		fbarScheduleTitleText : 'планировать',
		quantityText : 'кол-во',
		refNumText : 'Ном. ссылки',
		relatedItemsText : 'Связанные элементы',
		relatedTicketsText : 'Заявки',
		remainingText : 'оставшийся',
		startText : 'старт',
		svcTypeText : 'Тип svc',
		titleText : 'Контракт'
	});

	localize('Mobile.SalesLogix.Contract.Edit', {
		titleText : 'Контракт',
		refNumText : 'Ном. ссылки',
		quantityText : 'кол-во',
		activeText : 'активн.'
	});

	localize('Mobile.SalesLogix.Contract.List', {
		titleText : 'Контракты'
	});

	localize('Mobile.SalesLogix.Defect.Detail', {
		areaText : 'область',
		assignedText : 'Поручено',
		categoryText : 'категория',
		createDateText : 'дата создания',
		createUserText : 'создал',
		defectIdText : 'ИД Дефекта',
		fbarHomeTitleText : 'Дом.',
		fbarNewTitleText : 'Новый',
		fbarScheduleTitleText : 'планировать',
		moreText : 'больше &gt;&gt;',
		priorityText : 'приоритет',
		relatedDefectProblemsText : 'Проблема',
		relatedDefectSolutionsText : 'Решение',
		relatedItemsText : 'Связанные элементы',
		reportDateText : 'дата отчета',
		severityText : 'Важность',
		statusText : 'статус',
		subjectText : 'тема',
		titleText : 'Дефект'
	});

	localize('Mobile.SalesLogix.Defect.Edit', {
		idPrefixText : 'ИД префикс',
		idSuffixText : 'ИД суффикс',
		titleText : 'Дефект',
		areaText : 'область',
		categoryText : 'категория',
		subjectText : 'тема'
	});

	localize('Mobile.SalesLogix.Defect.List', {
		titleText : 'Дефекты'
	});

	localize('Mobile.SalesLogix.DefectProblem.Detail', {
		createDateText : 'дата создания',
		createUserText : 'создал',
		notesText : 'заметки',
		titleText : 'Проблема'
	});

	localize('Mobile.SalesLogix.DefectProblem.Edit', {
		notesText : 'заметки',
		titleText : 'Решение дефекта'
	});

	localize('Mobile.SalesLogix.DefectSolution.Detail', {
		createDateText : 'дата создания',
		createUserText : 'создал',
		notesText : 'заметки',
		titleText : 'Решение дефекта'
	});

	localize('Mobile.SalesLogix.DefectSolution.Edit', {
		notesText : 'заметки',
		titleText : 'Решение дефекта'
	});

	localize('Mobile.SalesLogix.History.Detail', {
		categoryText : 'категория',
		completedText : 'Заверш.',
		durationText : 'длительность',
		leaderText : 'руководитель',
		longNotesText : 'заметки',
		notesText : 'Заметки',
		priorityText : 'приоритет',
		regardingText : 'тема',
		scheduledText : 'Запланировано',
		timelessText : 'вневременный',
		companyText : 'компания',
		leadText : 'наводка',
		titleText : 'История',
		accountText : 'субъект',
		contactText : 'контакт',
		opportunityText : 'сделка',
		ticketNumberText : 'заявка',
		moreDetailsText : 'Больше инфо',
		relatedItemsText : 'Связанные элементы',
		modifiedText : 'Изменено',
		typeText : 'тип',
		activityTypeText : {
			'atToDo' : 'Выполнить',
			'atPhoneCall' : 'Звонок',
			'atAppointment' : 'Встреча',
			'atLiterature' : 'Инф. материалы',
			'atPersonal' : 'Личные дела',
			'atQuestion' : 'Вопрос',
			'atEMail' : 'Эл. почта'
		},
		dateFormatString : 'М/d/yyyy h:mm:ss tt'
	});

	localize('Mobile.SalesLogix.History.Edit', {
		accountText : 'субъект',
		noteDescriptionTitleText : 'Описание заметки',
		contactText : 'контакт',
		longNotesText : 'заметки',
		longNotesTitleText : 'Заметки',
		opportunityText : 'сделка',
		ticketNumberText : 'заявка',
		regardingText : 'тема',
		isLeadText : 'для наводки',
		startingText : 'время',
		titleText : 'Заметка',
		companyText : 'компания',
		leadText : 'наводка',
		relatedItemsText : 'Связанные элементы'
	});

	localize('Mobile.SalesLogix.History.List', {
		activityTypeText : {
			'atToDo' : 'Выполнить',
			'atPhoneCall' : 'Звонок',
			'atAppointment' : 'Встреча',
			'atLiterature' : 'Инф. материалы',
			'atPersonal' : 'Личные дела',
			'atQuestion' : 'Вопрос',
			'atEMail' : 'Эл. почта'
		},
		titleText : 'Заметки/История'
	});

	localize('Mobile.SalesLogix.Lead.Detail', {
		activityTypeText : {
			'atPhoneCall' : 'Звонок',
			'atEMail' : 'Эл. почта'
		},
		accountText : 'компания',
		addressText : 'адрес',
		businessDescriptionText : 'описание бизнеса',
		createDateText : 'дата создания',
		createUserText : 'создал',
		eMailText : 'эл.почта',
		leadSourceText : 'источник наводки',
		industryText : 'отрасль',
		interestsText : 'интересы',
		leadTitleText : 'заголовок',
		nameText : 'имя',
		notesText : 'комментарии',
		ownerText : 'куратор',
		relatedActivitiesText : 'Дела',
		relatedHistoriesText : 'Заметки/История',
		relatedItemsText : 'Связанные элементы',
		relatedNotesText : 'Заметки',
		sicCodeText : 'код доступа',
		titleText : 'Наводка',
		tollFreeText : 'справочный тел.',
		webText : 'Веб',
		workText : 'телефон',
		actionsText : 'Быстрые действия',
		callWorkNumberText : 'Позвонить по основному номеру',
		scheduleActivityText : 'Планировать дело',
		addNoteText : 'Добавить заметку',
		sendEmailText : 'Послать Эл.почта',
		viewAddressText : 'Показать адрес',
		moreDetailsText : 'Больше инфо',
		calledText : 'Вызов {0}',
		emailedText : 'Отправлено {0}'
	});

	localize('Mobile.SalesLogix.Lead.Edit', {
		accountText : 'субъект',
		addressText : 'адрес',
		businessText : 'описание бизнеса',
		businessTitleText : 'Описание бизнеса',
		companyText : 'компания',
		contactTitleText : 'заголовок',
		emailText : 'эл.почта',
		faxText : 'факс',
		importSourceText : 'источник наводки',
		industryText : 'отрасль',
		industryTitleText : 'Отрасль',
		interestsText : 'интересы',
		leadNameLastFirstText : 'имя',
		leadOwnerText : 'куратор',
		nameText : 'имя',
		notesText : 'комментарии',
		notesTitleText : 'Комментарии',
		sicCodeText : 'код доступа',
		titleText : 'Наводка',
		titleTitleText : 'Должность',
		tollFreeText : 'справочный тел.',
		webText : 'Веб',
		workText : 'телефон'
	});

	localize('Mobile.SalesLogix.Lead.List', {
		titleText : 'Наводки',
		activitiesText : 'Дела',
		notesText : 'Заметки',
		scheduleText : 'Планировать'
	});

	localize('Mobile.SalesLogix.LeadSource.List', {
		titleText : 'Источники наводки'
	});

	localize('Mobile.SalesLogix.Opportunity.Detail', {
		accountText : 'субъект',
		acctMgrText : 'менеджер',
		estCloseText : 'план. закрытия',
		fbarHomeTitleText : 'Дом.',
		fbarScheduleTitleText : 'планировать',
		importSourceText : 'источник наводки',
		opportunityText : 'сделка',
		ownerText : 'куратор',
		actionsText : 'Быстрые действия',
		potentialText : 'план продаж',
		probabilityText : 'вероятн. закрытия',
		relatedActivitiesText : 'Дела',
		relatedContactsText : 'Контакты',
		relatedHistoriesText : 'Заметки/История',
		relatedItemsText : 'Связанные элементы',
		relatedNotesText : 'Заметки',
		relatedProductsText : 'Продукты',
		resellerText : 'посредник',
		statusText : 'статус',
		titleText : 'Сделка',
		typeText : 'тип',
		scheduleActivityText : 'Планировать дело',
		addNoteText : 'Добавить заметку',
		moreDetailsText : 'Больше инфо'
	});

	localize('Mobile.SalesLogix.Opportunity.Edit', {
		accountText : 'субъект',
		acctMgrText : 'менеджер',
		estCloseText : 'план. закрытия',
		importSourceText : 'источник наводки',
		opportunityText : 'сделка',
		ownerText : 'куратор',
		potentialText : 'план продаж',
		probabilityText : 'вероятн. закрытия',
		resellerText : 'посредник',
		statusText : 'статус',
		titleText : 'Сделка',
		typeText : 'тип'
	});

	localize('Mobile.SalesLogix.Opportunity.List', {
		titleText : 'Сделки',
		activitiesText : 'Дела',
		notesText : 'Заметки',
		scheduleText : 'Планировать'
	});

	localize('Mobile.SalesLogix.OpportunityProduct.List', {
		titleText : 'Продукты'
	});

	localize('Mobile.SalesLogix.Owner.List', {
		titleText : 'Владельцы'
	});

	localize('Mobile.SalesLogix.Return.Detail', {
		accountText : 'субъект',
		assignedToText : 'Поручено',
		createDateText : 'дата создания',
		createUserText : 'создал',
		fbarHomeTitleText : 'Дом.',
		fbarScheduleTitleText : 'планировать',
		priorityText : 'приоритет',
		regDateText : 'Дата рег.',
		returnedByText : 'Возвращено',
		returnIdText : 'ИД возврата',
		shipToText : 'кому доставить ',
		titleText : 'Возврат',
		typeText : 'тип'
	});

	localize('Mobile.SalesLogix.Return.Edit', {
		titleText : 'Возврат',
		returnIdText : 'ИД возврата',
		priorityText : 'приоритет',
		typeText : 'тип',
		regDateText : 'Дата рег.',
		returnedByText : 'Возвращено'
	});

	localize('Mobile.SalesLogix.Return.List', {
		titleText : 'Возвраты'
	});

	localize('Mobile.SalesLogix.SalesOrder.Detail', {
		accountText : 'субъект',
		acctMgrText : 'менеджер',
		commentsText : 'комментарии',
		createDateText : 'дата создания',
		createUserText : 'создал',
		fbarHomeTitleText : 'Дом.',
		fbarScheduleTitleText : 'планировать',
		reqDateText : 'треб. дата',
		salesOrderIdText : 'ИД заказа на продажу',
		statusText : 'статус',
		titleText : 'Заказ на продажи',
		totalText : 'всего',
		typeText : 'тип'
	});

	localize('Mobile.SalesLogix.SalesOrder.Edit', {
		commentsText : 'комментарии',
		reqDateText : 'треб. дата',
		salesOrderIdText : 'ИД заказа на продажу',
		statusText : 'статус',
		titleText : 'Заказ на продажи',
		totalText : 'всего',
		typeText : 'тип'
	});

	localize('Mobile.SalesLogix.SalesOrder.List', {
		titleText : 'Заказ на продажи'
	});

	localize('Mobile.SalesLogix.Ticket.Detail', {
		accountText : 'субъект',
		areaText : 'область',
		assignedDateText : 'дата назначения',
		assignedToText : 'поручено',
		categoryText : 'категория',
		contactText : 'контакт',
		contractText : 'контракт',
		descriptionText : 'описан.',
		issueText : 'проблема',
		needByText : 'срок исполнения',
		notesText : 'комментарии',
		phoneText : 'телефон',
		actionsText : 'Быстрые действия',
		relatedActivitiesText : 'Дела',
		relatedItemsText : 'Связанные элементы',
		resolutionText : 'решение',
		sourceText : 'источник',
		statusText : 'статус',
		subjectText : 'тема',
		ticketIdText : 'номер заявки',
		titleText : 'Заявка',
		urgencyText : 'срочность',
		scheduleActivityText : 'Планировать дело',
		moreDetailsText : 'Больше инфо'
	});

	localize('Mobile.SalesLogix.Ticket.Edit', {
		accountText : 'субъект',
		areaText : 'область',
		assignedDateText : 'дата назначения',
		assignedToText : 'поручено',
		categoryText : 'категория',
		contactText : 'контакт',
		contractText : 'контракт',
		descriptionText : 'описан.',
		descriptionTitleText : 'Описание',
		issueText : 'проблема',
		needByText : 'срок исполнения',
		notesText : 'комментарии',
		notesTitleText : 'Комментарии',
		phoneText : 'телефон',
		relatedActivitiesText : 'Дела',
		relatedItemsText : 'Связанные элементы',
		resolutionText : 'решение',
		resolutionTitleText : 'Решение',
		sourceText : 'источник',
		sourceTitleText : 'Источник',
		statusText : 'статус',
		subjectText : 'тема',
		ticketAreaTitleText : 'Область заявки',
		ticketCategoryTitleText : 'Категория заявки',
		ticketIdText : 'номер заявки',
		ticketIssueTitleText : 'Проблема заявки',
		ticketStatusTitleText : 'Статус заявки',
		ticketUrgencyTitleText : 'Срочность заявки',
		titleText : 'Заявка',
		urgencyText : 'срочность'
	});

	localize('Mobile.SalesLogix.Ticket.List', {
		titleText : 'Заявки',
		activitiesText : 'Дела',
		scheduleText : 'Планировать'
	});

	localize('Mobile.SalesLogix.Ticket.UrgencyLookup', {
		titleText : 'Срочность заявки'
	});

	localize('Mobile.SalesLogix.User.List', {
		titleText : 'Пользователи'
	});

	localize('Sage.Platform.Mobile.Calendar', {
		validationSummaryText : 'Итог проверки',
		titleText : 'Календарь',
		amText : 'До полудня',
		pmText : 'После полудня'
	});

	localize('Sage.Platform.Mobile.Controls.AddressField', {
		lookupLabelText : 'изменить',
		emptyText : 'нет адреса'
	});

	localize('Sage.Platform.Mobile.Controls.BooleanField', {
		onText : 'ВКЛ',
		offText : 'ВЫКЛ'
	});

	localize('Sage.Platform.Mobile.Controls.DateField', {
		emptyText : '',
		formatString : 'ММ/dd/yyyy'
	});

	localize('Sage.Platform.Mobile.Controls.EditorField', {
		lookupLabelText : 'изменить',
		lookupText : '...',
		emptyText : 'пусто',
		completeText : 'Ок'
	});

	localize('Sage.Platform.Mobile.Controls.LookupField', {
		dependentErrorText : 'Значение для"{0}" должно быть выбрано.',
		emptyText : '',
		completeText : 'Выбрать',
		lookupLabelText : 'поиск',
		lookupText : '...'
	});

	localize('Sage.Platform.Mobile.Controls.NameField', {
		emptyText : 'Нет имени'
	});

	localize('Sage.Platform.Mobile.Controls.NoteField', {
		emptyText : ''
	});

	localize('Sage.Platform.Mobile.Detail', {
		editText : 'Изменить',
		titleText : 'Детали',
		detailsText : 'Детали',
		toggleCollapseText : 'свернуть',
		loadingText : 'загрузка...',
		requestErrorText : 'При регистрации данных произошла ошибка на сервере..',
		notAvailableText : 'Требуемый вход недоступен.'
	});

	localize('Sage.Platform.Mobile.Edit', {
		saveText : 'Сохранить',
		titleText : 'Изменить',
		toggleCollapseText : 'свернуть',
		validationSummaryText : 'Итог проверки',
		detailsText : 'Детали',
		loadingText : 'загрузка...',
		requestErrorText : 'Ошибка. при запросе данных на сервере'
	});

	localize('Sage.Platform.Mobile.GroupedList', {
		toggleCollapseText : 'свернуть'
	});

	localize('Sage.Platform.Mobile.List', {
		moreText : 'Получить больше записей',
		titleText : 'Список',
		remainingText : '{0} записей осталось',
		searchText : 'Поиск',
		cancelText : 'Отмена',
		insertText : 'Создать',
		noDataText : 'нет записей',
		loadingText : 'загрузка...',
		requestErrorText : 'При регистрации данных произошла ошибка на сервере..'
	});

	localize('Sage.Platform.Mobile.MainToolbar', {
		titleText : 'Мобильный тел.'
	});

	localize('Sage.Platform.Mobile.View', {
		titleText : 'Обобщенный вид'
	});

})();
