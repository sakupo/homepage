<template lang="pug">
#main
  .content
    .about
      v-about(val="show")
    .works
      v-works
    //.playroom
    //  v-playroom
    .blog  
      blog-home(val=3)

</template>

<script lang="ts">
import BlogHome from './BlogHome.vue'
import About from './About.vue'
import Works from './Works.vue'
import PlayRoom from './PlayRoom.vue'


export default {

  name: 'v-main',
  components: {
    'blog-home': BlogHome,
    'v-about': About,
    'v-works': Works,
    'v-playroom': PlayRoom
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
  //padding-top: 60px
  text-align: center
  background-color: #222
  min-height: 100vh
#bloghomemain
  min-height: 0
#aboutmain
  min-height: 0
#worksmain
  min-height: 0
#playroommain
  min-height: 0

h1, h2
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
      color: #fff
    &:hover
      color: #191970


$secpad: 10px
.about
  padding: $secpad
.playroom
  padding: $secpad
.blog
  padding: $secpad
 
</style>
