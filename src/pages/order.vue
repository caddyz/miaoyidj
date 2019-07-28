<template>
  <div>
    <van-tabs sticky animated swipeable :active="active" @change="onChange">
      <van-tab title="全部订单">
        <div v-for="(item,index) in orderVal" :key="index">
          <orderintro :orderVal="item"/>
        </div>
      </van-tab>
      <van-tab title="未支付">
        <div v-for="(item,index) in noPayVal" :key="index">
          <orderintro :orderVal="item"/>
        </div>
      </van-tab>
      <van-tab title="已支付">
        <div v-for="(item,index) in payVal" :key="index">
          <orderintro :orderVal="item"/>
        </div>
      </van-tab>
      <van-tab title="已完成">
        <div v-for="(item,index) in finishVal" :key="index">
          <orderintro :orderVal="item"/>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import orderintro from '@/components/order_intro'

  let o = [{
    orderId: 1,
    timeVal: '2019-7-18 14点',
    addressVal: '成都成化奥元广场',
    state: 0
  }, {
    orderId: 2,
    timeVal: '2019-7-18 14点',
    addressVal: '成都成化奥元广场',
    state: 1
  }, {
    orderId: 3,
    timeVal: '2019-7-18 14点',
    addressVal: '成都成化奥元广场',
    state: 2
  }, {
    orderId: 4,
    timeVal: '2019-7-18 14点',
    addressVal: '成都成化奥元广场',
    state: 3
  }, {
    orderId: 5,
    timeVal: '2019-7-18 14点',
    addressVal: '成都成化奥元广场',
    state: 0
  }, {
    orderId: 6,
    timeVal: '2019-7-18 14点',
    addressVal: '成都成化奥元广场',
    state: 1
  }, {
    orderId: 7,
    timeVal: '2019-7-18 14点',
    addressVal: '成都成化奥元广场',
    state: 2
  }, {
    orderId: 8,
    timeVal: '2019-7-18 14点',
    addressVal: '成都成化奥元广场',
    state: 3
  }]
  export default {
    config: {
      navigationBarTitleText: '订单',
      usingComponents: {
        'van-tabs': '../../static/vant/tabs/index',
        'van-icon': '../../static/vant/icon/index',
        'van-button': '../../static/vant/button/index',
        'van-tab': '../../static/vant/tab/index',
        'van-dialog': '../../static/vant/dialog/index',
        'van-popup': '../../static/vant/popup/index'
      }
    },
    components: {
      orderintro
    },
    mounted () {
      for (let i in o) {
        switch (o[i].state) {
          case 1:
            this.noPayVal.push(o[i])
            break
          case 2:
            this.payVal.push(o[i])
            break
          case 3:
            this.finishVal.push(o[i])
            break
        }
      }
    },
    data () {
      return {
        active: 0,
        orderVal: o,
        noPayVal: [],
        payVal: [],
        finishVal: []
      }
    },
    methods: {
      onChange (event) {
        this.active = event.mp.detail.index
      }
    }
  }
</script>
<style>
</style>
