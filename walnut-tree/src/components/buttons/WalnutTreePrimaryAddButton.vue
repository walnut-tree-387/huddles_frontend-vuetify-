<script setup lang="ts">
import IconPlus from '~icons/wt-light-general/plus'
withDefaults(defineProps<{ title?: string, color?: string }>(), { title: 'Create' })
</script>

<template>
  <v-btn class="btn" :prepend-icon="IconPlus" :color="color">
    {{ title }}
  </v-btn>
</template>
<style scoped>
.btn{
  margin: 7px;
}
</style>
