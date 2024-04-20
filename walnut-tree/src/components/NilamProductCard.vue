<template>
    <div class="product-card">
      <div class="product-image col-md-4"></div>
      <div class="product-info col-md-6">
        <h2 class="product-title">Yelozo Denim 45 Pant</h2>
        <p class="product-description">Made with clean linin, 80% dry cotton. Made with clean linin, 80% dry cotton.</p>
        <button class="add-to-cart-button" @click="toggleButtonColor" :style="{ backgroundColor: buttonColor }">{{buttonText}}</button>
      </div>
      <div class="product-price col-md-4">
        <span>10.99 Tk.</span>
      </div>
    </div>
  </template>
  
  <style scoped>
  .product-card {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 1px;
    border-radius: 5px;
  }
  
  .product-image {
    width: 100px;
    height: 100px;
    background-color: #eee;
    border-radius: 5px;
    margin: 10px 10px 10px 10px;
  }
  
  .product-info {
    flex: 2;
    padding: 0 10px;
    margin: 10px 10px 10px 10px;
  }
  
  .product-price {
    margin: 10px 10px 10px 10px;
  }
  
  .product-title {
    font-size: 1.5rem; /* Adjust the font size as needed */
  }
  
  .product-description {
    font-size: 1.2rem; /* Adjust the font size as needed */
  }
  
  .add-to-cart-button {
    margin-top: 10px;
    padding: 8px 16px;
    border: 1px solid #000000;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1.2rem; /* Adjust the font size as needed */
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        buttonColor: '#ffffff', // Initial button color is white
        buttonClicked: false,
        buttonText: 'Add to cart'   // Track if the button is clicked
      };
    },
    methods: {
      toggleButtonColor() {
        this.buttonClicked = !this.buttonClicked; // Toggle button clicked state
        this.buttonColor = this.buttonClicked ? '#426B1F' : '#ffffff'; // Change button color accordingly
        this.buttonText === 'Added' ? this.buttonText = 'Add to cart' : this.buttonText = 'Added';
      }
    }
  }
  </script>
  