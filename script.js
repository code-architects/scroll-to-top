 const button = document.querySelector(".scrolltopbtn");
window.onscroll = () => {
	if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		button.style.display = "block";
	} else {
		button.style.display = "none";
	}
}
		    
function scrolltotop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}