<script setup lang="ts">
import HuddleLogo from '@/components/buttons/HuddleLogo.vue'
import HuddleProfileButton from '@/components/buttons/HuddleProfileButton.vue'
import HuddlesNotificationButton from '@/components/buttons/HuddlesNotificationButton.vue'
import WalnutTreePrimaryAddButton from '@/components/buttons/WalnutTreePrimaryAddButton.vue'
import HuddleSideBar from '@/components/huddle/HuddleSideBar.vue'
</script>

<template>
  <div class="huddle-root-container">
    <HuddlesNotificationButton />
    <HuddleProfileButton />
    <HuddleLogo />
  </div>
  <!-- <HuddleSideBar /> -->
</template>
<style>
@media (min-width: 1024px) {
  .huddle-root-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
