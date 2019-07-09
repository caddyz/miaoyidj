<template>
  <swiper class="it" :indicator-dots="indicatorDots" @change="handlChange($event)">
    <block v-for="(l,index_) in pageNum" :key="l">
      <swiper-item class="it-de">
        <block v-for="(item, index) in li" :key="index">
          <itemcommon :pro="item"/>
        </block>
      </swiper-item>
    </block>
  </swiper>
</template>
<script>
  import itemcommon from '@/components/common/item_common'
  export default {
    props: {
      product: {
        type: Array
      }
    },
    data () {
      return {
        indicatorDots: true,
        pageNum: parseInt(parseInt(this.product.length) / 8) + 1,
        li: this.product.slice(0, 8)
      }
    },
    methods: {
      handlChange (e) {
        let i = e.mp.detail.current
        this.li = this.product.slice((8 * i), (8 * i) + 8)
      }
    },
    mounted () {
    },
    components: {
      itemcommon
    },
    watch: {
      product: function (val, oldVal) {
        this.pageNum = parseInt(val.length()) / 8 + 1
      }
    }
  }
</script>
<style scoped>
  .it{
    height: 536rpx !important;
  }
  .it-de {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>
