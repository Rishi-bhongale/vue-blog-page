<template>
  <div>
    <navBar></navBar> 
    <blogPagefooter></blogPagefooter>
  </div>
</template>
<script>
import blogPagefooter from './components/blogPagefooter.vue'
import NavBar from './components/NavBar.vue'

export default {
  name:'app',
  data(){
    return{}
  },
  components:{
    blogPagefooter,
    NavBar,
    
    
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  /* Styles for screens smaller than 768px */
}

@media (min-width: 769px) and (max-width: 1024px) {
  /* Styles for screens between 769px and 1024px */
}

@media(min-width: 1025px) {
  /* Styles for screens larger than 1025px */
}

</style>