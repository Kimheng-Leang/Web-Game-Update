import { createRouter, createWebHistory} from 'vue-router'
// import Login from '../components/login.vue'
// import Register from '../components/register.vue'
import Homepage from '../components/Homepage'
import Adminpanel from '../components/Adminpanel'
import viewDetail from '../components/viewDetail'
import Store from '../components/Store'
import NewsPage from '../components/NewsPage'
import userpage from '../components/userpage'
import AboutUs from '../components/aboutus'
import CheckoutPage from '../components/CheckOutPage'
import gamePage from '../components/gamePage'
import editGame from '../components/edit'
import faq from '../components/Faq'
import Auth from '../components/Auth'
import {projectAuth} from '../firebase/config'

//auth guard
const requiredAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  console.log('current user in auth guard : '+ user.displayName);
  if(!user){
    next({name : 'userpage'})
  }
  next();
}

const routes = [
  {
    path:'/',
    name:'Homepage',
    component:Homepage
  },
  {
     path: '/login',
     name: 'Login',
     component: Auth
   },
   //{
  //   path: '/register',
  //   name: 'register',
  //   component: Register
  // },
  {
    path:'/admin',
    name:'Adminpanel',
    component:Adminpanel
  },
  {
    path:'/gameDetail',
    name:'gameDetail',
    component:viewDetail
  },
  {
    path:'/NewsPage',
    name:'newsPage',
    component:NewsPage
  },
  {
    path:'/Store',
    name:'Store',
    component:Store
  },
  {
    path:'/userpage',
    name:'userpage',
    beforeEnter : requiredAuth,
    component:userpage,
  },
  {
    path:'/AboutUS',
    name:'aboutus',
    component:AboutUs
  },
  {
    path:'/Checkout',
    name:'checkout',
    component:CheckoutPage
  },
  {
    path:'/gamePage/:type',
    name:'gamePage',
    component:gamePage
  },
  {
    path:'/admin/editGame/:id',
    name:'/admin/editGame/:id',
    component:editGame
  },
  {
    path:'/admin/editNews/:id',
    name:'/admin/editNews/:id',
    component:editGame
  },
  {
    path:'/Faq',
    name:'Faq',
    component:faq
  }
  
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
