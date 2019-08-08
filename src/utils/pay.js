import api from '@/api/index'
import Toast from '../../static/vant/toast/toast'

export async function prePay (r) {
  const res = await api.unifiedOrder(r)
  if (res.resultCode === 'SUCCESS' && res.returnCode === 'SUCCESS') {
    console.log('zhif....')
    const prepay = 'prepay_id=' + res.prepayId
    const r = await api.getSencondSign(prepay)
    if (r.code === 1) {
      wx.requestPayment({
        timeStamp: r.data.signTime,
        nonceStr: r.data.str,
        package: prepay,
        signType: 'MD5',
        paySign: r.data.signature,
        success: (res) => {
          Toast.success('支付成功')
          wx.navigateTo({
            url: '/pages/paySuccess'
          })
        },
        fail: (res) => {
          Toast.fail('支付失败')
        }
      })
    }
  }
}

export default {
  prePay
}
