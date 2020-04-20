<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
name:"Toast",
data () {
  return {
    isShow:false,
    message:''
  }
},
methods: {
  show(message,time){
    this.message=message
    this.isShow=true
    setTimeout(() => {
      this.message=''
      this.isShow=false
    }, time);
  }
}
}
</script>

<style>
.toast{
  position: fixed;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9999;
  font-size: 18px;
  padding: 5px;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  
}
</style>