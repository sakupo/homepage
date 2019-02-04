<template lang="pug">
#footer
  h1 
    .twitter
      a(href="https://twitter.com/_saku3" target="_blank")
        img(src="../assets/twitterLogo.png") 
  .copyright
    h5 ©︎ 2019 saku
</template>

<script lang="ts">
export default ({
  name: 'v-footer',
  data () {
    return {
      footer: 'Footer'
    }
  }
    
})
</script>

<style lang="sass" scoped>
#footer
  background: #000
  color: #fff
  width: 100%
  height: 60px
  display: flex
  align-items: center //垂直方向
  justify-content: flex-end
.twitter
  margin-left: 20px
  img
    vertical-align: middle
    height: 40px
    width: 40px
    &:hover
      opacity: 0.7
.copyright
  margin-right: 10px
      
h1, h2
  font-weight: normal
  margin-right: auto //logo左寄せ 
ul
  list-style-type: none
  padding: 0
li
  list-style-type: none
  padding: 0
    
</style>