"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "combatInterface",
  props: {
    attribute: {
      type: Object,
      default: {}
    }
  },
  emits: ["success"],
  setup(__props, { emit }) {
    const props = __props;
    let attackState = common_vendor.ref(false), a, b;
    animation();
    function animation() {
      let attribute = props.attribute;
      a = setInterval(() => {
        attackState.value = !attackState.value;
        if (attribute.monster.hp <= 0 || attribute.user.hp <= 0) {
          close();
        }
      }, 2e3);
      setTimeout(() => {
        attribute.monster.hp -= attribute.user.hurt;
        b = setInterval(() => {
          if (attackState.value) {
            attribute.user.hp -= attribute.monster.hurt;
          } else {
            attribute.monster.hp -= attribute.user.hurt;
          }
        }, 2e3);
      }, 1e3);
    }
    function close() {
      clearInterval(a);
      clearInterval(b);
      emit("success", props.attribute.user.dropBlood);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.attribute.user.hp),
        b: common_vendor.t(__props.attribute.user.attack),
        c: common_vendor.t(__props.attribute.user.defense),
        d: common_vendor.t(__props.attribute.monster.hurt),
        e: common_vendor.n(common_vendor.unref(attackState) ? "heroHp" : ""),
        f: common_vendor.n(common_vendor.unref(attackState) ? "heroDefense" : "heroAttack"),
        g: common_vendor.t(__props.attribute.monster.hp),
        h: common_vendor.t(__props.attribute.monster.attack),
        i: common_vendor.t(__props.attribute.monster.defense),
        j: common_vendor.t(__props.attribute.user.hurt),
        k: common_vendor.n(common_vendor.unref(attackState) ? "" : "monsterHp"),
        l: "http://jiuaibuni.top/dome/img/dungeoned/" + __props.attribute.monster.id + ".png",
        m: common_vendor.n(common_vendor.unref(attackState) ? "monsterAttack" : "monsterDefense"),
        n: common_vendor.o(close)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/pages/index/combatInterface.vue"]]);
wx.createComponent(Component);
