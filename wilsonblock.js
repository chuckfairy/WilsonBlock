//Url to the 
function thisRoot (filename) {
	var scripts = document.documentElement.getElementsByTagName ('script');
	for (var i=0; i<scripts.length; i++)
		if (scripts[i].src && scripts[i].src.substr (scripts[i].src.length - filename.length) == filename)
			return scripts[i].src.substr (0, scripts[i].src.length - filename.length);
	return window.location.href.substr(0, window.location.href.length - window.location.pathname.length + 1)
}

var cssUrl = "wilsonblock.css";
console.log(thisRoot("wilsonblock.js"));

function wilsonblock(windowId, classOn, classOff) {
    //Check classes
    var wilsonWindow = document.getElementById(windowId);
    classOn = classOn || "opacityOn";
    classOff = classOff || "opacityOff";
    
    //Load CSS
    var wilsonCSS = document.createElement("link");
	console.log(location);
	wilsonCSS.href = cssUrl;
	wilsonCSS.rel = "stylesheet";
	document.body.appendChild(wilsonCSS);
	
	//Find all slides. Labeled as div tags
	var slides = $("#" + windowId).find("div");	
	var currentSlide = 0;
	console.log(slides);
	
    //Clear All slides
	function clearSlides() {
		$(slides).each(function() {
			if(this.display != "none") {
				$(this).addClass(classOff);
				$(this).removeClass(classOn);
			}
		})
	}
	
    //Show
	function showSlide(newSlide) {
		$(newSlide).removeClass(classOff);
		$(newSlide).addClass(classOn);
		window.height = $(newSlide).height();
		var height = $(newSlide).height();
		console.log(height);
	}
	
    //Next + Previous
	function nextSlide() {
		currentSlide++;
		showSlide(slides[currentSlide]);
	}
	
	function prevSlide() {
		currentSlide--;
		showSlide(slides[currentSlide]);
	}
	
    //These tags will do change slide
	$(wilsonWindow).find(".wilson-next").click(function() {
		if(currentSlide == (slides.length-1)) {
			return true;
		} else {
			clearSlides();
			nextSlide();
		}
	});
	
	$(wilsonWindow).find(".wilson-pre").click(function() {
        console.log(this);
		if(currentSlide == 0) {
			return true;
		} else {
			clearSlides();
			prevSlide();
		}
	});
	clearSlides();
	showSlide(slides[0]);
}




