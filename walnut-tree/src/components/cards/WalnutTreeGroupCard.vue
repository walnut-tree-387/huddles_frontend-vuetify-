<script setup lang="ts">
import { defaults } from '@/plugins/vuetify/cards'
import type { VCard } from 'vuetify/components'
withDefaults(
  defineProps<{
    groupName: string
    membersCount: number
    admin: string
    description?: string
    createdAt: string
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
    class="wt-chat-group-card"
    :class="{ 'text-black': !textColorFollowBackground }"
  >
    <v-defaults-provider :defaults="defaults.VCard">
      <v-card-title>
        <v-container>
          <v-row>
            <h3>{{ groupName }}</h3>
            <v-spacer />
            <div class="d-flex flex-row ga-2">
              <slot name="card-controls" />
            </div>
          </v-row>
        </v-container>
      </v-card-title>

      <v-card-text>
        <table>
          <tr>
            <td>Members:</td>
            <td>{{ membersCount }}</td>
          </tr>
          <tr>
            <td>Admin:</td>
            <td>{{ admin }}</td>
          </tr>
          <tr v-if="description">
            <td>Description:</td>
            <td>{{ description }}</td>
          </tr>
          <tr>
            <td>Created At:</td>
            <td>{{ createdAt }}</td>
          </tr>
        </table>
      </v-card-text>

      <v-card-actions>
        <WalnutTreeProceedButton />
      </v-card-actions>
    </v-defaults-provider>
  </v-card>
</template>

<style lang="scss" scoped>
.v-card.wt-chat-group-card {
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
