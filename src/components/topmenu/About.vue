
<template lang="pug">
#aboutmain
  .titlelink
    router-link(to="/about/" ontouchstart="")
      h1 {{ page_title }}
    h2 My portfolio website.
  table(v-if="display")
    tr
      td
        .item Name:
      td
        .cont Saku
    br
    tr
      td
        .item Location:
      td
        .cont Tokyo, Japan
    br
    tr
      td
        .item Occupation:
      td
        .cont Student
    br
    tr
      td
        .item Education:
      td
        .cont Tokyo Institute of Technology
    br
    tr
      td
        .item Major:
      td
        .cont Computer Science
   

</template>

<script lang="ts">
  export default {
    name: 'v-about',
    props: ["val"],
    data() {
      var tmp: boolean = true
      if (this.val) tmp = false
      return {
        page_title: 'About',
        display: tmp
      }
    },

    methods: {
    }
  }
</script>

<style scoped lang="sass">
#aboutmain
  text-align: center
  min-height: 100vh
  
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
table
  margin: 0 auto
  .item
    text-align: right
  .cont
    text-align: left
    margin-left: 3rem
    

  
</style>
