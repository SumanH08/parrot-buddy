import Vue from 'vue'
import Router from 'vue-router'
import Master from '@/components/Master'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Master',
      component: Master
    }
  ]
})
