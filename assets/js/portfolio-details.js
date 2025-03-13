(function() {
    "use strict";
    /**
     * Initiate portfolio lightbox 
     */
    const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
    });

    /**
     * Portfolio details slider
     */
    new Swiper('.portfolio-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
        delay: 5000,
        disableOnInteraction: false
        },
        pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
        }
    });

})();