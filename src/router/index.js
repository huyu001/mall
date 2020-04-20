import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
    import ("views/home/Home")
const Cart = () =>
    import ("views/cart/Cart")
const Category = () =>
    import ("views/category/Category")
const Profile = () =>
    import ("views/profile/Profile")
const Details = () =>
    import ("views/details/Details")
    //安装插件
Vue.use(VueRouter)
const routes = [{
    path: '',
    redirect: '/home',
}, {
    path: "/home",
    component: Home
}, {
    path: "/cart",
    component: Cart
}, {
    path: "/category",
    component: Category
}, {
    path: "/profile",
    component: Profile
}, {
    path: '/details/:iid',
    component: Details
}]
const router = new VueRouter({
    routes,
    mode: 'history',
})
export default router