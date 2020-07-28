
<template lang="pug">
#aboutmain
  .titlelink
    router-link(to="/about")
      h1 {{ page_title }}
    h2 Saku's Homepage
  table(v-if="display")
    tr
      td
        .item Name
      td :
      td
        .cont Sakutaro Sugiyama
    br
    tr
      td
        .item Nickname
      td :
      td
        .cont saku
    br
    tr
      td
        .item Location
      td :
      td
        .cont Tokyo, Japan
    br
    tr
      td
        .item Occupation
      td :
      td
        .cont Student (17B/B4/The 4th year of bachelor's degree)
    br
    tr
      td
        .item Education
      td :
      td
        .cont Tokyo Institute of Technology
    br
    tr
      td
        .item Major
        td :
      td
        .cont Computer Science
    br
    tr
      td
        .item Programming Language <br> I often use
      td :
      td
        .cont C++, C#, Java, Nim, Rust, Python
    br
    tr
      td
        .item I'm interested in
      td :
      td
        .cont Software Engineering, Software Design Methodology, Debugging Support, <br> Agile Software Development, DevOps, Game Development, Machine Learning, Data Mining
        
   

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
  animation: fadeIn 2s ease 0s 1 normal
  -webkit-animation: fadeIn 2s ease 0s 1 normal
@keyframes fadeIn 
  0%
    opacity: 0
  100%
    opacity: 1
@-webkit-keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
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
