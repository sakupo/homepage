
<template lang="pug">
#blog-post
  .feature
    .title
      h1(v-if="post.data") {{ post.data.title }}
      h4(v-if="post.data") {{ post.data.author.first_name }} {{ post.data.author.last_name }}
    figure(v-if="post.data")
      img(v-if="post.data.featured_image" :src="post.data.featured_image" alt="")
      img(v-else src="http://via.placeholder.com/250x250" alt="")
  div(v-if="post.data" v-html="post.data.body")
  br
  br
  .transition(v-if="post.meta")
    router-link(v-if="post.meta.previous_post" :to="/blog/ + post.meta.previous_post.slug" class="button") ← {{ post.meta.previous_post.title }}
    router-link(v-if="post.meta.next_post" :to="/blog/ + post.meta.next_post.slug" class="button") {{ post.meta.next_post.title }} →
</template>

<script lang="ts">
  import butter from './../butter.ts'
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
        this.getPost()
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then(res => {
            this.post = res.data
          }).catch(res => {
            console.log(res)
          })
      }
    },
    created() {
      this.getPost()
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