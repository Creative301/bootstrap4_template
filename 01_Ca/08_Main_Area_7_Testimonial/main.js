(function($) {
  'use strict';
// Slick Active Code
if ($.fn.slick) {
  $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      slide: 'div',
      autoplay: true,
      centerMode: true,
      centerPadding: '30px',
      mobileFirst: true,
      prevArrow: '<i class="fa fa-angle-left"></i>',
      nextArrow: '<i class="fa fa-angle-right"></i>'
  });
}
})(jQuery);