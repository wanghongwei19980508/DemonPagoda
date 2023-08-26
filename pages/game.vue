<template>
  <div class="dungeonedBox">
    <div class="G_box">
      <div class="map_box">
        <div class="map_content_box" v-for="(i, k) in map[floor]" :key="k">
          <div class="map_content_box" v-for="(item, key) in i" :key="key">
            <img class="G_image" :src="'http://jiuaibuni.top/dome/img/dungeoned/' + item + '.png'" />
          </div>
        </div>
      </div>
    </div>
    <div class="choose_box">
      <div class="user_box">
        <div class="user_content">
          <p class="p">楼层:{{ floor + 1 }}</p>
        </div>
        <div class="user_content">
          <p class="p">生命:{{ user.hp }}</p>
          <p class="p">攻击:{{ user.attack }}</p>
          <p class="p">防御:{{ user.defense }}</p>
          <p class="p">金币:{{ user.goldCoin }}</p>
        </div>
        <div class="user_content">
          <p class="p">铜钥匙:{{ user.copperKey }}</p>
          <p class="p">银钥匙:{{ user.silverKey }}</p>
          <p class="p">金钥匙:{{ user.goldenKey }}</p>
        </div>
      </div>
      <div class="postion_box">
        <div class="postion_button" @click="codexShow()">图鉴</div>
        <div class="postion_button" @click="upKeyUp({ keyCode: 38 })" @touchstart="touchStartKey({ keyCode: 38 })
          " @touchend="touchEndKey()">上</div>
        <div class="postion_button" @click="success">退出</div>
        <div class="postion_button" @click="upKeyUp({ keyCode: 37 })" @touchstart="touchStartKey({ keyCode: 37 })
          " @touchend="touchEndKey()">左</div>
        <div class="postion_button" @click="upKeyUp({ keyCode: 40 })" @touchstart="touchStartKey({ keyCode: 40 })
          " @touchend="touchEndKey()">下</div>
        <div class="postion_button" @click="upKeyUp({ keyCode: 39 })" @touchstart="touchStartKey({ keyCode: 39 })
          " @touchend="touchEndKey()">右</div>
      </div>
    </div>
  </div>
  <div style="clear: both;"></div>
  <alertDialog :dialog="dialog" :open="dialog.open" @success="alertDialogSuccess" @filled="alertDialogFilled">
  </alertDialog>
  <combatInterface :attribute="attribute" v-if="attribute.show" @success="tooip" />
  <shop :dialogVisible="shopShow" :storeData="user.shopDate" @success="getShopData" @buy="changeAttribute">
  </shop>
</template>
  
