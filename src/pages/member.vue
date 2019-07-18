<template>
  <div>
    <div class="info-top">
      <div class="info-top-content">
        <div class="info-top-content-tx">
          <div class="touxiang">
            <div class="tupian">
              <img style="width: 90%;height: 90%;border-radius: 50px" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
            </div>
            <div class="na">
              <div style="width: 90%;height: 100%;">
                <div class="na-name">kaiserZ</div>
                <div class="na-tag">
                  <i-tag v-if="memberTrue"
                         class="i-tags"
                         name="单个标签"
                         color="yellow">
                    会员
                  </i-tag>
                  <i-tag v-else
                         class="i-tags"
                         name="单个标签"
                         color="yellow">
                    用户
                  </i-tag>
                </div>
                <div class="na-point">积分:12</div>
              </div>
            </div>
          </div>
        </div>
        <div class="info-top-content-co">
          <button class="get-points" @click="pointsRule">积分规则</button>
        </div>
      </div>
    </div>
    <div>
      <div class="member-money">
        <div class="wo-qian">
          <div class="yu-e">余额:</div>
          <div class="sheng-qian">123元</div>
        </div>
      </div>
      <div style="height: 15rpx;background-color: whitesmoke"></div>
      <div class="member-cz">
        <i-button bind:click="handleClick" inline type="error">500元</i-button>
        <i-button bind:click="handleClick" inline type="error">1000元</i-button>
        <i-button bind:click="handleClick" inline type="error">2000元</i-button>
      </div>
    </div>
    <div class="member-foot">
      <i-button bind:click="handleClick" type="error" long="true">充值</i-button>
    </div>
    <van-dialog id="van-dialog"/>
  </div>
</template>
<script>
  import Dialog from '../../static/vant/dialog/dialog'
  export default {
    config: {
      navigationBarTitleText: '会员',
      usingComponents: {
        'i-tag': '../../static/iview/tag/index',
        'i-icon': '../../static/iview/icon/index',
        'i-button': '../../static/iview/button/index',
        'van-dialog': '../../static/vant/dialog/index',
        'van-popup': '../../static/vant/popup/index',
        'van-button': '../../static/vant/button/index'
      }
    },
    components: {
    },
    data () {
      return {
        memberTrue: false
      }
    },
    methods: {
      pointsRule () {
        Dialog.alert({
          message: '积分只在会员充值时赠送,充值多少送多少积分'
        }).then(() => {
          // on close
        })
      }
    }
  }
</script>
<style scoped>
  .info-top {
    height: 305rpx;
    display: flex;
    align-items: center;
    margin-bottom: 15rpx;
    border-bottom: 1px solid whitesmoke;
  }
  .info-top-content {
    height: 60%;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
  .info-top-content-tx {
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: center;
  }
  .info-top-content-co {
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .touxiang {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: row;
  }
  .tupian, .na {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tupian {
    width: 60%;
  }
  .na {
    width: 40%;
  }
  .na-name, .na-tag, .na-point {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .na-name {
    height: 45%;
    font-size: 14pt;
    color: #353535;
  }
  .na-tag {
    height: 25%;
    margin-bottom: 15rpx;
  }
  .na-point {
    height: 30%;
    font-size: 9pt;
    color: #888;
  }
  .get-points {
    width: 60%;
    height: 30%;
    font-size: 25rpx;
    color: #ed3f14;
    border: 1px solid #ed3f14;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .member-money {
    display: flex;
    justify-content: center;
    margin-bottom: 35rpx;
  }
  .wo-qian {
    width: 90%;
    height: 75rpx;
    display: flex;
    justify-content: space-between;
  }
  .yu-e,.sheng-qian {
    height: 100%;
    font-size: 14pt;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .yu-e {
    width: 30%;
    color: #353535;
    font-weight: bold;
  }
  .sheng-qian {
    width: 30%;
    color: #ed3f14;
  }
  .member-foot {
    height: 125rpx;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .member-cz {
    display: flex;
    justify-content: center;
  }
</style>
