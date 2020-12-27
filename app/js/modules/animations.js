const animations = () => {
    function turnTheWheel(selectorWheel) {
        const wheel = document.querySelector(selectorWheel);
        wheel.addEventListener('click', () => {
            wheel.style.transition = 'transform 3s';
            wheel.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                wheel.style.transition = 'transform 0s';
                wheel.style.transform = 'rotate(0deg)';
            }, 3000);
        });
        wheel.click();
    }

    function animateElem(selector, activeClass) {
        const items = document.querySelectorAll(selector);

        if (items.length > 0) {
            window.addEventListener('scroll', animOnScroll);
            function animOnScroll() {
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    const itemHeight = item.offsetHeight;
                    const itemOffsetTop = offset(item).top;
                    const itemStart = 4;


                    let animatePoint = window.innerHeight - itemHeight / itemStart;

                    if (itemHeight > window.innerHeight) {
                        animatePoint = window.innerHeight - window.innerHeight / itemStart;
                    }

                    if (pageYOffset > itemOffsetTop - animatePoint) {
                        item.classList.add(activeClass);
                    }

                }
            }
            animOnScroll();
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }

    function parallax(bgSelector) {
        const bg = document.querySelector(bgSelector);
        if (bg) {
            let positionY = getComputedStyle(bg).backgroundPositionY.replace('%', '');
            let scrollPos = 0;
            window.addEventListener('scroll', () => {
                const bgHeight = bg.offsetHeight;
                const bgOffsetTop = offset(bg).top;
                const start = 4;
                const st = pageYOffset;

                let animatePoint = window.innerHeight - bgHeight / start;

                if (bgHeight > window.innerHeight) {
                    animatePoint = window.innerHeight - window.innerHeight / start;
                }

                if ((pageYOffset > bgOffsetTop - animatePoint) && (pageYOffset < bgOffsetTop + bgHeight + animatePoint)) {
                    if (positionY > 0 && st > scrollPos) {
                        positionY = positionY - 1;
                        bg.style.backgroundPositionY = positionY + '%';
                    }
                    if (positionY < 100 && st < scrollPos) {
                        positionY = positionY + 1;
                        bg.style.backgroundPositionY = positionY + '%';
                    }
                }
                scrollPos = st;
            });
        }

    }

    window.onload = function () {
        turnTheWheel('.menu__list-logo');
    }

    animateElem('.about__description-title', 'about__description-title_active');
    animateElem('.about__description-text', 'about__description-text_active');
    animateElem('.about__image', 'about__image_active');
    animateElem('.our-team__text', 'our-team__text_active');
    animateElem('.line', 'line_active');
    animateElem('.content__image', 'content__image_active');
    animateElem('.content__desription-title', 'content__desription-title_active');
    animateElem('.content__desription-text', 'content__desription-text_active');
    animateElem('.table__content-form','table__content-form_active');
    animateElem('.table__content-image','table__content-image_active');
    animateElem('.image-weddings','image-weddings_active');
    animateElem('.image-corp','image-corp_active');
};

export default animations;