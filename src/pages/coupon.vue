<template>
  <div>
    <couponitem/>
    <div style="background-color: whitesmoke;height: 45rpx"></div>
  </div>
</template>
<script>
  import couponitem from '@/components/coupon_item'
  export default {
    config: {
      navigationBarTitleText: '优惠券'
    },
    components: {
      couponitem
    },
    data () {
      return {}
    }
  }
</script>
<style></style>
