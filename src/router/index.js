import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DiveBoard from '../views/Front/DiveBoard.vue';

const routes = [
  {
    path: '/',
    name: 'DiveBoard',
    component: DiveBoard,
    meta: { title: "Wayne's Dive" },
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeView,
        meta: { title: "Wayne's Dive" },
      },
      {
        path: 'userProducts',
        name: 'UserProducts',
        component: () => import('../views/Front/UserProducts.vue'),
      },
      {
        path: 'userSelect/:id',
        name: 'UserSelect',
        component: () => import('../views/Front/UserSelect.vue'),
      },
      {
        path: 'userCarts',
        name: 'UserCarts',
        component: () => import('../views/Front/UserCarts.vue'),
      },
      {
        path: 'about',
        name: 'AboutView',
        component: () => import('../views/Front/AboutView.vue'),
      },
      {
        path: 'Contact',
        name: 'ContactView',
        component: () => import('../views/Front/ContactView.vue'),
      },
      {
        path: 'Know',
        name: 'Know',
        component: () => import('../views/Front/KnowView.vue'),
      },
      {
        path: 'Order',
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

    component: () => import('../views/Back/DashBoard.vue'),
    children: [
      {
        path: 'adminProduct',
        name: 'adminProduct',
        component: () => import('../views/Back/AdminProduct.vue'),
      },
      {
        path: 'CouponView',
        name: 'CouponView',
        component: () => import('../views/Back/CouponView.vue'),
      },
      {
        path: 'EditCandy',
        name: 'EditCandy',
        component: () => import('../views/Back/EditCandy.vue'),
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
