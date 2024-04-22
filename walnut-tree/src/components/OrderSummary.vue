<template>
    <div class="order-summary">
      <h3 class="title">Basket</h3>
      <div v-for="(value, key) in orderDetails" :key="key" class="order-item">
        <span class="key">{{ key }}:</span>
        <span class="value">{{ value }}</span>
      </div>
      <button class="order-button" @click="orderSummaryClicked">
        Place your order
        <CommitIcon :icon-height="'10%'" :icon-width="'10%'"/>
      </button>
    </div>
  </template>
  
  <script>
  import CommitIcon from './icons/CommitIcon.vue'
  export default {
    name: 'OrderSummary',
    components: {
      CommitIcon
    },
    data() {
      return {
        orderDetails: {
          Items: 5,
          Price: '500.00 Tk',
        }
      };
    },
    methods: {
      orderSummaryClicked() {
        console.log('Order Summary clicked');
      }
    }
  };
  </script>
  
  <style scoped>
  .order-summary {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
    background-color: white;
    color: black;
  }
  
  .order-item {
    margin-bottom: 10px;
  }
  .title{
    text-align: center;
  }
  
  .key {
    font-weight: bold;
    margin-right: 3px;
  }
  
  .order-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .order-button i {
    margin-left: 5px;
  }
  </style>
  