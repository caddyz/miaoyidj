// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    phone: '18116585239',
    city: '',
    openid: '',
    productInfo: {},
    miaoyiUser: {},
    addressInfo: {},
    couponInfo: {}
  },
  mutations: {
    saveOpenid: (state, openid) => {
      const obj = state
      obj.openid = openid
    },
    saveMiaoyiUser: (state, user) => {
      const obj = state
      obj.miaoyiUser = user
    },
    saveProductInfo: (state, product) => {
      const obj = state
      obj.productInfo = product
    },
    saveAddressInfo: (state, address) => {
      const obj = state
      obj.addressInfo = address
    },
    saveCouponInfo: (state, coupon) => {
      const obj = state
      obj.couponInfo = coupon
    },
    saveCity: (state, city) => {
      const obj = state
      obj.city = city
    }
  }
})

export default store
