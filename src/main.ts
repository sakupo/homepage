import Vue from 'vue'
import App from './router/App.vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import config from 'dotenv'
import router from './router/index.ts'


let app

Vue.config.productionTip = false

const config = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DBURL,
  projectId: process.env.FIREBASE_PID,
  storageBucket: process.env.FIREBASE_SB,
  messagingSenderId: process.env.FIREBASE_MSID
}
firebase.initializeApp(config)


firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
