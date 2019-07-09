<template>
  <swiper class="sw" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :current="swiperCurrent" @change="swiperChange($event)">
    <block v-for="(item, index) in images" :key="index">
      <swiper-item>
        <image :src="item.url" class="slide-image" mode="aspectFill" @click="swipclick"></image>
      </swiper-item>
    </block>
  </swiper>
</template>

<script>
  export default {
    props: {
      images: {
        type: Array
      }
    },
    data () {
      return {
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 500,
        // 轮播页当前index
        swiperCurrent: 0
      }
    },
    methods: {
      swiperChange (e) {
        // 改变下标
        this.swiperCurrent = e.mp.detail.current
      },
      swipclick () {
        console.log('当前下标：', this.swiperCurrent)
        console.log('获取当前uri：', this.images[this.swiperCurrent].url)
        const url = '/pages/details'
        this.$router.push(url)
      }
    }
  }
</script>

<style scoped>
  .sw {
    height: 376rpx !important;
  }
  image {
    height: 100%;
    width: 100%;
  }
</style>
