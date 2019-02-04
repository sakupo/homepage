import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import BlogHome from '../components/BlogHome'
import BlogPost from '../components/BlogPost'
import Develop from '../components/Develop'
import Test from '../components/Test'
import About from '../components/About'
import Works from '../components/Works'
import PlayRoom from '../components/PlayRoom'
import * as firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

let router =  new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '*',
      name: 'v-main',
      component: Main
    },
    {
      path: '/signup',
      name: 'v-signup',
      component: Signup,
      meta: { requiresAuth: true }
    },
    {
      path: '/signin',
      name: 'v-signin',
      component: Signin
    },
    {
      path: '/blog/',
      name: 'blog-home',
      component: BlogHome,
      props: true
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost
    },
    {
      path: '/develop',
      name: 'v-develop',
      component: Develop,
      meta: { requiresAuth: true }
    },
    {
      path: '/test',
      name: 'v-test',
      component: Test,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'v-about',
      component: About,
      props: true
    },
    {
      path: '/works',
      name: 'v-works',
      component: Works,
    },
    {
      path: '/playroom',
      name: 'v-playroom',
      component: PlayRoom,
      meta: { requiresAuth: true }
    }
  ]
})

// router.beforeEach()を追加
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('signin')
  else if (!requiresAuth && currentUser) next()
  else next()
})


export default router
