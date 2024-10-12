<script setup lang="ts">
import type { ToastType } from '../../composables/toast.js'
import IconCheckCircle from '~icons/wt-light-general/check-circle'
import IconExclamationCircle from '~icons/wt-light-sign-controls/exclamation-circle'
import IconTriangleExclamation from '~icons/wt-light-sign-controls/triangle-exclamation'
import IconInfoCircle from '~icons/wt-light-sign-controls/info-circle'
import IconTimes from '~icons/wt-light-general/times'

defineProps<{
  toastId: number
  message: string
  type: ToastType
}>()

function getToasterIcon(type: ToastType) {
  if (type === 'success') return IconCheckCircle
  else if (type === 'error') return IconExclamationCircle
  else if (type === 'warning') return IconTriangleExclamation
  else return IconInfoCircle
}
</script>
<template>
  <div class="d-flex flex-row justify-between align-center h-100">
    <div class="h-100 d-flex align-center justify-center aesl-toast-icon" :class="`is-${type}`">
      <component :is="getToasterIcon(type)" />
    </div>
    <div class="h-100 d-flex align-center aesl-toast-message">
      {{ message }}
    </div>
    <div class="h-100 d-flex align-center justify-center aesl-toast-close">
      <component :is="IconTimes" />
    </div>
  </div>
</template>
