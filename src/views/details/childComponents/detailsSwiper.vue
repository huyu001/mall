<template>
  <div>
      <swiper class="detail-swiper">
          <swiper-item v-for="(item,index) in imgInfo" :key='index'>
              <img :src="item" alt="">
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
import {getDetailsData} from 'network/details.js'
export default {
name:"DetailsSwiper",
components: {
    Swiper,
    SwiperItem
},
data () {
    return {
       imgInfo:{
           type:Array,
           default(){
               return []
           }
       }
    }
},
props:{
    iid:{
        type:String
    }
},
created(){
   getDetailsData(this.iid).then(res=>{
       this.imgInfo=res.result.itemInfo.topImages 
    //    console.log(this.imgInfo)
   })
}
}
</script>

<style>
.detail-swiper{
    height: 350px;
    overflow: hidden;
}

</style>