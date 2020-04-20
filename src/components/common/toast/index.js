import Toast from './Toast'
const obj = {}
obj.install = function(Vue) {
    // 创建组件构造器
    const toastConstrustor = Vue.extend(Toast)
        // 2 以new的方式，根据组件构造器创造出对应得组件对象
    const toast = new toastConstrustor()
        // 3 将创造出来得组件对象手动挂载到某个元素上
    toast.$mount(document.createElement('div'))
        // 4 toast.$el 对应得就是这个被挂载的元素 再将该元素添加到Dom中的body里面
    document.body.appendChild(toast.$el)
        // 5 在Vue的原型上添加$toast
    Vue.prototype.$toast = toast

}
export default obj