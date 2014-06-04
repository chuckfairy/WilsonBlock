/**************WilsonBlock**************/
function WilsonBlock(windowId, classOn, classOff) {
	"use strict";
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
		this.clearSlides();
		$(this.slides[this.currentSlide]).removeClass(classOff);
		$(this.slides[this.currentSlide]).addClass(classOn);
		this.buttonSetup();
	}
	
	//Next + Previous slide switcher//
	this.nextSlide=function() {
		if(this.currentSlide !== (this.slides.length-1)) {
			this.currentSlide++;
			this.showSlide();
		}
	}
	this.prevSlide=function() {
		if(this.currentSlide !== 0) {
			this.currentSlide--;
			this.showSlide();
		}
	}
	
	//Initialize the wilson
	this.init();
}

//Set up the slides and Buttons
WilsonBlock.prototype.init = function() {
	this.buttonSetup();
	this.buttonEnable();
	this.clearSlides();
	this.setTheme("wilsonblock");
	this.showSlide();
	return this;
}

//Sets up buttons display
WilsonBlock.prototype.buttonSetup = function() {
	//Display Buttons
	$(this.nextButton).css("display", "block");
	$(this.prevButton).css("display", "block");
	
	//Hide Non-usable
	if(this.currentSlide == (this.slides.length-1)) {$(this.nextButton).css("display", "none");}	
	if(this.currentSlide == 0) {$(this.prevButton).css("display", "none");}		
}

//Create and Enable Buttons
WilsonBlock.prototype.buttonEnable = function() {
	this.prevButton  = $(this.window).find(".wilson-pre");
	this.nextButton  = $(this.window).find(".wilson-next");
	$(this.prevButton).on("click", $.proxy(this.prevSlide, this));
	$(this.nextButton).on("click", $.proxy(this.nextSlide, this));
}


/**************WilsonBlock API functions**************/

//Set slide to specific slide number
WilsonBlock.prototype.setSlide = function(slideNumber) {
	if(parseInt(slideNumber) < this.slides.length) {
		this.currentSlide = parseInt(slideNumber)-1;
		this.showSlide();
	}
}

//autoSlide flips through the slides and returns 1 after last
WilsonBlock.prototype.autoSlide = function(timeOut) {
	var e = this; //Using e because this isn't set in setInterval
	setInterval(function() {
		if(e.currentSlide == (e.slides.length-1)) {e.setSlide(1);}
		else {e.nextSlide();}
	} , parseInt(timeOut))
}

/**************Set Theme**************/
WilsonBlock.prototype.setTheme = function(theme) {
	var cssUrl = undefined;
	$("script").each(function() {
		var scriptLocation = this.src.split("wilsonblock/").pop();
		if(scriptLocation == "wilsonblock.js") {
			var serverLocation = this.src.split("wilsonblock/")[0];
			cssUrl = serverLocation + "wilsonblock/themes/" + theme + ".css";
		}
	});
	
	//Load and Append Css
	if(typeof(cssUrl) !== "undefined") {
		var wilsonCSS = document.createElement("link");
		wilsonCSS.href = cssUrl;
		wilsonCSS.rel = "stylesheet";
		document.head.appendChild(wilsonCSS);
	}	
}

