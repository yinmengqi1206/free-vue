import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/myflex',
    name: 'myflex',
    component: () => import('../views/MyFlex.vue'),
    children: [
      {
        path: 'myflex-child',
        name: 'myflex-child',
        component: () => import('../views/MyFlexChild.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'home',
    redirect: "goods",
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/goods',
        name: 'goods',
        component: () => import('../views/GoodsView.vue'),
        meta: {
          isShow: true,
          title: "商品列表"
        }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/UserView.vue'),
        meta: {
          isShow: true,
          title: "用户列表"
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

/* router.beforeEach((to, from, next) => {
  const token: string | null = localStorage.getItem("token")
  if (!token && to.path != "/login") {
    next("/login")
  } else {
    next()
  }
}) */
export default router
