<template>
  <div class="it-com" :data-id="pro.id" @click="itemGoInfo($event)">
    <div class="it-img">
      <img style="width: 100%;height: 100%;border-radius: 10px" :src="pro.img"/>
    </div>
    <div class="it-tit">
      {{pro.title}}
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      pro: {
        type: Object
      }
    },
    methods: {
      itemGoInfo (e) {
        console.log('获取id：', e.currentTarget.dataset.id)
      }
    }
  }
</script>
<style scoped>
  .it-com {
    height: 225rpx;
    width: 165rpx;
  }
  .it-img {
    height: 80%;
    width: 100%;
  }
  .it-tit {
    height: 20%;
    width: 100%;
    font-size: 24rpx;
    color: #888888;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
