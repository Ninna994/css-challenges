$('.bar-container').on('click', function () {
    $('.bar-container').toggleClass('active');
    $('.bar-1').removeClass('no-animation');
    $('.bar-2').removeClass('no-animation');
    $('.bar-3').removeClass('no-animation');
});

// challenge 7

$('.bar').on('click', function () {
    $('.notifications').toggleClass('notification-move');
    // console.log('evo me');
    $('.menu').toggleClass('menu-active');

})

$('.search-icon').on('click', function () {
    $('.search-input').toggleClass('show-search');
})

// challenge 13 

$('.plus').on('click', function () {
    $('.detail-item').toggleClass('active')
})

$('.x-button').on('click', function () {
    $('.detail-item').toggleClass('active')
})

// challenge 25

$('.marker i').on('click', function () {
    $('.card').toggleClass('active')
})

$('.dismiss').on('click', function () {
    $('.card').toggleClass('active')
})