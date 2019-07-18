<template>
  <div>
    <div class="coupon-item">
      <div class="coupon-item-con">
        <div class="coupon-item-info">
          <div class="coupon-item-ti">
            <div class="coupon-title">妙伊到家优惠券</div>
            <div class="coupon-text">有效期:22</div>
            <div class="coupon-text">本优惠券不与会员同用</div>
          </div>
          <div class="coupon-item-to">
            <div>
              <div class="coupon-zhekou">8&nbsp;<span style="font-weight: normal;font-size: 26rpx">折</span></div>
              <button class="in" >使用</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      couponItem: {
        type: Object
      }
    }
  }
</script>
<style scoped>
  .coupon-item {
    height: 225rpx;
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
    font-size: 9pt;
    color: #353535;
    font-weight: bold;
  }
  .coupon-text {
    height: 33%;
    font-size: 7pt;
    color: #888;
    font-weight: 300;
  }
  .coupon-zhekou {
    font-size: 13pt;
    font-weight: bold;
    text-align: center;
    color: red;
  }
</style>
