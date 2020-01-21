const backToTopButtom = document.querySelector("#btn-back-to-top");

window.addEventListener("scroll",scrollFunc);

function scrollFunc(){
	if(window.pageYOffset>610){
		//show back to top button
		
		backToTopButtom.style.display = "block";
	}
	else{
		//hide back to top button
		backToTopButtom.style.display = "none";
	}
}

/*Animate on Scroll
$(function (){
	new WOW().init();
});*/

$(window).on('load',function (){
	$("#rank1").addClass("animated bounceIn");
})