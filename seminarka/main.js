$(function () {
    var halfscreen = $(window).height() / 2;

    $(document).scroll(function () {
        var $nav = $(".fixed-top");
        var position_ratio = $(this).scrollTop() / halfscreen;
        alpha = Math.floor(position_ratio * 100) / 100;
        $nav.css("background", "rgba(2, 32, 32, " + alpha +")");
    });
});