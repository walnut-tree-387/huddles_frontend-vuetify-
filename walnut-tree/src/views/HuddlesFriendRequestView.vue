<template>
  {{ requests }}
  <HuddleFriendRequestTable @request-processed="getFriendRequests" :desserts="requests" />
</template>
<script lang="ts">
import { HuddleFriendRequestService } from '@/Services/HuddleFriendRequestService.js'
import HuddleFriendRequestTable from '../components/huddle/HuddleFriendRequestTable.vue'
export default {
  name: 'HuddleFriendsList',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  components: { HuddleFriendRequestTable },
  data() {
    return {
      requests: [
        {
          name: 'Dummy User',
          memberRole: 'Commonner',
          uuid: '2312312312'
        }
      ]
    }
  },
  onMounted() {
    this.getFriendRequest()
  },
  methods: {
    async getFriendRequests() {
      try {
        const response = await HuddleFriendRequestService.getFriendRequestList()
        this.requests = response
      } catch (error) {
        console.error('Error removing user from huddle:', error)
      }
    }
  }
}
</script>
