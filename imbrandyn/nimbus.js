$(function() {
    var img = $("#bike"),
        width = img.get(0).width,
        screenWidth = $(window).width(),
        duration = 9000;

    function animateBike() {
        img.css("left", -width).animate({
            "left": screenWidth
        }, duration, animateBike);
    }

    animateBike();
});