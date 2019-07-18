<template>
  <div>
    <div v-if="hrBoo">
      <addressitem :showBo="hrBoo"/>
    </div>
    <div v-else>
      <addressitem/>
      <addressitem/>
    </div>
    <div class="foo">
      <i-button @click="addAddress" type="success" long="true">添加新地址</i-button>
    </div>
  </div>
</template>
<script>
  import addressitem from '@/components/address_item'
  export default {
    config: {
      navigationBarTitleText: '地址管理',
      usingComponents: {
        'i-button': '../../static/iview/button/index',
        'van-icon': '../../static/vant/icon/index'
      }
    },
    components: {
      addressitem
    },
    data () {
      return {
        hrBoo: ''
      }
    },
    mounted () {
      let i = this.$route.query.id
      if (i === undefined) {
        console.log('从我的页面过来的...')
        this.hrBoo = false
      }
      if (i === '1') {
        console.log('从购买过来的...')
        this.hrBoo = true
      }
    },
    methods: {
      addAddress () {
        this.$router.push({path: '/pages/addressEditor'})
      }
    }
  }
</script>
<style scoped>
  .foo {
    height: 125rpx;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>
