
<template lang="pug">
#blog-post
  .feature(v-if="post.length===1")
    .container(class="w-75 text-dark bg-white")
      .row
        .col-4
          figure(class="figure center") 
            img(class="figure-img" :src="post.imgsrc")
        .col-8(class="text-dark text-left text-justify text-break")
          h1 {{post.title}}
          vue-markdown(class="vue-md" :source="post.source")
    
</template>

<script lang="ts">
  import VueMarkdown from 'vue-markdown'
  export default {
    name: 'blog-post',
    components: {
      VueMarkdown
    },
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
  margin: 0 auto 
  min-height: 100vh
.feature
.container
  min-height: 100vh
figure
  margin: 0 auto
  width: 100px
  height: 100px
img
  width: 100%
  height: 100%
  object-fit: cover
  
h1, h2, h3, h4
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
