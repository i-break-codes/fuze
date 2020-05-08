import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueClipboard from 'vue-clipboard2';
import * as vClickOutside from 'v-click-outside-x';
import App from './App';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

//! Initialize Plugins
Vue.use(vClickOutside);

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

Vue.use(VueClipboard);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
