<template>
 <div class="Cart">
   <nav-bar class="navbar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
   <scroll class="content" >
    <cart-list-item v-for="(item,index) in carttList" :key="index" :itemInfo="item"></cart-list-item>
   </scroll>
   <cart-bottom-bar></cart-bottom-bar>
   
 </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './childComps/cartListItem'
import CartBottomBar from './childComps/cartBottomBar'
import {mapGetters} from 'vuex'
export default {
name:"Cart",
components: {
  NavBar,
  CartListItem,
  CartBottomBar,
  Scroll
},
computed: {
  ...mapGetters(['cartLength','carttList'])
}
}
</script>

<style scoped>
.Cart{
  height: 100%;
}
.navbar{
  background-color: var(--color-tint);
  color: #fff;
}
.content{
  position: absolute;
  top:44px;
  bottom: 61px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>