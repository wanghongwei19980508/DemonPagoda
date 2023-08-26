<template>
  <div>
    <scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper" @scrolltolower="lower"
      @scroll="scroll">
      <uni-list>
        <uni-list-item :title="note == 1 ? '通关榜' : '点赞榜'" />
        <uni-list-item v-for="(item, index) in list" :key="index" :title="item.id"
          :note="note == 1 ? '通关次数' + item.customs : '点赞数' + item.thumb" :avatarCircle="true" showArrow
          :thumb="'http://jiuaibuni.top/dome/img/dungeoned/90' + (index + 1) + '.png'" thumb-size="lg" rightText="点击进入地图"
          link @click="toPageGame(item.id)" />
      </uni-list>
    </scroll-view>
  </div>
</template>

<script setup>
import { getDungeonedCustomsList, getDungeonedThumbList } from "../utils/api.js";
import { toRefs, reactive, onMounted, getCurrentInstance } from 'vue'
const state = reactive({
  list: [], // 排行榜数据
  scrollTop: 0, // 下拉滚动条
  note: 1, // 判断排行榜类型
  page: { // 排行榜页码
    currentPage: 1,
    pageSize: 10,
    total: 0
  }
})
const { list, scrollTop, note, page } = toRefs(state)
const getList = async () => {
  let data
  if (state.note == 1) {
    data = await getDungeonedCustomsList(state.page)
  } else if (state.note == 2) {
    data = await getDungeonedThumbList(state.page)
  }
  state.list.push(...data.data.list)
  state.page.total = data.data.total
}
const toPageGame = (value) => { // 获取参数
  uni.navigateTo({
    url: '/pages/game?dungeonedId=' + value,
    success: function (res) { }
  })
}

onMounted(() => {
  let options = getCurrentInstance()
  state.note = options.attrs.name == 'Customs' ? 1 : 2
  getList()
})

const upper = (e) => {
  console.log(e)
}
const lower = (e) => {
  if (state.page.total > state.list.length) {
    state.page.currentPage++
    getList()
  }
}
const scroll = (e) => {
  console.log(e)
}
</script>

<style lang="less">
.scroll-Y {
  top: 0;
  height: calc(100vh - 50px);
  background-color: #ffffff;
}

.slot-box {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  align-items: center;
}

.slot-image {
  /* #ifndef APP-NVUE */
  display: block;
  /* #endif */
  margin-right: 10px;
  width: 30px;
  height: 30px;
}

.slot-text {
  flex: 1;
  font-size: 14px;
  color: #4cd964;
  margin-right: 10px;
}
</style>