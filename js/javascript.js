// tak odwołujemy się do elementu za pomocą js
// var arrow = document.getElementById("arrow"); 
// tak odwołujemy się do elementu za pomocą framerworka jQuery 

var $arrow = $("#arrow a");

var $off = $("main").offset().top;
$("#arrow").on("click", function() {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 1000)
})