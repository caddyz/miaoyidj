<template>
  <div class="cont">
    <div class="intro-container" :data-item="orderVal" @click="checkOrderDetail">
      <div class="intro-content">
        <div class="intro-top">
          <div class="intro-top-name">
            <div class="intro-top-name-img">
              <div style="height: 80%;width: 70%;">
                <img style="height: 100%;width: 100%" src="/static/img/sj.png" alt=""/>
              </div>
            </div>
            <div class="intro-top-name-name">秒一到家</div>
          </div>
          <div class="intro-top-state">{{payState}}</div>
        </div>
        <div class="intro-content-middle">
          <div class="intro-content-middle-content">
            <van-icon name="clock-o" size="11"/>
            <div style="width: 2%;"></div>
            <div class="middle-content-text">{{orderVal.timeVal}}</div>
          </div>
          <div class="intro-content-middle-content">
            <van-icon name="location-o" size="11"/>
            <div style="width: 2%;"></div>
            <div class="middle-content-text">{{orderVal.addressVal}}</div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 10rpx"></div>
    <div class="intro-button">
      <van-button plain hairline type="danger" size="small" @click="buttonClick">{{buttonVal}}</van-button>
    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import Dialog from '../../static/vant/dialog/dialog'
  export default {
    props: {
      orderVal: {
        type: Object
      }
    },
    computed: {
      ...mapState([
        'phone'
      ])
    },
    data () {
      return {
        payState: '',
        buttonVal: ''
      }
    },
    mounted () {
      switch (this.orderVal.state) {
        case 0:
          this.payState = '已取消'
          this.buttonVal = '联系商家'
          break
        case 1:
          this.payState = '待付款'
          this.buttonVal = '去支付'
          break
        case 2:
          this.payState = '已支付'
          this.buttonVal = '联系商家'
          break
        case 3:
          this.payState = '已完成'
          this.buttonVal = '去评价'
          break
      }
    },
    methods: {
      checkOrderDetail (e) {
        console.log('订单:', e.mp.currentTarget.dataset.item)
        const url = '/pages/orderDetail'
        this.$router.push(url)
      },
      buttonClick () {
        switch (this.orderVal.state) {
          case 0:
          case 2:
            Dialog.confirm({
              message: '是否拨打电话'
            }).then(() => {
              wx.makePhoneCall({
                phoneNumber: this.$store.state.phone
              })
            }).catch(() => {
            })
            break
          case 1:
            const url1 = '/pages/pay'
            this.$router.push(url1)
            break
          case 3:
            this.$router.push({path: '/pages/appraiseAdd'})
            break
        }
      }
    }
  }
</script>
<style scoped>
  .intro-container {
    padding-top: 25rpx;
    margin-top: 55rpx;
    display: flex;
    justify-content: center;
    border-top: 1px solid #FF9912;
  }
  .intro-content {
    width: 93%;
    padding-bottom: 7rpx;
    border-bottom: 1px solid whitesmoke;
  }
  .intro-top {
    width: 100%;
    height: 65rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10rpx;
    border-bottom: 1px solid whitesmoke;
  }
  .intro-top-name {
    height: 100%;
    width: 75%;
    display: flex;
    flex-direction: row;
  }
  .intro-top-state {
    height: 100%;
    width: 20%;
    font-size: 11pt;
    color: red;
  }
  .intro-top-name-img {
    width: 15%;
    height: 100%;
  }
  .intro-top-name-name {
    width: 85%;
    height: 100%;
    font-size: 11pt;
    color: #353535;
  }
  .intro-content-middle {
    padding-top: 15rpx;
    height: 90rpx;
    margin-bottom: 30rpx;
  }
  .intro-content-middle-content {
    height: 50%;
    width: 100%;
    margin-bottom: 15rpx;
    display: flex;
  }
  .middle-content-text {
    font-size: 11pt;
    color: #888;
    display: flex;
    align-items: flex-start;
  }
  van-icon {
    display: flex;
    align-items: center;
  }
  .intro-button {
    width: 96.5%;
    display: flex;
    justify-content: flex-end;
  }
</style>
