$(document).ready(function(){

	// services
	var servicesSwiper = new Swiper ('.swiper-services', {
		slidesPerView: 3,
		spaceBetween: 30,
		centeredSlides: false,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-serv-next',
			prevEl: '.swiper-button-serv-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			550: {
			slidesPerView: 1,
			spaceBetween: 0
			},
			// when window width is >= 480px
			767: {
			slidesPerView: 1,
			spaceBetween: 0
			},
			// when window width is >= 640px
			768: {
			slidesPerView: 2,
			spaceBetween: 15
			},
			1139: {
				slidesPerView: 2,
				spaceBetween: 15
			}
		}
	});

	// specialists
	var specialistsSwiper = new Swiper ('.swiper-specialists', {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween: 30,
		centeredSlides: false,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-spec-next',
			prevEl: '.swiper-button-spec-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
			slidesPerView: 1,
			spaceBetween: 0
			},
			// when window width is >= 480px
			600: {
			slidesPerView: 1,
			spaceBetween: 0
			},
			767: {
				slidesPerView: 2,
				spaceBetween: 15
			},
			768: {
			slidesPerView: 2,
			spaceBetween: 15
			},
			1139: {
				slidesPerView: 2,
				spaceBetween: 15
			}
		}
	});

	// reviews
	var reviewsSwiper = new Swiper ('.swiper-reviews', {
		slidesPerView: 1,
		spaceBetween: 30,
		centeredSlides: false,
		loop: false,
		navigation: {
			nextEl: '.swiper-button-rev-next',
			prevEl: '.swiper-button-rev-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true
			},
			// when window width is >= 480px
			480: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true
			},
			// when window width is >= 640px
			767: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true
			},
			1139: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true
			}
		}
	});

	// banner
	var bannerSwiper = new Swiper ('.swiper-banner', {
		autoplay: {
			delay: 5000,
		},
		speed: 800,
		effect: 'fade',
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});


	// SMOOTH SCROLL
	var scroll = new SmoothScroll('a[href*="#"]');


	// scroll menu
	$(document).scroll(function() {
		if ($(window).width() > 1170) {
			var y = $(this).scrollTop();
			if (y > 500) {
				$('.header-top-panel-sticky').addClass('show');
			} else {
				$('.header-top-panel-sticky').removeClass('show');
			}
		}
	});

	$(window).resize(function(){
		if ($(window).width() > 1170) {
			var y = $(this).scrollTop();
			if (y > 500) {
				// $('.main-menu-sticky').fadeIn();
				$('.main-menu-sticky').addClass('show');
			} else {
				// $('.main-menu-sticky').hide();
				$('.main-menu-sticky').removeClass('show');
			}
		}
	});


	// masked
	jQuery(function($){
		$(".phone-field").mask("+7 (999) 99 99 999");
	});

	// to top
	if ($('#back-to-top').length) {
		var scrollTrigger = 5500, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#back-to-top').addClass('show');
				} else {
					$('#back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}

	// to top
	if ($('#request-call-btn').length) {
		var scrollRequestCall = 500, // px
			requestCall = function () {
				var scrollTopRequestCall = $(window).scrollTop();
				if (scrollTopRequestCall > scrollRequestCall) {
					$('#request-call-btn').addClass('show');
				} else {
					$('#request-call-btn').removeClass('show');
				}
			};
			requestCall();
		$(window).on('scroll', function () {
			requestCall();
		});
		$('#request-call-btn').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTopRequestCall: 0
			}, 700);
		});
	}

	// expand review
	$('.item-expand-link').on('click', function (e) {
		$itemParentMain = $(this).closest('.review-item');
		$itemParent = $(this).closest('.review-info');
		if ($(this).closest('.review-info').hasClass("expand")) {
			$itemParent.removeClass("expand");
			$itemParentMain.removeClass("expand");
			$itemParent.find('.item-expand-link').text("Развернуть отзыв");
		} else {
			$itemParentMain.addClass("expand");
			$itemParent.addClass("expand");
			$itemParent.find('.item-expand-link').text("Свернуть отзыв");
		}
	});

	$(".fancybox").fancybox();
	
	$('.popup-close').on('click', function (e) {
		parent.jQuery.fancybox.getInstance().close();
	});

	$('.contacts-item').on('click', function (e) {
		$(".contacts-item").removeClass("active");
		$(this).addClass("active");

		$(".contacts-map-item").removeClass("active");

		$adressItemId = $(this).attr('id');

		$("#" + $adressItemId + "-map").addClass("active");
	});

	$('.menu-btn').on('click', function (e) {
		if ($("body").hasClass("pushy-open-left")) {
			$("body").removeClass("pushy-open-left");
		} else {
			$("body").addClass("pushy-open-left");
		}
	});

	$('.site-overlay').on('click', function (e) {
		if ($("body").hasClass("pushy-open-left")) {
			$("body").removeClass("pushy-open-left");
		} else {
			$("body").addClass("pushy-open-left");
		}
	});

	// vacancy
	$('.vacancy-request-btn').on('click', function (e) {
		var vacancyName = $(this).closest('.card').find('.card-title').text().trim();
		$(".vacancy-name-field").val(vacancyName);
	});


});