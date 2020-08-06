import fetch from './fetch';

// 登录
export function fetchLogin(data) {
    return fetch({
        url: '/users/cms/login',
        method: 'POST',
        data
    })
}

// 注册
export function fetchRegist(data) {
    return fetch({
        url: '/users/cms/regist',
        method: 'POST',
        data
    })
}

// 添加商品
export function fetchCreateGoods(data) {
    return fetch({
        url: '/goods/creategoods',
        method: 'POST',
        data
    })
}

// 获取商品品类
export function fetchCates(params) {
    return fetch({
        url: '/cates/all',
        method: 'GET',
        params
    })
}

// 获取商品列表
export function fetchGoodAll(params) {
    return fetch({
        url: '/goods/getGoodAll',
        method: 'GET',
        params
    })
}

// 获取商品详情
export function fetchGoodDetail(params) {
    return fetch({
      url: '/goods/detail',
      method: 'GET',
      params
    })
  }
export default {
    fetchLogin,fetchRegist,fetchCreateGoods,fetchCates,fetchGoodAll,fetchGoodDetail
}