<template>
  <div>
    <div class="details-img">
      <img style="height: 100%;width: 100%" :src="productInfo.pcover"/>
    </div>
    <div class="details-i">
      <div class="details-info">
        <div class="details-info-title">{{productInfo.pname}}</div>
        <div class="details-info-price">￥&nbsp;{{productInfo.pprice}}元&nbsp;&nbsp;
          <div class="original-class">原价:{{productInfo.poriginalPrice}}</div>&nbsp;&nbsp;&nbsp;&nbsp;
          <i-tag
            class="i-tags"
            name="单个标签"
            color="red">
            一口价
          </i-tag>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i-tag
            class="i-tags"
            name="单个标签"
            color="yellow">
            上门服务
          </i-tag>
        </div>
        <div class="details-info-remark">项目简介：{{productInfo.pintroInfo}}</div>
        <div class="details-info-review">好评率100%</div>
      </div>
    </div>
    <div style="height: 15rpx;background-color: whitesmoke"></div>
    <mytitle :title="title3"/>
    <div class="service-info">
<!--      <div class="service-info-content">-->
<!--        {{productInfo.pname}}/{{productInfo.pprice}}元-->
<!--      </div>-->
      <wx-parse :content="productInfo.pdetailInfo"/>
    </div>
    <div style="height: 15rpx;background-color: whitesmoke"></div>
    <mytitle :title="title1"/>
    <div class="estimate">
      <review :review="reviewInfo"/>
    </div>
    <div class="more-estimate">
      <button class="more-estimate-button" @click="moreReview">查看更多</button>
    </div>
    <div style="height: 15rpx;background-color: whitesmoke"></div>
    <mytitle :title="title4"/>
    <wx-parse :content="productHtmlImg"/>
    <div style="height: 15rpx;background-color: whitesmoke"></div>
    <mytitle :title="title2"/>
    <div class="estimate">
      <div class="estimate-content">
        1、本店严格拒绝一切形式的非正规服务，举报有奖；<br/>
        2、订单确认后修改订单或退款需提前两小时通知；<br/>
        3、预约时间前两小时退款将按30元/人扣取空单费；<br/>
        4、如商家接单后爽约将全额退款并向您额外赔付30元；<br/>
        5、为保障您的权益，所有费用请通过妙尚佳平台支付；<br/>
        6、本店24小时上门服务，因夜间交通不便，晚21:00-7:00之间服务的订单，
        须向技师支付30元车费。<br>
        7、最终解释权归本公司所有。
      </div>
    </div>
    <div class="foot">
      <button class="foot-icon" @click="callMerchant">
        <div class="foot-icon-img">
          <i-icon type="mobilephone" size="32" color="#FF9912"/>
        </div>
        <div class="foot-icon-text">热线</div>
      </button>
      <button class="foot-icon" open-type="share">
        <div class="foot-icon-img">
          <i-icon type="share" size="32" color="#FF9912"/>
        </div>
        <div class="foot-icon-text">分享</div>
      </button>
      <!---->
      <div class="foot-button">
        <div style="height: 10%"></div>
        <i-button class="foot-button" @click="placeOrder" type="error" long="true">立即预约</i-button>
      </div>
      <div style="width: 5%;background-color: white;height: 100%"></div>
    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
  import mytitle from '@/components/mytitle'
  import review from '@/components/review'
  import { mapState } from 'vuex'
  import wxParse from 'mpvue-wxparse'
  import Dialog from '../../static/vant/dialog/dialog'
  import api from '@/api/index'
  export default {
    config: {
      navigationBarTitleText: '',
      usingComponents: {
        'i-icon': '../../static/iview/icon/index',
        'i-tag': '../../static/iview/tag/index',
        'i-avatar': '../../static/iview/avatar/index',
        'i-button': '../../static/iview/button/index',
        'i-rate': '../../static/iview/rate/index',
        'van-dialog': '../../static/vant/dialog/index',
        'van-popup': '../../static/vant/popup/index',
        'van-button': '../../static/vant/button/index'
      }
    },
    computed: {
      ...mapState([
        'phone',
        'productInfo',
        'miaoyiUser'
      ])
    },
    components: {
      mytitle,
      review,
      wxParse
    },
    async mounted () {
      await Promise.all([
        this.getListImage(this.$store.state.productInfo.pid),
        this.getNowReview()
      ])
      wx.setNavigationBarTitle({
        title: this.$store.state.productInfo.pname
      })
    },
    data () {
      return {
        title1: '用户评价',
        title2: '订购须知',
        title3: '服务详情',
        title4: '图文详情',
        productHtmlImg: '',
        reviewInfo: {
          user: {
            uavatar: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
            uname: '卡萨'
          },
          rrate: 5,
          rreviewTime: '2019-07-17 19:49:08',
          rcontent: '哈哈哈哈'
        },
        productItem: ''
      }
    },
    methods: {
      callMerchant () {
        Dialog.confirm({
          message: '是否拨打电话'
        }).then(() => {
          wx.makePhoneCall({
            phoneNumber: this.$store.state.phone
          })
        }).catch(() => {
        })
      },
      placeOrder () {
        if (this.$store.state.miaoyiUser.uname === undefined) {
          Dialog.confirm({
            title: '您还未登录',
            message: '去登录'
          }).then(() => {
            this.$router.push({path: '/pages/info', isTab: true})
          }).catch(() => {
          })
          return
        }
        const url = '/pages/placeOrder'
        this.$router.push(url)
      },
      moreReview () {
        this.$router.push({path: '/pages/appraise'})
      },
      async getListImage (id) {
        const res = await api.getHtmlCode(id)
        if (res.code === 1) {
          this.productHtmlImg = res.data
        }
      },
      async getNowReview () {
        const data = await api.getDetailReview()
        if (data.code === 1) {
          this.reviewInfo = data.data
        }
      }
    }
  }
