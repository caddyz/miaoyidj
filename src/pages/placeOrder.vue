<template>
  <div>
    <addresscard :addressObj="addressInfo">
      <i-icon type="enter" size="20" color="lightgrey"/>
    </addresscard>
    <picker mode="multiSelector"
            @change="bindMultiPickerChange"
            @columnchange="bindMultiPickerColumnChange"
            :value="multiIndex" :range="multiArray">
      <titlecard :tit="time" :timeVal="timeValue + '点'">
        <i-icon type="clock" size="18"/>
      </titlecard>
    </picker>
    <div style="height: 15rpx;background-color: whitesmoke;"></div>
    <ordercard :orderObj="productInfo"/>
    <div class="fen-ge">
      <div class="fen-ge-content">
      </div>
    </div>
    <div class="order-bot">
      <div class="order-bot-con">
        <div class="remark-ti">用户备注信息:</div>
        <van-field
          :value="remarkVal"
          placeholder="请输入备注信息"
          :border="borderBo"
          @change="getRemarkVal"
        />
      </div>
    </div>
    <div style="height: 15rpx"></div>
    <couponcard :tit="couponTit" :couponObj="couponInfo" :url="couponUrl">
      <i-icon type="coupons" size="18"/>
    </couponcard>
    <div style="height: 25rpx;"></div>
    <div style="font-size: 9pt;color: #888;text-align: center">
      优惠券在下单之后不会返还
    </div>
    <div class="foot">
      <div class="foot-price">
        合计:&nbsp;￥{{price}}
      </div>
      <div class="foot-pay">
        <div style="height: 10%"></div>
        <i-button  @click="goPay" type="error" long="true">下单</i-button>
      </div>
    </div>
    <van-dialog id="van-dialog" />
    <van-toast id="van-toast" />
  </div>
</template>
<script>
  import addresscard from '@/components/address_card'
  import titlecard from '@/components/title_card'
  import couponcard from '@/components/coupon_card'
  import ordercard from '@/components/order_card'
  import {getDeList, getNowHour, getYear, createOrderNo} from '@/utils/index'
  import { mapState } from 'vuex'
  import api from '@/api/index'
  import Dialog from '../../static/vant/dialog/dialog'
  import Toast from '../../static/vant/toast/toast'

  let f = length => Array.from({length}, (v, k) => k)
  export default {
    config: {
      navigationBarTitleText: '预约下单',
      usingComponents: {
        'i-icon': '../../static/iview/icon/index',
        'i-tag': '../../static/iview/tag/index',
        'van-field': '../../static/vant/field/index',
        'i-button': '../../static/iview/button/index',
        'van-dialog': '../../static/vant/dialog/index',
        'van-popup': '../../static/vant/popup/index',
        'van-button': '../../static/vant/button/index',
        'van-toast': '../../static/vant/toast/index'
      }
    },
    components: {
      addresscard,
      titlecard,
      ordercard,
      couponcard
    },
    computed: {
      ...mapState([
        'addressInfo',
        'productInfo',
        'miaoyiUser',
        'couponInfo'
      ])
    },
    mounted () {
      this.timeValue = getYear(new Date()) + '-' + this.multiArray[0][this.multiIndex[0]] + '  ' + this.getHour()
      this.price = this.productInfo.pprice
    },
    data () {
      return {
        address: '选择地址',
        time: '预约时间',
        multiArray: this.getList(),
        multiIndex: [0, 0],
        remarkVal: '',
        couponTit: '我的优惠',
        couponUrl: '/pages/coupon',
        borderBo: false,
        timeValue: '',
        price: 0
      }
    },
    methods: {
      getList () {
        let timeli = []
        for (let index in getDeList(new Date())) {
          timeli.push(getDeList(new Date())[index])
        }
        return [timeli, f(24)]
      },
      getHour () {
        return parseInt(getNowHour(new Date())) + 1
      },
      goPay () {
        if (this.$store.state.addressInfo.aid === undefined) {
          Toast.fail('没有选择地址，请选择！')
          return
        }
        if (this.$store.state.couponInfo.cid !== undefined) {
          this.userUseCoupon()
        }
        this.generateOrder()
      },
      bindMultiPickerChange (e) {
        this.multiIndex = e.mp.detail.value
        this.timeValue = getYear(new Date()) + '-' + this.multiArray[0][this.multiIndex[0]] + '  ' + this.multiArray[1][this.multiIndex[1]]
        if (this.getHour() > this.multiArray[1][this.multiIndex[1]]) {
          Toast.fail('时间选择错误，请重新选择')
          this.timeValue = getYear(new Date()) + '-' + this.multiArray[0][this.multiIndex[0]] + '  ' + this.getHour()
        }
      },
      bindMultiPickerColumnChange (e) {
        console.log('修改的列为', e.mp.detail.column, '，值为', e.mp.detail.value)
      },
      getRemarkVal (e) {
        this.remarkVal = e.mp.detail
      },
      async generateOrder () {
        const orderNo = createOrderNo()
        const res = await api.createOrder({
          productId: this.$store.state.productInfo.pid,
          addressId: this.$store.state.addressInfo.aid,
          userId: this.$store.state.miaoyiUser.uid,
          orderNo: orderNo,
          userMessage: this.remarkVal,
          totalPrice: this.$store.state.productInfo.pprice,
          payPrice: this.price,
          placeTime: this.timeValue
        })
        if (res.code === 1) {
          Dialog.alert({
            title: '订单号：' + orderNo,
            message: '订单生成成功，立即支付'
          }).then(() => {
            this.$router.push({path: '/pages/pay', query: {orderNo: orderNo}})
          })
        } else {
          Toast.fail('订单生成失败，请重试！')
        }
      },
      async userUseCoupon () {
        const res = await api.useCoupon({
          userId: this.$store.state.miaoyiUser.uid,
          couponId: this.$store.state.couponInfo.cid
        })
        if (res.code === 1) {
          console.log('success')
        } else {
          Toast.success('您中奖了！！！')
        }
      }
    },
    watch: {
      '$store.state.couponInfo': function () {
        if (this.couponInfo.cstatus === 1) {
          this.price = this.productInfo.pprice - this.couponInfo.cvalue
        }
        if (this.couponInfo.cstatus === 2) {
          this.price = Math.ceil(this.productInfo.pprice * (this.couponInfo.cvalue / 10))
        }
      }
    }
  }
</script>
<style scoped>
  .foot {
    height: 125rpx;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    flex-direction: row;
  }
  .fen-ge,.order-bot {
    display: flex;
    justify-content: center;
  }
  .fen-ge-content {
    width: 90%;
    border: 1px solid whitesmoke
  }
  .order-bot-con {
    width: 90%;
  }
  .remark-ti {
    color: #353535;
    font-size: 11pt;
  }
  .order-bot {
    margin-top: 15rpx;
    margin-bottom: 15rpx;
    border-bottom: 1px solid whitesmoke;
  }
  .foot-price {
    width: 40%;
    height: 100%;
    background-color: white;
    font-size: 14pt;
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .foot-pay {
    width: 60%;
    height: 100%;
    background-color: white;
  }
</style>
