'use strict';

let displayActive = () => {
    $('.tabs-title').each(function () {
        if ($(this).hasClass('active')) {
            $($('.tabs-content li')[$('.tabs-title').index(this)]).removeClass('hidden');
        } else {
            $($('.tabs-content li')[$('.tabs-title').index(this)]).addClass('hidden');
        }
    })
}

displayActive();

$('.tabs-title').click(function() {
    $('.tabs-title').removeClass('active');
    $(this).addClass('active');
    displayActive();
});
//can use instead
// let $tabsTitleList = $('.tabs-title');
// let $tabsContentList = $('.tabs-content li');
