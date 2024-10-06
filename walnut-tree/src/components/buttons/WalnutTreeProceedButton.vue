<script setup lang="ts">
import { useIcons, type wtlIconModule } from '@/composables/icons'
import type { FunctionalComponent, SVGAttributes } from 'vue'

withDefaults(
  defineProps<{
    icon?: wtlIconModule | FunctionalComponent<SVGAttributes, {}, any, {}>
  }>(),
  { icon: 'mdi-proceed-right' }
)

const { getIcon } = useIcons()
</script>
<template>
  <v-btn
    size="60"
    variant="tonal"
    :icon="typeof icon === 'string' ? getIcon(icon) : icon"
    :border="false"
    rounded="lg"
  />
</template>
