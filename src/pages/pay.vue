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
    <van-action-sheet
      :show="show"
      :actions="actions"
      cancel-text="取消"
      @close="actionsClose"
      @cancel="actionsCancel"
      @select="actionsSelect"
    />
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
        'van-action-sheet': '../../static/vant/action-sheet/index',
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
        show: false,
        actions: [
          {
            id: 1,
            name: '微信支付'
          },
          {
            id: 2,
            name: '会员余额'
          }
        ],
        borderBu: false,
        orderInfo: {},
        product: {},
        addressDet: '',
        ti: '' + '点',
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
      },
      confirmPay () {
        this.show = !this.show
      },
      actionsClose () {
        this.show = false
      },
      actionsCancel () {
        this.show = false
      },
      actionsSelect (e) {
        console.log('choose:', e.mp.detail.id)
        if (e.mp.detail.id === 2) {
          console.log('会员支付')
          return
        }
        console.log('微信支付')
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
