<template>
  <div class="address-card" @click="chooseAddress">
    <div class="address-card-back">
      <div class="address-card-icon" v-show="showVal">
        <i-icon size="18" type="coordinates"/>
      </div>
      <div class="address-text-else">
        服务地址
      </div>
      <div class="address-text">
        <div class="address-text-top">
          {{addressObj.aaddress}}
        </div>
        <div class="address-text-bottom">
          {{addressObj.aaddressDetail}}
        </div>
      </div>
      <div class="address-card-bottom-icon">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      showVal: {
        type: Boolean
      },
      addressObj: {
        type: Object
      }
    },
    data () {
      return {
      }
    },
    methods: {
      chooseAddress () {
        this.$router.push({path: '/pages/address', query: {id: 1}})
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
  }
  .address-card-back {
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 100%;
    border-bottom: 1px solid whitesmoke;
  }
  .address-text {
    margin-top: 10rpx;
    width: 50%;
    height: 100%;
  }
  .address-text-top,.address-text-bottom {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 50%;
  }
  .address-text-top {
    font-size: 13pt;
    color: #353535;
  }
  .address-text-bottom {
    font-size: 11pt;
    color: #888;
    height: 50%;
  }
  .address-text-else {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 13pt;
    color: #888;
    width: 33%;
  }
  .address-card-icon {
    width: 7%;
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
