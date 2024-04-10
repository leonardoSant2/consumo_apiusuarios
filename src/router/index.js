import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import UsersView from '../views/UsersView.vue'
import axios from 'axios'

function adminAuth(to, from, next) {
  if (localStorage.getItem('token') != undefined) {
    var req = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
      }
    }
    axios.post("http://localhost:8686/validate", {}, req).then(res => {
      console.log(res);
      next();
    }).catch(err => {
      console.log(err.response);
      next("/login");
    next();
    });
  } else {
    next("/login")
  }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/admin/users',
    name: 'Users',
    component: UsersView,
    beforeEnter: adminAuth
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
