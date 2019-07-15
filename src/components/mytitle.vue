<template>
  <div class="mytitle">
    <div style="width: 3%"></div>
    <div class="mytitle-icon"></div>
    <div style="width: 3%"></div>
    <div class="mytitle-text">{{title}}</div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String
      }
    }
  }
</script>
<style scoped>
  .mytitle {
    height: 55rpx;
    width: 100%;
    margin-top: 15rpx;
    margin-bottom: 15rpx;
    display: flex;
    flex-direction: row;
  }
  .mytitle-icon {
    width: 1.5%;
    border-radius: 30px;
    background-color: red;
  }
  .mytitle-text {
    font-size: 14pt;
    color: #353535;
  }
</style>
