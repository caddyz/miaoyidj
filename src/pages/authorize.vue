<template>
  <div class="authorize-contianer">
    <img class="authorize-icon" src="/static/img/authorize.png"/>
    <div class="auth-item">商城申请获取以下权限：</div>
    <div class="auth-item">获取你的公开信息（头像、昵称等）</div>
    <div class="btn-authorize">
      <button open-type="getUserInfo" type="primary" lang="zh_CN" @getuserinfo="onGotUserInfo">授权</button>
    </div>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import api from '@/api/index'
  import { APPID } from '@/utils/constant'
  export default {
    config: {
      navigationBarTitleText: '授权登录'
    },
    computed: {
      ...mapState([
        'userInfo'
      ])
    },
    onLoad () {
      let info = this.$store.state.userInfo
      wx.getSetting({
        success: (res) => {
          console.log(res.authSetting)
          if ((res.authSetting)['scope.userInfo']) {
            if (info.nickName === undefined) {
              wx.getUserInfo({
                success: (res) => {
                  this.saveUserInfo(res.userInfo)
                }
              })
              wx.login({
                success: (res) => {
                  if (res.code) {
                    // 发起网络请求
                    this.code2Session(res.code)
                  } else {
                    console.log('登录失败！' + res.errMsg)
                  }
                }
              })
            }
            this.$router.push({path: '/pages/index', isTab: true})
          }
        }
      })
    },
    methods: {
      ...mapMutations([
        'saveUserInfo',
        'saveOpenid'
      ]),
      async onGotUserInfo (e) {
        // console.log(e.mp.detail.errMsg)
        // console.log(e.mp.detail.userInfo)
        // console.log(e.mp.detail.rawData)
        if (e.mp.detail.errMsg === 'getUserInfo:ok') {
          this.saveUserInfo(e.mp.detail.userInfo)
          wx.login({
            success: (res) => {
              if (res.code) {
                // 发起网络请求
                this.code2Session(res.code)
              } else {
                console.log('登录失败！' + res.errMsg)
              }
            }
          })
        }
      },
      async code2Session (code) {
        const res = await api.wxLogin({appid: APPID, code: code})
        if (res.openid) {
          this.saveOpenid(res.openid)
          this.$router.push({path: '/pages/index', isTab: true})
        } else {
          let res = await wx.showModal({
            title: 'appid有误',
            content: '授权失败'
          })
          if (res.confirm) {
            this.$router.push({path: '/pages/index', isTab: true})
          }
        }
      }
    }
  }
</script>
<style lang="less">
  page {
    height: 100%;
  }
  .authorize-contianer {
    height: 100%;
    background: #fff;
    text-align: center;
    padding-top: 100rpx;
    .authorize-icon {
      width: 128rpx;
      height: 128rpx;
      display: block;
      margin: 0 auto;
      padding-bottom: 10rpx;
    }
    .auth-item {
      padding: 5rpx 0;
    }
    .btn-authorize {
      margin: 100rpx 50rpx;
    }
  }
</style>
