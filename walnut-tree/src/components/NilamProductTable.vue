<template>
  <v-card flat class="table-root">
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-video-input-component"></v-icon> &nbsp;
      Find a Graphics Card
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-select
        v-model="favorites"
        :items="states"
        label="Filter By"
        multiple
        hide-details
        density="compact"
      ></v-select>
    </v-card-title>
    <v-divider></v-divider>
    <v-data-table 
      show-select 
      v-model:search="search"     
      :items="items"
      :items-length="items.length" 
      :items-per-page="itemsPerPage" 
      class="product-table" 
      :hide-default-footer="true"
      >
      <template v-slot:header.stock>
        <div class="text-end">Stock</div>
      </template>

      <template v-slot:item.image="{ item }">
        <v-card class="my-2" elevation="2" rounded>
          <v-img
            :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
            height="64"
            cover
          ></v-img>
        </v-card>
      </template>

      <template v-slot:item.rating="{ item }">
        <v-rating
          :model-value="item.rating"
          color="orange-darken-2"
          density="compact"
          size="small"
          readonly
        ></v-rating>
      </template>

      <template v-slot:item.stock="{ item }">
        <div class="text-end">
          <v-chip
            :color="item.stock ? 'green' : 'red'"
            :text="item.stock ? 'In stock' : 'Out of stock'"
            class="text-uppercase"
            size="small"
            label
          ></v-chip>
        </div>
      </template>
      <template v-slot:bottom></template>
    </v-data-table>
    <nilam-pagination 
      :total-items="items.length"
      :per-page-options="perPageOptions"
      :current-page="currentPage"
      :per-page="itemsPerPage"
      @pagination-action="handlePaginationAction"
      @updatePerPage="handleUpdatePerPage"/>
  </v-card>
</template>
<script>
  import NilamPagination from './NilamPagination.vue';
  export default {
    components: {
      NilamPagination
    },
    data () {
      return {
        search: '',
        favorites: [],
        perPageOptions: [2, 3, 5],
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia'
        ],
        itemsPerPage: 2,
        currentPage : 1,
        items: [
          {
            name: 'Nebula GTX 3080',
            image: '1.png',
            price: 699.99,
            rating: 5,
            stock: true,
          },
          {
            name: 'Galaxy RTX 3080',
            image: '2.png',
            price: 799.99,
            rating: 4,
            stock: false,
          },
          {
            name: 'Orion RX 6800 XT',
            image: '3.png',
            price: 649.99,
            rating: 3,
            stock: true,
          },
          {
            name: 'Vortex RTX 3090',
            image: '4.png',
            price: 1499.99,
            rating: 4,
            stock: true,
          },
          {
            name: 'Cosmos GTX 1660 Super',
            image: '5.png',
            price: 299.99,
            rating: 4,
            stock: false,
          },
        ],
      }
    },
    methods:{
      handlePaginationAction(action){
        if (action === 'next') {
          this.currentPage++;
        } else if (action === 'previous') {
          this.currentPage--;
        }
      },
      handleUpdatePerPage(value){
        this.itemsPerPage = value;
      }
    },
    watch: {
      currentPage(value){
        // callExternalApi
      },
      itemsPerPage(value){
        // callExternalApi
      }
    }
  }
</script>
<style scoped>
  .table-root{
    margin-top: 80px;
  }
</style>