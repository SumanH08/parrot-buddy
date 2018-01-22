// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Tabs, Tab} from 'vue-tabs-component';
import Toasted from 'vue-toasted';
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
var Options = {
  position: 'bottom-center',
  duration: 3000
}
Vue.use(Toasted, Options);

import './assets/tabs.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
