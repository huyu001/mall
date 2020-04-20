<template>
  <ul class="tabbar">
      <slot></slot>
  </ul>
</template>

<script>

export default {
name: "Tabbar"
}
</script>

<style>
.tabbar{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom:0px;
  box-shadow: 0 -3px rgba(100, 100, 100, .15);
  background: #cccccc;
  height: 60px;
  z-index: 9;
}
</style>