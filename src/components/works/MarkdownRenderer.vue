<template lang="pug">
#mdrenderer
  .titlelink
    router-link(to="/mdrenderer/")
      h1 {{ page_title }}
    h2 Markdown Editor
     
  table
    tr
      td(class="description")
        h2 ↓ Input something in Markdown
      td(class="description" nowrap)
        h2 ↓ Output
    tr
      td
        textarea(name="source" wrap="soft" cols="30" rows="100" v-model="source" value="")
      td
        vue-markdown(:source="source")
  

</template>

<script lang="ts">
import axios from 'axios'
import VueMarkdown from 'vue-markdown'

export default {

  name: 'v-markdown',
  components: {
    VueMarkdown
  },

  data () {
    return {
      page_title:  'MDRenderer',
      source: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
#mdrenderer
  //padding-top: 60px
  text-align: center
  background-color: #fff
  color: #000
  min-height: 100vh
.description
  text-align: left
td
  vertical-align: top
  text-align: left
  width: 400px
textarea
  font-size: 20pt
  margin-top: 20px
  margin-right: 20px
h1, h2
  font-weight: normal
.titlelink
  a
    color: #000
    text-decoration: none
    @media screen and (min-width: 768px)
      &:visited
        color: #fff
      &:hover
        color: #191970
  display: inline-block
 
</style>
