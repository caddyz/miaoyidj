<template>
  <div>
    <i-panel :hide-border="hideVal" title="评分">
      <i-rate
        @change="changeRate"
        :value="rate">
      </i-rate>
    </i-panel>
    <div>
      <i-panel :hide-border="hideVal" title="评价内容">
        <i-input :value="message" placeholder="请输入评价内容(最多225个字)"
                 type="textarea" maxlength="225" @change="getMessageVal"/>
      </i-panel>
    </div>
    <div class="bu-class">
      <i-button @click="submitRemark" inline type="error">提交</i-button>
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
        'i-panel': '../../static/iview/panel/index',
        'i-input': '../../static/iview/input/index'
      }
    },
    data () {
      return {
        rate: 0,
        borderBo: false,
        message: '',
        hideVal: true
      }
    },
    methods: {
      getMessageVal (e) {
        this.message = e.mp.detail.detail.value
      },
      changeRate (e) {
        this.rate = e.mp.detail.index
      },
      submitRemark () {
        console.log('message:', this.message)
        console.log('rate:', this.rate)
      }
    }
  }
</script>
<style scoped>
  .bu-class {
    display: flex;
    justify-content: center;
  }
  .rateClass {
    display: flex;
    justify-content: center;
  }
</style>
