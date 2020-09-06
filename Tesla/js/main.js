// Работа Slick слайдера
$(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: true
    });

    // Включает меню
    $('.header-btn').on('click', function(){
        $('.menu').addClass('active');
    });

    // Выключает меню
    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active');
    });
});