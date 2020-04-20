<template>
  <div class="wrapper" ref='wrapper'>
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import bScroll from 'better-scroll'
export default {
name:'Scroll',
data () {
    return {
        scroll:{}
       
    }
},
props:{
     probeType:{
         type:Number,
         default:0
     },
     pullUpLoad:{
         type:Boolean,
         default:false
     }
},
mounted () {
    this.scroll=new bScroll(this.$refs.wrapper,{
        probeType:1,
        click:true,
        pullUpLoad:this.pullUpLoad
    })
    this.scroll.on('scroll',(position)=>{
        this.$emit('scroll',position)
    })
    this.scroll.on('pullingUp',()=>{
       this.$emit('pullingUp')
    })
},
methods:{
    scrollTo(x,y,time=600){
         this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishScrollUp(){
       this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
       this.scroll && this.scroll.refresh()
    //    console.log("-----")
    }
}
}
</script>

<style>

</style>