<script setup>
import { reactive, onMounted, watch, toRefs, getCurrentInstance } from 'vue'
import combatInterface from './combatInterface.vue'
import shop from './shop.vue'
import alertDialog from '../components/alertDialog/index.vue'
import { getDungeonedConfig } from "../utils/api";
import { drawer } from "../utils/dungeonedConfig";
const state = reactive({
  user: [],
  map: {},
  monster: [],
  property: [],
  floor: 0,// 层数
  peoplex: 0, // 角色X位置
  peopley: 0, // 角色Y位置
  idBefore: 101, // 前一位id
  dialog: { // 弹窗dialog
    open: false,
  },
  attribute: { // 动画参数
    show: false,
    user: {
      hp: 0,
      attack: 0,
      defense: 0,
      hurt: 0
    },
    monster: {
      id: 0,
      hp: 0,
      attack: 0,
      defense: 0,
      hurt: 0
    }
  },
  shopShow: false
})
const { floor, peoplex, peopley, idBefore, dialog, attribute, user, map, monster, property, shopShow } = toRefs(state)
let timer, interval
onMounted(() => {
  let options = getCurrentInstance()
  getData(options.attrs.dungeonedId)
})
// 获取游戏地图
const getData = (value) => { // 获取参数
  getDungeonedConfig({ dungeonedId: value }).then((res) => {
    if (res && res.code === '0000') {
      state.user = JSON.parse(res.data[0].user)
      state.map = JSON.parse(res.data[0].map)
      state.monster = drawer.filter(row => row.name == '怪物')[0].config
      state.property = drawer.filter(row => row.name == '增益道具')[0].config
      heroic()
    } else {
      uni.navigateBack({ delta: 1 })
    }
  })
}
// 监听按键
const upKeyUp = (e) => {
  let peopleX = state.peoplex
  let peopleY = state.peopley
  if (e && e.keyCode == 38) {
    if (peopleX > 0) {
      userMove(peopleX, peopleY, peopleX - 1, peopleY);
    }
  } else if (e && e.keyCode == 37) {
    userMove(peopleX, peopleY, peopleX, peopleY - 1);
  } else if (e && e.keyCode == 40) {
    if (peopleX >= 0 && peopleX <= 9) {
      userMove(peopleX, peopleY, peopleX + 1, peopleY);
    }
  } else if (e && e.keyCode == 39) {
    userMove(peopleX, peopleY, peopleX, peopleY + 1);
  }
}
// 长按移动
const touchStartKey = (e) => {
  timer = setTimeout(() => {
    interval = setInterval(() => {
      upKeyUp(e)
    }, 400)
  }, 500)
}
// 结束移动
const touchEndKey = () => {
  if (timer) {
    clearTimeout(timer)
    clearInterval(interval)
  }
}
// 角色移动
const userMove = (x, y, x1, y1) => {
  let map = state.map
  let user = state.user
  let id = map[state.floor][x1][y1] > 200 ? 101 : map[state.floor][x1][y1]
  if (map[state.floor][x1][y1] == 2) {
    if (user.hp >= 0) {
      // 通关次数+1
      state.dialog.id = 1
      state.dialog.content = '通关成功'
      state.dialog.open = true
      state.dialog.confirmText = '确定'
      state.dialog.cancelText = '点赞'
    }
    return
  } else if (map[state.floor][x1][y1] == 3) {
    if (state.floor >= 0 && state.floor < map.length - 1) {
      state.floor++;
      heroic()
    }
    return
  } else if (map[state.floor][x1][y1] == 4) {
    if (state.floor >= 1 && state.floor < map.length) {
      state.floor--;
      heroic()
    }
    return
  } else if (map[floor.value][x1][y1] == 5) {
    state.shopShow = true
    return
    // 商人
  } else if (map[state.floor][x1][y1] == 101) {
    map[state.floor][x1][y1] = 1;
    map[state.floor][x][y] = state.idBefore;
  } else if (map[state.floor][x1][y1] == 102) {
    map[state.floor][x1][y1] = 1;
    map[state.floor][x][y] = state.idBefore;
  } else if (map[state.floor][x1][y1] == 201 && user.copperKey > 0) {
    map[state.floor][x1][y1] = 1;
    map[state.floor][x][y] = state.idBefore;
    user.copperKey--;
  } else if (map[state.floor][x1][y1] == 202 && user.silverKey > 0) {
    map[state.floor][x1][y1] = 1;
    map[state.floor][x][y] = state.idBefore;
    user.silverKey--;
  } else if (map[state.floor][x1][y1] == 203 && user.goldenKey > 0) {
    map[state.floor][x1][y1] = 1;
    map[state.floor][x][y] = state.idBefore;
    user.goldenKey--;
  } else if (map[state.floor][x1][y1] == 301) {
    map[state.floor][x1][y1] = 1;
    map[state.floor][x][y] = state.idBefore;
    user.copperKey++;
  } else if (map[state.floor][x1][y1] == 302) {
    map[state.floor][x1][y1] = 1;
    map[state.floor][x][y] = state.idBefore;
    user.silverKey++;
  } else if (map[state.floor][x1][y1] == 303) {
    map[state.floor][x1][y1] = 1;
    map[state.floor][x][y] = state.idBefore;
    user.goldenKey++;
  } else if (map[state.floor][x1][y1] > 800 && map[state.floor][x1][y1] < 900) {
    let property = state.property.filter(row => row.id == map[state.floor][x1][y1])[0].attribute
    user.attack += property.attack
    user.defense += property.defense
    user.hp += property.hp
    map[state.floor][x1][y1] = 1;
    map[state.floor][x][y] = state.idBefore;
  } else if (map[state.floor][x1][y1] > 900 && map[state.floor][x1][y1] < 999 && user.hp > 0) {
    let monster = state.monster
    let blon = true
    monster.map(item => {
      if (map[state.floor][x1][y1] == item.id) {
        const monsterBeHurt = user.attack - item.attribute.defense > 0 ? user.attack - item.attribute.defense : 1
        const userBeHurt = item.attribute.attack - user.defense > 0 ? item.attribute.attack - user.defense : 1
        state.attribute.user = {
          hp: user.hp,
          attack: user.attack,
          defense: user.defense,
          hurt: monsterBeHurt,
          dropBlood: (Math.ceil(item.attribute.hp / monsterBeHurt) - 1) * userBeHurt
        }
        state.attribute.monster = {
          id: item.id,
          hp: item.attribute.hp,
          attack: item.attribute.attack,
          defense: item.attribute.defense,
          goldCoin: item.attribute.goldCoin,
          hurt: userBeHurt
        }
        state.attribute.show = true
        state.user.goldCoin += item.attribute.goldCoin
        if (item.attribute.hp >= monsterBeHurt) {
          user.hp -= (Math.ceil(item.attribute.hp / monsterBeHurt) - 1) * userBeHurt
          if (user.hp < 1) {
            blon = false
          }
        }
      }
    })
    if (blon) {
      map[state.floor][x1][y1] = 1;
      map[state.floor][x][y] = state.idBefore;
    } else {
      return
    }
  } else {
    return
  }
  state.peoplex = x1
  state.peopley = y1
  state.idBefore = id
}
// 角色确认站位
const heroic = () => {
  let userPoston = {
    peoplex: 0,
    peopley: 0,
    boolean: false,
  }
  state.map[state.floor].forEach((item, key) => {
    item.forEach((i, k) => {
      if (i == 1) {
        userPoston.boolean = true
        state.peoplex = key
        state.peopley = k
      } else if (i == 4 || i == 99) {
        userPoston.peoplex = key
        userPoston.peopley = k
      }
    })
  })
  if (!userPoston.boolean) {
    state.peoplex = userPoston.peoplex
    state.peopley = userPoston.peopley
    state.idBefore = 4
    state.map[state.floor][userPoston.peoplex][userPoston.peopley] = 99
  }
}
// 提示
const tooip = (attribute) => {
  state.attribute.show = false
  let user = state.user
  if (user.hp < 1) {
    state.dialog.id = 2
    state.dialog.type = 'warning'
    state.dialog.confirmText = '退出'
    state.dialog.cancelText = '抢救一下'
    state.dialog.content = '你死了,请尝试换个思路'
    state.dialog.title = '提示'
  }
}
const alertDialogSuccess = () => {
  if (state.dialog.id === 1) close()
  if (state.dialog.id === 2) close()
}
const alertDialogFilled = () => {
  if (state.dialog.id === 1) {
    // 进行点赞
    close()
  }
  if (state.dialog.id === 2) {
    state.user.hp += attribute.hp
    state.user.goldCoin -= attribute.goldCoin
  }
}

