
<template lang="pug">
#bloghomemain
  .titlelink
    router-link(to="/blog")
      h1 {{ page_title }}
  .container(class="w-50")
    .blogitem(v-for="i in blognum")
      .row(v-if="i <= noOfPosts" class="bg-white")
        .col-4
          figure(class="figure center") 
            img(class="figure-img" :src="posts[i-1].imgsrc")
        .col-8(class="text-dark text-left text-justify text-break")
          h1 {{posts[i-1].title}}
          p {{posts[i-1].intro}}
  
</template>

<script lang="ts">
  export default {
    name: 'blog-home',
    props: ["val"],
    data() {
      let tmp: number = 10
      if (this.val) tmp = this.val 
      let posts = []
      return {
        page_title: 'Blog',
        title: '',
        posts: posts,
        noOfPosts: posts.length,
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
figure
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
.blogitem
  padding: 20px
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
