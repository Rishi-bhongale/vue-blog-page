<template>
    <div>
        <article>
            <transition-group name="fademain" mode="out-in">
                <blog-articleteaser v-if="activeElement=='teaser'" :author="author" :title="title" />
                <blog-artical-text v-if="activeElement=='articale'" :text="text" />
                <blog-artical-comment  :comments="comments" /> 
                <blog-commentform @comment-submitted="addComment" />
            </transition-group>

            <transition-group name="fadenavbar" mode="out-in">
                <footer v-if="!shadownav" key="share">
                    <font-awesome-icon icon="fa-solid fa-circle-xmark" @click="shadownav = !shadownav" size="xl" />
                    <div>
                        <a href="https://www.whatsapp.com/" target="_blank"><font-awesome-icon icon="fa-brands fa-whatsapp" style="color: #075e54;" /></a>
                        <a href="https://www.facebook.com/" target="_blank"><font-awesome-icon icon="fa-brands fa-facebook" style="color: #3b5998" /></a>
                        <a href="https://www.twitter.com/" target="_blank"><font-awesome-icon icon="fa-brands fa-twitter" style="color: #1da1f2" /></a>
                        <a href="https://www.linkedin.com/" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" style="color: #0077b5"/></a>
                    </div>
                    <font-awesome-icon icon="fa-solid fa-link" class="fas-fa-link" />
                </footer>

                <footer v-if="shadownav" key="bottombar">
                    <font-awesome-icon icon="fa-solid fa-share-nodes"  @click="shadownav = !shadownav" size="xl" />
                    <div @click="toggleElement('articale')" v-if="activeElement==='teaser'" ><button>Read</button></div>
                    <div @click="toggleElement('teaser')" v-if="activeElement==='articale' || activeElement==='comments'"><button>close</button></div>
                    <font-awesome-icon icon="fa-solid fa-message" @click="toggleElement('comments')" size="xl" />
                </footer>

            </transition-group>
        </article>
    </div>
    
</template>
<script>
import blogArticleteaser from './blogArticleteaser.vue'
import blogArticalText from './blogArticalText.vue'
import BlogCommentform from './blogCommentform.vue' 
import blogArticalComment from './blogArticalComment.vue'

export default {
    name:'blogPagefooter',

    components:{
        blogArticleteaser,
        blogArticalText,
        BlogCommentform,
        blogArticalComment,
    },
    data:()=>{
        return{
            activeElement: 'teaser',
            shadownav:'false',
            author:'melo conves',
            title:'Awsome food blog',

            text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sit? Culpa inventore explicabo laboriosam vitae, vero quo 
            asperiores fugiat consequuntur maiores quos accusamus sed odit quod, aliquid, soluta in exercitationem esse id? Fugiat consectetur
            quisquam eveniet doloribus reiciendis. Quod, odio modi aliquid maxime aliquam nulla perferendis natus iure vero facilis voluptatem 
            voluptas hic consectetur iste possimus excepturi molestias corporis ab, fugit quaerat quia eaque praesentium illo id! Aliquam
            quaerat excepturi rem id voluptatum, eos voluptates dolorum perferendis accusantium fugiat. Accusamus, necessitatibus facilis 
            aspernatur autem fugit aliquam labore eveniet neque deserunt, animi doloremque perferendis quam error possimus quae sint ut. Ipsam aut consectetur totam praesentium natus quos porro, minus dolores quia illum, atque quasi voluptates doloribus ratione ad
            molestias, repellendus rerum? Voluptatibus ullam mollitia sapiente hic laborum ex laboriosam repudiandae dolorem unde amet 
            net, accusamus molestias architecto? Nisi in minus non reprehenderit commodi aliquam delectus modi sequi 
            facilis soluta veniam repellendus sed eveniet, corporis ad quia hic. Eligendi quas asperiores molestias repellendus, numquam 
            temporibus corporis cupiditate voluptatibus. Molestiae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sit? Culpa inventore explicabo laboriosam vitae, vero quo 
            asperiores fugiat consequuntur maiores quos accusamus sed odit quod, aliquid, soluta in exercitationem esse id? Fugiat consectetur
            quisquam eveniet doloribus reiciendis. Quod, odio modi aliquid maxime aliquam nulla perferendis natus iure vero facilis voluptatem 
            voluptas hic consectetur iste possimus excepturi molestias corporis ab, fugit quaerat quia eaque praesentium illo id! Aliquam
            quaerat excepturi rem id voluptatum,
             eos voluptates dolorum perferendis accusantium fugiat. Accusamus, necessitatibus facilis 
            aspernatur autem fugit aliquam labore eveniet neque deserunt, animi doloremque perferendis quam error possimus quae sint ut. Ipsam aut consectetur totam praesentium natus quos porro, minus dolores quia illum, atque quasi voluptates doloribus ratione ad
            molestias, repellendus rerum? Voluptatibus ullam mollitia sapiente hic laborum ex laboriosam repudiandae dolorem unde amet 
            net, accusamus molestias architecto? Nisi in minus non reprehenderit commodi aliquam delectus modi sequi 
            facilis soluta veniam repellendus sed eveniet, corporis ad quia hic.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, sit? Culpa inventore explicabo laboriosam vitae, vero quo 
            asperiores fugiat consequuntur maiores quos accusamus sed odit quod, aliquid, soluta in exercitationem esse id? Fugiat consectetur
            quisquam eveniet doloribus reiciendis. Quod, odio modi aliquid maxime aliquam nulla perferendis natus iure vero facilis voluptatem 
            voluptas hic consectetur iste possimus excepturi molestias corporis ab, fugit quaerat quia eaque praesentium illo id! Aliquam
            quaerat excepturi rem id voluptatum, eos voluptates dolorum perferendis accusantium fugiat. Accusamus, necessitatibus facilis 
            aspernatur autem fugit aliquam labore eveniet neque deserunt, animi doloremque perferendis quam error possimus quae sint ut. Ipsam aut consectetur totam praesentium natus quos porro, minus dolores quia illum, atque quasi voluptates doloribus ratione ad
            molestias, repellendus rerum? Voluptatibus ullam mollitia sapiente hic laborum ex laboriosam repudiandae dolorem unde amet 
            net, accusamus molestias architecto? Nisi in minus non reprehenderit commodi aliquam delectus modi sequi 
            facilis soluta veniam repellendus sed eveniet, corporis ad quia hic. Eligendi quas asperiores molestias repellendus, numquam 
            temporibus corporis cupiditate voluptatibus. Molestiae.`,
            
        }
    },
    
    methods:{
        toggleElement(ele){
            this.activeElement = ele;
        }
    }
}
</script>
<style lang="scss" scoped>

article{
    width: 100%;
}
footer{
    display: grid;
    grid-template-columns: 80px auto 80px;
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 35px;
    background-color: #efefef;
    color: #000;
    box-shadow: 0 0 5px 0 #555;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.7em;
    }
}



</style>