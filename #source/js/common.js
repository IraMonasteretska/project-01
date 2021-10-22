$(document).ready(function () {

    var swiper = new Swiper(".mySwiper", {
        direction: "vertical",
        speed: 1400,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // -------------
    let windowWidth = $(window).width(),
        containerWidth = $('.container').width(),
        sideWidth = (windowWidth - containerWidth) / 2;

    $('.swiper-pagination').css('right', sideWidth + 'px');
    $('.welcomescreen__socials').css('left', sideWidth + 'px');

    $(window).resize(function () {
        let windowWidth = $(window).width(),
            containerWidth = $('.container').width(),
            sideWidth = (windowWidth - containerWidth) / 2;

        $('.swiper-pagination').css('right', sideWidth + 'px');
        $('.welcomescreen__socials').css('left', sideWidth + 'px');
    });

    // testimonials slider
    var swiper = new Swiper(".mySwiper-t", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        speed: 1200,
        autoplay: {
            delay: 5000,
        },
    });

    $(".mySwiper-t").hover(function () {
        (this).swiper.autoplay.stop();
    }, function () {
        (this).swiper.autoplay.start();
    });






    // header scroll

    $(window).scroll(function () {
        if (($(window).scrollTop()) > 20) {
            $('header.header').addClass('small');
        } else {
            $('header.header').removeClass('small');
        }
    });

    // phone menu
    $('.hamburger-slim').click(function () {
        $(this).toggleClass('active');
        $('header.header nav').toggleClass('show');
    });

    // scroll to top

    var btn = $('#totop');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    // show more
    $('.postblock .showmore').click(function (e) {
        e.preventDefault();
        $(this).siblings('.descr').toggleClass('hauto');
        $(this).toggleClass('rotatearrow');
    });





});