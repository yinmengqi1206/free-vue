import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'official',
    redirect: "company",
    component: () => import('../views/official/index.vue'),
    children: [
      {
        path: 'company',
        name: 'company',
        component: () => import('../views/official/company.vue')
      },
      {
        path: 'esports',
        name: 'esports',
        component: () => import('../views/official/esports.vue')
      },
      {
        path: 'adSolutions',
        name: 'adSolutions',
        component: () => import('../views/official/adSolutions.vue')
      },
      {
        path: 'technology',
        name: 'technology',
        component: () => import('../views/official/technology.vue')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import('../views/official/news.vue')
      },
      {
        path: 'shop',
        name: 'shop',
        component: () => import('../views/official/shop.vue')
      },
      {
        path: 'app',
        name: 'app',
        component: () => import('../views/official/app.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/home',
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
