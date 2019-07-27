<template>
  <div class="list-card" @click="goToDetails(item)">
    <div class="list-card-img">
      <img style="width: 100%;height: 100%" mode="aspectFill" :src="item.pcover" alt=""/>
    </div>
    <div class="list-card-tit">{{item.pname}}</div>
    <div class="list-card-pr">优惠价：{{item.pprice}}</div>
    <div class="list-card-pi">原价：{{item.poriginalPrice}}</div>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    props: {
      item: {
        type: Object
      }
    },
    methods: {
      ...mapMutations([
        'saveProductInfo'
      ]),
      goToDetails (item) {
        this.saveProductInfo(item)
        this.$router.push({path: '/pages/details'})
      }
    }
  }
</script>
<style scoped>
  .list-card {
    width: 45%;
    height: 415rpx;
    margin-bottom: 30rpx;
  }
  .list-card-img {
    height: 65%;
    width: 100%;
  }
  .list-card-tit {
    height: 15%;
    font-size: 11pt;
    color: #353535;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow:hidden;
  }
  .list-card-pr,.list-card-pi {
    height: 10%;
    font-size: 9pt;
    color: red;
  }
  .list-card-pi {
    text-decoration: line-through;
  }
  .list-card-pr,.list-card-pi,.list-card-tit {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
