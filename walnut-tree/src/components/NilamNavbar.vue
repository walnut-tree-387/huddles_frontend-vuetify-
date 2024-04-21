<template>
    <nav>
      <nav-item v-for="(tab, index) in tabs" :key="index" :tab="tab" :active="activeTab === tab" @click="activeTab = tab">{{ tab }}</nav-item>
      <div class="tab-indicator" :style="{ left: indicatorPosition, width: indicatorWidth, backgroundColor: indicatorColor }"></div>
    </nav>
  </template>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 8px;
  }
  
  nav-item {
    padding: 8px 16px;
    cursor: pointer;
    position: relative;
    z-index: 1;
    color: #000000;
    font-size: 14px; 
    font-weight: bold; 
  }
  
  .tab-indicator {
    position: absolute;
    bottom: 0;
    height: 100%; 
    transition: left 0.3s ease, width 0.3s ease, background-color 0.3s ease;
  }
  
  @media (min-width: 200px) {
    nav {
      margin-left: -1rem;
      font-size: 1rem;
      padding: 1rem 0;
      margin-top: 1rem;
      margin-bottom: 1rem;
      position: relative;
    }
  
    nav-item {
      margin-right: 24px;
    }
    nav-item[active="true"] {
    color: #ffffff;
  }
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        tabs: ['Popular', 'Shirts', 'Pants', 'Shoes'],
        activeTab: 'Popular',
        indicatorPosition: '0',
        indicatorWidth: '0',
        indicatorColor: 'white',
      };
    },
    watch: {
      activeTab(newTab, oldTab) {
        const tabs = this.tabs;
        const currentIndex = tabs.indexOf(newTab);
        const tabWidth = 100 / tabs.length;
        this.indicatorPosition = `${tabWidth * currentIndex}%`;
        this.indicatorWidth = `${tabWidth}%`;
        this.indicatorColor = '#426B1F';
      },
    },
  };
  </script>
  