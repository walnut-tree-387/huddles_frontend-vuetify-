<template>
  <v-card flat class="table-root">
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-video-input-component"></v-icon> &nbsp; Live Huddles
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
          <v-img :src="item.avatar" height="64" cover></v-img>
        </v-card>
      </template>

      <template v-slot:header.name="{ column }">
        <span class="font-weight-bold">{{ column.text }}</span>
      </template>

      <template v-slot:header.avatar="{ column }">
        <span class="font-weight-bold">{{ column.text }}</span>
      </template>

      <template v-slot:header.members="{ column }">
        <span class="font-weight-bold">{{ column.text }}</span>
      </template>

      <template v-slot:item.action="{ item }">
        <div class="text-end">
          <v-btn
            v-text="getButtonText(item.relation)"
            size="small"
            class="mx-4 my-2"
            :color="getButtonColor(item.relation)"
            @click="hopIn(item)"
            :disabled="item.relation.status === 'REQUESTED'"
          >
          </v-btn>
        </div>
      </template>
    </v-data-table>
    <v-divider></v-divider>
    <nilam-pagination
      :total-items="totalItems"
      :per-page-options="perPageOptions"
      :current-page="currentPage"
      :per-page="itemsPerPage"
      @pagination-action="handlePaginationAction"
      @updatePerPage="handleUpdatePerPage"
    />
  </v-card>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import { HuddleService } from '@/Services/HuddleService.js'
import { HuddleUserService } from '@/Services/HuddleUserService.js'
import NilamPagination from '../NilamPagination.vue'
import { loggedInUserStore } from '../../stores/loggedInUser.js'
import router from '@/router/index.js'
import { useWalnutToast } from '../../composables/toast.js'
interface HuddleItem {
  uuid: string
  name: string
  avatar: string
  members: number
  relation: HuddleMemberRelation
}
interface HuddleMemberRelation {
  huddleUuid: string
  memberUuid: string
  status: string
}

export default defineComponent({
  components: {
    NilamPagination
  },
  setup() {
    const { showError, showSuccess } = useWalnutToast()
    const items = ref<HuddleItem[]>([])
    const headers = [
      { text: 'Name', value: 'name', sortable: false },
      { text: 'Avatar', value: 'avatar', sortable: false },
      { text: 'Members', value: 'members', sortable: false },
      { text: 'Action', value: 'action', sortable: false }
    ]

    const search = ref('')
    const itemsPerPage = ref(5)
    const currentPage = ref(1)
    const perPageOptions = [2, 3, 5]
    const getButtonColor = (relation: HuddleMemberRelation) => {
      if (relation.status === 'JOINED') return 'green'
      else if (relation.status === 'REQUESTED') return 'blue'
      else return 'red'
    }
    const getButtonText = (relation: HuddleMemberRelation) => {
      if (relation.status === 'JOINED') return 'Hop In'
      else if (relation.status === 'REQUESTED') return 'Requested'
      else return 'Request Access'
    }
    const hopIn = (item: HuddleItem) => {
      if (item.relation.status === 'JOINED') {
        router.push('/huddles/' + item.uuid)
      } else requestForHuddleAccess(item)
    }
    const requestForHuddleAccess = async (item: HuddleItem) => {
      const response = await HuddleUserService.createHuddleEntryRequest(item.uuid)
      if (response === 201) {
        showSuccess('Successfully requested entry in ' + item.name)
      }
    }
    const totalItems = computed(() => items.value.length)
    const paginatedItems = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value
      const end = start + itemsPerPage.value
      return items.value.slice(start, end)
    })

    const handlePaginationAction = (action: string) => {
      if (action === 'previous' && currentPage.value > 1) {
        currentPage.value--
      } else if (action === 'next') {
        const totalPages = Math.ceil(items.value.length / itemsPerPage.value)
        if (currentPage.value < totalPages) {
          currentPage.value++
        }
      }
    }

    const getHuddles = async () => {
      try {
        const fetchedItems = await HuddleService.getHuddles()
        items.value = fetchedItems
      } catch (error) {
        console.error('Error fetching huddles:', error)
      }
    }

    const handleUpdatePerPage = (newPerPage: number) => {
      itemsPerPage.value = newPerPage
      currentPage.value = 1
    }
    onMounted(async () => {
      const user = loggedInUserStore().getUser
      if (user) {
        await getHuddles()
      }
    })
    return {
      getButtonColor,
      getButtonText,
      showSuccess,
      totalItems,
      items,
      search,
      itemsPerPage,
      currentPage,
      perPageOptions,
      paginatedItems,
      headers,
      hopIn,
      handlePaginationAction,
      handleUpdatePerPage
    }
  }
})
</script>

<style scoped></style>
