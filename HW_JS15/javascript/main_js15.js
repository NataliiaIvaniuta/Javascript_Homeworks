'use strict';

// //slow scroll to anchor animation
$(document).ready(function(){
    $("a[href*=\\#]").on("click", function(e){
        let anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
        return false;
    });
});

///scroll to top
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('#button').addClass('show');
    } else {
        $('#button').removeClass('show');
    }
});

$('#button').on('click', function() {
    $('html, body').animate({scrollTop:0}, '1000');
});
//hide-show section
$('#toggle').click(function () {
    $(".popularposts").slideToggle("slow");
});
