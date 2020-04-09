
<template lang="pug">
#playroommain
  .titlelink
    router-link(to='/gallery')
      h1 {{ page_title }}
      h6 じゅんびチュウ...

</template>

<script lang="ts">
  export default {
    name: 'v-gallery',
    data() {
      return {
        page_title: 'Gallery',
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
  animation: fadeIn 2s ease 0s 1 normal
  -webkit-animation: fadeIn 2s ease 0s 1 normal
@keyframes fadeIn 
  0%
    opacity: 0
  100%
    opacity: 1
@-webkit-keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
  
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
