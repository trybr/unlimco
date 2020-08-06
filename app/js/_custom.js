document.addEventListener("DOMContentLoaded", function(event) { 
	var slider = document.getElementById('slider');

	noUiSlider.create(slider, {
		start: 1000,
		connect: [true, false],
		range: {
			min: 0,
			max: 5000
		}
	});

	slider.noUiSlider.on('update', function () {
		let sliderValue = slider.noUiSlider.get(),
			proceedUs = document.getElementById("proceedUs").innerHTML.replace(/\s/g, ''),
			proceedBank = document.getElementById("proceedBank").innerHTML.replace(/\s/g, '');

		const sliderTurnOver = document.getElementById("sliderTurnover");

		sliderTurnOver.innerHTML = Math.round(sliderValue);

	});
});