$(document).ready(function(){

var scrollPos = 0;

  $('.burg').on('click', function() {
		$('.bar').toggleClass('animate');
    $('nav ul').toggleClass('visible');
});
$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
		$('.scroll').fadeIn();
	} else {
	  $('.scroll').fadeOut();
	}
});

$('.scroll').on('click', function(e) {
  e.preventDefault();
	$('html, body').animate({scrollTop : 0}, 500);
});
});
