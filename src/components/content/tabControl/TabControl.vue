<template>
  <div class="tabControl">
      <div class="tabcontrol-item" v-for="(item,index) in titles" @click="tabClick(index)">
          <span :class="{Active:currentIndex===index}">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
name:"TabControl",
data () {
    return {
        currentIndex:0
    }
},
props: {
    titles:{
        type:Array,
        default(){
            return []
        }
    }
},
methods: {
    tabClick(index){
        this.currentIndex=index
        this.$emit('tabClick',index)
    }
}
}
</script>

<style scoped>
.tabControl{
   display: flex;
   text-align: center;
   font-size: 16px;
   height: 35px;
   line-height: 35px;
   position: relative;
   /* margin-top: 44px; */
   background-color: #fff;
   z-index: 1;
}
.tabcontrol-item{
    flex:1;
}
.tabcontrol-item span{
    padding: 4px;  
}
.Active{
color: var(--color-high-text); 
border-bottom:2px solid var(--color-tint);
}
</style>