import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'home',
    redirect: "goods",
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      {
        path: '/goods',
        name: 'goods',
        component: () => import(/* webpackChunkName: "goods" */ '../views/GoodsView.vue'),
        meta: {
          isShow: true,
          title: "商品列表"
        }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ '../views/UserView.vue'),
        meta: {
          isShow: true,
          title: "用户列表"
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const token: string | null = localStorage.getItem("token")
  if (!token && to.path != "/login") {
    next("/login")
  } else {
    if (to.path == "/login") {
      next("/")
    } else {
      next()
    }
  }
})
export default router
