import { request } from "./request";

export function getHomeMultidate() {
    return request('/home/multidata')
}
export function getGoodsdata(type, page) {
    return request({
        url: "/home/data",
        params: {
            type,
            page
        }
    })
}