import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import * as Pages from '../components/pages';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Pages.Home,
  }, {
    path: '/shoppingCart',
    name: 'ShoppingCart',
    component: Pages.ShoppingCart,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
