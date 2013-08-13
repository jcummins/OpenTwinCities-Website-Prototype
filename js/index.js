/* Global Vars */
var screenWidth = 0;
var screenHeight = 0;
	
document.onreadystatechange = function() {
	if (document.readyState == 'interactive') {
		init();
	}
}

/* Init */
function init() {
	
	/* Event Listeners */
	window.onresize = function() {
		windowResize();
	}

	windowResize();
}

/* Methods */
function windowResize() {
	
	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;
	
	debug(screenWidth + 'x' + screenHeight);
}



/* SELECTORS */
function byID(str) {
	return document.getElementById(str);
}

/* DEBUG */
function debug(str) {
	var debugPanel = document.getElementById("debug");
	
	debugPanel.innerHTML = '<p>' + str + '</p>';
}