
<template lang="pug">
#bloghomemain
  .titlelink
    router-link(to="/blog")
      h1 {{ page_title }}
  
</template>

<script lang="ts">
  export default {
    name: 'blog-home',
    props: ["val"],
    data() {
      var tmp: number = 10
      if (this.val) tmp = this.val 
      return {
        page_title: 'Blog',
        title: '',
        posts: [],
        blognum: tmp
      }
    },
    watch: {
      '$route' (to, from) {
        // ルートの変更の検知...
        
      }
    },
    methods: {

      }
    }
  
</script>

<style scoped lang="sass">
#bloghomemain
  text-align: center
  min-height: 100vh
  .Grid
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
    grid-gap: 10px
    grid-auto-rows: minmax(100px, auto)
  
figure
  margin: 0 auto
  width: 100px
  height: 100px
img
  width: 100%
  height: 100%
  object-fit: cover
  
h1, h2
  font-weight: normal
.titlelink
  a
    color: #fff
    text-decoration: none
    @media screen and (min-width: 768px)
      &:visited
        color: #fff
      &:hover
        color: #191970
  display: inline-block
ul
  list-style-type: none
  padding: 0
li
  list-style-type: none
  padding: 0
a
  color: #fff 
  @media screen and (min-width: 768px)
    &:visited
      color: none
    &:hover
      color: #191970
</style>
