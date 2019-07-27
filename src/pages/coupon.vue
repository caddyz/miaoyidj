<template>
  <div>
    <div v-if="couponList.length > 0">
      <couponitem :buContro="isInfo" v-for="(item,index) in couponList" :key="index" :couponItem="item"/>
      <div style="background-color: whitesmoke;height: 25rpx"></div>
    </div>
    <div class="noi" v-else>
      您没有优惠券
    </div>
  </div>
</template>
<script>
  import couponitem from '@/components/coupon_item'
  import { mapState } from 'vuex'
  import api from '@/api/index'
  export default {
    config: {
      navigationBarTitleText: '优惠券'
    },
    computed: {
      ...mapState([
        'miaoyiUser'
      ])
    },
    components: {
      couponitem
    },
    mounted () {
      this.getCouponList(this.$store.state.miaoyiUser.uid)
      this.isInfo = this.$route.query.isInfo !== undefined
    },
    data () {
      return {
        isInfo: '',
        couponList: []
      }
    },
    methods: {
      async getCouponList (userId) {
        const res = await api.getListCoupon(userId)
        if (res.code === 1) {
          this.couponList = res.data
        }
      }
    }
  }
</script>
<style scoped>
  .noi {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    font-size: 13pt;
  }
</style>
