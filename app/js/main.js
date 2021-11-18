const selectHandler = () => {
    const sel = document.querySelectorAll('.select__wrapper');
    if (sel.length > 0) {


        document.body.addEventListener('click', (e) => {
            if (e.target.closest('.select__wrapper')) {
                const selectWrapper = e.target.closest('.select__wrapper');
                const select = selectWrapper.querySelector('.select__element');
                const selectCurrent = selectWrapper.querySelector('.select__current-text');
                sel.forEach(item => {
                    if (item != e.target.closest('.select__wrapper')) {
                        item.classList.remove('active');
                    }

                });
                selectWrapper.classList.toggle('active');

                if (e.target.closest('.select__item')) {
                    const selectItem = e.target.closest('.select__item');
                    select.value = selectItem.innerHTML;
                    selectCurrent.innerHTML = selectItem.innerHTML;
                }
            }
            else {
                sel.forEach(item => {
                    item.classList.remove('active');
                });
            }
        });

        sel.forEach(item => {
            const selectCurrent = item.querySelector('.select__current-text');
            const selected = item.querySelector('.selected');

            if (selected) {
                selectCurrent.innerHTML = selected.innerHTML;
            }
        });


    }


}

const burgerHandler = () => {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');
    const city = document.querySelector('.header__city');
    if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            nav.classList.toggle('active');
            city.classList.toggle('active');
            if (burger.classList.contains('active')) {
                scrollShowHide('hide');
            }
            else {
                scrollShowHide('show');
            }


        });
    }
    document.body.addEventListener('click', (e) => {
        if (!e.target.closest('.header__burger') && !e.target.closest('.header__nav') && !e.target.closest('.header__city') && burger.classList.contains('active')) {
            burger.classList.remove('active');
            nav.classList.remove('active');
            city.classList.remove('active');
            scrollShowHide('show');
        }
    });
}
const dropdownMobile = () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.header__dropdown-open-mobile')) {
            const mobileDropBtn = e.target.closest('.header__dropdown-open-mobile');
            const navItem = e.target.closest('.header__nav-item_with-child');

            navItem.classList.toggle('active');

        };
    });
}

const menuFix = () => {
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    if (main) {
        main.style.marginTop = header.offsetHeight + 'px';
        let flag = 0;
        document.addEventListener('scroll', () => {
            if (window.innerWidth <= 960) {
                if (flag < pageYOffset && pageYOffset >= header.offsetHeight) {
                    flag = pageYOffset;
                    header.classList.remove('fixed');
                    return 'bottom';
                }
                else {
                    flag = pageYOffset;
                    header.classList.add('fixed');
                    return 'top';
                }
            }
        });

        window.addEventListener('resize', () => {
            main.style.marginTop = header.offsetHeight + 'px';
        });
    }
}

const scrollShowHide = (param) => {
    const body = document.body;
    const header = document.querySelector('.header');
    if (param == 'hide') {
        body.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
        header.style.paddingRight = window.innerWidth - document.body.clientWidth + 'px';
        body.classList.add('hidescroll');
    }
    else if (param == 'show') {
        body.style.paddingRight = 0 + 'px';
        header.style.paddingRight = 0 + 'px';
        body.classList.remove('hidescroll');
    }

}

const stickyMain = () => {
    const sticky = document.querySelector('.main-cat__caption');


    if (sticky) {
        if (window.innerWidth > 768) {
            const header = document.querySelector('.header');
            sticky.style.top = header.offsetHeight + 'px';



            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    sticky.style.top = header.offsetHeight + 'px';
                }
                else {
                    sticky.style.top = '0px';
                }
            });
        }
    }
}
/*change-city*/

const changeCityDesc = () => {
    let cityBtn = document.querySelector('.header__city-desc-current');
    let cityPopup = document.querySelector('.header__city-desc-popup');
    let popupBtn = document.querySelector('.header__city-desc-btn');

    if (cityBtn) {
        cityBtn.addEventListener('click', () => {
            cityPopup.classList.toggle('active');
        });
        popupBtn.addEventListener('click', () => {
            cityPopup.classList.remove('active');
        });
    }
}
/*sliders*/

