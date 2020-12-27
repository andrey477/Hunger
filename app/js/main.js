import animations from './modules/animations.js';
import plugins from './modules/plugins.js';
import tabs from './modules/tabs.js';
import burger from './modules/burger.js';
import forms from './modules/forms.js';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    animations();
    plugins();
    burger();
    tabs('.cafe-content__tabs', '.cafe-content__tabs-link', '.cafe-content__tabs-tab', 'tab_active', 'tab_hide');
    forms('.table__form');
    forms('.contact__form');
})


