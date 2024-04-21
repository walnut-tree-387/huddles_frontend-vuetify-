<script setup>
import OrderSummary from '../components/OrderSummary.vue';
</script>

<template>
  <div class="full-width">
    <order-summary />
  </div>
</template>

<style scoped>
.full-width {
  display: flex;
  width: 100%; /* Ensure the div takes full width */
}
</style>
