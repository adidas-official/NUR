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
    var loader_bar = $('.progress-bar');
    loader_bar.animate({
        width: "100%"
    }, 2000);

    setTimeout(function() {
        var loader = $('.progressbar-container');
        loader.animate({
            width: "0%"
        },1000);
    }, 2500);

    var barndoor = $('.barndoor');
    setTimeout(function() {
        barndoor.hide(0);
    }, 6000)
});