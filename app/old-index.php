<div class="header">
	<div class="container">
		<!-- figures -->
		<div class="header-figures" id="headerFigures">
			<div class="points" data-depth="0.1" data-calibrate-y="true" data-limit-y="0.1" data-limit-x="0.2"></div>
			<div class="circle-main"data-depth="0.2" data-calibrate-y="true" data-limit-y="0.2" data-limit-x="0.2"></div>
			<div class="circle-add" data-depth="0.1" data-calibrate-y="true" data-limit-y="0.1" data-limit-x="0.2"></div>
		</div>
		<div class="header-menu-btn">
 <span class="menu-line"></span> <span class="menu-line"></span> <span class="menu-line"></span>
		</div>
		<div class="row">
			<div class="col-xl-3 col-6">
                <a href="/" class="logo"></a>
			</div>
			<div class="col-xl-9">
				
			<?$APPLICATION->IncludeComponent(
				"bitrix:menu", 
				"header-menu", 
				array(
					"ALLOW_MULTI_SELECT" => "N",
					"CHILD_MENU_TYPE" => "left",
					"DELAY" => "N",
					"MAX_LEVEL" => "1",
					"MENU_CACHE_GET_VARS" => array(
					),
					"MENU_CACHE_TIME" => "3600",
					"MENU_CACHE_TYPE" => "N",
					"MENU_CACHE_USE_GROUPS" => "Y",
					"ROOT_MENU_TYPE" => $menuName,
					"USE_EXT" => "N",
					"COMPONENT_TEMPLATE" => "header-menu"
				),
				false
			);?>
				<ul class="header-contacts-menu menu">
					<li class="menu-item"> <a href="tel:<?=$GLOBALS['HELLO_PHONE']?>" class="item__link"> <?=$GLOBALS['HELLO_PHONE']?> </a> </li>
					<li class="menu-item"> <a href="mailto:<?=$GLOBALS['HELLO_EMAIL']?>" class="item__link"> <?=$GLOBALS['HELLO_EMAIL']?> </a> </li>
					<li class="menu-item menu-item-language">
						<?if (isset($_COOKIE['LANG'])):?>
							<?if ($_COOKIE['LANG'] == 'ru'):?>
								<button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">RU</button>
								<div class="dropdown-menu">
									<a class="dropdown-item active" href="#" onclick="action_lang_new('ru')">RU</a>
									<a class="dropdown-item" href="#" onclick="action_lang_new('en')">EN</a>
								</div>
							<?else:?>
								<button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">EN</button>
								<div class="dropdown-menu">
									<a class="dropdown-item active" href="#" onclick="action_lang_new('en')">EN</a>
									<a class="dropdown-item" href="#" onclick="action_lang_new('ru')">RU</a>
								</div>
							<?endif;?>
						<?endif;?>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-xl-12">
				<div class="header-info">
					<h1 class="header__title">
						<span class="highlight">
							<span class="highlight__text locale-banner-highlight">E-commerce</span>
						</span>
						<span class="locale-banner-title">без границ выплаты на любые карты</span>
					</h1>
					<p class="header__text locale-banner-description">
						Принимайте платежи банковскими картами на своём сайте. 
						С нами это просто, безопасно и без затрат на подключение! 
						Автоматизированный сервис мгновенных денежных переводов 
						на банковские карты, электронные кошельки и телефоны
					</p>
				</div>
				<div class="header-buttons-wrapper">
					<div class="btn-wrapper btn-wrapper-blue">
						<a href="#popup-request" class="header-btn request-btn btn-blue button fancybox">
							<span class="btn__title locale-banner-req-btn">
								Оставить заявку
							</span>	
							<svg class="btn-icon" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle cx="11.5" cy="11.5" r="10.5" stroke="white" stroke-width="2"/>
							</svg>
						</a>
					</div>

					<div class="btn-wrapper btn-wrapper-brezee">
						<a href="#" class="header-btn registration-btn btn-breeze button">
							<span class="btn__title locale-banner-reg-btn">
								Регистрация
							</span>
							<svg class="btn-icon" width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M20 21.5876L2.11643 12L20 2.41242L20 21.5876Z" stroke="white" stroke-width="2"/>
							</svg>	
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- footer -->
<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-xl-12">
					<div class="company__title locale-companies-title">
						Мы работаем с такими компаниями, как:
					</div>
				</div>
				<div class="col-xl-12">
					<ul class="company-list">
						<li class="company-item">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/company/company-1.png" alt="" class="item__logo">
						</li>
						<li class="company-item">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/company/company-2.png" alt="" class="item__logo">
						</li>
						<li class="company-item">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/company/company-3.png" alt="" class="item__logo">
						</li>
						<li class="company-item">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/company/company-4.png" alt="" class="item__logo">
						</li>
						<li class="company-item">
							<img src="<?=SITE_TEMPLATE_PATH?>/img/company/company-5.png" alt="" class="item__logo">
						</li>
					</ul>
				</div>
			</div>
			<div class="footer-bottom-panel">
				<div class="row">
					<div class="col-xl-4">
						<p class="footer-copyright locale-footer-copyright">
							Copyright ©2020 ООО «Анлимко Групп». All rights reserved.
						</p>
					</div>
					<div class="col-xl-4">
						<div class="btn-wrapper btn-wrapper-blue btn-wrapper-footer">
							<a href="#popup-request" class="footer-request-btn btn-blue button fancybox">
								<span class="btn__title locale-footer-req-btn">
									Оставить заявку
								</span>	
								<svg class="btn-icon" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
									<circle cx="11.5" cy="11.5" r="10.5" stroke="white" stroke-width="2"/>
								</svg>
							</a>
						</div>
					</div>
					<div class="col-xl-4">
						<p class="footer-copyright-phone locale-footer-copyright">
							Copyright ©2020 ООО «Анлимко Групп».
							All rights reserved.
						</p>
						<a href="/policy/" class="footer-policy locale-footer-policy">Политика конфиденциальности</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
	<!-- footer -->