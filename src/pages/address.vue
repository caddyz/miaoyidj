<template>
  <div>
    <div v-if="addressList.length > 0">
      <div v-if="hrBoo">
        <div v-for="(item,index) in addressList" :key="index" @click="chooseAddress(index)">
          <addressitem :showBo="hrBoo" :addressItem="item"/>
        </div>
      </div>
      <div v-else>
        <addressitem v-for="(item,index) in addressList" :key="index" :addressItem="item"/>
      </div>
    </div>
    <div v-else>
      <div class="nothing">
        您还没有添加地址
      </div>
    </div>
    <div class="foo">
      <i-button @click="goAddAddress" type="success" long="true">添加新地址</i-button>
    </div>
  </div>
</template>
<script>
  import addressitem from '@/components/address_item'
  import { mapState, mapMutations } from 'vuex'
  import api from '@/api/index'
  export default {
    config: {
      navigationBarTitleText: '地址管理',
      usingComponents: {
        'i-button': '../../static/iview/button/index',
        'van-icon': '../../static/vant/icon/index'
      }
    },
    computed: {
      ...mapState([
        'miaoyiUser'
      ])
    },
    components: {
      addressitem
    },
    data () {
      return {
        hrBoo: '',
        addressList: []
      }
    },
    mounted () {
      this.getAddressList(this.$store.state.miaoyiUser.uid)
      this.hrBoo = this.$route.query.id !== undefined
    },
    methods: {
      ...mapMutations([
        'saveAddressInfo'
      ]),
      chooseAddress (index) {
        this.saveAddressInfo(this.addressList[index])
        this.$router.back(-1)
      },
      goAddAddress () {
        this.$router.push({path: '/pages/addressEditor', query: {isAdd: true}})
      },
      async getAddressList (userId) {
        const res = await api.getListAddress(userId)
        if (res.code === 1) {
          this.addressList = res.data
          for (let i in this.addressList) {
            this.addressList[i].color = ''
          }
          this.addressList[0].color = 'red'
        }
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
  .nothing {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    font-size: 13pt;
  }
</style>
