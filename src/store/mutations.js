export default {
    addCounter(state, payload) {
        payload.count++
    },
    addTocart(state, payload) {
        state.carttList.push(payload)
    }

}