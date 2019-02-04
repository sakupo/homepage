<template lang="pug">
header(class="header")
  h1
    router-link(to="/")
      img(src="../assets/home.png") 
  nav 
    ul
      li
        router-link(to="/about") About
      li
        router-link(to="/works") Works
      //li
      //  router-link(to="/playroom") PlayRoom      
      li
        router-link(to="/blog") Blog
</template>

<script lang="ts">
export default ({
  name: 'v-header',  
  data () {
    return {
      header: 'Header'
    }
  },
  method: {
  }
    
})
</script>

<style lang="sass" scoped>
.header
  //text-align: left
  background: #000
  color: #fff
  height: 60px
  //position: fixed
  display: flex
  justify-content: flex-end //右寄せ
  align-items: center //垂直方向
img
  height: 60px
  vertical-align: middle
h1, h2
  margin-right: auto //logo左寄せ
  font-weight: normal
ul
  flex-direction: row-reverse
  display: flex
  list-style-type: none
li
  margin-left: 2rem
  margin-right: 1rem
a
  color: #fff
  text-decoration: none
  @media screen and (min-width: 768px)
    &:visited
      color: #fff
    &:hover
      color: #191970

</style>
