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
</template>
<script setup>
import combatInterface from './combatInterface.vue'
import alertDialog from '../components/alertDialog/index.vue'
import { ref, reactive, onMounted, watch } from 'vue'
const floor = ref(0), // 层数
  peoplex = ref(0),
  peopley = ref(0),
  idBefore = ref(101), // 前一位id
  dialog = reactive({
    open: false
  }),
  attribute = reactive({
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
  }); // 动画字段
let timer, interval

const props = defineProps({
  user: {
    type: Object,
    default: {}
  },
  map: {
    type: Array,
    default: []
  },
  monster: {
    type: Array,
    default: []
  },
  property: {
    type: Array,
    default: []
  },
  dungeonedShow: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits(['close', 'success'])

onMounted(() => {
  heroic()
})

function upKeyUp(e) {
  let peopleX = peoplex.value
  let peopleY = peopley.value
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

function touchStartKey(e) {
  timer = setTimeout(() => {
    interval = setInterval(() => {
      upKeyUp(e)
    }, 400)
  }, 500)
}
function touchEndKey() {
  if (timer) {
    clearTimeout(timer)
    clearInterval(interval)
  }
}

function userMove(x, y, x1, y1) {
  if (!props.dungeonedShow) return
  let map = props.map
  let user = props.user
  let id = map[floor.value][x1][y1] > 200 ? 101 : map[floor.value][x1][y1]
  console.log(idBefore.value);
  if (map[floor.value][x1][y1] == 2) {
    if (user.hp >= 0) {
      dialog.id = 1
      dialog.content = '通关成功'
      dialog.open = true
    }
    return
  } else if (map[floor.value][x1][y1] == 3) {
    if (floor.value >= 0 && floor.value < map.length - 1) {
      floor.value++;
      heroic()
    }
    return
  } else if (map[floor.value][x1][y1] == 4) {
    if (floor.value >= 1 && floor.value < map.length) {
      floor.value--;
      heroic()
    }
    return
  } else if (map[floor.value][x1][y1] == 101) {
    map[floor.value][x1][y1] = 1;
    map[floor.value][x][y] = idBefore.value;
  } else if (map[floor.value][x1][y1] == 102) {
    map[floor.value][x1][y1] = 1;
    map[floor.value][x][y] = idBefore.value;
  } else if (map[floor.value][x1][y1] == 201 && user.copperKey > 0) {
    map[floor.value][x1][y1] = 1;
    map[floor.value][x][y] = idBefore.value;
    user.copperKey--;
  } else if (map[floor.value][x1][y1] == 202 && user.silverKey > 0) {
    map[floor.value][x1][y1] = 1;
    map[floor.value][x][y] = idBefore.value;
    user.silverKey--;
  } else if (map[floor.value][x1][y1] == 203 && user.goldenKey > 0) {
    map[floor.value][x1][y1] = 1;
    map[floor.value][x][y] = idBefore.value;
    user.goldenKey--;
  } else if (map[floor.value][x1][y1] == 301) {
    map[floor.value][x1][y1] = 1;
    map[floor.value][x][y] = idBefore.value;
    user.copperKey++;
  } else if (map[floor.value][x1][y1] == 302) {
    map[floor.value][x1][y1] = 1;
    map[floor.value][x][y] = idBefore.value;
    user.silverKey++;
  } else if (map[floor.value][x1][y1] == 303) {
    map[floor.value][x1][y1] = 1;
    map[floor.value][x][y] = idBefore.value;
    user.goldenKey++;
  } else if (map[floor.value][x1][y1] > 800 && map[floor.value][x1][y1] < 900) {
    let property = props.property.filter(row => row.id == map[floor.value][x1][y1])[0].attribute
    user.attack += property.attack
    user.defense += property.defense
    user.hp += property.hp
    map[floor.value][x1][y1] = 1;
    map[floor.value][x][y] = idBefore.value;
  } else if (map[floor.value][x1][y1] > 900 && map[floor.value][x1][y1] < 999 && user.hp > 0) {
    let monster = props.monster
    let blon = true
    monster.map(item => {
      if (map[floor.value][x1][y1] == item.id) {
        const monsterBeHurt = user.attack - item.attribute.defense > 0 ? user.attack - item.attribute
          .defense : 1
        const userBeHurt = item.attribute.attack - user.defense > 0 ? item.attribute.attack - user
          .defense : 1
        attribute.user = {
          hp: user.hp,
          attack: user.attack,
          defense: user.defense,
          hurt: monsterBeHurt,
          dropBlood: (Math.ceil(item.attribute.hp / monsterBeHurt) - 1) * userBeHurt
        }
        attribute.monster = {
          id: item.id,
          hp: item.attribute.hp,
          attack: item.attribute.attack,
          defense: item.attribute.defense,
          hurt: userBeHurt
        }
        attribute.show = true
        if (item.attribute.hp >= monsterBeHurt) {
          user.hp -= (Math.ceil(item.attribute.hp / monsterBeHurt) - 1) * userBeHurt
          if (user.hp < 1) {
            blon = false
          }
        }
      }
    })
    if (blon) {
      map[floor.value][x1][y1] = 1;
      map[floor.value][x][y] = idBefore.value;
    } else {
      return
    }
  } else {
    return
  }
  peoplex.value = x1
  peopley.value = y1
  idBefore.value = id
}

function heroic() {
  let userPoston = {
    peoplex: 0,
    peopley: 0,
    boolean: false,
  }
  props.map[floor.value].forEach((item, key) => {
    item.forEach((i, k) => {
      if (i == 1) {
        userPoston.boolean = true
        peoplex.value = key
        peopley.value = k
      } else if (i == 4 || i == 99) {
        userPoston.peoplex = key
        userPoston.peopley = k
      }
    })
  })
  if (!userPoston.boolean) {
    peoplex.value = userPoston.peoplex
    peopley.value = userPoston.peopley
    idBefore.value = 4
    props.map[floor.value][userPoston.peoplex][userPoston.peopley] = 99
  }
  console.log(peoplex.value, peopley.value);
}

function alertDialogSuccess() {
  if (dialog.id === 1) success()
  if (dialog.id === 2) close()
}
function alertDialogFilled() {
  if (dialog.id === 1) success()
  if (dialog.id === 2) user.hp += number
}

function tooip(number) {
  attribute.show = false
  let user = props.user
  if (user.hp < 1) {
    dialog.id = 2
    dialog.type = 'warning'
    dialog.confirmText = '退出'
    dialog.cancelText = '抢救一下'
    dialog.content = '你死了,请尝试换个思路'
    dialog.title = '提示'
  }
}

function success() {
  emit('success', true)
}

function close() {
  emit('close', false)
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
          font-size: 45rpx;
          line-height: 60rpx;
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
