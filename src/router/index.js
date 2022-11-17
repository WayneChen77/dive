import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: "Wayne's Dive" },
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
    path: '/UserCarts',
    name: 'UserCarts',

    component: () => import('../views/UserCarts.vue'),
  },
  {
    path: '/about',
    name: 'AboutView',

    component: () => import('../views/Front/AboutView.vue'),
  },
  {
    path: '/Contact',
    name: 'ContactView',

    component: () => import('../views/Front/ContactView.vue'),
  },
  {
    path: '/Order',
    name: 'OrderView',
    component: () => import('../views/Front/OrderView.vue'),
    children: [
      {
        path: 'CheckOut/:id',
        name: 'CheckOut',
        component: () => import('../views/Front/CheckOut.vue'),
      },
      {
        path: 'PayView/:id',
        name: 'PayView',
        component: () => import('../views/Front/PayView.vue'),
      },
    ],
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
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
