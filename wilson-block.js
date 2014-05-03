$(document).ready(function() {
	
	var slides = $(".wilson-window").find("div");	
	console.log(slides.length);
	var currentSlide = 0;
	console.log(slides);
	
	function clearSlides() {
		$(slides).each(function() {
			if(this.display != "none") {
				$(this).addClass("wohmanOff");
				$(this).removeClass("wohmanOn");
			}
		})
	}
	
	function showSlide(newSlide) {
		$(newSlide).removeClass("wohmanOff");
		$(newSlide).addClass("wohmanOn");
	}
	
	function nextSlide() {
		currentSlide++;
		showSlide(slides[currentSlide]);
	}
	
	function prevSlide() {
		currentSlide--;
		showSlide(slides[currentSlide]);
	}
	
	$("#wilson-next").click(function() {
		if(currentSlide == (slides.length-1)) {
			return true;
		} else {
			clearSlides();
			nextSlide();
		}
	})
	
	$("#wilson-pre").click(function() {
		if(currentSlide == 0) {
			return true;
		} else {
			clearSlides();
			prevSlide();
		}
	})
	
	clearSlides();
	showSlide(slides[0]);
});