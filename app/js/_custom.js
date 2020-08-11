document.addEventListener("DOMContentLoaded", function(event) { 

	// PRICE SLIDER
	const slider = document.getElementById('slider');

	if (slider) {
		noUiSlider.create(slider, {
			start: 1000000,
			connect: [true, false],
			range: {
				min: 0,
				max: 2000000
			}
		});
	
		slider.noUiSlider.on('update', function () {
			let sliderValue = slider.noUiSlider.get(),
				proceedUs = document.getElementById("proceedUs").innerHTML.replace(/\s/g, ''),
				proceedBank = document.getElementById("proceedBank").innerHTML.replace(/\s/g, '');
	
			const sliderTurnOver = document.getElementById("sliderTurnover");
	
			sliderTurnOver.innerHTML = Math.round(sliderValue).toLocaleString();
	
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
});