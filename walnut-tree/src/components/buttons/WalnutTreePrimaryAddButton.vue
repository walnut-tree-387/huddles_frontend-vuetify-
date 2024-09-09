<script setup lang="ts">
import IconPlus from '~icons/wt-light-general/plus'
withDefaults(defineProps<{ title?: string }>(), { title: 'Add' })
</script>

<template>
  <v-btn :prepend-icon="IconPlus">
    {{ title }}
  </v-btn>
</template>
