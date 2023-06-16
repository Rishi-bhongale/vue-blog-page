<template>

<section class="teaser">
    <img src="../assets/images/background-food-img.jpg" alt="error">
    <div class="article-teaser-title">
        <span>{{author}}</span>
        <span><h2 v-html="title"></h2></span>
    </div>
</section>
    
</template>
<script>
export default {
    name:'blogArticleteaser',
    data() {
        return{

        }
    },
    props:[
        'author', 'title',
    ]
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Righteous');
section.teaser{
    position: relative;
    width: 100%;
    height: 139vh;
    color: #bbb;
    font-family: Righteous;
    background-position: center center;
    background-size: cover;
    text-transform: uppercase;
    text-shadow: 1px 1px 1px #222,
                 1px -1px 1px #222,
                 -1px 1px 1px #222,
                 -1px -1px 1px #222;
}
section img{
    width: 100%;
}
.article-teaser-title{
    position: absolute;
    bottom: 50px;
    
}
h2{
    font-size: 1.5em;
}
.article-teaser-title span{
    font-size: 2.5em;
}
section.teaser{
    border: 5px solid #222;
}


@media (max-width: 768px) {
.article-teaser-title{
    bottom: 50px;
    
}
section.teaser{
    width: 100%;
    height: auto;
    
}
section img{
    width: 100%;
}
.article-teaser-title span{
    font-size: 150%;
}
h2{
    font-size: 100%;
}
  
}

@media (min-width: 769px) and (max-width: 1024px) {
    .article-teaser-title{
        bottom: 50px; 
    }
    section.teaser{
        width: 100%;
        height: auto;
    
    }
    section img{
        width: 100%;
    }
    h2{
        font-size: 100%;
    }
  
  /* Styles for screens between 769px and 1024px */
}

@media(min-width: 1025px) {
    .article-teaser-title{
        bottom: 80px; 
    }
    section.teaser{
        width: 100%;
        height: auto;
    
    }
    section img{
        width: 100%;
    }
    h2{
        font-size: 100%;
    }
  /* Styles for screens larger than 1025px */
}

</style>