import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home', // 名称
    component: () =>
      // webpackChunkName 打包起名，必须这样写！webpack的功能
      import(/* webpackChunkName: 'home-chunk' */ '../views/Home.vue'), // 动态路由。import返回Promise
    // 元数据
    meta: {
      name: 'conanan',
    },
    children: [
      {
        // 这里path必须为空
        path: '',
        // 这里必须写全路径
        redirect: '/home/message',
      },
      {
        // 这里的path不用拼接父route的path，并且不可以已'/'开头！！！
        path: 'message',
        name: 'message',
        component: () => import('../views/HomeMessage.vue'),
      },
      {
        path: 'shops',
        name: 'shops',
        component: () => import('../views/HomeShops.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    // 动态路由，必须完整匹配！如下'/'分割的4个参数一个不能少，也不能多
    path: '/user/:username/id/:id',
    name: 'user',
    component: () => import('../views/User.vue'),
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    // path: '/:pathMatch(.*)*', // 多个*，会将path根据'/'分割转为数组
    component: () => import('../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 动态添加路由
const categoryRoute = {
  path: '/category',
  component: () => import('../views/Category.vue'),
}

// 添加顶级路由对象
router.addRoute(categoryRoute)

// 添加二级路由对象，第一个参数为路由的名称name
router.addRoute('home', {
  path: 'moment',
  component: () => import('../views/HomeMoment.vue'),
})

// 导航守卫beforeEach
let counter = 0
// to: Route对象, 即将跳转到的Route对象
// from: Route对象,
/**
 * 返回值问题:
 *    1.false: 不进行导航
 *    2.undefined或者不写返回值: 进行默认导航
 *    3.字符串: 路径, 跳转到对应的路径中
 *    4.对象: 类似于 router.push({path: "/login", query: ....})
 */
router.beforeEach((to, from) => {
  console.log(`进行了${++counter}路由跳转`)
  // if (to.path.indexOf("/home") !== -1) {
  //   return "/login"
  // }
  if (to.path !== '/login') {
    const token = window.localStorage.getItem('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
