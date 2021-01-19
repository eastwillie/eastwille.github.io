import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ErrorService from './libs/error-service';

// Global Variables & Functions
import store from './store';
import consts from './libs/constants';
import methods from './libs/methods';
import apis from './apis/index';

// i18n
import i18n from './i18n/index';

import ElementUIComponents from './libs/elementUI';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// Setting Vue configuration setting values
Vue.config.productionTip = false;
Vue.config.errorHandler = (error) => ErrorService.onError(error);

// Handle error outside Vue
ErrorService.initHandler();

Vue.prototype.$consts = consts;
Vue.prototype.$apis = apis;

ElementUIComponents.forEach((item) => {
  Vue.use(item);
});
Vue.use(methods);

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
