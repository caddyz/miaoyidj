<template>
  <div>
    <div class="address-item">
      <div class="address-item-con">
        <div class="moren" v-if="showBo">
          <van-icon name="checked" />
        </div>
        <div class="address-item-add">
          <div class="address-item-big">安神123</div>
          <div class="address-item-small">阿斯弗 1878</div>
        </div>
        <div class="address-item-ic">
          <van-icon @click="addressEdit" name="edit" size="24px"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      addressItem: {
        type: Object
      },
      showBo: {
        type: Boolean
      }
    },
    methods: {
      addressEdit () {
        this.$router.push({path: '/pages/addressEditor'})
      }
    }
  }
</script>
<style scoped>
  .address-item {
    height: 115rpx;
    display: flex;
    justify-content: center;
    margin-top: 15rpx;
  }
  .address-item-con {
    width: 90%;
    display: flex;
    flex-direction: row;
    padding-bottom: 25rpx;
    border-bottom: 1px solid whitesmoke;
  }
  .address-item-add {
    width: 85%;
    height: 100%;
  }
  .address-item-ic {
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .address-item-small,.address-item-big {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .address-item-big {
    height: 70%;
    font-size: 11pt;
    color: #353535;
  }
  .address-item-small {
    height: 30%;
    font-size: 9pt;
    color: #888;
  }
  .moren {
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
