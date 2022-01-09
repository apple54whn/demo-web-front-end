import Vue from "vue";
import VueRouter from "vue-router";

// 安装路由插件功能
Vue.use(VueRouter);

// 路由映射配置
const routes = [
  {
    path: "", // 或 "/" 都可以
    name: "Index",
    // 重定向
    redirect: '/home'
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/components/Home"),
    children: [
      {

        path: '', // 或 "/" 都可以
        // 后续也不这样使用，使用 keep-alive 来选择上次选择的路由
        redirect: 'news'
      },
      {
        // 不可以加 /，也不可以加 /home
        path: 'news',
        component: () => import("@/components/HomeNews")
      },
      {
        // 不可以加 /，也不可以加 /home
        path: 'message',
        component: () => import("@/components/HomeMessage")
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/About")
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('@/components/User')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/components/Profile')
  }
];

// 创建路由实例，传入路由映射配置
const router = new VueRouter({
  // history模式
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 导出
export default router;
