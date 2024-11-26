<script setup lang="ts">
import HuddleApp from '@/components/huddle/HuddleApp.vue'
</script>

<template>
  <div class="huddle-root-container">
    <HuddleApp />
  </div>
</template>
<style>
@media (min-width: 1024px) {
  .huddle-root-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-items: center;
  }
}
</style>
