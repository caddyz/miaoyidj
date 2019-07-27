<template>
  <div>
    <ordercard :orderObj="product"/>
    <div style="height: 15rpx;background-color: whitesmoke;"></div>
    <van-cell-group>
      <van-field
        :value="addressDet"
        label="服务地址"
        disabled
        :border="borderBu"
      />
      <van-field
        :value="ti"
        label="预约时间"
        disabled
        :border="borderBu"
      />
      <van-field
        :value="remark"
        label="备注信息"
        disabled
        :border="borderBu"
      />
      <van-field
        :value="pri"
        label="实际支付"
        disabled
        error
        :border="borderBu"
      />
    </van-cell-group>
    <div class="foot">
      <i-button @click="confirmPay" type="error" long="true">支付</i-button>
    </div>
  </div>
</template>
<script>
  import ordercard from '@/components/order_card'
  import api from '@/api/index'
  export default {
    config: {
      navigationBarTitleText: '支付',
      usingComponents: {
        'i-button': '../../static/iview/button/index',
        'i-tag': '../../static/iview/tag/index',
        'van-cell-group': '../../static/vant/cell-group/index',
        'van-cell': '../../static/vant/cell/index',
        'van-field': '../../static/vant/field/index'
      }
    },
    components: {
      ordercard
    },
    mounted () {
      this.getOrderInfo(this.$route.query.orderNo)
    },
    data () {
      return {
        borderBu: false,
        orderInfo: {},
        product: {},
        addressDet: '',
        ti: '',
        remark: '',
        pri: ''
      }
    },
    methods: {
      async getOrderInfo (orderNo) {
        const res = await api.getOrderDetail(orderNo)
        if (res.code === 1) {
          this.product = res.data.product
          this.addressDet = res.data.address.aaddress + ' ' + res.data.address.aaddressDetail
          this.ti = res.data.osubscribeTime
          this.remark = res.data.ouserMessage
          this.pri = res.data.opayPrice
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
  }
</style>
