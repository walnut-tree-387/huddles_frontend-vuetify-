<script setup lang="ts">
import { defaults } from '@/plugins/vuetify/cards'
import type { VCard } from 'vuetify/components'
import WalnutTreeProceedButton from '../buttons/WalnutTreeProceedButton.vue'
withDefaults(
  defineProps<{
    title: string
    headers: Array<any>
    value: Record<string, any>
    ignoreEmptyRow?: boolean
    color?: string
    variant?: VCard['variant']
    textColorFollowBackground?: boolean
  }>(),
  { color: 'success', variant: 'tonal', textColorFollowBackground: false }
)
</script>

<template>
  <v-card
    :variant="variant"
    :color="color"
    class="wt-info-card"
    :class="{ 'text-black': !textColorFollowBackground }"
  >
    <v-defaults-provider :defaults="defaults.VCard">
      <v-card-title>
        <v-container>
          <v-row>
            <h3>
              {{ title }}
            </h3>
            <v-spacer />
            <div class="d-flex flex-row ga-2">
              <slot name="card-controls" :item="value" />
            </div>
          </v-row>
        </v-container>
      </v-card-title>
      <v-card-text>
        <table>
          <template v-for="header in headers" :key="header.key">
            <template v-if="ignoreEmptyRow">
              <tr
                v-if="
                  value[header.key] !== null &&
                  value[header.key] !== undefined &&
                  value[header.key] !== ''
                "
              >
                <td>{{ header.name }}</td>
                <td>{{ value[header.key] }}</td>
              </tr>
            </template>
            <template v-else>
              <tr>
                <td v-if="header.icon" class="d-flex align-center justify-start ga-3">
                  {{ header.name }}
                </td>
                <td v-else>{{ header.name }}</td>
                <td>{{ value[header.key] }}</td>
              </tr>
            </template>
          </template>
        </table>
      </v-card-text>
      <v-card-actions>
        <WalnutTreeProceedButton />
      </v-card-actions>
    </v-defaults-provider>
  </v-card>
</template>

<style lang="scss" scoped>
.v-card.wt-info-card {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 16px !important;
  .v-card-title {
    padding: 16px;
    h3 {
      font-size: 18px;
      font-weight: 700;
    }
  }
  table {
    tr {
      td {
        padding: 5px 20px 5px 0px;
        font-size: 16px;
        font-weight: 700;
        &:first-child {
          font-weight: 500;
        }
        i {
          stroke-width: 0;
        }
      }
    }
  }

  &.text-black {
    h3,
    td {
      color: black;
    }
  }
}
</style>
