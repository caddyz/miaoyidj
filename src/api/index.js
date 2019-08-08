import fly from '@/utils/request'

const baseURI = 'http://www.localhost:9090/api/'

const api = {
  // 获取所以商品
  getAllProduct: (r) => fly.get('product/getAllProduct', null, {
    baseURL: baseURI
  }),
  // 获取首页轮播，推荐等商品
  getClassifyData: (r) => fly.get('image/getIndexProduct', null, {
    baseURL: baseURI
  }),
  // 获取图片
  getHtmlCode: (r) => fly.get('product2img/getProductImg', {id: r}, {
    baseURL: baseURI
  }),
  // 微信登陆
  wxLogin: (r) => fly.get('wx/user/login', r, {
    baseURL: baseURI
  }),
  // 用户注册
  userRegister: (obj) => fly.get('user/login', obj, {
    baseURL: baseURI
  }),
  // 获取用户详情
  getUserDetail: (r) => fly.get('user/getUserInfo', {openid: r}, {
    baseURL: baseURI
  }),
  // 获取最新评价
  getDetailReview: (r) => fly.get('review/getLastReview', null, {
    baseURL: baseURI
  }),
  // 获取所以评价
  getListReview: (r) => fly.get('review/getAllReview', {productId: r}, {
    baseURL: baseURI
  }),
  // 获取地址
  getListAddress: (r) => fly.get('address/getUserAddress', {userId: r}, {
    baseURL: baseURI
  }),
  // 删除地址
  deleteAddress: (r) => fly.get('address/deleteAddress', {addressId: r}, {
    baseURL: baseURI
  }),
  // 修改地址
  updateAddress: (addressObj) => fly.get('address/updateAddress', addressObj, {
    baseURL: baseURI
  }),
  // 增加地址
  addAddress: (addressObj) => fly.get('address/addAddress', addressObj, {
    baseURL: baseURI
  }),
  // 获取优惠
  getListCoupon: (r) => fly.get('user2coupon/getUserCoupon', {userId: r}, {
    baseURL: baseURI
  }),
  // 创建订单
  createOrder: (obj) => fly.get('order/generateOrder', obj, {
    baseURL: baseURI
  }),
  // 使用优惠券
  useCoupon: (r) => fly.get('user2coupon/useCoupon', r, {
    baseURL: baseURI
  }),
  // 查询详细订单
  getOrderDetail: (r) => fly.get('order/getOrderByOrderNo', {orderNo: r}, {
    baseURL: baseURI
  }),
  // 获取用户订单
  getUserOrder: (r) => fly.get('order/userGetAllOrder', {userId: r}, {
    baseURL: baseURI
  }),
  // 会员支付
  memberPay: (r) => fly.get('user/memberPay', r, {
    baseURL: baseURI
  }),
  // 更新订单状态
  updateOrder: (r) => fly.get('order/orderPay', {orderNo: r}, {
    baseURL: baseURI
  }),
  // 统一下单
  unifiedOrder: (r) => fly.post('pay/unifiedOrder', r, {
    baseURL: baseURI
  }),
  // 二次签名
  getSencondSign: (r) => fly.get('pay/secondSign', {prepayId: r}, {
    baseURL: baseURI
  }),
  // 获取积分规则
  getPointsRules: (r) => fly.get('info/getPointsRules', r, {
    baseURL: baseURI
  }),
  // 创建会员充值订单
  createMemberOrder: (r) => fly.get('memberOrder/generateMemberOrder', r, {
    baseURL: baseURI
  }),
  // 获取会员充值
  getMemberRecharge: (r) => fly.get('info/getMemberButton', r, {
    baseURL: baseURI
  })
}
export default api
