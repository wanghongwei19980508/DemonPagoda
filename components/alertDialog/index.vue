<template>
  <uni-popup ref="dialogRef" type="dialog">
    <uni-popup-dialog :type="dialog.type ? dialog.type : 'success'"
      :cancelText="dialog.cancelText ? dialog.cancelText : '取消'"
      :confirmText="dialog.confirmText ? dialog.confirmText : '确定'" :title="dialog.title ? dialog.title : '通知'"
      :content="dialog.content ? dialog.content : ''" @confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
  </uni-popup>
</template>
<script setup>
import { reactive, watch, toRefs } from 'vue'
var state = reactive({
  dialogRef: null
})
const { dialogRef } = toRefs(state)
const props = defineProps({
  dialog: {
    type: Object,
    default: {}
  },
  open: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['success', 'filled'])

watch(() => props.open, (newVal, oldVal) => {
  if (newVal) { dialogRef.value.open() }
});
// 点击确认
function dialogConfirm() {
  emit('success', props.dialog)
}
// 点击取消
function dialogClose() {
  emit('filled', props.dialog)
}
</script>
<style lang="less"></style>