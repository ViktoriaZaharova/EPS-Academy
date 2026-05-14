$('[name="phone"]').mask('+7 (999) 999-99-99');

$(".twentytwenty-box").twentytwenty({
    default_offset_pct: 0.5, // How much of the before image is visible when the page loads
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

$('.works-slider').on('init', function () {

    $('.twentytwenty-container').twentytwenty({
        default_offset_pct: 0.5, // How much of the before image is visible when the page loads
        no_overlay: true, //Do not show the overlay with before and after
        move_slider_on_hover: false, // Move slider on mouse hover?
        move_with_handle_only: false, // Allow a user to swipe anywhere on the image to control slider movement. 
        click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
    });

});

$('.works-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
    draggable: false,
    swipe: false,
    touchMove: false,
    prevArrow: `
        <button class="slick-arrow slick-prev">
            <svg class="svg-icon">
                <use xlink:href="img/sprite.svg#arrow-left"></use>
            </svg>
        </button>
    `,

    nextArrow: `
        <button class="slick-arrow slick-next">
            <svg class="svg-icon">
                <use xlink:href="img/sprite.svg#arrow-right"></use>
            </svg>
        </button>
    `,

    appendArrows: $('.works-slider-arrows'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                appendArrows: '.works-slider',
                arrows: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                appendArrows: '.works-slider',
                arrows: true
            }
        }
    ]
});

$('.btn-burger').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('click');
    $('.overlay-menu').fadeToggle();
    $('header .nav-menu').fadeToggle();
    $('header').toggleClass('open-menu');
});

$('.overlay-menu').on('click', function(){
    $('.btn-burger').removeClass('click');
    $('.overlay-menu').fadeOut();
    $('header .nav-menu').fadeOut();
    $('header').removeClass('open-menu');
});


if ($(window).width() <= 992) {

  $('.steps-work-card__head').on('click', function () {

    const parent = $(this).closest('.steps-work-card');

    $('.steps-work-card').not(parent).removeClass('active');

    parent.toggleClass('active');

  });

}