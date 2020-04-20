<template>
  <div id='home'>
    <nav-bar class="home_nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick='tabClick' ref='tabControl1'
    v-show="isShowTab" 
    ></tab-control>
    <scroll class="content" ref="scroll" :probe-type='1' @scroll='scrollContent' :pullUpLoad='true'
      @pullingUp='loadData'>
      <home-swiper :banners="banners" ref='swiper' @imgLoad='imgLoad'></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature ref='feature'></feature>
      <tab-control :titles="['流行','新款','精选']" class="tab-control" @tabClick='tabClick' ref='tabControl2'></tab-control>
      <goods-list :goods="getGoods"></goods-list>
    </scroll>
    <back-top  @click.native='backClick' v-show="isShowBackTop"></back-top>
  </div>
  
</template>

<script>
import HomeSwiper from './HomeComps/HomeSwiper'
import HomeRecommend from './HomeComps/HomeRecommend'
import Feature from './HomeComps/Feature'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goodsList/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/backTop'

import {getHomeMultidate,getGoodsdata} from 'network/home'
import {debounce} from 'common/utils'
import {itemListener,backTopMixin} from 'common/mixin'
export default {
name:"Home",
components: {
  HomeSwiper,
  HomeRecommend,
  Feature,
  NavBar,
  TabControl,
  GoodsList,
  Scroll,
  BackTop
},
data () {
  return {
    banners:[],
    recommends:[],
    goods:{
      'new':{
        page:0,
        list:[]
      },
       'pop':{
        page:0,
        list:[]
      },
       'sell':{
        page:0,
        list:[]
      }
    },
    currentType:'pop',
    tabOffestTop:0,
    isShowTab:false,
    currentIndex:0,
    saveY:0
    
  }
},
// 组件一旦创建完成就请求数据
created () {
  this.getHomeMultidate()
  this.getGoodsdata('new')
  this.getGoodsdata('pop')
  this.getGoodsdata('sell')
},
mounted () {
  // 从mixin中混入代码 防抖
},
methods: {
  imgLoad(){
    this.tabOffestTop= this.$refs.tabControl2.$el.offsetTop 
    // console.log(this.tabOffestTop)
  },
  // ******事件监听相关方法
  tabClick(index){
    switch(index){
      case 0:
        this.currentType='pop'
        break
      case 1:
        this.currentType='new'
        break
      case 2:
        this.currentType='sell'
        break 
    }
    this.$refs.tabControl1.currentIndex=index
    this.$refs.tabControl2.currentIndex=index
  },
  backClick(){
    this.$refs.scroll.scrollTo(0,0)
  },
  scrollContent(position){
    -position.y>this.tabOffestTop?this.isShowTab=true:this.isShowTab=false
    // this.saveY=position.y
    this.isShowBack(position)//minix
  },
  loadData(){
    this.getGoodsdata(this.currentType)
    this.$refs.scroll.scroll.refresh()
  },
  //**** 网络请求相关方法
  getHomeMultidate(){
    getHomeMultidate().then(res=>{
    this.banners=res.data.banner.list
    this.recommends=res.data.recommend.list
    })
  },
  getGoodsdata(type){
    const page=this.goods[type].page+1
    getGoodsdata(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list)
      // 下一次取数据是从上一次结束后开始的 page++
      this.goods[type].page++
      // 完成上拉加载更多
      this.$refs.scroll.finishScrollUp()
    })
  }
 
},
computed:{
  getGoods(){
    return this.goods[this.currentType].list
  }
},
activated () {
  //回到滚动位置
  if(this.saveY!==0){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  } 
  //打开全局事件
  this.$bus.$on('imgLoad',this.itemListener)
},
deactivated () {
  //保存滚动位置
  this.saveY=this.$refs.scroll.scroll.y
  //取消全局事件
  this.$bus.$off('imgLoad',this.itemListener)
},
mixins: [itemListener,backTopMixin]
}
</script>

<style scoped>
.home_nav{
  background-color: var(--color-tint);
  color: white;
  z-index: 10;
}
/* 整个Home页面下移 44px(navbar高度) */
#home{
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}
/* 设置scroll的高度 */
.content{
  position: absolute;
  bottom: 60px;
  top:44px;
  left: 0;
  right: 0;
  overflow: hidden;
}

</style>