const getShopData = (row) => {
  state.shopShow = false
}
const changeAttribute = (row) => {
  if (state.user.goldCoin >= row.price) {
    state.user.goldCoin -= row.price
    if (row.pic === '803') { state.user.hp += 1 }
    else if (row.pic === '801') { state.user.attack += 1 }
    else if (row.pic === '802') { state.user.defense += 1 }
    else if (row.pic === '301') { state.user.copperKey += 1 }
    else if (row.pic === '302') { state.user.silverKey += 1 }
    else if (row.pic === '303') { state.user.goldenKey += 1 }
    state.user.shopDate.filter(item => item.pic == row.pic)[0].number--
  } else {
    alert('金币不足')
  }
}

const close = () => {
  uni.navigateBack({ delta: 1 });
}
</script>
  
<style lang="less">
.dungeonedBox {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0rpx;
  left: 0rpx;
  width: 100%;
  background-color: #8cb9b0aa;
  z-index: 97;

  .map_box {
    display: flex;
    flex-direction: column;

    .map_content_box {
      display: flex;
      flex-direction: row;

      .G_image {
        width: 68rpx;
        height: 68rpx;
      }
    }
  }

  .choose_box {
    display: flex;

    .user_box {
      width: 300rpx;
      height: 500rpx;
      display: flex;
      flex-direction: column;
      background: antiquewhite;

      .user_content {
        margin: 10rpx;
        background: #fff;

        .p {
          font-size: 40rpx;
          line-height: 50rpx;
        }
      }
    }

    .postion_box {
      width: 450rpx;
      height: 500rpx;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      justify-content: flex-start;
      align-items: center;

      .postion_button {
        width: 145rpx;
        height: 246rpx;
        border: 1px solid #ffffff;
        color: #1e135a;
        text-align: center;
        line-height: 246rpx;
        font-size: 60rpx;
      }
    }
  }
}
</style>
  