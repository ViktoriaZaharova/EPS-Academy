$('[name="phone"]').mask('+7 (999) 999-99-99');

$(".twentytwenty-box").twentytwenty({
    default_offset_pct: 0.5, // How much of the before image is visible when the page loads
    // orientation: 'vertical', // Orientation of the before and after images ('horizontal' or 'vertical')
    // before_label: 'January 2017', // Set a custom before label
    // after_label: 'March 2017', // Set a custom after label
    no_overlay: true, //Do not show the overlay with before and after
    move_slider_on_hover: false, // Move slider on mouse hover?
    move_with_handle_only: false, // Allow a user to swipe anywhere on the image to control slider movement. 
    click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
});

$('.partners-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

function updatePartnersBorders() {
    $('.partners-slider .slide')
        .removeClass('first-visible last-visible');

    $('.partners-slider .slick-active')
        .first()
        .addClass('first-visible');

    $('.partners-slider .slick-active')
        .last()
        .addClass('last-visible');
}

$('.partners-slider').on('init afterChange', function () {
    updatePartnersBorders();
});

updatePartnersBorders();


Fancybox.bind("[data-fancybox]", {});

$('.certificates-slider').on('init reInit afterChange', function (event, slick, currentSlide) {

    let i = (currentSlide ? currentSlide : 0) + 1;

    $('.certificates-counter .current').text(
        (i < 10 ? '0' : '') + i
    );

    $('.certificates-counter .total').text(
        (slick.slideCount < 10 ? '0' : '') + slick.slideCount
    );

});

$('.certificates-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    centerMode: false,

    prevArrow: $('.certificates-prev'),
    nextArrow: $('.certificates-next'),

    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});