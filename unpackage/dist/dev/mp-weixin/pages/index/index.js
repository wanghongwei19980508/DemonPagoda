"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_api = require("../../utils/api.js");
require("../../utils/http.js");
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (dungeoned + _easycom_uni_list_item + _easycom_uni_list)();
}
const dungeoned = () => "./dungeoned2.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const Dungeoned = common_vendor.reactive({
      user: [],
      map: {},
      monster: [],
      show: false,
      customsList: [],
      thumbList: []
    });
    const state = common_vendor.reactive({
      customsShow: false,
      thumbShow: false,
      customsScrollTop: 0,
      thumbScrollTop: 0,
      dungeonedId: ""
    });
    const { thumbScrollTop, customsScrollTop, dungeonedId, thumbShow, customsShow } = common_vendor.toRefs(state);
    function getCustomsList() {
      utils_api.getDungeonedCustomsList({
        currentPage: 1,
        pageSize: 10
      }).then((res) => {
        if (res.code === "0000") {
          Dungeoned.customsList = res.data.list;
          state.customsShow = true;
        }
      });
    }
    function getThumbList() {
      utils_api.getDungeonedThumbList({
        currentPage: 1,
        pageSize: 10
      }).then((res) => {
        if (res.code === "0000") {
          Dungeoned.thumbList = res.data.list;
          state.thumbShow = true;
        }
      });
    }
    function getData(value) {
      value ? state.dungeonedId = value : "";
      utils_api.getDungeonedConfig({
        dungeonedId: state.dungeonedId
      }).then((res) => {
        if (res.code === "0000") {
          Dungeoned.user = JSON.parse(res.data[0].user);
          Dungeoned.map = JSON.parse(res.data[0].map);
          Dungeoned.show = true;
          Dungeoned.monster = drawer[drawer.length - 1].config;
        }
      });
    }
    function closeList() {
      state.thumbShow = false;
      state.customsShow = false;
    }
    function close(blon) {
      Dungeoned.show = blon;
    }
    function success() {
      Dungeoned.show = false;
    }
    function upper(e) {
      console.log(e);
    }
    function lower(e) {
      console.log(e);
    }
    function scroll(e) {
      console.log(e);
    }
    const drawer = [
      {
        name: "\u5EFA\u7B51",
        config: [
          {
            id: "0",
            name: "\u5899"
          },
          {
            id: "3",
            name: "\u697C\u68AF(\u4E0A\u697C)"
          },
          {
            id: "4",
            name: "\u697C\u68AF(\u4E0B\u697C)"
          },
          {
            id: "101",
            name: "\u5730\u677F"
          },
          {
            id: "102",
            name: "\u5BC6\u9053"
          },
          {
            id: "201",
            name: "\u94DC\u95E8"
          },
          {
            id: "202",
            name: "\u94F6\u95E8"
          },
          {
            id: "203",
            name: "\u91D1\u95E8"
          }
        ]
      },
      {
        name: "\u4EBA\u7269",
        config: [
          {
            id: "1",
            name: "\u4E3B\u89D2"
          },
          {
            id: "2",
            name: "\u516C\u4E3B"
          }
        ]
      },
      {
        name: "\u9053\u5177",
        config: [
          {
            id: "301",
            name: "\u94DC\u94A5\u5319"
          },
          {
            id: "302",
            name: "\u94F6\u94A5\u5319"
          },
          {
            id: "303",
            name: "\u91D1\u94A5\u5319"
          }
        ]
      },
      {
        name: "\u589E\u76CA\u9053\u5177",
        config: [
          {
            id: "801",
            name: "\u5C0F\u5251(+1\u529F)"
          },
          {
            id: "802",
            name: "\u5C0F\u76FE(+1\u9632)"
          },
          {
            id: "803",
            name: "\u5C0F\u8840(+10\u8840)"
          },
          {
            id: "804",
            name: "\u4E2D\u5251(+3\u529F)"
          },
          {
            id: "805",
            name: "\u4E2D\u76FE(+3\u9632)"
          },
          {
            id: "806",
            name: "\u4E2D\u8840(+30\u8840)"
          }
        ]
      },
      {
        name: "\u602A\u7269",
        config: [
          {
            id: "901",
            name: "\u53F2\u83B1\u5990",
            attribute: {
              hp: 80,
              attack: 15,
              defense: 10
            }
          },
          {
            id: "902",
            name: "\u8759\u8760",
            attribute: {
              hp: 100,
              attack: 15,
              defense: 15
            }
          },
          {
            id: "903",
            name: "\u9AB7\u9AC5\u58EB\u5175",
            attribute: {
              hp: 120,
              attack: 40,
              defense: 8
            }
          },
          {
            id: "904",
            name: "\u9AB7\u9AC5\u5B88\u536B",
            attribute: {
              hp: 250,
              attack: 8,
              defense: 30
            }
          },
          {
            id: "905",
            name: "\u53F2\u83B1\u59C6",
            attribute: {
              hp: 120,
              attack: 12,
              defense: 8
            }
          },
          {
            id: "906",
            name: "\u6CD5\u5E08",
            attribute: {
              hp: 80,
              attack: 100,
              defense: 20
            }
          },
          {
            id: "907",
            name: "\u91CE\u4EBA",
            attribute: {
              hp: 230,
              attack: 80,
              defense: 40
            }
          },
          {
            id: "908",
            name: "\u7687\u5BB6\u5B88\u536B",
            attribute: {
              hp: 500,
              attack: 100,
              defense: 100
            }
          },
          {
            id: "909",
            name: "BOSS",
            attribute: {
              hp: 1e3,
              attack: 200,
              defense: 200
            }
          }
        ]
      }
    ];
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(dungeonedId),
        b: common_vendor.o(($event) => common_vendor.isRef(dungeonedId) ? dungeonedId.value = $event.detail.value : null),
        c: common_vendor.o(($event) => getData(false)),
        d: common_vendor.o(getCustomsList),
        e: common_vendor.o(getThumbList),
        f: Dungeoned.show
      }, Dungeoned.show ? {
        g: common_vendor.o(close),
        h: common_vendor.o(success),
        i: common_vendor.p({
          user: Dungeoned.user,
          map: Dungeoned.map,
          dungeonedShow: Dungeoned.show,
          monster: Dungeoned.monster
        })
      } : {}, {
        j: common_vendor.o(($event) => closeList()),
        k: common_vendor.p({
          title: "\u5173\u95ED\u699C\u5355",
          clickable: true
        }),
        l: common_vendor.f(Dungeoned.customsList, (item, index, i0) => {
          return {
            a: index,
            b: common_vendor.o(($event) => getData(item.id), index),
            c: "c636a12a-3-" + i0 + ",c636a12a-1",
            d: common_vendor.p({
              title: item.id,
              note: "\u901A\u5173\u6B21\u6570" + item.customs,
              avatarCircle: true,
              showArrow: true,
              thumb: "http://jiuaibuni.top/dome/img/dungeoned/90" + (index + 1) + ".png",
              ["thumb-size"]: "lg",
              rightText: "\u70B9\u51FB\u8FDB\u5165\u5730\u56FE",
              link: true
            })
          };
        }),
        m: common_vendor.unref(customsShow),
        n: common_vendor.unref(customsScrollTop),
        o: common_vendor.o(upper),
        p: common_vendor.o(lower),
        q: common_vendor.o(scroll),
        r: common_vendor.o(($event) => closeList()),
        s: common_vendor.p({
          title: "\u5173\u95ED\u699C\u5355",
          clickable: true
        }),
        t: common_vendor.f(Dungeoned.thumbList, (item, index, i0) => {
          return {
            a: index,
            b: common_vendor.o(($event) => getData(item.id), index),
            c: "c636a12a-6-" + i0 + ",c636a12a-4",
            d: common_vendor.p({
              title: item.id,
              note: "\u70B9\u8D5E\u6570" + item.thumb,
              avatarCircle: true,
              showArrow: true,
              thumb: "http://jiuaibuni.top/dome/img/dungeoned/90" + (index + 1) + ".png",
              ["thumb-size"]: "lg",
              rightText: "\u70B9\u51FB\u8FDB\u5165\u5730\u56FE",
              link: true
            })
          };
        }),
        v: common_vendor.unref(thumbShow),
        w: common_vendor.unref(thumbScrollTop),
        x: common_vendor.o(upper),
        y: common_vendor.o(lower),
        z: common_vendor.o(scroll)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
