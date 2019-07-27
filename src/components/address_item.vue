<template>
  <div>
    <div class="address-item">
      <div class="address-item-con">
        <div class="moren" v-if="showBo">
          <van-icon :color="addressItem.color" name="checked" />
        </div>
        <div class="address-item-add">
          <div class="address-item-big">{{addressItem.aaddress}}&nbsp;&nbsp;{{addressItem.aaddressDetail}}</div>
          <div class="address-item-small">{{addressItem.aname}}&nbsp;&nbsp;{{addressItem.amobile}}</div>
        </div>
        <div class="address-item-ic">
          <van-icon @click.stop="addressEdit" name="edit" size="24px"/>
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
        this.$router.push({path: '/pages/addressEditor', query: {item: JSON.stringify(this.addressItem)}})
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
