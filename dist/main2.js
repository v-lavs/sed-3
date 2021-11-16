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

    $(window).on('resize', function () {
        slidersInit();
    });

    $(document).on('mouseenter', '.map__icon', function () {
        const activeEl = $(this).attr("class").split(/\s+/).filter(function (item) {
            return item.match('data-')
        })[0];

        if (activeEl) {
            $('.section-map__item').addClass('faded');
            $("[data-marker='" + activeEl + "']").removeClass('faded');
        }
    });

    $(document).on('mouseleave', '.map__icon', function () {
        $('.section-map__item').removeClass('faded');
    });

    $('.section-map__item').hover(function () {
        $('.section-map__item').addClass('faded');
        $(this).removeClass('faded');
        const marker = $(this).data('marker');

        $('.' + marker).addClass('active');
    }, function () {
        $('.section-map__item').removeClass('faded');

        const marker = $(this).data('marker');
        $('.' + marker).removeClass('active');
    });
});


