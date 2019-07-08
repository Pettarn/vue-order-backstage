import http from './axiosUtils'
const baseUrl = 'http://10.2.69.142:8080/EleServer_war_exploded'

// 商家信息
export const getBusiness = (params = {}) => {
    return http.fetchPost(`${baseUrl}/showBusiness`, params)
}

// 商家的菜单
export const getMenu = (params = {}) => {
    return http.fetchPost(`${baseUrl}/showTypeFoodtwo`, params)
}

// 增加菜品
export const insertFoods = (params = {}) => {
    return http.fetchPost(`${baseUrl}/insertFood`, params)
}

// 减少菜品
export const deleteFoods = (params = {}) => {
    return http.fetchPost(`${baseUrl}/deleteFood`, params)
}

// 更改菜品
export const updateFoods = (params = {}) => {
    return http.fetchPost(`${baseUrl}/updateFood`, params)
}