const catalogSlider = () => {
    const swiperCatalog = new Swiper('.kitchen-small__slider_js', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    const swiperCatalogBig = new Swiper('.kitchen-big__slider_js', {
        loop: true,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    /*detail page*/
    const swiperDetailKitchenThumb = new Swiper('.kitchen-detail__thumbs', {
        direction: 'horizontal',
        slidesPerView: 5,
        freeMode: true,
        slideToClickedSlide: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            320: {
                direction: 'horizontal',

            },
            1441: {
                direction: 'vertical',
            }
        }
    });

    const swiperDetailKitchen = new Swiper('.kitchen-detail__slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: swiperDetailKitchenThumb
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            dynamicBullets: true,
            dynamicMainBullets: 4
        },
    });

    const thumbNav = document.querySelector('.kitchen-detail__thumb-next-icon');
    if (thumbNav) {

        thumbNav.addEventListener('click', () => {
            if (!swiperDetailKitchen.isEnd) {
                swiperDetailKitchen.slideTo(swiperDetailKitchen.activeIndex + 1, 1000, false)
            }

        });

    }
    if (window.innerWidth <= 960) {
        const swiperMaterials = new Swiper('.materials__slider-wrapper', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            navigation: {
                nextEl: '.materials__next-js',
                prevEl: '.materials__prev-js',
            },
        });
    }

    const swiperDetailMore = new Swiper('.detail-more-js', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.detail-next-js',
            prevEl: '.detail-prev-js',
        },
        breakpoints: {
            320: {
                spaceBetween: 20,

            },
            961: {
                spaceBetween: 30,

            },
            1441: {
                spaceBetween: 60,
            }
        }
    });

    const swiperProduction = new Swiper('.production-slider-js', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: '.production-slider__next',
        },
        breakpoints: {
            320: {
                spaceBetween: 20,

            },
            415: {
                spaceBetween: 25,

            },
            961: {
                spaceBetween: 35,

            },
            1441: {
                spaceBetween: 45,
            }
        }
    });

    const swiperDelivery = new Swiper('.workflow-step4__slider-js', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.workflow-step4__slider-next',
        },
        breakpoints: {
            320: {
                spaceBetween: 8,

            },
            769: {
                spaceBetween: 35,

            },
            1441: {
                spaceBetween: 18,
            }
        }
    });

    const swiperRewiews = new Swiper('.reviews__slider-js', {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}


/*popup handler*/

const popupOpen = (type) => {
    const popupOpen = document.querySelectorAll('.popup-open');
    const popupWrappers = document.querySelectorAll('.popup__wrapper');

    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.popup-open')) {
            console.log('popup')
            const popup = e.target.closest('.popup-open').getAttribute('data-target');

            if (popup == 'img') {
                const wrapper = document.querySelector('.media-inner')
                const img = e.target.getAttribute('data-src');
                const container = document.querySelector('.popup__wrapper[data-target="img"]');
                wrapper.innerHTML = `<img src="${img}" class='popup__media'>`
                container.classList.add('active');
                scrollShowHide('hide');
            }
            else if (popup == 'video') {
                e.preventDefault();
                const wrapper = document.querySelector('.video-inner')
                const video = e.target.closest('.popup-open').getAttribute('href');
                const container = document.querySelector('.popup__wrapper[data-target="video"]');
                wrapper.innerHTML = `<video  controls="controls" disablePictureInPicture autoplay=""  controlslist="nodownload" src="${video}" class='popup__media'></video>`;
                container.classList.add('active');
                scrollShowHide('hide');

            }
            else {
                popupWrappers.forEach(item => {
                    if (item.getAttribute('data-target') == popup) {
                        item.classList.add('active');
                        scrollShowHide('hide');
                    }
                });
            }

        }
    });
}

const popupClose = () => {
    const popupWrappers = document.querySelectorAll('.popup__wrapper');
    const wrapperVideo = document.querySelector('.video-inner');
    const wrapperImg = document.querySelector('.media-inner');

    popupWrappers.forEach(item => {
        item.addEventListener('click', (e) => {
            if (!e.target.closest('.popup-js') || e.target.closest('.close-js')) {
                e.target.closest('.popup__wrapper').classList.remove('active');
                scrollShowHide('show');
                wrapperVideo.innerHTML = '';
                wrapperImg.innerHTML = '';
            }
        });
    });

}


/*mask*/
function phoneMask(e) {
    let val = e.target.value.replace(/\D/g, '')

    if (val) {
        if (val[0] === '7' || val[0] === '8') {
            val = val.slice(1)
        }

        val = val.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/)
        val = '+7' + (val[2] ? ' (' + val[1] + ') ' + val[2] : val[1] ? val[1] : '') + (val[3] ? '-' + val[3] : '') + (val[4] ? '-' + val[4] : '')
    }

    e.target.value = val
}

function inputTelHandler() {
    const tel = document.querySelectorAll('input[type="tel"]');
    if (tel.length > 0) {
        tel.forEach(item => {
            item.addEventListener('input', phoneMask)
        });
    }
}

