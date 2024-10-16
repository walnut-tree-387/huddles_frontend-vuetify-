<script setup lang="ts">
import { useIcons, type wtlIconModule } from '../../composables/icons.js'
import type { FunctionalComponent, SVGAttributes } from 'vue'
import { useNotificationStore } from '@/stores/notificationStore.js'
const notificationStore = useNotificationStore()
withDefaults(
  defineProps<{
    icon?: wtlIconModule | FunctionalComponent<SVGAttributes, {}, any, {}>
  }>(),
  { icon: 'wtl-filled-general-bell' }
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
    @click="$emit('click')"
  />
  <template v-if="notificationStore.notificationCount > 0">
    <v-badge :content="notificationStore.notificationCount" color="red" />
  </template>
</template>
