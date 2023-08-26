"use strict";
const common_vendor = require("./common/vendor.js");
if (!Math) {
  (alertDialog + combatInterface)();
}
const combatInterface = () => "./pages/index/combatInterface.js";
const alertDialog = () => "./components/alertDialog/index.js";
const _sfc_main = {
  __name: "dungeoned",
  props: {
    user: {
      type: Object,
      default: {}
    },
    map: {
      type: Array,
      default: []
    },
    monster: {
      type: Object,
      default: {}
    },
    dungeonedShow: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close", "success"],
  setup(__props, { emit }) {
    const props = __props;
    const floor = common_vendor.ref(0), peoplex = common_vendor.ref(0), peopley = common_vendor.ref(0), idBefore = common_vendor.ref(101), dialog = common_vendor.reactive({
      open: false
    }), attribute = common_vendor.reactive({
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
    });
    let timer, interval;
    common_vendor.onMounted(() => {
      heroic();
    });
    function upKeyUp(e) {
      let peopleX = peoplex.value;
      let peopleY = peopley.value;
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
          upKeyUp(e);
        }, 400);
      }, 500);
    }
    function touchEndKey() {
      if (timer) {
        clearTimeout(timer);
        clearInterval(interval);
      }
    }
    function userMove(x, y, x1, y1) {
      if (!props.dungeonedShow)
        return;
      let map = props.map;
      let user2 = props.user;
      let id = map[floor.value][x1][y1] > 200 ? 101 : map[floor.value][x1][y1];
      console.log(idBefore.value);
      if (map[floor.value][x1][y1] == 2) {
        if (user2.hp >= 0) {
          dialog.id = 1;
          dialog.content = "\u901A\u5173\u6210\u529F";
          dialog.open = true;
        }
        return;
      } else if (map[floor.value][x1][y1] == 3) {
        if (floor.value >= 0 && floor.value < map.length - 1) {
          floor.value++;
          heroic();
        }
        return;
      } else if (map[floor.value][x1][y1] == 4) {
        if (floor.value >= 1 && floor.value < map.length) {
          floor.value--;
          heroic();
        }
        return;
      } else if (map[floor.value][x1][y1] == 101) {
        map[floor.value][x1][y1] = 1;
        map[floor.value][x][y] = idBefore.value;
      } else if (map[floor.value][x1][y1] == 102) {
        map[floor.value][x1][y1] = 1;
        map[floor.value][x][y] = idBefore.value;
      } else if (map[floor.value][x1][y1] == 201 && user2.copperKey > 0) {
        map[floor.value][x1][y1] = 1;
        map[floor.value][x][y] = idBefore.value;
        user2.copperKey--;
      } else if (map[floor.value][x1][y1] == 202 && user2.silverKey > 0) {
        map[floor.value][x1][y1] = 1;
        map[floor.value][x][y] = idBefore.value;
        user2.silverKey--;
      } else if (map[floor.value][x1][y1] == 203 && user2.goldenKey > 0) {
        map[floor.value][x1][y1] = 1;
        map[floor.value][x][y] = idBefore.value;
        user2.goldenKey--;
      } else if (map[floor.value][x1][y1] == 301) {
        map[floor.value][x1][y1] = 1;
        map[floor.value][x][y] = idBefore.value;
        user2.copperKey++;
      } else if (map[floor.value][x1][y1] == 302) {
        map[floor.value][x1][y1] = 1;
        map[floor.value][x][y] = idBefore.value;
        user2.silverKey++;
      } else if (map[floor.value][x1][y1] == 303) {
        map[floor.value][x1][y1] = 1;
        map[floor.value][x][y] = idBefore.value;
        user2.goldenKey++;
      } else if (map[floor.value][x1][y1] > 800 && map[floor.value][x1][y1] < 900) {
        if (map[floor.value][x1][y1] == 801) {
          user2.attack += 1;
        } else if (map[floor.value][x1][y1] == 802) {
          user2.defense += 1;
        } else if (map[floor.value][x1][y1] == 803) {
          user2.hp += 10;
        } else if (map[floor.value][x1][y1] == 804) {
          user2.attack += 3;
        } else if (map[floor.value][x1][y1] == 805) {
          user2.defense += 3;
        } else if (map[floor.value][x1][y1] == 806) {
          user2.hp += 30;
        }
        map[floor.value][x1][y1] = 1;
        map[floor.value][x][y] = idBefore.value;
      } else if (map[floor.value][x1][y1] > 900 && map[floor.value][x1][y1] < 999 && user2.hp > 0) {
        let monster = props.monster;
        let blon = true;
        monster.map((item) => {
          if (map[floor.value][x1][y1] == item.id) {
            const monsterBeHurt = user2.attack - item.attribute.defense > 0 ? user2.attack - item.attribute.defense : 1;
            const userBeHurt = item.attribute.attack - user2.defense > 0 ? item.attribute.attack - user2.defense : 1;
            attribute.user = {
              hp: user2.hp,
              attack: user2.attack,
              defense: user2.defense,
              hurt: monsterBeHurt,
              dropBlood: (Math.ceil(item.attribute.hp / monsterBeHurt) - 1) * userBeHurt
            };
            attribute.monster = {
              id: item.id,
              hp: item.attribute.hp,
              attack: item.attribute.attack,
              defense: item.attribute.defense,
              hurt: userBeHurt
            };
            attribute.show = true;
            if (item.attribute.hp >= monsterBeHurt) {
              user2.hp -= (Math.ceil(item.attribute.hp / monsterBeHurt) - 1) * userBeHurt;
              if (user2.hp < 1) {
                blon = false;
              }
            }
          }
        });
        if (blon) {
          map[floor.value][x1][y1] = 1;
          map[floor.value][x][y] = idBefore.value;
        } else {
          return;
        }
      } else {
        return;
      }
      peoplex.value = x1;
      peopley.value = y1;
      idBefore.value = id;
    }
    function heroic() {
      let userPoston = {
        peoplex: 0,
        peopley: 0,
        boolean: false
      };
      props.map[floor.value].forEach((item, key) => {
        item.forEach((i, k) => {
          if (i == 1) {
            userPoston.boolean = true;
            peoplex.value = key;
            peopley.value = k;
          } else if (i == 4 || i == 99) {
            userPoston.peoplex = key;
            userPoston.peopley = k;
          }
        });
      });
      if (!userPoston.boolean) {
        peoplex.value = userPoston.peoplex;
        peopley.value = userPoston.peopley;
        idBefore.value = 4;
        props.map[floor.value][userPoston.peoplex][userPoston.peopley] = 99;
      }
      console.log(peoplex.value, peopley.value);
    }
    function alertDialogSuccess() {
      if (dialog.id === 1)
        success();
      if (dialog.id === 2)
        close();
    }
    function alertDialogFilled() {
      if (dialog.id === 1)
        success();
      if (dialog.id === 2)
        user.hp += number;
    }
    function tooip(number2) {
      attribute.show = false;
      let user2 = props.user;
      if (user2.hp < 1) {
        dialog.id = 2;
        dialog.type = "warning";
        dialog.confirmText = "\u9000\u51FA";
        dialog.cancelText = "\u62A2\u6551\u4E00\u4E0B";
        dialog.content = "\u4F60\u6B7B\u4E86,\u8BF7\u5C1D\u8BD5\u6362\u4E2A\u601D\u8DEF";
        dialog.title = "\u63D0\u793A";
      }
    }
    function success() {
      emit("success", true);
    }
    function close() {
      emit("close", false);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(__props.map[floor.value], (i, k, i0) => {
          return {
            a: common_vendor.f(i, (item, key, i1) => {
              return {
                a: "http://jiuaibuni.top/dome/img/dungeoned/" + item + ".png",
                b: key
              };
            }),
            b: k
          };
        }),
        b: common_vendor.t(floor.value + 1),
        c: common_vendor.t(__props.user.hp),
        d: common_vendor.t(__props.user.attack),
        e: common_vendor.t(__props.user.defense),
        f: common_vendor.t(__props.user.copperKey),
        g: common_vendor.t(__props.user.silverKey),
        h: common_vendor.t(__props.user.goldenKey),
        i: common_vendor.o(($event) => upKeyUp({
          keyCode: 38
        })),
        j: common_vendor.o(($event) => touchStartKey({
          keyCode: 38
        })),
        k: common_vendor.o(($event) => touchEndKey()),
        l: common_vendor.o(success),
        m: common_vendor.o(($event) => upKeyUp({
          keyCode: 37
        })),
        n: common_vendor.o(($event) => touchStartKey({
          keyCode: 37
        })),
        o: common_vendor.o(($event) => touchEndKey()),
        p: common_vendor.o(($event) => upKeyUp({
          keyCode: 40
        })),
        q: common_vendor.o(($event) => touchStartKey({
          keyCode: 40
        })),
        r: common_vendor.o(($event) => touchEndKey()),
        s: common_vendor.o(($event) => upKeyUp({
          keyCode: 39
        })),
        t: common_vendor.o(($event) => touchStartKey({
          keyCode: 39
        })),
        v: common_vendor.o(($event) => touchEndKey()),
        w: common_vendor.o(alertDialogSuccess),
        x: common_vendor.o(alertDialogFilled),
        y: common_vendor.p({
          dialog,
          open: dialog.open
        }),
        z: attribute.show
      }, attribute.show ? {
        A: common_vendor.o(tooip),
        B: common_vendor.p({
          attribute
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/pages/index/dungeoned.vue"]]);
exports.Component = Component;
