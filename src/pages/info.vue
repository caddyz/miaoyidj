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
                    会员
                  </i-tag>
                  <i-tag v-else
                         class="i-tags"
                         name="单个标签"
                         color="yellow">
                    用户
                  </i-tag>
                </div>
                <div class="na-point">积分:{{miaoyiUser.upoints}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="info-top-content-co">
          <button class="get-points" @click="getPoints">积分规则</button>
        </div>
      </div>
    </div>
    <div class="info-bottom">
      <div class="info-bottom-content">
        <titlecard :tit="t1" :url="t1url">
         <i class="iconfont icon-weibiaoti---copy-copy"></i>
        </titlecard>
        <titlecard :tit="t2" :url="t2url">
          <i class="iconfont icon-youhui"></i>
        </titlecard>
        <titlecard :tit="t3" :url="t3url">
          <i class="iconfont icon-dizhi"></i>
        </titlecard>
        <buttoncard :tit="t4" :openType="openTypeVal">
          <i class="iconfont icon-huabankafu"></i>
        </buttoncard>
        <div class="address-card" @click="callPhone">
          <div class="address-card-back">
            <div class="address-card-icon">
              <i class="iconfont icon-rexian"></i>
            </div>
            <div class="address-text-else">
              妙尚佳热线
            </div>
            <div class="address-text-show">
            </div>
            <div class="address-card-bottom-icon">
              <i-icon type="enter" size="20" color="lightgrey"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
  import titlecard from '@/components/title_card'
  import buttoncard from '@/components/button_card'
  import { mapState, mapMutations } from 'vuex'
  import Dialog from '../../static/vant/dialog/dialog'
  export default {
    config: {
      navigationBarTitleText: '我的',
      usingComponents: {
        'i-tag': '../../static/iview/tag/index',
        'i-icon': '../../static/iview/icon/index',
        'i-button': '../../static/iview/button/index',
        'van-dialog': '../../static/vant/dialog/index',
        'van-popup': '../../static/vant/popup/index',
        'van-button': '../../static/vant/button/index'
      }
    },
    computed: {
      ...mapState([
        'openid',
        'miaoyiUser',
        'phone'
      ])
    },
    components: {
      titlecard,
      buttoncard
    },
    data () {
      return {
        t1: '我的会员',
        t1url: '/pages/member',
        t2: '我的优惠',
        t2url: '/pages/coupon?isInfo=true',
        t3: '我的地址',
        t3url: '/pages/address',
        t4: '妙尚佳客服',
        openTypeVal: 'contact',
        userInfo: {}
      }
    },
    mounted () {
    },
    methods: {
      ...mapMutations([
        'saveMiaoyiUser'
      ]),
      getPoints () {
        Dialog.alert({
          message: '积分只在会员充值时赠送,充值多少送多少积分'
        }).then(() => {
          // on close
        })
      },
      callPhone () {
        Dialog.confirm({
          message: '是否拨打电话'
        }).then(() => {
          wx.makePhoneCall({
            phoneNumber: this.$store.state.phone
          })
        }).catch(() => {
        })
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../static/assets/iconfont.css";
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
  .info-bottom {
    display: flex;
    justify-content: center;
  }
  .info-bottom-content {
    width: 93%;
  }
  .address-card {
    height: 106rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rpx;
  }
  .address-card-back {
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 100%;
    border-bottom: 1px solid whitesmoke;
  }
  .address-text-else {
    width: 33%;
    color: #888;
  }
  .address-text-show,.address-text-else {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 13pt;
  }
  .address-text-show {
    width: 50%;
    color: red;
    justify-content: flex-end;
  }
  .address-card-icon {
    width: 7%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .address-card-bottom-icon {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>
