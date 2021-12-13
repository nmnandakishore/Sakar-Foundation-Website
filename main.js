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

window.onscroll = function () {
	toggleSticky();
};

var headerElem = document.getElementById("header");
var sticky = headerElem.offsetTop + headerElem.offsetHeight;
var stickyTop = headerElem.offsetTop;
var pageContentElem;
function toggleSticky() {
	if (
		window.pageYOffset >= sticky &&
		!headerElem.classList.contains("sticky")
	) {
		headerElem.classList.add("sticky");
		headerElem.classList.add("animate__fadeInDown");
	} else if (
		window.pageYOffset < stickyTop &&
		headerElem.classList.contains("sticky")
	) {
		headerElem.classList.remove("animate__fadeInDown");
		headerElem.classList.remove("sticky");
	}
}
