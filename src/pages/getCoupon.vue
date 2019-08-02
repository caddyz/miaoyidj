<template>
  <div class="quanbu">
    <i-button @click="getNewUserCoupon" inline type="error">领取新人优惠</i-button>
  </div>
</template>
<script>
  export default {
    config: {
      navigationBarTitleText: '优惠券领取',
      usingComponents: {
        'i-button': '../../static/iview/button/index'
      }
    },
    data () {
      return {}
    },
    methods: {
      getNewUserCoupon () {
        console.log('ling')
      }
    }
  }
</script>
<style scoped>
  .quanbu {
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564335011402&di=cfabceeb139c1400b6c5c126451959a4&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201207%2F23%2F20120723102604_eLvSm.jpeg");
  }
</style>
