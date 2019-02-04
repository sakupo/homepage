<template lang="pug">
  #app
    v-header
    router-view
    v-footer
</template>

<script lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'App', 
  components: {
    'v-header': Header,
    'v-footer': Footer,
  },
  watch: {
    '$route' (to, from) {
      // ルートの変更の検知...
      
    }
  }  
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #eee
  background: #222
  //min-height: 100vh

</style>
