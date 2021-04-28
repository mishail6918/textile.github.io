//Product slider
$('.product-slider-wrapper').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 5,
    draggable: false,
    focusOnSelect: true,
    arrows: true,
    dots: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                centerPadding: '0px',
                focusOnSelect: false,
                draggable: true
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                arrows: false,
                centerPadding: '30px'
            }
        },
        {
            breakpoint: 541,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '80px',
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: '30px',
                arrows: false
            }
        },
        {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
                centerPadding: '30px',
                arrows: false,
                dots:true
            }
        }
    ]
});

//Categories sliders
$('.categories-slider').slick({
    slidesToShow: 1,
    rows: 2,
    draggable: false,
});