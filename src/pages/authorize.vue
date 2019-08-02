<template>
  <div class="authorize-contianer">
    <img class="authorize-icon" src="/static/img/authorize.png"/>
    <div class="auth-item">妙尚佳申请获取以下权限：</div>
    <div class="auth-item">获取你的公开信息（头像、昵称等）</div>
    <div class="btn-authorize">
      <button open-type="getUserInfo" type="primary" lang="zh_CN" @getuserinfo="onGotUserInfo">授权登录</button>
    </div>
    <div class="btn-authorize">
      <button type="warn" lang="zh_CN" @click="refuse">拒绝</button>
    </div>
  </div>
</template>
<script>
  import api from '@/api/index'
  import { APPID } from '@/utils/constant'
  import { mapMutations } from 'vuex'
  export default {
    config: {
      navigationBarTitleText: '授权登录'
    },
    methods: {
      ...mapMutations([
        'saveMiaoyiUser'
      ]),
      async onGotUserInfo (e) {
        if (e.mp.detail.errMsg === 'getUserInfo:ok') {
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
          const openid = res.openid
          wx.getUserInfo({
            success: (r) => {
              this.userRrgister(openid, r.userInfo.nickName, r.userInfo.avatarUrl)
            }
          })
          this.$router.back(-1)
        } else {
          let res = await wx.showModal({
            title: 'appid有误',
            content: '授权失败'
          })
          if (res.confirm) {
            this.$router.back(-1)
          }
        }
      },
      refuse () {
        this.$router.back(-1)
      },
      async userRrgister (openid, nickName, avatarUrl) {
        const re = await api.userRegister({
          openid: openid,
          username: nickName,
          avatar: avatarUrl
        })
        if (re.code !== 0) {
          const result = await api.getUserDetail(openid)
          if (result.code === 1) {
            this.saveMiaoyiUser(result.data)
          } else {
            wx.showToast({
              title: '获取用户失败',
              icon: 'cancel',
              duration: 2000
            })
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
