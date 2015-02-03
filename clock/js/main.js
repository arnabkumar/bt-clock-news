$(document).ready(function(){
	//bootstrap Carousel
	$('#myCarousel').carousel({
    interval: 4000
});

// handles the carousel thumbnails
$('[id^=carousel-selector-]').click( function(){
  var id_selector = $(this).attr("id");
  var id = id_selector.substr(id_selector.length -1);
  id = parseInt(id);
  $('#myCarousel').carousel(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $(this).addClass('selected');
});

// when the carousel slides, auto update
$('#myCarousel').on('slid', function (e) {
  var id = $('.item.active').data('slide-number');
  id = parseInt(id);
  $('[id^=carousel-selector-]').removeClass('selected');
  $('[id=carousel-selector-'+id+']').addClass('selected');
});

});



/*===========================================================*/
/*	Preloader 
/*===========================================================*/	

//<![CDATA[
		$(window).load(function() { // makes sure the whole site is loaded
			$('#status').fadeOut('slow'); // will first fade out the loading animation
			$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			 // deactive overflow hidden for no scroll bar showing
			$("body").removeClass("fix");
			
			
		})
	//]]>

