<template>
    <div class="order-summary">
      <div v-for="(value, key) in orderDetails" :key="key" class="order-item">
        <span class="key">{{ key }}:</span>
        <span class="value">{{ value }}</span>
      </div>
      <button class="order-button" @click="orderSummaryClicked">
        Order Summary
        <i class="fa fa-home"></i>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OrderSummary',
    data() {
      return {
        orderDetails: {
          // Your key-value pairs here
          customerName: 'John Doe',
          totalItems: 5,
          totalPrice: '$50.00',
          // Add more key-value pairs as needed
        }
      };
    },
    methods: {
      orderSummaryClicked() {
        // Add functionality for what happens when the button is clicked
        console.log('Order Summary clicked');
      }
    }
  };
  </script>
  
  <style scoped>
  .order-summary {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
  }
  
  .order-item {
    margin-bottom: 10px;
  }
  
  .key {
    font-weight: bold;
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
  }
  
  .order-button i {
    margin-left: 5px;
  }
  </style>
  