/*!mask*/


/*horisontal scroll test*/

const horScroll = () => {

    const scrollBlock = document.querySelector('.scroll-block');
    const scrollInner = document.querySelector('.scroll-content');


    if (scrollBlock && window.innerWidth > 960 && window.innerWidth < scrollInner.scrollWidth) {


        const scrollWrapper = document.querySelector('.scroll-wrapper');
        const header = document.querySelector('.header').offsetHeight;

        scrollInner.style.height = document.documentElement.offsetHeight - header + 'px';
        scrollInner.style.top = header + 'px';

        const scrollWrapperHeight = scrollWrapper.scrollWidth - document.documentElement.offsetWidth + scrollInner.offsetHeight + header;
        scrollBlock.style.height = scrollWrapperHeight + 'px';

        window.addEventListener('scroll', scrollHandler, false);

        let flag = true;

        function scrollHandler(e) {

            if (scrollInner.getBoundingClientRect().top == header && scrollBlock.getBoundingClientRect().top < 0) {

                scrollWrapper.style.transform = 'translate(' + (scrollBlock.getBoundingClientRect().top) + 'px, 0)';
                flag = true;
            }
            else if (scrollInner.getBoundingClientRect().top > header && flag) {

                scrollWrapper.style.transform = 'translate(0px, 0)';

                flag = false;
            }
            else if (scrollInner.getBoundingClientRect().top < header && flag) {

                scrollWrapper.style.transform = 'translate(' + (-(scrollWrapper.scrollWidth - scrollWrapper.offsetWidth)) + 'px, 0)';
                flag = false;
            }

        }
    }
    else if (scrollBlock && scrollInner.scrollWidth <= window.innerWidth) {
        // scrollBlock.style.width = scrollInner.scrollWidth + 'px';
        // scrollBlock.style.overflow = 'hidden';
    }

}

/*kitchen-detail fixed*/

const fixKitchenInfo = () => {
    const fixedBlock = document.querySelector('.fixed-js');
    const fixedBtn = document.querySelector('.fixed-btn-js');

    if (window.innerWidth < 961 && window.innerWidth > 800 && fixedBlock) {
        const footer = document.querySelector('.advantages');
        document.addEventListener('scroll', () => {

            if (footer.getBoundingClientRect().top - window.innerHeight < 0) {
                fixedBlock.style.bottom = -fixedBlock.offsetHeight + 'px';
            }
            else {
                fixedBlock.style.bottom = '0px';
            }

        })
    }
    else if (window.innerWidth <= 800 && fixedBtn) {

        const footer = document.querySelector('.advantages');
        document.addEventListener('scroll', () => {


            if (footer.getBoundingClientRect().top - window.innerHeight < 0) {
                fixedBtn.style.bottom = -fixedBtn.offsetHeight + 'px';
            }
            else {
                fixedBtn.style.bottom = '0px';
            }
        });
    }
}

const productionAnimate = () => {
    const animateBlock = document.querySelector('.production-animate-js');
    let flag = true;
    if (animateBlock) {
        document.addEventListener('scroll', () => {
            if (flag) {
                let bottom = animateBlock.getBoundingClientRect().bottom - window.innerHeight;
                if (bottom < 0) {
                    animateBlock.classList.add('active');
                    flag = false;
                }
            }
        })
    }
}

/*svg animate*/

const svgAnimate = () => {
    const svg = document.querySelectorAll('.svg-anim');
    if (svg.length > 0) {

        svg.forEach((item, i) => {
            item.style.strokeDasharray = item.getTotalLength();
            item.style.strokeDashoffset = item.getTotalLength();



            document.addEventListener('scroll', () => {
                let bottom = item.getBoundingClientRect().bottom - window.innerHeight + 50;
                if (bottom < 0 && window.getComputedStyle(item).strokeDashoffset != '0px') {
                    item.style.transition = 'stroke-dashoffset 1.5s ease-out';
                    item.style.strokeDashoffset = 0;
                }
            })
        });

    }
}
document.addEventListener('DOMContentLoaded', () => {
    selectHandler();
    burgerHandler();
    dropdownMobile();
    menuFix();
    stickyMain();
    catalogSlider();
    changeCityDesc();
    popupOpen();
    popupClose();
    inputTelHandler();
    horScroll();
    fixKitchenInfo();
    productionAnimate();
    svgAnimate();

});


const test = (yourUrl) => {
    console.log('test')
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

var json_obj = JSON.parse(test('https://happykitchen.ru/kitchens-json.json'));
console.log("this is the author name: " + json_obj.goods[0].brand);