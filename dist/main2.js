$(document).ready(function () {

    const subNav = $('.sub-menu_mob');

    $('#openSubMenu').click(function (e) {
        e.preventDefault();
        subNav.addClass('open');
    });

    $('#triggerClose').click(function (e) {
        e.preventDefault();
        subNav.removeClass('open');
    });


let sliderMenu;
    function slidersInit() {
            if ($(window).width() <= 1180) {
                if (!sliderMenu) {
                    sliderMenu = new Swiper('#sliderMenu', {
                        slidesPerView: 1,
                        loop: true,
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },
                    });
                }
            } else {
                if (sliderMenu) {
                    sliderMenu.destroy(true, true);
                    sliderMenu = null;
                }
            }
        }
    slidersInit();

    $(window).on('resize', function(){
        slidersInit();
    });
});

