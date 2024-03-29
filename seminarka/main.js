$(function () {
    var halfscreen = $(window).height() / 2;

    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        var position_ratio = $(this).scrollTop() / halfscreen;
        alpha = Math.floor(position_ratio * 100) / 100;
        $nav.css("background", "rgba(2, 32, 32, " + alpha +")");
    });
});

$(document).ready(function() {
    var left = $(".left");
    var right = $(".right");
    var barndoor = $('.barndoor');
    setTimeout(function() {
        left.css("transform", "translatex(-100%)");
        right.css("transform", "translatex(100%)");
    }, 500);


});