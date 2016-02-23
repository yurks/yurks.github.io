jQuery(document).ready(function($) {
								
  

  // Mobile Menu

$(".menu_box").click(function () {
            if (!$(this).hasClass("active")) {
                $(".MobileMenu").slideDown().addClass("menu_hidden");
                $(this).addClass("active");
            }
            else {
                $(".MobileMenu").slideUp("normal",function(){
                   $(this).removeAttr("style").removeClass("menu_hidden");
                });
                $(this).removeClass("active");
            }
        });

  // Search
  // =======================

$(".icon-search").click(function () {
            if ($(".search_bg").css("display") == "none") {
                $(".search_bg").slideDown();
                $(this).addClass("active");
            }
            else {
                $(".search_bg").slideUp();
                $(this).removeClass("active");
            }
        });
var s="search...";
	$("#dnn_dnnSEARCH_txtSearch").val(s).click(function(){
	var ss=$(this).val();if(ss==s)$(this).val("") })
	.blur(function(){
	var ss=$(this).val();if(ss=="")$(this).val(s) });

});
  // Mobile View
  // =======================

$('head').append('<meta name="viewport" content="width=device-width,minimum-scale=1.0, maximum-scale=2.0"/>');





// Dropdown
$('.dropdown-toggle').dropdown();

$('.fa-user').hover(function () {
  $(this).addClass('magictime puffIn');
});

// Portfolio
jQuery(function($){
	$(window).load(function() {

			/*main function*/
			function wpexPortfolioIsotope() {
				var $container = $('.portfolio-content');
				$container.imagesLoaded(function(){
					$container.isotope({
						itemSelector: '.portfolio-item'
					});
				});
			} wpexPortfolioIsotope();
			
			/*filter*/
			$('.filter a').click(function(){
			  var selector = $(this).attr('data-filter');
				$('.portfolio-content').isotope({ filter: selector });
				$(this).parents('ul').find('a').removeClass('active');
				$(this).addClass('active');
			  return false;
			});
			
			/*resize*/
			var isIE8 = $.browser.msie && +$.browser.version === 8;
			if (isIE8) {
				document.body.onresize = function () {
					wpexPortfolioIsotope();
				};
			} else {
				$(window).resize(function () {
					wpexPortfolioIsotope();
				});
			}
			
			// Orientation change
			window.addEventListener("orientationchange", function() {
				wpexPortfolioIsotope();
			});
		
	});
});


