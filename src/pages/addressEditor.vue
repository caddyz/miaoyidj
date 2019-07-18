<template>
  <div>
    <van-cell-group>
      <van-field
        :value="userName"
        label="联系人"
        placeholder="姓名"
      />
      <van-field
        :value="userPhone"
        type="number"
        label="手机号"
        placeholder="将通过此手机联系你"
      />
      <van-cell title="单元格" is-link @click="chAddress" :value="addressVal" />
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
      />
    </van-cell-group>
    <div style="height: 50rpx"></div>
    <div class="bu" v-if="bottonCtr">
      <van-button type="default">删除</van-button>
      <van-button type="danger">保存</van-button>
    </div>
    <div v-else>
      <van-button size="large" type="danger">保存</van-button>
    </div>
  </div>
</template>
<script>
  export default {
    config: {
      navigationBarTitleText: '地址编辑',
      usingComponents: {
        'van-cell-group': '../../static/vant/cell-group/index',
        'van-cell': '../../static/vant/cell/index',
        'van-popup': '../../static/vant/popup/index',
        'van-picker': '../../static/vant/picker/index',
        'van-button': '../../static/vant/button/index',
        'van-field': '../../static/vant/field/index'
      }
    },
    data () {
      return {
        column1: ['武侯区', '锦江区', '青羊区', '金牛区', '成华区', '龙泉驿区', '温江区', '新都区', '青白江区', '双流区', '郫都区'],
        borderVal: false,
        userName: '',
        userPhone: '',
        addressDtl: '',
        addressVal: '',
        bottonCtr: '1',
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
