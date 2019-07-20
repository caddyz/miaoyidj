<template>
  <div>
    <div class="details-img">
      <img style="height: 100%;width: 100%" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
    </div>
    <div class="details-i">
      <div class="details-info">
        <div class="details-info-title">这是标题</div>
        <div class="details-info-price">￥&nbsp;123元&nbsp;&nbsp;&nbsp;&nbsp;
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
        <div class="details-info-remark">项目简介：这是简介</div>
        <div class="details-info-review">好评率100%</div>
      </div>
    </div>
    <div style="height: 15rpx;background-color: whitesmoke"></div>
    <mytitle :title="title1"/>
    <div class="estimate">
      <review/>
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
        下单时请注意查看地址是否正确，并仔细填写手机号，支付前请详细核对订单信息。
        手机注意保持电话通畅，请注意不要遗漏技师来电，如果因为手机号无效所产生的
        服务未完成，概不负责。
      </div>
    </div>
    <div style="height: 15rpx;background-color: whitesmoke"></div>
    <mytitle :title="title3"/>
    <div class="service-info">
      <div class="service-info-content">
        这是标题/122元
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
  </div>
</template>
<script>
  import mytitle from '@/components/mytitle'
  import review from '@/components/review'
  import { mapState } from 'vuex'
  import wxParse from 'mpvue-wxparse'
  import api from '@/api/index'
  export default {
    config: {
      usingComponents: {
        'i-icon': '../../static/iview/icon/index',
        'i-tag': '../../static/iview/tag/index',
        'i-avatar': '../../static/iview/avatar/index',
        'i-button': '../../static/iview/button/index',
        'i-rate': '../../static/iview/rate/index'
      }
    },
    computed: {
      ...mapState([
        'phone'
      ])
    },
    components: {
      mytitle,
      review,
      wxParse
    },
    mounted () {
      console.log('res：', this.$route.query.item)
      this.getListImage(1)
      // await Promise.all([
      //   this.getListImage(1)
      // ])
    },
    data () {
      return {
        title1: '用户评价',
        title2: '温馨提示',
        title3: '服务详情',
        title4: '项目详情',
        productHtmlImg: '',
        productItem: ''
      }
    },
    methods: {
      callMerchant () {
        wx.makePhoneCall({
          phoneNumber: this.$store.state.phone
        })
      },
      placeOrder () {
        const url = '/pages/placeOrder'
        this.$router.push(url)
      },
      moreReview () {
        console.log('查看更多评价')
      },
      async getListImage (id) {
        const res = await api.getHtmlCode(id)
        this.productHtmlImg = res.data
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
    text-indent: 2em;
    margin-bottom: 25rpx;
  }
  .more-estimate {
    margin-top: 25rpx;
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
  .service-info {
    padding-bottom: 155rpx;
  }
  .service-info-content {
    width: 90%;
    font-size: 12pt;
    color: #353535;
  }
</style>
