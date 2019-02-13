<template lang="pug">
  #signin
    h2 Sign in
      input(type="text" placeholder="email" v-model="email")
      input(type="password" placeholder="Password" v-model="password")
      button(@click="signIn") Signin
</template>

<script lang="ts">
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'v-signin',
  data: function () {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(res => {
        res.user.getIdToken().then(token => {
          localStorage.setItem('jwt', token)
        })
        this.$router.push('/develop')
      }, err => {
        alert(err.message)
      })
    }
  }
}
</script>

<style scoped lang="sass">
#signin
  min-height: 100vh
  padding-top: 100px 
  
h1, h2 
  font-weight: normal

ul 
  list-style-type: none
  padding: 0

li 
  display: inline-block
  margin: 0 10px

a 
  color: #42b983

.signin 
  margin-top: 20px
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-items: center

input 
  margin: 10px 0
  padding: 10px

button 
  margin: 10px 0
  padding: 10px
</style>