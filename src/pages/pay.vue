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
    <van-toast id="van-toast" />
  </div>
</template>
<script>
  import ordercard from '@/components/order_card'
  import { mapState, mapMutations } from 'vuex'
  import Toast from '../../static/vant/toast/toast'
  import api from '@/api/index'
  import { prePay } from '@/utils/pay'
  import { RECHARGE } from '@/utils/constant'

  export default {
    config: {
      navigationBarTitleText: '支付',
      usingComponents: {
        'i-button': '../../static/iview/button/index',
        'i-tag': '../../static/iview/tag/index',
        'van-cell-group': '../../static/vant/cell-group/index',
        'van-cell': '../../static/vant/cell/index',
        'van-action-sheet': '../../static/vant/action-sheet/index',
        'van-field': '../../static/vant/field/index',
        'van-toast': '../../static/vant/toast/index'
      }
    },
    components: {
      ordercard
    },
    computed: {
      ...mapState([
        'miaoyiUser',
        'openid'
      ])
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
      ...mapMutations([
        'saveMiaoyiUser'
      ]),
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
        let number = parseInt(this.pri)
        if (e.mp.detail.id === 2) {
          console.log(this.$store.state.miaoyiUser.umemberMoney)
          console.log(this.pri)
          if (this.$store.state.miaoyiUser.umemberMoney < number) {
            this.show = false
            Toast.fail('会员余额不足，请充值！')
          } else {
            this.show = false
            this.$store.state.miaoyiUser.umemberMoney -= number
            console.log('会员', this.$store.state.miaoyiUser)
            this.memberPay({
              id: this.$store.state.miaoyiUser.uid,
              name: this.$store.state.miaoyiUser.uname,
              status: this.$store.state.miaoyiUser.ustatus,
              openid: this.$store.state.miaoyiUser.uopenid,
              meney: this.$store.state.miaoyiUser.umemberMoney,
              avater: this.$store.state.miaoyiUser.uavatar,
              points: this.$store.state.miaoyiUser.upoints,
              time: this.$store.state.miaoyiUser.upointUpdateTime
            })
            this.saveMiaoyiUser(this.$store.state.miaoyiUser)
          }
          return
        }
        if (e.mp.detail.id === 1) {
          this.show = false
          prePay({
            bodyInfo: this.product.pname,
            outTradeNo: this.$route.query.orderNo,
            totalFee: this.pri,
            openid: this.$store.state.openid,
            attach: RECHARGE
          })
        }
      },
      async memberPay (user) {
        const res = await api.memberPay(user)
        if (res.code === 1) {
          const r = await api.updateOrder(this.$route.query.orderNo)
          if (r.code === 1) {
            Toast.success('购买成功')
            return
          }
          Toast.fail('购买失败！请联系商家')
        } else {
          Toast.fail('会员支付失败！请联系商家')
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
