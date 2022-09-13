(function ($) {
    'use strict';

    var jabu_window = $(window);

    // *******************************
    // :: 1.0 Preloader Active Code
    // *******************************

    jabu_window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // *******************************
    // :: 2.0 ClassyNav Active Code
    // *******************************

    if ($.fn.classyNav) {
        $('#jabuNav').classyNav();
    }

    // ***********************************
    // :: 3.0 Welcome Carousel Active Code
    // ***********************************

    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.single-hero');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: false,
            autoplay: false,
        })
      
        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }



    // ***********************************
    // :: 6.0 ImagesLoaded Active Code
    // ***********************************
    if ($.fn.imagesLoaded) {
        $('.jabu-portfolio').imagesLoaded(function () {
            // init Isotope
            var $grid = $('.jabu-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    // ***********************************
    // :: 7.0 Slick Slider Active Code
    // ***********************************
    if ($.fn.slick) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            slide: 'div',
            autoplay: true,
            centerMode: true,
            centerPadding: '30px',
            mobileFirst: true,
            prevArrow: '<i class="fa fa-angle-left"></i>',
            nextArrow: '<i class="fa fa-angle-right"></i>'
        });
    }



    // ***********************************
    // :: 9.0 Tooltip Active Code
    // ***********************************
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // ***********************************
    // :: 10.0 WOW Active Code
    // ***********************************
    if (jabu_window.width() > 767) {
        new WOW().init();
    }

    // ***********************************
    // :: 11.0 Jarallax Active Code
    // ***********************************
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // ***********************************
    // :: 12.0 Scrollup Active Code
    // ***********************************
    if ($.fn.scrollUp) {
        jabu_window.scrollUp({
            scrollSpeed: 2000,
            scrollText: '<i class="fa fa-angle-up"</i>'
        });
    }

    // ***********************************
    // :: 13.0 Sticky Active Code
    // ***********************************
    jabu_window.on('scroll', function () {
        if (jabu_window.scrollTop() > 0) {
            $('.main-header-area').addClass('sticky');
        } else {
            $('.main-header-area').removeClass('sticky');
        }
    });

    // ***********************************
    // :: 14.0 Prevent Default 'a' Click
    // ***********************************
    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

})(jQuery);