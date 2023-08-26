<template>
  <div class="box">
    <div class="hero-box">
      <p>生命:{{ attribute.user.hp }}</p>
      <p>攻击:{{ attribute.user.attack }}</p>
      <p>防御:{{ attribute.user.defense }}</p>
    </div>
    <div class="hero-hp">
      <p class="hero-hp-p" :class="attackState ? 'heroHp' : ''">-{{ attribute.monster.hurt }}</p>
    </div>
    <div class="hero-img" :class="attackState ? 'heroDefense' : 'heroAttack'">
      <image style="width: 50px; height: 50px;" mode="scaleToFill" src="http://jiuaibuni.top/dome/img/dungeoned/1.png">
      </image>
    </div>
    <div class="monster-box">
      <p>生命:{{ attribute.monster.hp }}</p>
      <p>攻击:{{ attribute.monster.attack }}</p>
      <p>防御:{{ attribute.monster.defense }}</p>
    </div>
    <div class="monster-hp">
      <p class="monster-hp-p" :class="attackState ? '' : 'monsterHp'">-{{ attribute.user.hurt }}</p>
    </div>
    <div class="monster-img" :class="attackState ? 'monsterAttack' : 'monsterDefense'">
      <image style="width: 50px; height: 50px;" mode="scaleToFill"
        :src="'http://jiuaibuni.top/dome/img/dungeoned/' + attribute.monster.id + '.png'">
      </image>
    </div>
    <div class="close-hit" @click="close">关闭动画</div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
let attackState = ref(false),
  a,
  b
const props = defineProps({
  attribute: {
    type: Object,
    default: {}
  }
})
const emit = defineEmits(['success'])
animation()
function animation() {
  let attribute = props.attribute
  a = setInterval(() => {
    attackState.value = !attackState.value
    if (attribute.monster.hp <= 0 || attribute.user.hp <= 0) {
      close()
    }
  }, 2000)
  setTimeout(() => {
    attribute.monster.hp -= attribute.user.hurt
    b = setInterval(() => {
      if (attackState.value) {
        attribute.user.hp -= attribute.monster.hurt
      } else {
        attribute.monster.hp -= attribute.user.hurt
      }
    }, 2000)
  }, 1000)
}

function close() {
  clearInterval(a)
  clearInterval(b)
  emit('success', {
    hp: props.attribute.user.dropBlood,
    goldCoin: props.attribute.monster.goldCoin
  })
}

</script>
<style lang="less">
.box {
  position: fixed;
  top: 0rpx;
  left: 0rpx;
  width: calc(100% - 200rpx);
  height: calc(100% - 200rpx);
  background-color: beige;
  border: 100rpx solid antiquewhite;
  z-index: 98;
}

.hero-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 200rpx;
}

.hero-hp {
  position: absolute;
  top: 35%;
  left: 18%;
  height: 30rpx;
  line-height: 30rpx;
  width: 50rpx;
  overflow: hidden;
  color: red;

  .hero-hp-p {
    font-size: 30rpx;
    margin-top: 50rpx;
    text-align: center;
  }

  .heroHp {
    animation: hp 2s linear 1 normal;
  }
}

.hero-img {
  position: absolute;
  top: 40%;
  left: 20%;
}

.heroAttack {
  animation: h-gongji 2s linear 1 normal;
}

.heroDefense {
  animation: h-shoushang 2s linear 1 normal
}

.monster-box {
  position: absolute;
  top: 0;
  right: 0;
  width: 200rpx;
}

.monster-hp {
  position: absolute;
  top: 45%;
  right: 20%;
  height: 30rpx;
  line-height: 30rpx;
  width: 50rpx;
  overflow: hidden;
  color: red;

  .monster-hp-p {
    font-size: 30rpx;
    margin-top: 50rpx;
    text-align: center;
  }

  .monsterHp {
    animation: hp 2s linear 1 normal;
  }
}

.monster-img {
  position: absolute;
  top: 50%;
  right: 20%;
}

.monsterAttack {
  animation: m-gongji 2s linear 1 normal;
}

.monsterDefense {
  animation: m-shoushang 2s linear 1 normal
}

@keyframes hp {
  50% {
    margin-top: 20rpx
  }

  70% {
    margin-top: -30rpx
  }

  100% {
    margin-top: -100rpx
  }
}

@keyframes h-gongji {
  40% {
    top: 45%;
    left: 60%;
  }

  60% {
    top: 45%;
    left: 60%;
  }

  100% {
    top: 40%;
    left: 20%;
  }
}

@keyframes h-shoushang {
  40% {
    top: 40%;
    left: 20%;
  }

  45% {
    top: 40%;
    left: 19%;
  }

  50% {
    top: 40%;
    left: 21%;
  }

  55% {
    top: 40%;
    left: 19%;
  }

  60% {
    top: 40%;
    left: 20%;
  }
}

@keyframes m-gongji {
  40% {
    top: 45%;
    right: 60%;
  }

  60% {
    top: 45%;
    right: 60%;
  }

  100% {
    top: 50%;
    right: 20%;
  }
}

@keyframes m-shoushang {
  40% {
    top: 50%;
    right: 20%;
  }

  45% {
    top: 50%;
    right: 19%;
  }

  50% {
    top: 50%;
    right: 21%;
  }

  55% {
    top: 50%;
    right: 19%;
  }

  60% {
    top: 50%;
    right: 20%;
  }
}

.close-hit {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>