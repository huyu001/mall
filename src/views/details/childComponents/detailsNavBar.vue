<template>
  <div id="detailsNavBar">
      <nav-bar>
          <div slot="left" class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="center"><div  v-for="(item,index) in titles"
          class="titles" :class="{active:index===currentIndex}" @click="titlesClick(index)">{{item}}</div></div>
       </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar' 
export default {
name:'detailsNavBar',
components: {
    NavBar
},
data () {
    return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
    }
},
methods: {
    titlesClick(index){
        this.currentIndex=index
        this.$emit('titlesClick',index)
    },
    backClick(){
        this.$router.back()
    }
}
}
</script>

<style scoped>
.center{
    display: flex;
}
.titles{
    flex: 1;
}
.back img{
    margin-top: 10px;
}
.active{
    color: var(--color-tint);
}
.detailsNavBar{
    background-color: blue;
}

</style>