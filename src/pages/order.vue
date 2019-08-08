<template>
  <div v-if="contro">
    <div v-if="orderVal.length > 0">
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
    <div class="order-else" v-else>
      您还没有订单！
    </div>
  </div>
  <div v-else>
    你还未登录
  </div>
</template>
<script>
  import orderintro from '@/components/order_intro'
  import api from '@/api/index'
  import { mapState } from 'vuex'
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
    computed: {
      ...mapState([
        'miaoyiUser'
      ])
    },
    components: {
      orderintro
    },
    onShow () {
      this.contro = this.$store.state.miaoyiUser.uname !== undefined
    },
    mounted () {
      this.getUserAllOrder()
    },
    data () {
      return {
        active: 0,
        orderVal: [],
        noPayVal: [],
        payVal: [],
        finishVal: [],
        contro: true
      }
    },
    methods: {
      onChange (event) {
        this.active = event.mp.detail.index
      },
      async getUserAllOrder () {
        const res = await api.getUserOrder(this.$store.state.miaoyiUser.uid)
        if (res.code === 1) {
          this.orderVal = res.data
          for (let i in res.data) {
            switch (res.data[i].ostatus) {
              case 1:
                this.noPayVal.push(res.data[i])
                break
              case 2:
                this.payVal.push(res.data[i])
                break
              case 3:
                this.finishVal.push(res.data[i])
                break
            }
          }
        }
      }
    }
  }
</script>
<style scoped>
  .order-else {
    text-align: center;
    color: #888;
  }
</style>
