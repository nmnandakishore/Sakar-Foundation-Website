// import Typed from "typed.js";

// var tickerElem = document.querySelector("#news-ticker");

var options = {
	backDelay: 3500,
	loop: true,
	strings: [
		"<a href=''>High school students raised fund for homeless</a>",
		"<a href=''>Indian children provided with hearing aids</a>",
	],
	typeSpeed: 40,
};

var typed = new Typed("#news-ticker", options);
