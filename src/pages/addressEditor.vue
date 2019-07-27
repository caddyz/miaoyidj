<template>
  <div>
    <van-cell-group>
      <van-field
        :value="userName"
        label="联系人"
        placeholder="姓名"
        @change="onChange2"
      />
      <van-field
        :value="userPhone"
        type="number"
        label="手机号"
        placeholder="将通过此手机联系你"
        @change="onChange3"
      />
      <van-cell title="地址" is-link @click="chAddress" :value="addressVal" />
      <van-popup
        :show="showBottom"
        position="bottom"
        custom-class="bottom"
        @close="chAddress"
      >
        <van-picker
          show-toolbar
          title="从成都市区选择"
          :columns="column1"
          @change="onChange1"
          @confirm="onConfirm"
          @cancel="onCancel"
        />
      </van-popup>
      <van-field
        :value="addressDtl"
        placeholder="详细地址"
        :border="borderVal"
        @change="onChange4"
      />
    </van-cell-group>
    <div style="height: 50rpx"></div>
    <div v-if="isAdd">
      <van-button @click="addMyAddress" size="large" type="danger">保存</van-button>
    </div>
    <div class="bu" v-else>
      <van-button @click="deleteMyAddress" type="default">删除</van-button>
      <van-button @click="updateMyAddress" type="danger">保存</van-button>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import api from '@/api/index'
  import Toast from '../../static/vant/toast/toast'
  export default {
    config: {
      navigationBarTitleText: '地址编辑',
      usingComponents: {
        'van-cell-group': '../../static/vant/cell-group/index',
        'van-cell': '../../static/vant/cell/index',
        'van-popup': '../../static/vant/popup/index',
        'van-picker': '../../static/vant/picker/index',
        'van-button': '../../static/vant/button/index',
        'van-field': '../../static/vant/field/index',
        'van-toast': '../../static/vant/toast/index'
      }
    },
    computed: {
      ...mapState([
        'miaoyiUser'
      ])
    },
    mounted () {
      this.isAdd = this.$route.query.isAdd !== undefined
      if (this.$route.query.item === undefined) {
        this.userName = ''
        this.userPhone = ''
        this.addressVal = ''
        this.addressDtl = ''
      } else {
        let da = JSON.parse(this.$route.query.item)
        this.userName = da.aname
        this.userPhone = da.amobile
        this.addressVal = da.aaddress
        this.addressDtl = da.aaddressDetail
        this.addressId = da.aid
      }
    },
    data () {
      return {
        column1: ['武侯区', '锦江区', '青羊区', '金牛区', '成华区', '龙泉驿区', '温江区', '新都区', '青白江区', '双流区', '郫都区'],
        borderVal: false,
        addressId: '',
        userName: '',
        userPhone: '',
        addressDtl: '',
        addressVal: '',
        isAdd: false,
        showBottom: false
      }
    },
    methods: {
      chAddress () {
        this.showBottom = !this.showBottom
      },
      onChange1 (event) {
        const {value} = event.mp.detail
        console.log('获取到的值:', value)
      },
      onConfirm (event) {
        const {value} = event.mp.detail
        this.addressVal = value
        this.showBottom = false
      },
      onCancel () {
        this.showBottom = false
      },
      updateMyAddress () {
        this.userUpdateAddress()
        this.$router.push({path: '/pages/address'})
      },
      deleteMyAddress () {
        this.userDeteleAddress()
        this.$router.push({path: '/pages/address'})
      },
      addMyAddress () {
        this.userAddAddress()
        this.$router.push({path: '/pages/address'})
      },
      onChange2 (e) {
        this.userName = e.mp.detail
      },
      onChange3 (e) {
        this.userPhone = e.mp.detail
      },
      onChange4 (e) {
        this.addressDtl = e.mp.detail
      },
      async userUpdateAddress () {
        const res = await api.updateAddress({
          addressId: this.addressId,
          addressInfo: this.addressVal,
          addressDetailInfo: this.addressDtl,
          addressName: this.userName,
          addressPhone: this.userPhone
        })
        if (res.code === 1) {
          Toast.success('更新成功')
        } else {
          Toast.fail('更新失败')
        }
      },
      async userDeteleAddress () {
        const res = await api.deleteAddress(this.addressId)
        if (res.code === 1) {
          Toast.success('删除成功')
        } else {
          Toast.fail('删除失败')
        }
      },
      async userAddAddress () {
        const res = await api.addAddress({
          address: this.addressVal,
          addressDetail: this.addressDtl,
          addressPhone: this.userPhone,
          addressName: this.userName,
          uid: this.$store.state.miaoyiUser.uid
        })
        if (res.code === 1) {
          Toast.success('添加成功')
        } else {
          Toast.fail('添加失败')
        }
      }
    }
  }
</script>
<style scoped>
  .bu {
    display: flex;
    justify-content: space-around;
  }
</style>
