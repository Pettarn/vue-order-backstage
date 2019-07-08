import Vue from 'vue'
import Router from 'vue-router'

import addFoods from '../components/page/addFoods.vue'
import setFoods from '../components/page/setFoods.vue'
import entry from '../components/page/entry.vue'
import login from '../components/page/login.vue'
import register from '../components/page/register.vue'
import personManage from '../components/page/personManage.vue'
import homePage from '../components/page/homePage.vue'
import foodsList from '../components/page/foodsList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/manage/'
    },
    {
      path: '/entry/',
      component: entry,
      children: [
        {
          path: '',
          redirect: 'login',
        },
        {
          path: 'login',
          component: login
        },
        {
          path: 'register',
          component: register
        }
      ]
    },
    {
      path: '/manage/',
      component: homePage,
      children: [
        {
          path: '',
          redirect: 'addFoods',
        },
        {
          path: 'addFoods',
          component: addFoods,
        },
        {
          path: 'foodsList',
          component: foodsList,
        },
        {
          path: 'setFoods',
          component: setFoods,
        },
        {
          path: 'personManage',
          component: personManage,
        }
      ]
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
})