</script>
<style scoped>
  @import url("~mpvue-wxparse/src/wxParse.css");
  .details-img {
    height: 395rpx;
    margin-bottom: 15rpx;
  }
  .details-info {
    height: 265rpx;
    width: 95%;
    margin-top: 15rpx;
  }
  .details-i {
    display: flex;
    justify-content: center;
  }
  .details-info-title,.details-info-review,.details-info-price,.details-info-remark {
    display: flex;
    align-items: center;
    height: 45rpx;
    width: 100%;
    margin-bottom: 25rpx;
  }
  .details-info-title {
    font-size: 17pt;
    color: #353535;
  }
  .details-info-review {
    font-size: 9pt;
    color: #888;
    justify-content: flex-end;
  }
  .details-info-remark {
    font-size: 11pt;
    color: #888;
    flex-wrap: wrap;
  }
  .details-info-price {
    font-size: 14pt;
    color: red;
  }
  .foot {
    height: 125rpx;
    position: fixed;
    left: 0;
    bottom: 5rpx;
    width: 100%;
    z-index: 9999;
    border-top: 1px solid lightgrey;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .foot-icon {
    width: 20%;
    height: 100%;
  }
  .foot-icon-img {
    height: 65%;
    width: 100%;
  }
  .foot-icon-text {
    height: 35%;
    width: 100%;
    font-size: 9pt;
    color: #888;
  }
  .foot-icon-img,.foot-icon-text {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .foot-button {
    width: 55%;
    height: 100%;
    background-color: white;
  }
  button::after {
    border: none;
  }
  button {
    background-color: #fff;
    border-radius:0;
  }
  .estimate,.service-info {
    display: flex;
    justify-content: center;
  }
  .estimate-content {
    width: 90%;
    font-size: 11pt;
    color: #888;
    margin-bottom: 25rpx;
  }
  .more-estimate {
    margin-top: 5rpx;
    height: 75rpx;
    display: flex;
    justify-content: center;
  }
  .more-estimate-button {
    width: 30%;
    height: 90%;
    font-size: 11pt;
    color: red;
    border: 1px solid red;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .estimate-content {
    padding-bottom: 155rpx;
  }
  .service-info-content {
    width: 90%;
    font-size: 12pt;
    color: #353535;
  }
  .original-class {
    font-size: 11pt;
    text-decoration: line-through;
  }
</style>
