<template>
  <div>
    <div class="app-contro" v-for="(item, index) in reviewList" :key="index">
      <review :review="item"/>
    </div>
    <van-toast id="van-toast" />
  </div>
</template>
<script>
  import review from '@/components/review'
  import api from '@/api/index'
  import { mapState } from 'vuex'
  import Toast from '../../static/vant/toast/toast'
  export default {
    config: {
      navigationBarTitleText: '全部评价',
      usingComponents: {
        'i-avatar': '../../static/iview/avatar/index',
        'i-rate': '../../static/iview/rate/index',
        'van-toast': '../../static/vant/toast/index'
      }
    },
    computed: {
      ...mapState([
        'productInfo'
      ])
    },
    components: {
      review
    },
    mounted () {
      this.getReviewData()
    },
    data () {
      return {
        reviewList: []
      }
    },
    methods: {
      async getReviewData () {
        const res = await api.getListReview(this.$store.state.productInfo.pid)
        if (res.code === 1) {
          this.reviewList = res.data
        } else {
          Toast.fail('数据获取异常')
        }
      }
    }
  }
</script>
<style scoped>
  .app-contro {
    display: flex;
    justify-content: center;
  }
</style>
