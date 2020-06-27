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
});


/*show and hide Navigation on scroll */
$(function () {

    //on page load
    showHideNav();

    $(window).scroll(function(){

        //window scroll
        showHideNav();
    });

    //show hide nav on page load
    function showHideNav(){
        if(
            $(window).scrollTop()>200){
            //show white navigation bar  
            $("nav").addClass("white-nav-top");
        }

        else{

            //hide navigation bar
            $("nav").removeClass("white-nav-top");

        }
    }
});