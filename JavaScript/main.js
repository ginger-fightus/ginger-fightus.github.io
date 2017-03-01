$(function(){


	$(window).scroll(function () {
 	   console.log($(window).scrollTop())
 	   if ($(window).scrollTop() > 280) {
 	     $('#nav_bar').addClass('navbar-fixed');
 	   }
 	   if ($(window).scrollTop() < 281) {
 	     $('#nav_bar').removeClass('navbar-fixed');
 	   }
 	 });

$('.menu-icon').on('click', function(){
		console.log('menu was clicked');
		$('.main-nav').toggleClass('showNav');
		$(this).toggleClass('fa-close');
		$(this).toggleClass('fa-bars');
	});

	$('.main-nav a').on('click', function(){
		$('.main-nav').toggleClass('showNav');
		$('.menu-icon').toggleClass('fa-close');
		$('.menu-icon').toggleClass('fa-bars');
	});

 	 
 	$('nav a').smoothScroll({
 		offest: -70,
 		speed: 1000
 	});

 
});


