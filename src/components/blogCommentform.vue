<template>
  <div class="comment-form">
    <form @submit.prevent="submitComment">
        
        <div class="img-contener">
        <img class="comment-img" src="../assets/images/comment-img-2.jpg" alt="error">

        <!-- <img class="comment-img" src="../assets/images/comment-img-1.jpeg" alt="error">
        <img class="comment-img" src="../assets/images/comment-img-3.jpeg" alt="error">
        <img class="comment-img" src="../assets/images/comment-img-5.jpeg" alt="error"> -->
      </div>
        <textarea v-model="newComment" rows="4" cols="50" required placeholder="Add a comment"></textarea>
    
      <br />
      <div class="button-contaner">
        <button type="submit">Submit</button>
      </div>
      <p class="comment-para">hear you can add whatever comment you want. hop for best</p>     
    </form>
  </div>  
</template>

<script>

export default {
  data() {
    return {
      newComment: '',
      
    };
  },
  components:{

  },
  methods: {
    submitComment() {
      if (this.newComment.trim()) {
        this.$emit('comment-submitted', this.newComment);
        this.newComment = '';
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.img-contener{
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  .comment-img{
    height: 204px;
    margin-right: 10px;
  }
}
.comment-form{
  margin-top: -17px;
  background-color: #353333;
}

form{
  text-align: center;
  padding: 10px;
}
textarea{
    width:40%;
    height: 200px;
    text-align: left;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

}
.button-contaner{
  display: flex;
  justify-content: center;
}
.comment-para{
  color: aquamarine;
  padding-right: 10px;
}

@media (max-width: 768px) {
  .img-contener{
    display: block;
    align-items: center;

    .comment-img{
      height: auto;
      width: 100%;
      margin: 5px;
    }
  }
  textarea{    
    width:100%;

}
}

@media (min-width: 769px) and (max-width: 1024px) {
  .img-contener{
    display: block;
    align-items: center;

    .comment-img{
      height: auto;
      width: 100%;
      margin: 5px;
    }
  }
  textarea{    
    width:100%;

  }
}

@media(min-width: 1025px) {
.comment-form{
  height: auto;
  background-color: #353333;
}
  .img-contener{
  display: block;
  align-items: center;
  height: 300px;
  margin-bottom: 15px;
  .comment-img{
    width: 100%;
    height: auto;
    margin-right: 10px;
  }
}
}

</style>
