<template>
  <div>
    <div class="details-img">
      <img style="height: 100%;width: 100%" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
    </div>
    <div class="details-i">
      <div class="details-info">

      </div>
    </div>
    <div class="foot">
      <div class="foot-icon" @click="callMerchant">
        <div class="foot-icon-img">
          <i-icon type="mobilephone" size="32"/>
        </div>
        <div class="foot-icon-text">联系商家</div>
      </div>
      <button class="foot-icon" open-type="share">
        <div class="foot-icon-img">
          <i-icon type="share" size="32"/>
        </div>
        <div class="foot-icon-text">分享</div>
      </button>
      <div class="foot-button">
        <div class="foot-button-in">
          立即预约
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    config: {
      usingComponents: {
        'i-icon': '../../static/iview/icon/index',
        'i-button': '../../static/iview/button/index'
      }
    },
    data () {},
    methods: {
      callMerchant () {
        wx.makePhoneCall({
          phoneNumber: '1340000' // 仅为示例，并非真实的电话号码
        })
      },
      sharePage () {

      }
    }
  }
</script>
<style scoped>
  .details-img {
    height: 395rpx;
    margin-bottom: 15rpx;
  }
  .details-info {
    height: 195rpx;
    width: 95%;
    margin-top: 15rpx;
    background-color: aqua;
  }
  .details-i {
    display: flex;
    justify-content: center;
  }
  .foot {
    height: 125rpx;
    position: fixed;
    left: 0;
    bottom: 5rpx;
    width: 100%;
    /*z-index: 9999;*/
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
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .foot-button-in {
    height: 75%;
    width: 75%;
    background-color: #FF3300;
    opacity: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button::after {
    border: none;
  }
  button {
    background-color: #fff;
    border-radius:0;
  }
</style>
