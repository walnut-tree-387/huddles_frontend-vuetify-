<script setup lang="ts">
import { useIcons, type wtlIconModule } from '@/composables/icons'
import { color } from 'chart.js/helpers'
import type { FunctionalComponent, SVGAttributes } from 'vue'

withDefaults(
  defineProps<{
    icon?: wtlIconModule | FunctionalComponent<SVGAttributes, {}, any, {}>
  }>(),
  { icon: 'wt-filled-messaging-message-plus' }
)

const { getIcon } = useIcons()
</script>
<template>
  <v-btn
    size="35"
    variant="tonal"
    :icon="typeof icon === 'string' ? getIcon(icon) : icon"
    :border="false"
    rounded="lg"
    color="primary"
  />
</template>
