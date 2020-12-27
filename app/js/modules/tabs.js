const tabs = (menuSelector, menuSelectorLink, menuSelectorTab, activeClass, hideClass) => {
    const menu = document.querySelector(menuSelector),
        links = document.querySelectorAll(menuSelectorLink),
        tabContent = document.querySelectorAll(menuSelectorTab);
    function hideTabContent() {
        tabContent.forEach(item => {
            item.classList.add(hideClass);
        });

        tabContent.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        tabContent[i].classList.remove(hideClass);
        tabContent[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    menu.addEventListener('click', (e) => {
        const target = e.target;
        const className = menuSelectorLink.replace(/\./, "");
        if (target.classList.contains(className)) {
            links.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;