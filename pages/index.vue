<template>
  <div class="content">
    <input v-model="dungeonedId" placeholder="请输入要开启的地图编号" />
    <button type="success" @click="toPageGame()" plain>开始游戏</button>
    <button type="success" @click="toPageRanking('Customs')" plain>通关榜</button>
    <button type="success" @click="toPageRanking('Thumb')" plain>点赞榜</button>
  </div>
</template>

<script setup>
import { toRefs, reactive } from 'vue'
const state = reactive({
  dungeonedId: ''
})
const { dungeonedId } = toRefs(state)
// 前往排行榜
const toPageRanking = (row) => {
  uni.navigateTo({
    url: '/pages/ranking?name=' + row,
    success: function (res) { }
  })
}
// 前往游戏
function toPageGame(value) {
  uni.navigateTo({
    url: '/pages/game?dungeonedId=' + state.dungeonedId,
    success: function (res) { }
  })
}
</script>

<style lang="less">
page {
  height: 100%;
}

.content {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
