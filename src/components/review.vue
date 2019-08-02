<template>
  <div class="review-info">
    <div class="review-info-name">
      <div class="review-info-avatar">
        <i-avatar :src="review.user.uavatar" size="large" shape="circle"></i-avatar>
      </div>
      <div class="review-info-rate">
        <div class="rate-name">{{review.user.uname}}</div>
          <i-rate
            :disabled="dis"
            :value="review.rrate">
          </i-rate>
      </div>
      <div class="review-info-time">{{review.rreviewTime}}</div>
    </div>
    <div class="review-content">{{review.rcontent}}</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dis: true,
        starIndex: 5,
        rateTime: '2019.07.02 19:35:35'
      }
    },
    props: {
      review: {
        type: Object
      }
    }
  }
</script>
<style scoped>
  .review-info {
    width: 90%;
    height: 275rpx;
  }
  .review-info-name {
    height: 95rpx;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-bottom: 25rpx;
  }
  .review-info-avatar {
    width: 20%;
    height: 100%;
  }
  .review-info-rate {
    width: 50%;
    height: 100%;
  }
  .review-info-time {
    width: 30%;
    height: 100%;
    font-size: 9pt;
    color: #888;
  }
  .rate-name {
    height: 50%;
    width: 100%;
    font-size: 11pt;
    color: #353535;
  }
  .review-content {
    font-size: 11pt;
    color: #888;
  }
</style>
