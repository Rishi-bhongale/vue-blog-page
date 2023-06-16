<template>
  <div>
    <ul>
      <li v-for="(comment, index) in comments" :key="index">
        {{ comment.text }}
        
      </li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name :'blogArticalComment',
  data() {
    return {
      comments: [],
    };
  }
};
</script>

<style lang="scss" scoped>

</style>







