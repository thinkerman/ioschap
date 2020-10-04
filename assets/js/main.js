

$(document).ready(function () {
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes();
    $('#current-time p').text(time)
    $('.shoutouts-container').slick({
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.top-arrow'),
        nextArrow: $('.bottom-arrow')
    });
});