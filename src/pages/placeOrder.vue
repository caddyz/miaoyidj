<template>
  <div>
    <addresscard>
      <i-icon type="enter" size="20" color="lightgrey"/>
    </addresscard>
    <picker mode="multiSelector"
            @change="bindMultiPickerChange"
            @columnchange="bindMultiPickerColumnChange"
            :value="multiIndex" :range="multiArray">
      <titlecard :tit="time" :timeVal="multiArray[0][multiIndex[0]] +'  '+ multiArray[1][multiIndex[1]] + '点'">
        <i-icon type="clock" size="18"/>
      </titlecard>
    </picker>
    <div style="height: 15rpx;background-color: whitesmoke;"></div>
    <ordercard></ordercard>
    <div class="fen-ge">
      <div class="fen-ge-content">
      </div>
    </div>
    <div class="order-bot">
      <div class="order-bot-con">
        <div class="remark-ti">用户备注信息:</div>
        <i-input :value="remarkVal" placeholder="请输入备注信息"></i-input>
      </div>
    </div>
    <div style="height: 15rpx"></div>
    <titlecard :tit="couponTit" :url="couponUrl">
      <i-icon type="coupons" size="18"/>
    </titlecard>
    <titlecard :tit="memberTit" :url="memberUrl">
      <i-icon type="integral" size="18"/>
    </titlecard>
    <div class="foot">
      <div class="foot-price">
        合计:&nbsp;￥123
      </div>
      <div class="foot-pay">
        <div style="height: 10%"></div>
        <i-button  @click="goPay" type="error" long="true">去支付</i-button>
      </div>
    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
  import addresscard from '@/components/address_card'
  import titlecard from '@/components/title_card'
  import ordercard from '@/components/order_card'
  import {getDeList} from '@/utils/index'
  import Dialog from '../../static/vant/dialog/dialog'

  let f = length => Array.from({length}, (v, k) => k)
  export default {
    config: {
      navigationBarTitleText: '预约下单',
      usingComponents: {
        'i-icon': '../../static/iview/icon/index',
        'i-tag': '../../static/iview/tag/index',
        'i-input': '../../static/iview/input/index',
        'i-button': '../../static/iview/button/index',
        'van-dialog': '../../static/vant/dialog/index',
        'van-popup': '../../static/vant/popup/index',
        'van-button': '../../static/vant/button/index'
      }
    },
    components: {
      addresscard,
      titlecard,
      ordercard
    },
    mounted () {
    },
    data () {
      return {
        address: '选择地址',
        time: '预约时间',
        multiArray: this.getList(),
        multiIndex: [0, 0],
        remarkVal: '',
        couponTit: '我的优惠',
        memberTit: '我的会员',
        couponUrl: '/pages/coupon',
        memberUrl: '/pages/member'
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
      goPay () {
        Dialog.confirm({
          title: '支付',
          message: '立即支付'
        }).then(() => {
          console.log('123')
        }).catch(() => {
          console.log(365)
        })
      },
      bindMultiPickerChange (e) {
        console.log('picker发送选择改变，携带值为', e.mp.detail.value)
        this.multiIndex = e.mp.detail.value
      },
      bindMultiPickerColumnChange (e) {
        console.log('修改的列为', e.mp.detail.column, '，值为', e.mp.detail.value)
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
