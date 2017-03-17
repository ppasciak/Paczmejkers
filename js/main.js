$(document).ready(function(){

/*-----BURGER ICON-----*/
$('.burg').on('click', function() {
	$('.bar').toggleClass('animate');
  $('nav ul').toggleClass('visible');
});

/*-----CLOSE MENU AFTER CLICK-----*/
$('nav a').on('click',function(){
  $('.bar').toggleClass('animate');
  $('nav ul').toggleClass('visible');
});
/*-----SHOW SCROLL BUTTON----*/
$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
		$('.scroll').fadeIn();
	} else {
	  $('.scroll').fadeOut();
	}
});

/*-----SCROLL TO TOP BUTTON-----*/
$('.scroll').on('click', function(e) {
  e.preventDefault();
	$('html, body').animate({scrollTop : 0}, 500);
});

/*-----MENU SCROLL-----*/
$('a').click(function(){
  $('body').animate( {
    scrollTop: $( $(this).attr('href') ).offset().top + 'px'
  }, 450)
});
});
