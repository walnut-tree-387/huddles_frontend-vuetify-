<template>
  <v-card flat class="table-root">
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-video-input-component"></v-icon> &nbsp;
      Live Huddles
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
    </v-card-title>
    <v-divider></v-divider>
    
    <v-data-table  
      v-model:search="search"     
      :items="paginatedItems"
      :items-per-page="itemsPerPage" 
      :headers="headers"
      class="product-table" 
      :hide-default-footer="true"
    >
      <template v-slot:item.avatar="{ item }">
        <v-card class="my-2 cover-image" elevation="2" rounded>
          <v-img
            :src="item.avatar"
            height="64"
            cover
          ></v-img>
        </v-card>
      </template>
      <template v-slot:header.name="{ column }">
        <span class="font-weight-bold ">{{ column.text }}</span>
      </template>
      <template v-slot:header.avatar="{ column }">
        <span class="font-weight-bold">{{ column.text }}</span>
      </template>
      <template v-slot:header.members="{ column }">
        <span class="font-weight-bold">{{ column.text }}</span>
      </template>

      <template v-slot:item.action="{ item }">
        <div class="text-end">
          <v-btn size="small" class="mx-4 my-2" color="primary" @click="hopIn(item)">Hop In</v-btn>
        </div>
      </template>
    </v-data-table>
    
    <nilam-pagination 
      :total-items="items?.values?.length"
      :per-page-options="perPageOptions"
      :current-page="currentPage"
      :per-page="itemsPerPage"
      @pagination-action="handlePaginationAction"
      @updatePerPage="handleUpdatePerPage"
    />
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { HuddleService } from '@/Services/HuddleService.js';
import NilamPagination from '../NilamPagination.vue';
import { loggedInUserStore } from '../../stores/loggedInUser.js';

interface HuddleItem {
  name: string;
  avatar: string;
  members: number;
}

export default defineComponent({
  components: {
    NilamPagination
  },

  setup() {
    const items = ref<HuddleItem[]>([
      { name: 'Nebula GTX 3080', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvO7gxvNauOgRKwfZdHiM6f-DyO7IHkOgQXw&s', members: 699 },
      { name: 'Galaxy RTX 3080', avatar: 'https://cdn3.vectorstock.com/i/1000x1000/67/87/people-avatars-community-group-vector-10776787.jpg', members: 234 },
      { name: 'Orion RX 6800 XT', avatar: '3.png', members: 123 },
      { name: 'Vortex RTX 3090', avatar: '4.png', members: 267 },
      { name: 'Cosmos GTX 1660 Super', avatar: '5.png', members: 223 },
    ]);

    const headers = [
      { text: 'Name', value: 'name', sortable: false },
      { text: 'Avatar', value: 'avatar', sortable: false },
      { text: 'Members', value: 'members', sortable: false },
      { text: 'Action', value: 'action', sortable: false }  
    ];

    const search = ref('');
    const itemsPerPage = ref(2);
    const currentPage = ref(1);
    const perPageOptions = [2, 3, 5];
    const hopIn = (item: HuddleItem) => {
      console.log(`Hopping into ${item.name}`);
    };

    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return items.value.slice(start, end);
    });

    const handlePaginationAction = (action: string) => {
      if (action === 'previous' && currentPage.value > 1) {
        currentPage.value--;
      } else if (action === 'next') {
        const totalPages = Math.ceil(items.value.length / itemsPerPage.value);
        if (currentPage.value < totalPages) {
          currentPage.value++;
        }
      }
    };

    const getHuddles = async () => {
      try {
        const fetchedItems = await HuddleService.getHuddles();
        items.value = fetchedItems;
      } catch (error) {
        console.error('Error fetching huddles:', error);
      }
    };

    const handleUpdatePerPage = (newPerPage: number) => {
      itemsPerPage.value = newPerPage;
      currentPage.value = 1;
    };
    onMounted(async () => {
      const user = loggedInUserStore().getUser;
      if (user) {
        await getHuddles();
      }
    });
    return {
      items,
      search,
      itemsPerPage,
      currentPage,
      perPageOptions,
      paginatedItems,
      headers,
      hopIn,
      handlePaginationAction,
      handleUpdatePerPage,
    };
  },
});
</script>

<style scoped>

</style>
