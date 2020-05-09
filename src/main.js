import Vue from 'vue';
import VueMeta from 'vue-meta';
import VueClipboard from 'vue-clipboard2';
import * as vClickOutside from 'v-click-outside-x';
import { Vue as VueIntegration } from '@sentry/integrations';
import * as Sentry from '@sentry/browser';
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

Sentry.init({
  dsn: 'https://69c3e63fff53471faddbc91e38a70bfd@o390129.ingest.sentry.io/5231070',
  integrations: [new VueIntegration({ Vue, attachProps: true })],
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
