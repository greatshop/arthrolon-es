$(document).ready(function () {

    var scrollTop = localStorage.getItem('offsetTop');
    $(window).scrollTop(scrollTop);
    localStorage.setItem('offsetTop', 0);
    $('select').on('change', function () {
        var offsetTop = $(this).offset();
        offsetTop = offsetTop.top - 100;
        localStorage.setItem('offsetTop', offsetTop);
        location.href = '/?country_code=' + $(this).val();
    });


    $('.main-slider').bxSlider({
        controls: false,
        auto: true,
        pause: 12000,
        autoHover: true
    });


    /* modal */
    $('.header-call').on('click', function (event) {
        event.preventDefault();
        $(".phone-btn").addClass("show-modal");
    });
    $('.close-modal,.popup-close').on('click', function (event) {
        event.preventDefault();
        $(".popup-callback").fadeOut(300);
        $(".popup-phone").fadeOut(300);
    });

    $('.popup-mouseleave .close-modal,.popup-mouseleave .popup-close').on('click', function (event) {
        event.preventDefault();
        $('.popup-mouseleave').addClass('hide');
    });


});
