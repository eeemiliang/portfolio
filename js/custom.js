$(document).ready(function(){
	// header color change
	$(window).on("scroll",function(){
		var scrollDistance = $(window).scrollTop();
		var $header = $(".js-header");
		if(scrollDistance > 300){
			$header.addClass("header--color");
		}
		else{
			$header.removeClass("header--color");
		}
	});

});