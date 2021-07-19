document.addEventListener("DOMContentLoaded", function(event) {

	// SCROLL EVENT
	document.addEventListener('aos:in', ({ detail }) => {
		if (detail.getAttribute('data-aos-id') == "conversion") {

			// COUNTS
			const convCountOneVal = document.getElementById("conversion-count-1").getAttribute('data-value');
			const convCountOne = new CountUp('conversion-count-1', convCountOneVal, {
				decimalPlaces: 1,
				decimal: ","
			});
			convCountOne.start();

			const convCountTwoVal = document.getElementById("conversion-count-2").getAttribute('data-value');
			const convCountTwo = new CountUp('conversion-count-2', convCountTwoVal, {
				decimalPlaces: 1,
				decimal: ","
			});
			convCountTwo.start();
		}
	});

	// FANCYBOX
	$(".fancybox").fancybox();

	// CLOSE FANCY
	const btnCloseFancy = document.querySelector('.popup-close-btn');
	if (btnCloseFancy) {
		btnCloseFancy.addEventListener('click', function (e) {
			parent.jQuery.fancybox.getInstance().close();
		});
	}

	// PRICE SLIDER
	const slider = document.getElementById('slider');
	if (slider) {
		noUiSlider.create(slider, {
			start: 2000000,
			connect: [true, false],
			range: {
				min: [1000, 9000],
				"10%": [10000, 40000],
				"20%": [50000, 50000],
				"30%": [100000, 400000],
				"40%": [500000, 500000],
				"50%": [1000000, 1000000],
				"60%": [2000000, 2000000],
				"70%": [3000000, 3000000],
				"80%": [5000000, 5000000],
				max: 10000000
			}
		});
		
		let sliderValue = slider.noUiSlider.get();
		const proceedUsCount = new CountUp('proceedUs',"", {
			decimalPlaces: 0,
			decimal: "",
			separator: " ",
			duration: 0.5
		});
		const proceedBankCount = new CountUp('proceedBank',"", {
			decimalPlaces: 0,
			decimal: "",
			separator: " ",
			duration: 0.5
		});

		slider.noUiSlider.on('update', function () {
			sliderValue = slider.noUiSlider.get();
			const	proceedUs = document.getElementById("proceedUs"),
					proceedBank = document.getElementById("proceedBank"),
					sliderTurnOver = document.getElementById("sliderTurnover");

			let proceedUsValue = sliderValue - ((sliderValue * 2.8) / 100),
				proceedBankValue = sliderValue - ((sliderValue * 31.1) / 100);
	

			sliderTurnOver.innerHTML = Math.round(sliderValue).toLocaleString();

			// меняем цифры у выручки с нами
			proceedUsCount.update(proceedUsValue);
			proceedBankCount.update(proceedBankValue);
		});
	}

	// FAQ
	const faq = document.getElementById('faq');
	if (faq) {
		faq.addEventListener('click', function (event) {
			const target = event.target,
				  targetClosest = target.closest('.list-item');
				  
			if (targetClosest) {
				const targetBtn = targetClosest.querySelector('.item-btn');
				if (targetClosest.classList.contains('active')) {
					targetClosest.classList.remove('active');
				} else {
					targetClosest.classList.add('active');
				}
			}
	
		});
	}

	// INPUT MASK
	jQuery(function($){
		$(".phone-field").mask("+7 (999) 99 99 999");
	});

	// SMOOTH SCROLL
	const scroll = new SmoothScroll('a[href*="#"]');

	//LEFT SIDEBAR MENU
	if (document.querySelector(".sidebar-menu-btn")) {
		const sidebarMenuBtn = document.querySelector(".sidebar-menu-btn"),
			  sidebarMenuBtnClose = document.querySelector(".sidebar-close-btn"),
			  body = document.body;

		sidebarMenuBtn.addEventListener('click', function (e) {
			body.classList.add("sidebar-menu-open");
		});

		sidebarMenuBtnClose.addEventListener('click', function (e) {
			body.classList.remove("sidebar-menu-open");
		});
	}

	// COOKIES
	switch(Cookies.get('LANG')){
		case 'ru':
			changeLocaleService.loadLocale("ru"); 
			break;
		case 'en':
			changeLocaleService.loadLocale("en");
			break;
		default:
			break;
	}

	// PARALLAX
	if (document.getElementById("headerFigures")) {
		if($(window).width() >= 1024) {
			var headerFigures = document.getElementById('headerFigures');
			var	parallaxInstance = new Parallax(headerFigures, {
				relativeInput: true
			});
		}
	}

	if (document.getElementById("headerFiguresNew")) {
		if($(window).width() >= 1024) {
			var headerFiguresNew = document.getElementById('headerFiguresNew');
			var	parallaxInstance = new Parallax(headerFiguresNew, {
				relativeInput: true
			});
		}
	}

	if (document.getElementById("equaringHeaderFigures")) {
		if($(window).width() >= 1024) {
			var equaringHeaderFigures = document.getElementById('equaringHeaderFigures');
			var	parallaxInstance = new Parallax(equaringHeaderFigures, {
				relativeInput: true
			});
		}
	}


	// IFRAME
	if (document.getElementById("payForm")) {
		// IFRAME FORM USERAGENT
		function setUserAgent(window, userAgent) {
			if (window.navigator.userAgent != userAgent) {
				var userAgentProp = { get: function () { return userAgent; } };
				try {
					Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
				} catch (e) {
					window.navigator = Object.create(navigator, {
						userAgent: userAgentProp
					});
				}
			}
		}
		setUserAgent(document.getElementById('payForm').contentWindow, 'Mozilla/5.0 (Linux; U; Android 2.3.5; ru-ru; Philips W632 Build/GRJ90) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1');
		document.getElementById('payForm').src = "https://pay.unlimco.io/8411242e-d846-45cf-ad4b-9e6b15583bbf/mobile";
	}

	if (document.getElementById("lkPayForm")) {

		// IFRAME FORM USERAGENT
		function setUserAgent(window, userAgent) {
			if (window.navigator.userAgent != userAgent) {
				var userAgentProp = { get: function () { return userAgent; } };
				try {
					Object.defineProperty(window.navigator, 'userAgent', userAgentProp);
				} catch (e) {
					window.navigator = Object.create(navigator, {
						userAgent: userAgentProp
					});
				}
			}
		}
		setUserAgent(document.getElementById('lkPayForm').contentWindow, 'Mozilla/5.0 (Linux; U; Android 2.3.5; ru-ru; Philips W632 Build/GRJ90) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1');
		document.getElementById('lkPayForm').src = "https://pay.unlimco.io/8411242e-d846-45cf-ad4b-9e6b15583bbf";
	}


});