import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/userProducts',
    name: 'userProducts',

    component: () => import('../views/userProducts.vue'),
  },
  {
    path: '/UserSelect/:id',
    name: 'UserSelect',

    component: () => import('../views/UserSelect.vue'),
  },
  {
    path: '/addticket/:id',
    name: 'addticket',

    component: () => import('../views/AddTicket.vue'),
  },
  {
    path: '/candy',
    name: 'CandyView',

    component: () => import('../views/CandyView.vue'),
  },
  {
    path: '/login',
    name: 'login',

    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',

    component: () => import('../views/DashBoard.vue'),
    children: [
      {
        path: 'adminProduct',
        name: 'adminProduct',
        component: () => import('../views/adminProduct.vue'),
      },
      {
        path: 'CouponView',
        name: 'CouponView',
        component: () => import('../views/CouponView.vue'),
      },
      {
        path: 'EditCandy',
        name: 'EditCandy',
        component: () => import('../views/EditCandy.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
