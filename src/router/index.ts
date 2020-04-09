import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Signup from '../components/auth/Signup'
import Signin from '../components/auth/Signin'
import BlogHome from '../components/blog/BlogHome'
import BlogPost from '../components/blog/BlogPost'
import Develop from '../components/private/Develop'
import Test from '../components/private/Test'
import BlogTest from '../components/private/BlogTest'
import About from '../components/topmenu/About'
import Works from '../components/topmenu/Works'
import Gallery from '../components/topmenu/Gallery'
import Markdown from '../components/works/MarkdownRenderer'
import Dashboard from '../components/dashboard/Dashboard'
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
      path: '/blogtest',
      name: 'blog-test',
      component: BlogTest,
      meta: { requiresAuth: true }
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
      path: '/gallery',
      name: 'v-gallery',
      component: Gallery,
    },
    {
      path: '/works/mdrenderer',
      name: 'v-markdown',
      component: Markdown,
    },
    {
      path: '/dashboard',
      name: 'v-dashboard',
      component: Dashboard,
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
