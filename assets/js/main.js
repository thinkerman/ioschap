

$(document).ready(function () {
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes();
    $('#current-time p').text(time)

});