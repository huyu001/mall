<template>
  <div class="goods">
      <goods-list-item v-for="(item,index) in goods" :goodsItem='item' class="goods-list-item" :key="index"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from'./GoodsListItem'
export default {
name:'GoodsList',
components: {
    GoodsListItem
},
props: {
    goods:{
       type:Array,
    default(){
        return []
    }  
    }
   
}
}
</script>

<style>
.goods{
   display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 45px;
}
.goods-list-item{
    width: 48%;
   height: 300px;
}
</style>