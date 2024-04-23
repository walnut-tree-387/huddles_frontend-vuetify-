<template>
  <v-container>
    <div class="product-view">
    <div class="product-list">
      <NilamNavbar :tab-indicator-height="'2%'" class="navbar"/>
      <div class="product-card-container">
        <NilamProductCard v-for="index in 3" :key="index" class="product-card" />
      </div>
      <NilamPagination />
    </div>
    <div class="basket-summary">
      <order-summary />
    </div>
  </div>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';
import NilamProductCard from '@/components/NilamProductCard.vue';
import NilamNavbar from '@/components/NilamNavbar.vue';
import NilamPagination from '@/components/NilamPagination.vue';
import OrderSummary from '@/components/OrderSummary.vue';
export default defineComponent({
  name: 'HomeView',

  components: {
    NilamNavbar, NilamProductCard, NilamPagination, OrderSummary
  },
});
</script>
<style scoped>
    .product-view {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 85px;
  }
  .product-card-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between; 
  }
  .product-card {
    flex: 0 0 calc(20% - 10px); 
    margin-bottom: 20px;
    box-sizing: border-box;
  }
  .product-list{
    display: flex;
    padding: 10px;
    flex-direction: column;
    width: 60%;
  }
  .basket-summary{
    padding: 10px;
    width: 25%;
  }
</style>
