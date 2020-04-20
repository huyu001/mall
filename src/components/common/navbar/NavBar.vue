<template>
  <div class="nav_bar">
      <div class="left"><slot name='left'></slot></div>
      <div class="center"><slot name='center'></slot></div>
      <div class="right"><slot name='right'></slot></div>
     
  </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
.nav_bar{
height: 44px;
line-height: 44px;
display: flex;
text-align: center;
position: fixed;
top:0;
left: 0;
right: 0;
position: relative;
z-index: 1;
}
.left,.right{
    width: 64px;
}
.center{ 
    flex: 1;
}

</style>