
<?
$faqIblockID;
switch($_COOKIE["LANG"]){
	case 'ru':
		$faqIblockID = "11"; // ru
		break;
	case 'en':
		$faqIblockID = "12"; // en
		break;
	default:
		$faqIblockID = "11"; // ru
		break;
}
?>


	<!-- payments directions -->
	<div class="payment-directions pd-section">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<h2 class="section__title locale-mp-pd-title">Формы выплат</h2>
					<p class="section__text locale-mp-pd-text">
						Любые суммы и формы мгновенных массовых выплат
					</p>
				</div>
			</div>
			<div class="directions">
				<div class="row">
					<div class="col-xl-4">
						<div class="direction">
							<div class="title-wrapper">
								<div class="icon">
									<img class="icon__img" src="<?=SITE_TEMPLATE_PATH?>/img/mass-payments/pd-icon.png" alt="">
								</div>
								<div class="title locale-mp-pd-item-1-title">
									Банковские <br />
									карты
								</div>
							</div>
							<div class="description locale-mp-pd-item-1-text">
								Пополнение счетов любых банковских карт VISA, MasterCard, МИР и других международных платежных систем.
							</div>
						</div>
					</div>
					<div class="col-xl-4">
						<div class="direction">
							<div class="title-wrapper">
								<div class="icon">
									<img class="icon__img" src="<?=SITE_TEMPLATE_PATH?>/img/mass-payments/pd-icon.png" alt="">
								</div>
								<div class="title locale-mp-pd-item-2-title">
									Электронные <br />
									кошельки
								</div>
							</div>
							<div class="description locale-mp-pd-item-2-text">
								Пополнение счета WebMoney, Qiwi-Кошелёк, Яндекс.Деньги, PayPal, ЮMoney и других электронных кошельков.
							</div>
						</div>
					</div>
					<div class="col-xl-4">
						<div class="direction">
							<div class="title-wrapper">
								<div class="icon">
									<img class="icon__img" src="<?=SITE_TEMPLATE_PATH?>/img/mass-payments/pd-icon.png" alt="">
								</div>
								<div class="title locale-mp-pd-item-3-title">
									Мобильные <br />
									телефоны
								</div>
							</div>
							<div class="description locale-mp-pd-item-3-text">
								Пополнение баланса мобильного телефона любого сотового оператора. Доступен сервис отправки клиенту sms-уведомления о начислении и деталях операции.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- payments directions -->

	<!-- work algorithm -->
	<div class="work-algorithm">
		<div class="container algorithm-container">
			<div class="row">
				<div class="col-lg-12">
					<h2 class="section__title locale-mp-wa-title">Алгоритм работы</h2>
					<p class="section__text locale-mp-wa-description">
						Все шаги просты, логичны и прозрачны
					</p>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="algorithm">
						<div class="algorithm-illustration"></div>
						<div class="algorithm-items algorithm-items--left">
							<div class="algorithm-item">
								<span class="title locale-mp-wa-item-1-title">
									Описание <br>
									проекта
								</span>
								<p class="description locale-mp-wa-item-1-description">
									Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum
								</p>
							</div>
							<div class="algorithm-item">
								<span class="title locale-mp-wa-item-2-title">
									Согласование <br>
									комиссии
								</span>
								<p class="description locale-mp-wa-item-2-description">
									Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum
								</p>
							</div>
							<div class="algorithm-item">
								<span class="title locale-mp-wa-item-3-title">
									Выбор метода <br>
									работы
								</span>
								<p class="description locale-mp-wa-item-3-description">
									Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum
								</p>
							</div>
						</div>

						<div class="algorithm-items algorithm-items--right">
							<div class="algorithm-item">
								<span class="title locale-mp-wa-item-4-title">
									Внесение <br />
									платежа
								</span>
								<p class="description locale-mp-wa-item-4-description">
									Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum
								</p>
							</div>
							<div class="algorithm-item">
								<span class="title locale-mp-wa-item-5-title">
									Осуществеление <br />
									выплат
								</span>
								<p class="description locale-mp-wa-item-5-description">
									Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum
								</p>
							</div>
							<div class="algorithm-item">
								<span class="title locale-mp-wa-item-6-title">
									Получение <br />
									отчёта		
								</span>
								<p class="description locale-mp-wa-item-6-description">
									Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- work algorithm -->

	<!-- about -->
	<div class="about-inner">
		<div class="container">
			<div class="row">
				<div class="col-xl-4">
					<div class="about-illustration"></div>
				</div>
				<div class="col-xl-8">
					<h2 class="section__title locale-mp-about-title">О нас</h2>
					<p class="section__sub__text locale-mp-about-subTitle">
						Техническая и юридическая надёжность
					</p>
					<div class="about-illustration-phone"></div>
					<div class="section__text">
						<p class="locale-mp-about-description">
							Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное 
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- about -->

	<!-- methods -->
	<div class="methods">
		<div class="container">
			<div class="method-illustration"></div>
			<div class="row">
				<div class="col-xl-12">
					<h2 class="section__title locale-mp-methods-title">Методы взаимодействия</h2>
					<p class="section__sub__text locale-mp-methods-subTitle">
						Выбор удобной модели взаимодействия с системой
					</p>
					<div class="method-illustration-phone"></div>
				</div>
			</div>
			<div class="row">
				<div class="col-xl-12">
					<ul class="methods-list">
						<li class="method-item">
							<div class="title-wrapper">
								<div class="icon">
									<img class="icon__img" src="<?=SITE_TEMPLATE_PATH?>/img/mass-payments/pd-icon.png" alt="">
								</div>
								<div class="title locale-mp-method-item-1-title">
									Личный <br />
									кабинет
								</div>
							</div>
							<div class="description locale-mp-method-item-1-description">
								Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает
							</div>
						</li>
						<li class="method-item">
							<div class="title-wrapper">
								<div class="icon">
									<img class="icon__img" src="<?=SITE_TEMPLATE_PATH?>/img/mass-payments/pd-icon.png" alt="">
								</div>
								<div class="title locale-mp-method-item-2-title">
									Реестр
								</div>
							</div>
							<div class="description locale-mp-method-item-2-description">
								Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает
							</div>
						</li>
						<li class="method-item">
							<div class="title-wrapper">
								<div class="icon">
									<img class="icon__img" src="<?=SITE_TEMPLATE_PATH?>/img/mass-payments/pd-icon.png" alt="">
								</div>
								<div class="title locale-mp-method-item-3-title">
									API <br />
									Интеграция
								</div>
							</div>
							<div class="description locale-mp-method-item-3-description">
								Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
	<!-- methods -->

	<!-- faq -->
	<div id="faq" class="faq">
		<div class="container">
			<div class="faq-illustration"></div>
			<div class="row">
				<div class="col-xl-12">
					<h2 class="section__title locale-mp-faq-title">FAQ</h2>
					<p class="section__sub__text locale-mp-faq-subtitle">
						Ответы на часто задаваемые вопросы
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-xl-8">
					<?$APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"faq",
	Array(
		"ACTIVE_DATE_FORMAT" => "",
		"ADD_SECTIONS_CHAIN" => "Y",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"DISPLAY_DATE" => "Y",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array(""),
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => $faqIblockID,
		"IBLOCK_TYPE" => "faq",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
		"INCLUDE_SUBSECTIONS" => "Y",
		"MESSAGE_404" => "",
		"NEWS_COUNT" => "20",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => ".default",
		"PAGER_TITLE" => "Новости",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"PREVIEW_TRUNCATE_LEN" => "",
		"PROPERTY_CODE" => array("", ""),
		"SET_BROWSER_TITLE" => "Y",
		"SET_LAST_MODIFIED" => "N",
		"SET_META_DESCRIPTION" => "Y",
		"SET_META_KEYWORDS" => "Y",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "Y",
		"SHOW_404" => "N",
		"SORT_BY1" => "ID",
		"SORT_BY2" => "ID",
		"SORT_ORDER1" => "ASC",
		"SORT_ORDER2" => "ASC",
		"STRICT_SECTION_CHECK" => "N"
	)
);?><br>
				</div>
			</div>
		</div>
		<div class="faq-illustration-mobile"></div>
	</div>
	<!-- faq -->