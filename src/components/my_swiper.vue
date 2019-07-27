<template>
  <swiper class="sw" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :current="swiperCurrent" @change="swiperChange($event)">
    <block v-for="(item, index) in images" :key="index">
      <swiper-item>
        <image :src="item.pcover" class="slide-image" mode="aspectFill" @click="swipclick"></image>
      </swiper-item>
    </block>
  </swiper>
</template>

<script>
  import { mapMutations } from 'vuex'
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
      ...mapMutations([
        'saveProductInfo'
      ]),
      swiperChange (e) {
        // 改变下标
        this.swiperCurrent = e.mp.detail.current
      },
      swipclick () {
        this.saveProductInfo(this.images[this.swiperCurrent])
        this.$router.push({path: '/pages/details'})
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
