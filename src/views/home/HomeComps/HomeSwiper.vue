<template>
  <div class="homeSwiper">
      <swiper>
          <swiper-item v-for="(item,index) in banners" :key='index'>
              <a :href="item.link" >
                  <img :src="item.image" alt="" @load="imgLoad">
              </a>
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
name:"HomeSwiper",
components: {
    Swiper,
    SwiperItem
},
data () {
    return {
        isLoad:false
    }
},
props: {
   banners:{
       type:Array,
       default(){
           return []
       }
   } 
},
created () {
   
},
methods: {
    imgLoad(){
        if(!this.isLoad){
             this.$emit('imgLoad')
             this.isLoad=true
        }
       
    }
}
}
</script>

<style>

</style>