
<template lang="pug">
#playroommain
  .titlelink
    router-link(to='/playroom/')
      h1 {{ page_title }}

</template>

<script lang="ts">
  export default {
    name: 'v-playroom',
    data() {
      return {
        page_title: 'Play Room',
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="sass">
#playroommain
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