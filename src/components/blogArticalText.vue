<template>
    <div>
        <section class="articale">
            <span>{{text}}</span>
        </section>
        
    </div>
</template>
<script>
export default {
    name:'blogArticalText',
    props:[
        'text',
    ] 
}
</script>
<style lang="scss" scoped>
.articale{
    width: calc(100% - 60px);
    min-height: calc(100vh - 60px);
    padding: 10px 30px 50px;
    background-color: #dadada;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.2em;
}



</style>