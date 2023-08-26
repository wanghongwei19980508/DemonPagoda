"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_popup_dialog + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "index",
  props: {
    dialog: {
      type: Object,
      default: {}
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  emits: ["success", "filled"],
  setup(__props, { emit }) {
    const props = __props;
    const state = common_vendor.reactive({
      alertDialog
    });
    const { alertDialog } = common_vendor.toRefs(state);
    common_vendor.watch(() => props.open, (newVal, oldVal) => {
      if (newVal) {
        alertDialog.value.open();
      }
    });
    function dialogConfirm() {
      emit("success", props.dialog);
    }
    function dialogClose() {
      emit("filled", props.dialog);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(dialogConfirm),
        b: common_vendor.o(dialogClose),
        c: common_vendor.p({
          type: __props.dialog.type ? __props.dialog.type : "success",
          cancelText: __props.dialog.cancelText ? __props.dialog.cancelText : "\u53D6\u6D88",
          confirmText: __props.dialog.confirmText ? __props.dialog.confirmText : "\u786E\u5B9A",
          title: __props.dialog.title ? __props.dialog.title : "\u901A\u77E5",
          content: __props.dialog.content ? __props.dialog.content : ""
        }),
        d: common_vendor.sr(alertDialog, "408e8086-0", {
          "k": "alertDialog"
        }),
        e: common_vendor.p({
          type: "dialog"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Users/WHW/Desktop/uniapp/\u9B54\u5854/components/alertDialog/index.vue"]]);
wx.createComponent(Component);
