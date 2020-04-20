<template>
  <div class="goods" @click="clickItem">
     <img :src="showImg" alt="" @load="imgLoad">
     <div class="goods-info">
         <p>{{goodsItem.title}}</p>
         <span class="price">{{goodsItem.price}}</span>
         <span class="collect">{{goodsItem.cfav}}</span>
     </div>
  </div>
</template>

<script>
export default {
name:'GoodsListItem',
props: {
    goodsItem:{
        type:Object,
        default(){
            return {}
        }
    }
},
methods: {
  imgLoad(){
    // 监听每一张图片是否加载完成 每一张图片加载完成就在home.vue或者是details.vue中完成重新计算高度 fresh()
    this.$bus.$emit('imgLoad')
  },
  clickItem(){
    // this.$router.push({
    //   path:'/details',
    //   query:{
    //     id:this.goodsItem.iid
    //   }
    // })  
  this.$router.push('/details/'+this.goodsItem.iid)
   }
},
computed: {
  showImg(){
    return this.goodsItem.image||this.goodsItem.show.img
  }
}
}
</script>

<style>
.goods {
    padding-bottom: 40px;
    position: relative;
    border-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
  }
  .goods img {
    width: 100%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 1px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>