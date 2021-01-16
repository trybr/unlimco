


document.addEventListener("DOMContentLoaded", function(event) {

	let windowPageYOffset = window.pageYOffset;
	
	const conversion = document.getElementById("conversion");

	if (conversion) {
		// COUNT 1
		const convCountOneVal = document.getElementById("conversion-count-1").getAttribute('data-value');
		const convCountOne = new CountUp('conversion-count-1', convCountOneVal, {
			decimalPlaces: 1,
			decimal: ","
		});

		// COUNT 2
		const convCountTwoVal = document.getElementById("conversion-count-2").getAttribute('data-value');
		const convCountTwo = new CountUp('conversion-count-2', convCountTwoVal, {
			decimalPlaces: 1,
			decimal: ","
		});

		// CONVERSION ICON ANIMATION
		const convBoxIcon = document.querySelector('.box-icon'),
			  convArrow1 = document.querySelector('.box-arrow-1'),
			  convArrow2 = document.querySelector('.box-arrow-2'),
			  convComp1 = document.querySelector('.box-component-1'),
			  convComp2 = document.querySelector('.box-component-2'),
			  convComp3 = document.querySelector('.box-component-3');

		// CONVERSION SCROLL
		const conversionOffsetTop = document.getElementById("conversion").offsetTop - 400;

		countsStart(windowPageYOffset, conversionOffsetTop, false);
		window.addEventListener('scroll', function() {
			windowPageYOffset = window.pageYOffset;
			countsStart(windowPageYOffset, conversionOffsetTop ,false);
		});

		function countsStart(windowPageYOffset, conversionOffsetTop) {
			if (windowPageYOffset >= conversionOffsetTop) {
				if($(window).width() >= 1024) {
					convBoxIcon.classList.add('animate__fadeInUp');
					convBoxIcon.addEventListener('animationstart', () => {
						convCountOne.start();
						convCountTwo.start();
						setTimeout(() => {
							convComp1.classList.add('animate__fadeInUp');
						}, 400);
	
						setTimeout(() => {
							convComp2.classList.add('animate__fadeInUp');
							convArrow1.classList.add('animate__fadeInLeft');
						}, 550);
	
						setTimeout(() => {
							convComp3.classList.add('animate__fadeInUp');
							convArrow2.classList.add('animate__fadeInLeft');
						}, 650);
					});
				} else {
					convCountOne.start();
					convCountTwo.start();
				}
			}
		}
		
	}

	//FANCYBOX
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
					targetBtn.innerHTML = '+';
				} else {
					targetClosest.classList.add('active');
					targetBtn.innerHTML = '-';
				}
			}
	
		});
	}

	// masked
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
	// switch(Cookies.get('LANG')){
	// 	case 'ru':
	// 		changeLocaleService.loadLocale("ru"); 
	// 		break;
	// 	case 'en':
	// 		changeLocaleService.loadLocale("en");
	// 		break;
	// 	default:
	// 		break;
	// }

	// ANIMATION 1
	if (document.getElementById("services-block-1")) {
		const serviceItems1 = document.getElementById("services-block-1").querySelectorAll('.service-item'),
			  servicesBlock1OffsetTop = document.getElementById("services-block-1").offsetTop - 200;
			  
		window.addEventListener('scroll', function() {
			if (windowPageYOffset >= servicesBlock1OffsetTop) {
				console.log("scroll 1");
				for (let i = 0; i < serviceItems1.length; i++) {
					let elementLines = serviceItems1[i].querySelector('.icon-lines'),
						elementBg = serviceItems1[i].querySelector('.icon-bg'),
						element = serviceItems1[i].querySelector('.item-icon');
					setTimeout(() => {
						element.classList.add('animate__bounceIn');
						// serviceItems1[i].classList.add('animate__fadeIn');
					}, i * 200);
				}
			}
		});
	}
	

	// ANIMATION 2
	if (document.getElementById("services-block-2")) {
		const serviceItems2 = document.getElementById("services-block-2").querySelectorAll('.service-item'),
			  servicesBlock2OffsetTop = document.getElementById("services-block-2").offsetTop - 200;
			  
		window.addEventListener('scroll', function() {
			if (windowPageYOffset >= servicesBlock2OffsetTop) {
				for (let i = 0; i < serviceItems2.length; i++) {
					let elementLines = serviceItems2[i].querySelector('.icon-lines'),
						elementBg = serviceItems2[i].querySelector('.icon-bg'),
						element = serviceItems2[i].querySelector('.item-icon');
					setTimeout(() => {
						element.classList.add('animate__bounceIn');
						// serviceItems2[i].classList.add('animate__fadeIn');
					}, i * 200);
				}
			}
		});
	}

	// PARALLAX
	if (document.getElementById("headerFigures")) {
		var headerFigures = document.getElementById('headerFigures');
		var	parallaxInstance = new Parallax(headerFigures, {
			relativeInput: true
		});
	}

	if (document.getElementById("headerFiguresNew")) {
		var headerFiguresNew = document.getElementById('headerFiguresNew');
		var	parallaxInstance = new Parallax(headerFiguresNew, {
			relativeInput: true
		});
	}

	// SCROLL ANIMATION
	const services1OffsetTop = document.getElementById("services-block-new-1").offsetTop - 200,
		  services2OffsetTop = document.getElementById("services-block-new-2").offsetTop - 200,
		  serviceItems1New = document.getElementById("services-block-new-1").querySelectorAll('.service-item'),
		  serviceItems2New = document.getElementById("services-block-new-2").querySelectorAll('.service-item'),
		  aboutNew = document.getElementById("about-new").offsetTop - 400,
		  aboutNewItems = document.getElementById("about-new").querySelectorAll('.about-payment-logo');

	
	animationNewStart();

	window.addEventListener('scroll', function() {
		animationNewStart();
	});

	function animationNewStart() {
		if (windowPageYOffset >= services1OffsetTop) {
			serviceItems1Animations();
		}

		if (windowPageYOffset >= services2OffsetTop) {
			serviceItems2Animations();
		}

		if (windowPageYOffset >= aboutNew) {
			aboutNewAnimation();
		}
	}

	function serviceItems1Animations() {
		serviceItems1New.forEach(element => {
			element.classList.add('animate__fadeInUp');
		});
	}

	function serviceItems2Animations() {
		serviceItems2New.forEach(element => {
			element.classList.add('animate__fadeInUp');
		});
		if (document.querySelector('.services-phone-illustration')) {
			document.querySelector('.services-phone-illustration').classList.add('animate__zoomIn');
		}

		if (document.querySelector('.services-phone')) {
			document.querySelector('.services-phone').classList.add('animate__zoomIn');
		}

	}

	function aboutNewAnimation() {
		aboutNewItems.forEach(element => {
			element.classList.add('animate__fadeInUp');
		});
	}


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
		document.getElementById('payForm').src = "https://pay.unlimco.io/8411242e-d846-45cf-ad4b-9e6b15583bbf";
	}
	


});