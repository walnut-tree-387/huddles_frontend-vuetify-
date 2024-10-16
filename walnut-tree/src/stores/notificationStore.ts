import { defineStore } from 'pinia'

interface Notification {
  message: string
  createdAt?: number
  huddle: string
  creator: string
  eventType: string
}

interface NotificationState {
  notifications: Notification[]
}

export const useNotificationStore = defineStore('notifications', {
  state: (): NotificationState => ({
    notifications: []
  }),

  actions: {
    addNotification(notification: Notification) {
      this.notifications.push({
        ...notification
      })
    },
    clearNotifications() {
      this.notifications = []
    }
  },

  getters: {
    allNotifications: (state): Notification[] => state.notifications,
    notificationCount: (state): number => state.notifications.length
  }
})
