// Sticky Activate Code (Hide/show Navigation)
var $window = $(window);
$window.on('scroll', function () {
    if ($window.scrollTop() > 48) {
        $('.header-area').addClass('sticky slideInDown');
    } else {
        $('.header-area').removeClass('sticky slideInDown');
    }
});