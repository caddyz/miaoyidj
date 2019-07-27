<template>
  <div>
    <div class="coupon-item">
      <div class="coupon-item-con">
        <div class="coupon-item-info">
          <div class="coupon-item-ti">
            <div class="coupon-title">{{couponItem.cname}}</div>
            <div class="coupon-text">有效期:{{couponItem.caging}}</div>
            <div class="coupon-text">最终解释权归本店所有</div>
          </div>
          <div class="coupon-item-to">
            <div>
              <div v-if="couponItem.cstatus === 1" class="coupon-zhekou">{{couponItem.cvalue}}&nbsp;<span style="font-weight: normal;font-size: 26rpx">元</span></div>
              <div v-if="couponItem.cstatus === 2" class="coupon-zhekou">{{couponItem.cvalue}}&nbsp;<span style="font-weight: normal;font-size: 26rpx">折</span></div>
              <button class="in" @click="onClickCoupon">{{buVal}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    props: {
      couponItem: {
        type: Object
      },
      buContro: {
        type: Boolean
      }
    },
    mounted () {
      if (this.buContro) {
        this.buVal = '使用'
      } else {
        this.buVal = '选择'
      }
    },
    data () {
      return {
        buVal: ''
      }
    },
    methods: {
      ...mapMutations([
        'saveCouponInfo'
      ]),
      onClickCoupon () {
        if (this.buContro) {
          this.$router.push({path: '/pages/index', isTab: true})
        } else {
          this.saveCouponInfo(this.couponItem)
          this.$router.back(-1)
        }
      }
    }
  }
</script>
<style scoped>
  .coupon-item {
    height: 325rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: whitesmoke;
  }
  .coupon-item-con {
    height: 80%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
  .coupon-item-info {
    height: 80%;
    width: 90%;
    display: flex;
    flex-direction: row;
  }
  .coupon-item-ti {
    width: 60%;
    height: 100%;
    border-right: 1px dashed whitesmoke;
  }
  .coupon-item-to {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .in {
    height: 45rpx;
    width: 155rpx;
    background-color: red;
    font-size: 24rpx;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .coupon-text,.coupon-title {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .coupon-title {
    height: 44%;
    font-size: 13pt;
    color: #353535;
    font-weight: bold;
  }
  .coupon-text {
    height: 33%;
    font-size: 8pt;
    color: #888;
    font-weight: 300;
  }
  .coupon-zhekou {
    font-size: 15pt;
    font-weight: bold;
    text-align: center;
    color: red;
  }
</style>
