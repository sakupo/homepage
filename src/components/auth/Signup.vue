<template lang="pug">
  .signup
    h2 Sign up
    input(type="text" placeholder="email" v-model="email")
    input(type="password" placeholder="Password" v-model="password")
    button(@click="signUp") Register
    p Do you have an account
      router-link(to="/signin") sign in now!!
</template>

<script lang="ts">
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'v-signup',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(res => {
        console.log('Create account: ', res.user.email)
        this.$router.push('/signin')
      }).catch(error => {
        console.log(error.message)
      })
    }
  }
}
</script>

<style scoped lang="sass">
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

.signup
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