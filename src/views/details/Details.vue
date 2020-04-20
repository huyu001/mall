<template>
  <div class="details">
    
    <details-nav-bar class="detailsNavBar" @titlesClick='titlesClick' ref='nav'></details-nav-bar>
    <scroll class="detailsContent" ref="scroll" :probeType='3' @scroll="scrollContent" :pullUpLoad='true'>
       <details-swiper :iid="iid"></details-swiper>
       <detail-base-info :goods='goods'></detail-base-info>
       <detail-shop-info :shop='shop'></detail-shop-info>
       <detail-goods-info :detailInfo='detailInfo' @imgLoad='imgLoad' ref='goods'></detail-goods-info>
       <detail-param-info :paramsInfo='paramsInfo' ref='params'></detail-param-info>
       <detail-comment-info :commentInfo='commentInfo' ref="comment"></detail-comment-info>
       <detail-recommend-info :recommendList='recommend' ref="recommend"></detail-recommend-info>
    </scroll>
    <back-top  @click.native='backClick' v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addToCart='addToCart'></detail-bottom-bar>
    
  </div>
</template>

<script>
import detailsNavBar from './childComponents/detailsNavBar'
import DetailsSwiper from './childComponents/detailsSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo'
import DetailShopInfo from './childComponents/DetailShopInfo'
import Scroll from 'components/common/scroll/Scroll'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo'
import DetailParamInfo from './childComponents/DetailParamInfo'
import DetailCommentInfo from './childComponents/DetailCommentInfo'
import DetailRecommendInfo from './childComponents/DetailRecommendInfo'
import DetailBottomBar from './childComponents/DetailBottomBar'


import {getDetailsData,Goods,Shop,GoodsParam,getRecommend} from 'network/details'
import {debounce} from 'common/utils'
import {itemListener,backTopMixin} from 'common/mixin'
export default {
name:"Details",
components: {
  detailsNavBar,
  DetailsSwiper,
  DetailBaseInfo,
  DetailShopInfo,
  DetailGoodsInfo,
  DetailParamInfo,
  DetailCommentInfo,
  DetailRecommendInfo,
  DetailBottomBar,
  Scroll
},
data () {
    return {
        iid:null,
        goods:{
          type:Object,
          default(){
            return {}
          }
        },
        shop:{
          type:Object,
          default(){
            return {}
          }
        },
        detailInfo:{
          type:Object
        },
        paramsInfo:{
          type:Object,
          default(){
            return {}
          }
        },
        commentInfo:{
          type:Object,
          default(){
            return {}
          }
        },
        recommend:[],
        themeTopYs:[],
        currentIndex:0
        // getThemeY:null
  }
},
created () {
    this.iid=this.$route.params.iid
    // console.log(this.$route.query.id)
    // this.goods=new goods()
    getDetailsData(this.iid).then(res=>{
       this.imgInfo=res
      //  console.log(this.imgInfo)
       this.goods=new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
      //  console.log(res)
       this.shop=new Shop(res.result.shopInfo)
       this.detailInfo=res.result.detailInfo
       this.paramsInfo=new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
      //  console.log(this.paramsInfo)
      console.log(res)
      this.commentInfo=res.result.rate
   })
   getRecommend().then(res=>{
     console.log(res)
     this.recommend=res.data.list
   })
  // this.getThemeY=debounce(()=>{
  //   this.themeTopYs.push(this.$refs.goods.$el.offsetTop)
  //   this.themeTopYs.push(this.$refs.params.$el.offsetTop)
  //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
  //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
  // },200)
},
methods: {
  imgLoad(){
    this.$refs.scroll.refresh()
    //imgLoad已经是防抖后调用的方法 所以只会执行一次
    this.themeTopYs.push(this.$refs.goods.$el.offsetTop)
    this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
    this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    // this.getThemeY()
    this.themeTopYs.push(Number.MAX_VALUE)
    console.log(this.themeTopYs)
  },
  titlesClick(index){
    this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
  },
  scrollContent(position){
    //联动效果 好好理解
    const positionY=-position.y
    for(let i=0;i<this.themeTopYs.length-1;i++){
      if(i!==this.currentIndex){
        if(i<this.themeTopYs.length-1&&positionY>this.themeTopYs[i]&&positionY<this.themeTopYs[i+1]){
          this.currentIndex=i
          this.$refs.nav.currentIndex=this.currentIndex
        }
      }  
    }
    this.isShowBack(position)
  },
  addToCart(){
    const product={}
    product.img=this.detailInfo.detailImage[0].list[0]
    product.title=this.goods.title
    product.desc=this.goods.desc
    product.price=this.goods.nowPrice
    product.iid=this.iid
    this.$store.dispatch('addCartList',product).then(res=>{
     this.$toast.show(res,2000)
    })
    this.$refs.scroll.refresh()
  }
},
activated () {
  this.$bus.$on('imgLoad',this.itemListener)
},
destroyed () {
  //取消全局事件 因为details.vue是没有keep-alive,所以不会调用deactived
  this.$bus.$off('imgLoad',this.itemListener)
},
mixins: [itemListener,backTopMixin]
}
</script>

<style scoped>
.details{
  height: 100vh;
}
.detailsNavBar{
  position: relative;
  z-index: 10;
  background-color: #fff;
}
.detailsContent{
  position: absolute;
  top:44px;
  left: 0;
  right: 0;
  bottom: 59px;
  background-color: #fff;
  z-index: 9;
}
</style>