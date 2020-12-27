const burger = () => {
    $(".menu__burger").on('click', function() {
        $(".menu__burger").toggleClass('menu__burger_active');
        $(".menu").toggleClass('menu_active');
    });
};

export default burger;
