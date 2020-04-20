export default {
    addCartList(context, payload) {
        // 方法一
        // var product = null
        //     //判断购物车中是否存在该商品
        // for (let item of context.state.carttList) {
        //     if (item.iid === payload.iid) {
        //         product = item
        //     }
        // }
        // if (product) {
        //     //如果存在 则count数加1
        //     context.commit('addCounter', product)

        // } else {
        //     //b不存在 设置count 属性 并将该商品加入购物车中
        //     payload.count = 1
        //     payload.isChecked = false
        //     context.commit('addTocart', payload)
        // }


        //方法二： Array.includes(a) 检测数组Array中是否有a元素(a不可以是对象) 如果有 则返回true
        return new Promise((res, rej) => {
            var exist = false
            exist = context.state.payloadIid.includes(payload.iid)
            if (!exist) {
                context.state.payloadIid.push(payload.iid)
                payload.count = 1
                payload.isChecked = false
                context.commit('addTocart', payload)
                res('添加成功')
            } else {
                for (let item of context.state.carttList) {
                    var oldproduct = null
                    if (item.iid === payload.iid) {
                        oldproduct = item
                    }
                }
                context.commit('addCounter', oldproduct)
                res('商品数+1')
            }
        })

    }
}