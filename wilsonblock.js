/**************WilsonBlock Div Carousel**************/
function WilsonBlock(windowId, classOn, classOff) {
	"use strict";
	//Check classes 
    var classOn  = classOn  || "opacityOn";
    var classOff = classOff || "opacityOff";  
    
    //Current Themes
    this.themes = []; 
    
	//Find WilsonBlock folder
	var scripts = document.getElementsByTagName("script");
	for(var i=0;i < scripts.length;i++) {
		var scriptLocation = scripts[i].src.split("wilsonblock/").pop();
		if(scriptLocation == "wilsonblock.js") {
			this.serverLocation = scripts[i].src.split("wilsonblock/")[0] + "/wilsonblock/"; 
		}
	};
	
	//jQuery Load
	if(typeof($()) != "undefined" ) {
		var jqueryScript = document.createElement("script");
		jqueryScript.src = this.serverLocation + "_assets/jquery-1.9.1.min.js";
		document.head.appendChild(jqueryScript);
	}
	
	//Find all slides. Labeled as div tags
	this.window = document.getElementById(windowId);
	this.slides = $(this.window).find("div");	
	this.currentSlide = 0;	
	
	//Clear All Slides
	this.clearSlides = function() {
		$(this.slides).each(function() {
			if(this.display != "none") {
				$(this).removeClass(classOn);
				$(this).addClass(classOff);
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
	this.buttonEnable();
	this.buttonSetup();
	this.clearSlides();
	this.setTheme("wilsonbones");
	this.showSlide();
	return this;
}

//Sets up buttons display
WilsonBlock.prototype.buttonSetup = function() {	
	//Hide Non-usable
	$(this.nextButton).css("display", "block");
	$(this.prevButton).css("display", "block");
	
	if(this.currentSlide == (this.slides.length-1)) {
		$(this.nextButton).css("display", "none");
	}	
	if(this.currentSlide == 0) {
		$(this.prevButton).css("display", "none");
	}		
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
	if(parseInt(slideNumber) < (this.slides.length + 1)) {
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

WilsonBlock.prototype.createPointers = function(preText, nextText){
	preText = preText || "<";
	nextText = nextText || ">";
	
	var pre  = document.createElement("span");
	var next = document.createElement("span");
	
	pre.setAttribute("class", "wilson-pre");
	next.setAttribute("class", "wilson-next");
	
	pre.innerHTML = preText;
	next.innerHTML = nextText;
	
	this.window.appendChild(pre);
	this.window.appendChild(next);
	
	this.buttonEnable();
	this.buttonSetup();
}

/**************Set Theme**************/
WilsonBlock.prototype.setTheme = function(theme) {
	//Check if theme is loaded
	if(!inArray(theme, this.themes)) {
		cssUrl = this.serverLocation + "_themes/" + theme + ".css";		
		//Load and Append Css
		if(typeof(cssUrl) !== "undefined") {
			var wilsonCSS = document.createElement("link");
			wilsonCSS.href = cssUrl;
			wilsonCSS.rel = "stylesheet";
			document.head.appendChild(wilsonCSS);
		}
		
		this.themes.push(theme);
	}
	
	$(this.window).addClass(theme);
}

//////Utils///////

function inArray(needle, haystack) {
	if(typeof(haystack) == "undefined") {return false;}
	console.log(haystack);
	for(var i=0; i < haystack.length;i++) {
		console.log(haystack[i]);
		if(haystack[i] == needle) {
			return true;
		}
	}
	return false;
}











