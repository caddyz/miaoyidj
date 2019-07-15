<template>
  <div class="content">
    <div class="con">
      <div class="localtion">
        <div class="city">
          <i-icon size="18" type="coordinates"/>
          <div @click="changeCity">{{city}}</div>
        </div>
        <div class="top_font">妙伊到家为您服务</div>
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
        <div class="hot-con" @click="goDetails">1</div>
        <div style="width: 10%"></div>
        <div class="hot-con">2</div>
      </div>
      <div class="tit-ti">妙伊上门服务</div>
      <hotservice :product="pa"/>
      <div class="tit">推荐服务</div>
      <card :info="info"/>
      <card :info="info"/>
      <mytitle/>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import myswiper from '@/components/my_swiper'
import hotservice from '@/components/hot_service'

let te = [
  {
    id: 1,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 2,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 3,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 4,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 5,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 6,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 7,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 8,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 9,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 10,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 11,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 12,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 13,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 14,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 15,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 16,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 17,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 18,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 19,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 20,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  },
  {
    id: 21,
    img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
    title: '129元上门按摩'
  }
]

export default {
  mpType: 'page',
  config: {
    usingComponents: {
      'i-icon': '../../static/iview/icon/index'
    }
  },
  data () {
    return {
      city: '成都',
      pa: te,
      motto: 'Hello World',
      userInfo: {},
      images: [
        {
          page: '1',
          url:
            'https://img-oss.yunshanmeicai.com/goods/default/31d8dfa4-0d7b-4694-80f9-41b07c9d0a3a.png'
        },
        {
          page: '2',
          url:
            'https://img-oss.yunshanmeicai.com/goods/default/e83c8f0f-4acc-4729-bcbb-294f2b314977.jpg'
        }
      ],
      info: {
        img: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
        title: '豪华大保健快来啊啊啊啊啊',
        remark: '这是大保健',
        price: 120
      }
    }
  },

  components: {
    card,
    myswiper,
    hotservice
  },

  methods: {
    changeCity () {
      console.log('111')
    },
    indexRouter (e) {
      console.log('获取到的id：', e.currentTarget.dataset.index)
    },
    goDetails () {
      const url = '/pages/placeOrder'
      this.$router.push(url)
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
    flex-direction: row;
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
</style>
