<template>
  <div class="contain" @click="goInfo">
    <div class="imgg">
      <img style="width: 100%;height: 100%;border-radius: 10px" :src="info.img" alt=""/>
    </div>
    <div style="width: 5%"></div>
    <div class="content">
      <div class="content_ti">{{info.title}}</div>
      <div class="content_info">{{info.remark}}</div>
      <div class="content_price">
        <div class="pri">
          <span style="font-size: 46rpx">{{info.price}}</span>
          <span style="align-self: flex-end">元</span>
        </div>
        <div class="com">好评率99%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    info: {
      type: Object
    }
  },
  methods: {
    goInfo () {
      console.log('sss')
    }
  }
}
</script>

<style scoped>
  .contain {
    margin-top: 10rpx;
    margin-bottom: 30rpx;
    height: 275rpx;
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
  .content_ti {
    height: 20%;
    width: 100%;
    font-size: 14pt;
    font-weight: 500;
  }
  .content_info {
    height: 50%;
    width: 100%;
    font-size: 11pt;
    color: #888888;
    word-break: break-word;
  }
  .content_price {
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .pri,.com {
    display: flex;
    align-self: flex-end;
  }
  .pri {
    color: red;
    font-size: 11pt;
  }
  .com {
    color: #888888;
    font-size: 11pt;
  }
</style>
