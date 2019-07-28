<template>
  <div>
    <div>评分</div>
    <i-rate
      @change="changeRate"
      :value="rate">
    </i-rate>
    <div>
      <div>评价</div>
      <!--<van-field
        :value="message"
        type="textarea"
        placeholder="请输入评价内容"
        autosize
        :border="borderBo"
        @change="getMessageVal"
      />-->
<!--      <van-button type="primary">提交评价</van-button>-->

    </div>
  </div>
</template>
<script>
  export default {
    config: {
      navigationBarTitleText: '评价',
      usingComponents: {
        'i-rate': '../../static/iview/rate/index',
        'i-button': '../../static/iview/button/index',
        'i-input': '../../static/iview/input/index'
      }
    },
    data () {
      return {
        rate: 0,
        borderBo: false,
        message: ''
      }
    },
    methods: {
      getMessageVal (e) {
        this.message = e.mp.detail
      },
      changeRate (e) {
        this.rate = e.mp.detail.index
      }
    }
  }
</script>
<style></style>
