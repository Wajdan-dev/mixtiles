$(document).ready(function () {
    $('.slick-slider .slick-track').slick({
        slidesToShow: 4,  // Default for large screens
        slidesToScroll: 1,
        infinite: true,
        autoplay: false,   // Enable auto sliding
        autoplaySpeed: 3000,  // Set auto-slide speed to 3 seconds
        dots: false,
        arrows: true,  // Show arrows on larger screens
        prevArrow: '.slick-prev',
        nextArrow: '.slick-next',

        responsive: [
            {
                breakpoint: 1024,  // For medium screens
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true  // Ensure arrows are visible on medium screens
                }
            },
            {
                breakpoint: 768,  // For small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,  // Hide arrows on mobile screens
                }
            }
        ]
    });
});
