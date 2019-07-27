<template>
  <div class="contain" @click="goInfo(info)">
    <div class="imgg">
      <img style="width: 100%;height: 100%;border-radius: 10px" :src="info.pcover" mode="aspectFill" alt=""/>
    </div>
    <div style="width: 5%"></div>
    <div class="content">
      <div class="content_ti">{{info.pname}}</div>
      <div class="content_info">{{info.pintroInfo}}</div>
      <div class="content_price">
        <div class="pri">
          <span style="align-self: flex-end">￥</span>
          <span style="font-size: 40rpx;">{{info.pprice}}</span>
          <span style="align-self: flex-end">元</span>
        </div>
        <div class="po">{{info.poriginalPrice}}元</div>
        <div class="com">好评率99%</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    props: {
      info: {
        type: Object
      }
    },
    methods: {
      ...mapMutations([
        'saveProductInfo'
      ]),
      goInfo (info) {
        this.saveProductInfo(info)
        this.$router.push({path: '/pages/details'})
      }
    }
  }
</script>

<style scoped>
  .contain {
    margin-top: 10rpx;
    margin-bottom: 30rpx;
    height: 265rpx;
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .imgg {
    width: 40%;
    height: 100%;
    border-radius: 10px;
  }
  .content {
    width: 65%;
    height: 100%;
  }
  .content_ti,.content_info{
    width: 100%;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow:hidden;
  }
  .content_ti {
    height: 20%;
    font-size: 38rpx;
    font-weight: 500;
    white-space: nowrap;
  }
  .content_info {
    height: 50%;
    font-size: 30rpx;
    color: #888888;
  }
  .content_price {
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .pri,.po,.com {
    display: flex;
    align-self: flex-end;
    font-size: 26rpx;
  }
  .pri {
    color: red;
  }
  .po {
    color: red;
    text-decoration: line-through;
  }
  .com {
    color: #888888;
  }
</style>
