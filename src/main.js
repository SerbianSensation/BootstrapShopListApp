// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store';

//import bootstrap and uiv
import 'bootstrap3/dist/css/bootstrap.min.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import * as uiv from 'uiv';

Vue.use(uiv);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

