<template>
    <div class="pagination-container">
      <div class="pagination-info">
        <span>Items per page:</span>
        <select class="per-page-dropdown" :value="perPage" @change="updatePerPage">
          <option v-for="option in perPageOptions" :value="option" :key="option">{{ option }}</option>
        </select>
        <span class="total-items-info">Total items: {{ totalItems }}</span>
      </div>
      <div class="pagination-controls">
        <v-btn  size="small" @click="getPage('previous')" :disabled="currentPage === 1">Previous</v-btn>
        <v-btn  size="small" @click="getPage('next')" :disabled="currentPage === totalPages">Next</v-btn>
      </div>
    </div>
  </template>
  
  <style scoped>
  .pagination-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    margin-top: 20px;
    align-items: center;
  }
  .pagination-controls button {
    padding: 8px 12px;
    background-color: #535553;
    color: #b7f3a4;
    border: none;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    margin-right: 10px;
  }
  .per-page-dropdown {
    padding: 8px;
    margin: 8px;
  }
  .total-items-info {
    margin-left: 10px;
  }
  .pagination-controls {
    margin: 0 0 0 10px;
  }
  </style>
  
  <script setup lang="ts">
  import { defineProps, defineEmits, computed } from 'vue';
  
  const props = defineProps<{
    perPage: number;
    totalItems: number;
    currentPage: number;
    perPageOptions: number[];
  }>();
  
  const emit = defineEmits<{
    (e: 'pagination-action', value: 'previous' | 'next'): void;
    (e: 'updatePerPage', value: number): void;
  }>();
  const totalPages = computed(() => Math.ceil(props.totalItems / props.perPage));
  
  const getPage = (value: 'previous' | 'next') => {
    emit('pagination-action', value);
  };
  const updatePerPage = (event: Event) => {
    const selectedValue = Number((event.target as HTMLSelectElement).value);
    emit('updatePerPage', selectedValue);
  };
  </script>
  