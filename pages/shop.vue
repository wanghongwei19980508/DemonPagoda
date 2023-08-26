<template>
  <div v-show="props.dialogVisible" class="box">
    <div class="shopBox">
      <div class="shopContent" v-for="(i, k) in storeData" :key="k">
        <el-card class="storeBox" :body-style="{ padding: '0px' }">
          <img :src="'http://jiuaibuni.top/dome/img/dungeoned/' + i.pic + '.png'" />
          <div>{{ i.name }}</div>
          <div>数量：{{ i.number }}</div>
          <div>价格：{{ i.price }}</div>
          <div class="el-button" @click="buy(i)" plain>购买</div>
        </el-card>
      </div>
    </div>
    <div class="el-button" @click="success" plain>确定</div>
  </div>
</template>
<script setup>
import { reactive, onMounted, computed, toRefs } from 'vue'
const props = defineProps({
  dialogVisible: {
    type: Boolean,
    default: false
  },
  storeData: { // 商店内容
    type: Object,
    default: {}
  }
})
const emit = defineEmits(['buy', 'success'])

const success = () => {
  emit('success', { close: true })
}

const buy = (row) => {
  if (row.number > 0) emit('buy', row)
}

const handleClose = () => {
  emit('success', { close: true })
}
onMounted(() => {
})

</script>
  
<style lang="less" scoped>
.box {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background: #ffffffd9;
  display: flex;
  flex-direction: column;
  align-items: center;

  .shopBox {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: flex-start;
    height: calc(100vh - 100px);
    overflow: auto;

    .shopContent {
      width: 32vw;
      border: 1px solid #8383e7;

      .storeBox {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 0;

        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }

  .el-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 32px;
    white-space: nowrap;
    cursor: pointer;
    color: #67c23a;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    transition: .1s;
    -webkit-user-select: none;
    user-select: none;
    vertical-align: middle;
    -webkit-appearance: none;
    background-color: #f0f9eb;
    border: var(--el-border);
    border-color: #b3e19d;
    padding: 8px 15px;
    font-size: 14px;
    border-radius: 4px;
  }
}
</style>