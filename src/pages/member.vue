<template>
  <div>
    <div class="info-top">
      <div class="info-top-content">
        <div class="info-top-content-tx">
          <div class="touxiang">
            <div class="tupian">
              <img style="width: 90%;height: 90%;border-radius: 50px" :src="miaoyiUser.uavatar"/>
            </div>
            <div class="na">
              <div style="width: 90%;height: 100%;">
                <div class="na-name">{{miaoyiUser.uname}}</div>
                <div class="na-tag">
                  <i-tag v-if="miaoyiUser.ustatus"
                         class="i-tags"
                         name="单个标签"
                         color="yellow">
                    VIP
                  </i-tag>
                  <i-tag v-else
                         class="i-tags"
                         name="单个标签"
                         color="yellow">
                    会员
                  </i-tag>
                </div>
                <div class="na-point">积分:{{miaoyiUser.upoints}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="info-top-content-co">
          <button class="get-points" @click="pointsRule">消费明细</button>
        </div>
      </div>
    </div>
    <div>
      <div class="member-money">
        <div class="wo-qian">
          <div class="yu-e">余额:</div>
          <div class="sheng-qian">{{miaoyiUser.umemberMoney}}元</div>
        </div>
      </div>
      <div style="height: 15rpx;background-color: whitesmoke"></div>
      <div class="member-cz">
        <i-button @click="recharge" inline type="error">充500送100</i-button>
        <i-button @click="recharge" inline type="error">充1000送200</i-button>
        <i-button @click="recharge" inline type="error">2000元</i-button>
      </div>
      <div style="height: 55rpx"></div>
      <button v-for="(item,index) in li" :key="index">充{{item.bbase}}送{{item.bgive}}</button>
      <div class="addInput">
        <div style="width: 90%;">
          <van-field
            :value="money"
            type="number"
            label="充值金额"
            placeholder="请输入充值金额"
            @change="getMoney"
          />
        </div>
      </div>
    </div>
<!--    <div style="height: 99rpx"></div>-->
<!--    <div >查看充值规则</div>-->
    <div class="member-foot">
      <i-button @click="recharge" type="error" long="true">充值</i-button>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import api from '@/api/index'
  import { prePay } from '@/utils/pay'
  import { PAY } from '@/utils/constant'
  import {createOrderNo} from '@/utils/index'
  import Toast from '../../static/vant/toast/toast'

  export default {
    config: {
      navigationBarTitleText: '会员',
      usingComponents: {
        'i-tag': '../../static/iview/tag/index',
        'i-icon': '../../static/iview/icon/index',
        'i-button': '../../static/iview/button/index',
        'van-field': '../../static/vant/field/index',
        'van-toast': '../../static/vant/toast/index'
      }
    },
    computed: {
      ...mapState([
        'miaoyiUser',
        'openid'
      ])
    },
    mounted () {
      this.getMemberRechargeValue()
      console.log('shuj', this.$store.state.miaoyiUser)
    },
    data () {
      return {
        money: '',
        li: [],
        num: [],
        num1: []
      }
    },
    methods: {
      async getMemberRechargeValue () {
        let list = []
        let list1 = []
        const res = await api.getMemberRecharge()
        if (res.code === 1) {
          this.li = res.data
          for (let i in res.data) {
            list.push(res.data[i].bbase)
            list1.push(res.data[i].bgive)
          }
          list.sort(function (a, b) {
            return a > b ? 1 : -1
          })
          list1.sort(function (a, b) {
            return a > b ? 1 : -1
          })
          for (let i in list) {
            this.num.push(list[i])
          }
          for (let i in list1) {
            this.num1.push(list1[i])
          }
        }
      },
      pointsRule () {
        this.$router.push({path: '/pages/consumeDetail'})
      },
      getMoney (e) {
        this.money = e.mp.detail
      },
      async recharge () {
        let n1, n2, n3, n4
        let t1, t2, t3, t4
        for (let i = 0; i < this.num.length; i++) {
          switch (i) {
            case 0:
              n1 = this.num[i]
              break
            case 1:
              n2 = this.num[i]
              break
            case 2:
              n3 = this.num[i]
              break
            case 3:
              n4 = this.num[i]
              break
          }
        }
        for (let i = 0; i < this.num1.length; i++) {
          switch (i) {
            case 0:
              t1 = this.num1[i]
              break
            case 1:
              t2 = this.num1[i]
              break
            case 2:
              t3 = this.num1[i]
              break
            case 3:
              t4 = this.num1[i]
              break
          }
        }
        const number = parseInt(this.money)
        let totalFee
        if (number < n1) {
          totalFee = number
        } else if (number >= n1 && number < n2) {
          totalFee = number + t1
        } else if (number >= n2 && number < n3) {
          totalFee = number + t2
        } else if (number >= n3 && number < n4) {
          totalFee = number + t3
        } else {
          totalFee = number + t4
        }
        let orderNo = createOrderNo()
        const res = await api.createMemberOrder({
          orderNo: orderNo,
          uId: this.$store.state.miaoyiUser.uid,
          totalFee: totalFee,
          payFee: this.money
        })
        if (res.code === 0) {
          Toast.fail('订单生成失败！')
          return
        }
        prePay({
          bodyInfo: '会员充值',
          outTradeNo: orderNo,
          totalFee: this.money,
          openid: this.$store.state.openid,
          attach: PAY
        })
      }
    }
  }
</script>
<style scoped>
  .info-top {
    height: 305rpx;
    display: flex;
    align-items: center;
    margin-bottom: 15rpx;
    border-bottom: 1px solid whitesmoke;
  }
  .info-top-content {
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .info-top-content-tx {
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: center;
  }
  .info-top-content-co {
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .touxiang {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .tupian, .na {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tupian {
    width: 60%;
  }
  .na {
    width: 40%;
  }
  .na-name, .na-tag, .na-point {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .na-name {
    height: 45%;
    font-size: 14pt;
    color: #353535;
  }
  .na-tag {
    height: 25%;
    margin-bottom: 15rpx;
  }
  .na-point {
    height: 30%;
    font-size: 9pt;
    color: #888;
  }
  .get-points {
    width: 60%;
    height: 30%;
    font-size: 25rpx;
    color: #ed3f14;
    border: 1px solid #ed3f14;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .member-money {
    display: flex;
    justify-content: center;
    margin-bottom: 35rpx;
  }
  .wo-qian {
    width: 90%;
    height: 75rpx;
    display: flex;
    justify-content: space-between;
  }
  .yu-e,.sheng-qian {
    height: 100%;
    font-size: 14pt;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .yu-e {
    width: 30%;
    color: #353535;
    font-weight: bold;
  }
  .sheng-qian {
    width: 30%;
    color: #ed3f14;
  }
  .member-foot {
    height: 125rpx;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .member-cz {
    display: flex;
    justify-content: center;
  }
  .addInput {
    display: flex;
    justify-content: center;
  }
</style>
