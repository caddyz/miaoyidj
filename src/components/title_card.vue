<template>
  <div class="address-card" @click="goSkip">
    <div class="address-card-back">
      <div class="address-card-icon">
        <slot></slot>
      </div>
      <div class="address-text-else">
        {{tit}}
      </div>
      <div class="address-text-show">
        {{timeVal}}
      </div>
      <div class="address-card-bottom-icon">
        <i-icon type="enter" size="20" color="lightgrey"/>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      tit: {
        type: String
      },
      timeVal: {
        type: String
      },
      url: {
        type: String
      }
    },
    methods: {
      goSkip () {
        if (this.url === 'phone') {
          wx.makePhoneCall({
            phoneNumber: '1340000' // 仅为示例，并非真实的电话号码
          })
          return
        }
        if (!(this.url === undefined)) {
          this.$router.push(this.url)
        }
      }
    }
  }
</script>
<style scoped>
  .address-card {
    height: 106rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rpx;
  }
  .address-card-back {
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 100%;
    border-bottom: 1px solid whitesmoke;
  }
  .address-text-else {
    width: 33%;
    color: #888;
  }
  .address-text-show,.address-text-else {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 13pt;
  }
  .address-text-show {
    width: 50%;
    color: red;
    justify-content: flex-end;
  }
  .address-card-icon {
    width: 7%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .address-card-bottom-icon {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>
