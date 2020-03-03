import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  // 前台
  {
    path: '*',
    redirect: '/home',
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    children: [
      {
        name: 'Home',
        path: '/',
        component: () => import('@/views/front/Home'),
      },
      {
        name: 'Createorder',
        path: 'create_order',
        component: () => import('@/views/front/Createorder'),
      },
      {
        name: 'Products',
        path: 'product_list',
        component: () => import('@/views/front/Products'),
      },
      {
        name: 'MoreContent',
        path: 'product_list/:productId',
        component: () => import('@/views/front/MoreContent'),
      },
    ],
  },
  {
    name: 'Signin',
    path: '/signin',
    component: () => import('@/views/front/Signin'),
  },
  // 後台
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: () => import('@/views/admin/Dashboard'),
    children: [
      {
        name: 'ProductsManage',
        path: 'products_manage',
        component: () => import('@/views/admin/ProductsManage'),
        meta: { requiresAuth: true },
      },
      {
        name: 'OrderMessage',
        path: 'order_message',
        component: () => import('@/views/admin/OrderMessage'),
        meta: { requiresAuth: true },
      },
      {
        name: 'CouponMessage',
        path: 'coupon_message',
        component: () => import('@/views/admin/CouponMessage'),
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
