<template>
  <div class="backTop">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
name:'BackTop'
}
</script>

<style>
.backTop{
    position: fixed;
    bottom:55px;
    right: 5px;
    z-index: 999;
}
.backTop img{
    width: 50px;
    height: 50px;
}
</style>