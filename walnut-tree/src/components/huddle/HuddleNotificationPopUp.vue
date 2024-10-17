<template>
  <div v-if="isVisible" class="popup-backdrop" @click.self="close">
    <div class="popup-content">
      <v-list shaped dense>
        <v-list-item-group>
          <v-list-item
            v-for="(notification, index) in notifications"
            :key="index"
            class="notification-item"
            @click="goToHuddle(notification.huddleId)"
          >
            <v-row align="center" class="w-100">
              <v-col cols="2" class="d-flex align-center">
                <v-list-item-avatar>
                  <WalnutUserAvatar />
                </v-list-item-avatar>
              </v-col>
              <v-col cols="10" class="d-flex flex-column">
                <v-list-item-content>
                  <v-list-item-title
                    class="message-text"
                    v-text="notification.creator + ' ' + notification.message"
                  ></v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-subtitle class="date-subscript">
                    <sub
                      ><strong>{{ formatDate(notification.createdAt) }}</strong></sub
                    >
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-col>
            </v-row>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import WalnutUserAvatar from '../WalnutUserAvatar.vue'
import { useNotificationStore } from '@/stores/notificationStore.js'

export default defineComponent({
  components: { WalnutUserAvatar },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const notifications = ref(useNotificationStore().notifications)
    const router = useRouter()

    const formatDate = (timestamp?: number) => {
      if (!timestamp) return 'Unknown Date'
      const date = new Date(timestamp)
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      })
    }

    const goToHuddle = (huddleId: string) => {
      router.push(`/huddles/${huddleId}`)
    }

    const close = () => {
      emit('close')
    }

    return {
      notifications,
      formatDate,
      goToHuddle,
      close
    }
  }
})
</script>

<style scoped>
.popup-backdrop {
  position: fixed;
  right: 0;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-content {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  min-width: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
.message-text {
  white-space: normal;
  word-wrap: break-word;
  font-size: 1rem;
  margin-left: 10px;
  margin-top: 4px;
}

.date-subscript {
  font-size: 0.875rem;
  color: blue;
  margin-top: 5px;
  margin-left: 80px;
}
</style>
