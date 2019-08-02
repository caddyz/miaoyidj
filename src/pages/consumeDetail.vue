<template>
  <div>
    <van-steps
      :steps="steps"
      :active="active"
      direction="vertical"
      active-color="#f44"
    />
  </div>
</template>
<script>
  export default {
    config: {
      navigationBarTitleText: '消费详情',
      usingComponents: {
        'van-steps': '../../static/vant/steps/index'
      }
    },
    data () {
      return {
        active: 0,
        steps: [
          {
            text: '步骤一',
            desc: '描述信息'
          },
          {
            text: '步骤二',
            desc: '描述信息'
          },
          {
            text: '步骤三',
            desc: '描述信息'
          },
          {
            text: '步骤四',
            desc: '描述信息'
          }
        ]
      }
    }
  }
</script>
<style></style>
