
<template lang="pug">
#blog-post
  .feature
</template>

<script lang="ts">
  export default {
    name: 'blog-post',
    data() {
      return {
        post: {}
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
#blog-post
  padding-left: 1rem 
  text-align: left
  min-height: 100vh
.feature
  display: flex
  justify-content: flex-end //右寄せ
  align-items: center //垂直方向
figure
  margin: 0 auto
  width: 100px
  height: 100px
img
  width: 100%
  height: 100%
  object-fit: cover
  
h1, h2, h3, h4
  margin-right: auto
  font-weight: normal
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