<template>
  <li class="tabbar-item" @click="btnClick">
    <div v-if="isActive"><slot name="tabbar-icon"></slot></div>
    <div v-else><slot name="tabbar_active"></slot></div> 
    <!-- 动态绑定样式 -->
    <div :style="activeStyle">
        <slot name="tabbar-text"></slot>
    </div>  
    
  </li>
</template>

<script>
export default {
name:"Tabbar-item",
data () {
    return {
        // isActive:false
    }
},
computed: {
    //isActive属性值会动态改变
    isActive(){
        //当前活跃路由与之匹配 
        return this.$route.path.indexOf(this.path)!==-1
    },
    activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
    }
},
props: {
    path:String,
    activeColor:{
        type:String,
        default:"red"
    }
},
methods: {
    btnClick(){
    //    this.$router.repalce(this.path);
    this.$router.replace(this.path)

    }
}
}
</script>

<style>
.tabbar-item{
  flex: 1;
  float: left;
  height: 49px;
  text-align: center;
  position: relative;
 
}
.tabbar-item img{
    vertical-align: middle;
    width: 38px;
    height: 38px;
    margin-top: 5px;
}

</style>