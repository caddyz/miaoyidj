<template>
  <div>
    <div class="info-top">
      <div class="info-top-content">
        <div class="info-top-content-tx">
          <div class="touxiang">
            <div class="tupian">
              <img style="width: 90%;height: 90%;border-radius: 50px" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
            </div>
            <div class="na">
              <div style="width: 90%;height: 100%;">
                <div class="na-name">kaiserZ</div>
                <div class="na-tag">
                  <i-tag v-if="memberTrue"
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
                <div class="na-point">积分:12</div>
              </div>
            </div>
          </div>
        </div>
        <div class="info-top-content-co">
          <button class="get-points" @click="getPoints">获取积分</button>
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
        <titlecard :tit="t5" :url="t5Val">
          <i class="iconfont icon-rexian"></i>
        </titlecard>
      </div>
    </div>
  </div>
</template>
<script>
  import titlecard from '@/components/title_card'
  import buttoncard from '@/components/button_card'

  export default {
    config: {
      navigationBarTitleText: '我的',
      usingComponents: {
        'i-tag': '../../static/iview/tag/index',
        'i-icon': '../../static/iview/icon/index',
        'i-button': '../../static/iview/button/index'
      }
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
        t2url: '/pages/coupon',
        t3: '我的地址',
        t3url: '/pages/address',
        t4: '妙伊客服',
        t5: '妙伊热线',
        t5Val: 'phone',
        openTypeVal: 'contact',
        memberTrue: false
      }
    },
    methods: {
      getPoints () {
        const url = '/pages/member'
        this.$router.push(url)
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
</style>
