<template>
  <div class="content">
    <div class="con">
      <div class="localtion">
        <div class="city">
          <i-icon size="18" type="coordinates"/>
          <div @click="changeCity">{{city}}</div>
        </div>
        <div class="top_font">妙尚佳为您服务</div>
      </div>
      <myswiper :images="images"/>
      <div class="nav_list">
        <div data-index="1" @click="indexRouter">
          <img src="../../static/img/new_man.png" class="nav_icon"/>
          <div class="nav_text">新人优惠</div>
        </div>
        <div data-index="2" @click="indexRouter">
          <img src="../../static/img/new_man.png" class="nav_icon"/>
          <div class="nav_text">新人优惠</div>
        </div>
        <div data-index="3" @click="indexRouter">
          <img src="../../static/img/new_man.png" class="nav_icon"/>
          <div class="nav_text">新人优惠</div>
        </div>
        <div data-index="4" @click="indexRouter">
          <img src="../../static/img/new_man.png" class="nav_icon"/>
          <div class="nav_text">新人优惠</div>
        </div>
      </div>
      <div class="tit-ti">热门服务</div>
      <div class="hot">
        <div v-for="(item,index) in hotInfo" :key="index" class="hot-con" @click="goDetails(item)">
          <img style="width: 100%;height: 100%" mode="aspectFill" :src="item.pcover" alt=""/>
        </div>
      </div>
      <div class="tit-ti">妙尚佳上门服务</div>
      <div class="contro">
        <listcard v-for="(item,index) in pa" :key="index" :item="item"></listcard>
      </div>
      <div class="tit">推荐服务</div>
      <card v-for="(item,index) in info" :key="index" :info="item"/>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import myswiper from '@/components/my_swiper'
import listcard from '@/components/list_card'
import api from '@/api/index'

export default {
  mpType: 'page',
  config: {
    usingComponents: {
      'i-icon': '../../static/iview/icon/index'
    }
  },
  async mounted () {
    await Promise.all([
      this.getData()
    ])
  },
  data () {
    return {
      city: '成都',
      pa: [],
      userInfo: {},
      images: [],
      hotInfo: [],
      info: []
    }
  },

  components: {
    card,
    myswiper,
    listcard
  },

  methods: {
    changeCity () {
      console.log('111')
    },
    indexRouter (e) {
      console.log('获取到的id：', e.currentTarget.dataset.index)
    },
    goDetails (item) {
      this.$router.push({path: '/pages/details', query: {item: JSON.stringify(item)}})
    },
    async getData () {
      const res = await api.getAllProduct()
      this.pa = res.data
      const r = await api.getClassifyData()
      for (let i in r.data) {
        switch (r.data[i].istatus) {
          case 1:
            this.images.push(r.data[i].product)
            break
          case 2:
            this.hotInfo.push(r.data[i].product)
            break
          case 3:
            this.info.push(r.data[i].product)
            break
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
  .content {
    display: flex;
    justify-content: center;
  }
  .con {
    width: 95%;
  }
  .localtion {
    margin-bottom: 15rpx;
    height: 55rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .top_font {
    font-size: 11pt;
    color: #888888;
    display: flex;
    align-items: center;
  }
  .tit {
    margin-top: 15rpx;
    margin-bottom: 15rpx;
    height: 55rpx;
    font-size: 36rpx;
    font-weight: 500;
  }
  .tit-ti {
    margin-top: 15rpx;
    margin-bottom: 15rpx;
    height: 55rpx;
    font-size: 32rpx;
    font-weight: 700;
    display: flex;
    align-items: center;
  }
  .city {
    display: flex;
    flex-direction: row;
    i-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    div {
      font-weight: 300;
      font-size: 35rpx;
      display: flex;
      align-items: center;
    }
  }
  .hot {
    height: 195rpx;
    display: flex;
    justify-content: space-between;
  }
  .hot-con {
    height: 100%;
    width: 45%;
    background-color: rebeccapurple;
    border-radius: 10px;
  }
  .nav_list {
    margin-top: 30rpx;
    color: #404040;
    display: flex;
    font-size: 26rpx;
    justify-content: space-between;
    padding: 17rpx 50rpx;
    .nav_icon {
      height: 80rpx;
      margin: 0 auto;
      width: 80rpx;
      margin-bottom: 14rpx;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nav_text {
      font-size: 28rpx;
      text-align: center;
      font-weight: 300;
    }
  }
  .contro {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
