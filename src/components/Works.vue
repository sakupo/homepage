
<template lang="pug">
#worksmain
  .titlelink
    router-link(to='/works/')
      h1 {{ page_title }}
    h2 My works.

</template>

<script lang="ts">
  export default {
    name: 'v-works',
    data() {
      return {
        page_title: 'Works',
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
ul
  list-style-type: none
  padding: 0
li
  list-style-type: none
  padding: 0
</style>