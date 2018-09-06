import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/england',
      name: 'england',
      component: () => import(/* webpackChunkName: "england" */ './views/England.vue')
    },
    {
      path: '/hungary',
      name: 'hungary',
      component: () => import(/* webpackChunkName: "hungary" */ './views/Hungary.vue')
    },
    {
      path: '/rsvp',
      name: 'rsvp',
      component: () => import(/* webpackChunkName: "rsvp" */ './views/RSVP.vue')
    }
  ]
});
