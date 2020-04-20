<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item in recommends">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
name:"HomeRecommend",
props:{
    recommends:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>

<style>
.recommend{
    display: flex;
    padding: 10px 0 30px;
    border-bottom: 25px solid #eee;
}
.recommend-item{
    flex: 1;
    text-align: center;
   
}
a{
    height: ;
}
.recommend-item img{
    width: 75px;
    margin-bottom: 10px;
}
</style>