import Vue from 'vue';
import axios from 'axios';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';

// Global Variables & Functions
import store from './store';
import consts from './libs/constants';
import methods from './libs/methods';
import apis from './apis/index';

// i18n
import en from './i18n/en';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$axios.defaults.timeout = 1000 * 5;
Vue.prototype.$consts = consts;
Vue.prototype.$apis = apis;

Vue.use(VueI18n);
Vue.use(methods);

const messages = {
    en,
};

const i18n = new VueI18n({
    locale: 'en',
    messages,
});

new Vue({
    i18n,
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
