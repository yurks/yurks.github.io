$( document ).ready(function( $ ) {
// bxslider //
$(".bxslider").bxSlider({
	auto: true,
	pager:false,
});  


// Testimonial //
$(".Testimonial").bxSlider({
	auto: true,
	pager:false,
});  


// OurMission //
$("#OurMission").bxSlider({
	auto: true,
	pager:true,
	controls: false,
});  

// bx-example1 //
$('.bx-example1').bxSlider({
  slideWidth: 255,
    minSlides: 2,
    maxSlides: 3,
    moveSlides: 2,
    slideMargin: 10
});

// bx-thumbnail //
$('.bx-thumbnail').bxSlider({
	auto: true,
	controls:false,
	pagerCustom: '#bx-thumbnail-pager',
});


	  
});