////WilsonBlock////
function wilsonblock(windowId, classOn, classOff) {
	//Check classes
    var classOn  = classOn  || "opacityOn";
    var classOff = classOff || "opacityOff";    
	
	//Find all slides. Labeled as div tags
	this.window = document.getElementById(windowId);
	this.slides = $(this.window).find("div");	
	this.currentSlide = 0;

	//Clear All Slides
	this.clearSlides = function() {
		$(this.slides).each(function() {
			if(this.display != "none") {
				$(this).addClass(classOff);
				$(this).removeClass(classOn);
			}
		})		
	}
	
	//Show current slide.
	this.showSlide = function() {
		$(this.slides[this.currentSlide]).removeClass(classOff);
		$(this.slides[this.currentSlide]).addClass(classOn);
	}
	
    //Next + Previous//
	this.nextSlide=function() {
		if(this.currentSlide == ($(this.slides).length-1)) {
			return true;
		} else {
			this.currentSlide++;
			this.clearSlides();
			this.showSlide();
		}
	}
	this.prevSlide=function() {
		if(this.currentSlide == 0) {
			return true;
		} else {
			this.currentSlide--;
			this.clearSlides();
			this.showSlide();
		}
	}
				
    //These tags will do change slide				
	this.nextButton=$(this.window).find(".wilson-next");
	$(this.nextButton).on("click", $.proxy( this.nextSlide, this));
		
	this.prevButton  = $(this.window).find(".wilson-pre");
	$(this.prevButton).on("click", $.proxy( this.prevSlide, this));
			
	//Set the Slides		
	this.clearSlides();
	this.showSlide();	
}



$(document).ready(function() {
	//Load CSS
	var cssUrl = "wilsonblock.css";
    var wilsonCSS = document.createElement("link");
	console.log(location);
	wilsonCSS.href = cssUrl;
	wilsonCSS.rel = "stylesheet";
	document.head.appendChild(wilsonCSS);	
})