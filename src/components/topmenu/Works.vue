
<template lang="pug">
#worksmain
  .titlelink
    router-link(to='/works/')
      h1 {{ page_title }}
    h2 My works.
  .content(v-if="display")
    h1 Gallery
    .Grid
      h2
        router-link(to="/works/mdrenderer") MdRenderer
  


</template>

<script lang="ts">
  export default {
    name: 'v-works',
    components: {
    },
    props: ["val"],
    data() {
      var tmp: boolean = true
      if (this.val) tmp = false
      return {
        page_title: 'Works',
        display: tmp
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="sass">
#worksmain
  text-align: center
  min-height: 100vh
  
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
.Grid
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
  grid-gap: 10px
  grid-auto-rows: minmax(100px, auto)
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
      color: #fff
    &:hover
      color: #191970
</style>
