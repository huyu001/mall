<template>
  <tabbar>
      <tabbar-item path="/home" > 
     
        <img src="~assets/img/tabbar/home.svg" alt="" slot="tabbar-icon">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="tabbar_active">
        <div slot="tabbar-text">首页</div>
      </tabbar-item>
          <tabbar-item path="/cart"> 
        <img src="~assets/img/tabbar/cart.svg" alt="" slot="tabbar-icon">
        <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="tabbar_active">
        <div slot="tabbar-text">购物</div>
      </tabbar-item>
        <tabbar-item path="/category" > 
        <img src="~assets/img/tabbar/category.svg" alt="" slot="tabbar-icon">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="tabbar_active">
        <div slot="tabbar-text">分类</div>
      </tabbar-item>
        <tabbar-item path="/profile"> 
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="tabbar-icon">
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="tabbar_active">
        <div slot="tabbar-text">我的</div>
      </tabbar-item>
    </tabbar>
</template>

<script>
import Tabbar from 'components/common/tabbar/tabbar'
import TabbarItem from 'components/common/tabbar/tabbar-item'
export default {
name:"MainTabbar",
components: {
    Tabbar,
    TabbarItem
}
}
</script>

<style>

</style>