<script setup>
import NilamProductCard from '@/components/NilamProductCard.vue';
import NilamNavbar from '@/components/NilamNavbar.vue';
import NilamPagination from '@/components/NilamPagination.vue'
</script>

<template>
  <main>
    <header>
      <NilamNavbar />
    </header>
    <body>
      <div class="product-card-container">
        <NilamProductCard v-for="index in 5" :key="index" class="product-card" />
      </div>
      <NilamPagination />
    </body>
  </main>
</template>

<style scoped>
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .product-card-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px 0; 
    width: 100%;
    max-width: 1250px;
    margin: 0 auto;
  }
  .product-card {
    flex: 0 0 calc(20% - 10px); 
    margin-bottom: 20px;
    box-sizing: border-box;
  }
</style>
