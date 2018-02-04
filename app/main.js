// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueHelmet from 'vue-helmet';
import App from './containers/App';
import router from './router';


Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueHelmet);
Vue.config.productionTip = process.env.NODE_ENV === 'development';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});