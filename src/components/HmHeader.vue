<template>
  <div class="hm-header">
    <div class="hm-left" @click="back">
      <span class="iconfont iconjiantou2"></span>
    </div>
    <div class="title"><slot></slot></div>
    <div class="scip"></div>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
  .hm-header{
    height: 50px;
    text-align: center;
    border-bottom: 1px solid springgreen;
    display: flex;
    line-height: 50px;
    .hm-left,
    .scip{
      width: 50px;
    }
    .title{
      flex:1;
    }
}
</style>
