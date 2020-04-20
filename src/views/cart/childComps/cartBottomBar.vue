<template>
  <div class="cart-bottom-bar">
    <div class="check-area">
      <check-button class="check-button" :checked="checkAll" @click.native="checkAllClick"></check-button>
      <span class="check">全选</span>
    </div>
    <div class="total">
      <span>总价￥{{totalPrice}}</span>
    </div>
    <div class="calculate">去计算({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'
export default {
name:'CartBottomBar',
components: {
  CheckButton
},
computed: {
  totalPrice(){
    return this.$store.state.carttList.filter(item=>{return item.isChecked}).reduce((preValue,item)=>{return preValue+item.price*item.count},0).toFixed(2)
  },
  checkLength(){
    return this.$store.state.carttList.filter(item=>item.isChecked).length
  },
  checkAll(){
    if(this.$store.state.carttList.length==0)
    return false
    return !this.$store.state.carttList.find(item => !item.isChecked)
  }
},
methods: {
  checkAllClick(){
    if(this.checkAll){
      this.$store.state.carttList.forEach(item => item.isChecked=false)
    }else{
      this.$store.state.carttList.forEach(item => item.isChecked=true)
    }
  }

}
}
</script>

<style>
.cart-bottom-bar{
  height: 40px;
  width: 100%;
  background-color: #eee;
  position: absolute;
  bottom: 60px;
  z-index: 999px;
  display: flex;
  align-items: center;

}
.check-area{

}
.check-button{
float: left;
}
.check{
display: block; 
float: left;
}
.total{
  margin-left: 10px;
  flex: 1;
}
.calculate{
  width: 86px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: coral;
  color: #eee;
}
</style>