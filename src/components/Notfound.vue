
<template lang="pug">
#notfound
  .titlelink
    h1 {{ page_title }}
  router-link(to='/')
    h2 お探しのページは見つかりませんでした

</template>

<script lang="ts">
  export default {
    name: 'v-notfound',
    data() {
      return {
        page_title: '404 Not found',
      }
    },
    methods: {
    }
  }
</script>

<style scoped lang="sass">
#notfound
  text-align: center
  min-height: 100vh
  
h1, h2
  font-weight: normal
.titlelink

ul
  list-style-type: none
  padding: 0
li
  list-style-type: none
  padding: 0
</style>