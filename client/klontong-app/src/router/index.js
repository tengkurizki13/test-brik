import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailProduct from '../views/DetailProduct.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import FromAddProductView from '../views/FromAddProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products/:id',
      name: 'detail',
      component: DetailProduct
    },
    {
      path: '/from-add',
      name: 'from-add',
      component: FromAddProductView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

router.beforeEach((to, from, next) => {
  let authentication = localStorage.getItem('access_token')
  if (!authentication && to.name == 'home') next('login')
  else if (authentication && (to.name == 'login' || to.name == 'register')) next('/')
  else next()
})

export default router
