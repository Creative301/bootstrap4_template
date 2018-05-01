// Magnific-popup Video Active Code
if ($.fn.magnificPopup) {
  $('.video_btn').magnificPopup({
      disableOn: 0,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: true,
      fixedContentPos: false
  });
}

$('a[href="#"]').click(function ($) {
  $.preventDefault()
});














