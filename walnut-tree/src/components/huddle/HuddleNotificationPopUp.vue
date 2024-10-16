<template>
  <div v-if="isVisible" class="popup-backdrop" @click.self="close">
    <div class="popup-content">
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(notification, index) in notifications"
            :key="index"
            class="notification-item"
          >
            <v-list-item-content>
              <v-list-item-title>{{ notification.message }}</v-list-item-title>
              <v-list-item-subtitle>
                <span>{{ notification.huddle }}</span> -
                <span>{{ formatDate(notification.createdAt) }}</span> -
                <span>{{ notification.eventType }}</span>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </div>
</template>

<script lang="ts">
import { loggedInUserStore } from '../../stores/loggedInUser.js'
import { useTokenStore } from '../../stores/autorizationToken.js'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import HuddlePopUpCloseButton from '../buttons/HuddlePopUpCloseButton.vue'
import { useWalnutToast } from '../../composables/toast.js'
import { useNotificationStore } from '@/stores/notificationStore.js'
export default defineComponent({
  components: { HuddlePopUpCloseButton },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const notifications = ref(useNotificationStore().notifications)
    const router = useRouter()
    const user = loggedInUserStore().getUser
    const { showError, showSuccess } = useWalnutToast()
    const formatDate = (timestamp?: number) => {
      if (!timestamp) return 'Unknown Date'
      const date = new Date(timestamp)
      return date.toLocaleString()
    }
    const showToast = () => {
      showError('This is a sample Toast')
    }
    const logout = () => {
      useTokenStore().clearToken()
      loggedInUserStore().clearUser()
      close()
      showSuccess('Log out successful! Redirecting to Login...')
      setTimeout(() => {
        router.push('/huddles/login')
      }, 2000)
      router.push('/huddles/login')
    }

    const close = () => {
      emit('close')
    }

    return {
      showSuccess,
      showError,
      user,
      logout,
      close,
      notifications,
      formatDate
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
.pop-up-close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  background: none;
  border: none;
}
.popup-content {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  min-width: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
</style>
