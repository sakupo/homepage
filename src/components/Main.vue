<template lang="pug">
#main
  .container
    .row
      .col(class="item1")
        router-link(to="/about")
          .item
            img(src="../assets/user.png" width="120px" height="120px")
            h4 About
      .col
        a(href="https://github.com/sakupo")
          .item(class="item2")
            img(src="../assets/GitHub-Mark-120px-plus.png" width="120px" height="120px")
            h4 GitHub
      .col
        a(href="https://twitter.com/_saku3")
          .item(class="item3")
            img(src="../assets/twitterLogo.png" width="120px" height="120px")
            h4 Twitter
    .row
      //
        .col
          router-link(to="/gallery")
            .item(class="item4")
              img(src="../assets/gallery.png" width="120px" height="120px")
              h4 Gallery
      .col
        a(href="https://sakupo.github.io/Diary/")
          .item(class="item5")
            img(src="../assets/diary.png" width="120px" height="120px")
            h4 Diary
      .col
        a(href="https://cpucno.hatenablog.com/archive")
          .item(class="item6")
            img(src="../assets/hatenablog-logo.png" width="120px" height="120px")
            h4 Blog
</template>

<script lang="ts">
export default {
  name: 'v-main',
  components: {
  },
  data () {
    return {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
#main
  text-align: center
  background-color: #fff
  color: #333
  min-height: 100vh
.col
  padding: 60px
  margin: 0 auto

h1, h2
  font-weight: normal
h4
  vertical-align: bottom
ul
  list-style-type: none
  padding: 0
li
  list-style-type: none
  padding: 0
a
  color: #000
  @media screen and (min-width: 768px)
    &:visited
      color: #000
    &:hover
      color: #000
@for $i from 1 through 6
  .item#{$i}
    animation: dropIn#{$i} 2s ease 0s 1 normal
    -webkit-animation: dropIn#{$i} 2s ease 0s 1 normal
  @keyframes dropIn#{$i}
    0%
      opacity: 0
    #{$i}0%
      transform: translate(0, 8vh)
    100%
      opacity: 1
$itemcolor: #899eeb
$shadow-width: 10px
$shadow-width-hover: 2px
.item
  display: inline-block
  width: 160px
  height: 160px
  border-radius: 50%
  text-decoration: none
  text-align: center
  background: white
  box-shadow:0 $shadow-width 0 $shadow-width $itemcolor
  transform: translateY(-$shadow-width)
  transition:0.3s all
  &:hover
    box-shadow:0 $shadow-width-hover 0 0 $itemcolor
    transform: translateY(-$shadow-width-hover)
</style>
