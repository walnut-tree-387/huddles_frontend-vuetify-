<script setup lang="ts">
import WalnutTreeHeader from '@/components/headers/WalnutTreeHeader.vue'
import WalnutTreePagination from '../components/pagination/WalnutTreePagination.vue'
import WalnutTreeInfoCard from './cards/WalnutTreeInfoCard.vue'
import { ref, type SVGAttributes } from 'vue'
import { useDisplay } from 'vuetify'
import { onMounted } from 'vue'
import type { FunctionalComponent } from 'vue'
import type { VRow } from 'vuetify/components'
export interface WalnutTreeEventHeader {
  name: string
  key: string
  icon?: FunctionalComponent<SVGAttributes, {}, any, {}>
}
export interface WalnutTreeEventHeaders extends Array<WalnutTreeEventHeader> {}
export type WalnutTreeEvents = Array<{
  name: string
  id: number | string
  totalDonation: string
  targetAmount: string
  email: string
}>
withDefaults(
  defineProps<{
    title: string
    headers: WalnutTreeEventHeaders
    items: WalnutTreeEvents
    loading?: boolean
    ignoreEmptyRow?: boolean
    justify?: VRow['justify']
  }>(),
  { loading: false, justify: 'start' }
)

const page = ref<number>(1)
const { md, mdAndUp, sm, smAndUp, xl, xlAndUp } = useDisplay()
const itemsPerPage = ref<number>(4)
function updateItemsPerPageBasedOnScreen() {
  if (xl.value || xlAndUp.value) {
    itemsPerPage.value = 4
  } else if (md.value || mdAndUp.value) {
    itemsPerPage.value = 3
  } else if (sm.value || smAndUp.value) {
    itemsPerPage.value = 2
  } else itemsPerPage.value = 1
}
const pageOptions = ref<number[]>([4, 8, 12])
function updatePageOptionsBasedOnInitialItemsPerPage() {
  pageOptions.value = [1, 2, 3].map((i) => i * itemsPerPage.value)
}
onMounted(() => {
  updateItemsPerPageBasedOnScreen()
  updatePageOptionsBasedOnInitialItemsPerPage()
})
</script>
<template>
  <v-data-iterator
    :items="items"
    v-model:items-per-page="itemsPerPage"
    v-model:page="page"
    class="wt-info-cards"
  >
    <template #header>
      <walnut-tree-header class="wt-info-card-header">
        <template #title>
          <h2>{{ title }}</h2>
        </template>
        <template #controls>
          <v-defaults-provider :defaults="{ VBtn: { rounded: 'lg' } }">
            <slot name="controls" />
          </v-defaults-provider>
        </template>
      </walnut-tree-header>
    </template>
    <template #no-data>
      <v-progress-linear v-if="loading" indeterminate color="secondary"></v-progress-linear>
      <v-container fluid>
        <v-row :justify="justify" align="center">
          <v-col cols="12" class="text-center">
            {{ loading ? 'Loading...' : 'No data available' }}
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template #default="{ items }">
      <v-container fluid class="px-5">
        <v-row align="stretch" justify="start">
          <v-col v-for="item in items" :key="item.raw.id" cols="12" lg="4" md="4" sm="6" xl="3">
            <walnut-tree-info-card
              :title="item.raw.host"
              :headers="headers"
              :value="item.raw"
              :loading="loading"
              :disabled="loading"
              :ignore-empty-row="ignoreEmptyRow"
              class="h-100"
            >
              <template #card-controls="{ item: internalItem }">
                <slot name="card-controls" :internal-item="internalItem" :item="item.raw" />
              </template>
            </walnut-tree-info-card>
          </v-col>
        </v-row>
      </v-container>
    </template>
    <template #footer="{ pageCount }">
      <walnut-tree-pagination
        v-model:page="page"
        v-model:items-per-page="itemsPerPage"
        :page-count="pageCount"
        :page-options="pageOptions"
      />
    </template>
  </v-data-iterator>
</template>

<style lang="scss" scoped>
.wt-info-cards {
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 16px;

  .wt-info-card-header {
    padding: 10px 20px;
    border-bottom: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
    h2 {
      font-size: 20px;
      font-weight: 700;
    }
  }
}
</style>
