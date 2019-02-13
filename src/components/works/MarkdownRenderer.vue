<template lang="pug">
#mdrenderer
  .titlelink
    router-link(to="/works/mdrenderer/")
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
        button(@click='savefile') save
        h5 ※ Supported PC browsers: Chrome, Firefox, Edge, IE
        textarea(name="source" wrap="soft" cols="30" rows="100" v-model="source" value="")
      td
        vue-markdown(class="vue-md" :source="source")
  

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
  },
  
  methods: {
    savefile: function () {
      let agent = window.navigator.userAgent.toLowerCase()
      let blob = new Blob([this.source], {type: "text/plain"})
      var mime = 'text/plain'
      let name = 'memo.md'

      let link = document.createElement("a")
      link.target = '_blank'
      link.download = name

      if (window.navigator.msSaveBlob) {
        // for IE, Edge
        window.navigator.msSaveBlob(blob, name)
      }
      else if (agent.indexOf('firefox') !== -1) {
        // for Firefox
        link.href = URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
      else if ((agent.indexOf('chrome') !== -1) && (agent.indexOf('edge') === -1)  && (agent.indexOf('opr') === -1)) {
        // for Chrome
        link.href = URL.createObjectURL(blob);
        link.click();
        URL.revokeObjectURL(link.href)
      }
      else {
        // for Safari(不安定)
        // file名: unknown.txt
        mime = 'application/octet-stream'
        let base64 = 'data:' + mime + ';base64,' + window.btoa(this.source)
        let uri = encodeURI(base64)
        link.href = uri;
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link)
      }
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
.vue-md
  margin-top: 110px
h1, h2, h5
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
