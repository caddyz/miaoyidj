<template>
  <div class="order-card">
    <div class="order-content">
      <div class="order-card-img">
        <img style="height: 100%;width: 100%" src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt=""/>
      </div>
      <div style="width: 5%;height: 100%"></div>
      <div class="order-card-content">
        <div class="order-card-content-title">标题</div>
        <div class="order-card-content-tag">
          <i-tag
            class="i-tags"
            name="单个标签"
            color="yellow">
            上门服务
          </i-tag>
        </div>
        <div class="order-card-content-price">￥&nbsp;123</div>
      </div>
      <div class="order-card-num">
        x&nbsp;1
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped>
  .order-card {
    height: 245rpx;
    display: flex;
    justify-content: center;
    margin-bottom: 25rpx;
  }
  .order-content {
    margin-top: 25rpx;
    width: 90%;
    display: flex;
    flex-direction: row;
  }
  .order-card-img {
    width: 30%;
    height: 100%;
  }
  .order-card-content {
    width: 45%;
    height: 100%;
  }
  .order-card-num {
    width: 20%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    font-size: 14pt;
    color: #888;
  }
  .order-card-content-title,.order-card-content-tag,.order-card-content-price {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .order-card-content-title {
    height: 40%;
    font-size: 14pt;
    color: #353535;
  }
  .order-card-content-tag {
    height: 30%;
  }
  .order-card-content-price {
    height: 30%;
    font-size: 13pt;
    color: red;
  }
</style>
