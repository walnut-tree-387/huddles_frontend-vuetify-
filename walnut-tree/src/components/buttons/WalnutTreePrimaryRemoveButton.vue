<script setup lang="ts">
import IconMinus from '~icons/wt-light-general/minus'
withDefaults(defineProps<{ title?: string; color?: string; size?: string }>(), { title: 'Create' })
</script>

<template>
  <v-btn class="btn" :prepend-icon="IconMinus" :color="color" :size="size">
    {{ title }}
  </v-btn>
</template>
<style scoped>
.btn {
  margin: 7px;
}
</style>
