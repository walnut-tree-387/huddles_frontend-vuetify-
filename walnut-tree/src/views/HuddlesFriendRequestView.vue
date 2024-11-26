<template>
  <HuddleFriendRequestTable @request-processed="getFriendRequests" :desserts="requests" />
</template>
<script lang="ts">
import { HuddleFriendRequestService } from '@/Services/HuddleFriendRequestService.js'
import HuddleFriendRequestTable from '../components/huddle/HuddleFriendRequestTable.vue'
import { onMounted, defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'HuddleFriendsList',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  components: {
    HuddleFriendRequestTable
  },
  setup() {
    const requests = ref([])
    const getFriendRequests = async () => {
      try {
        const response = await HuddleFriendRequestService.getFriendRequestList()
        requests.value = [...requests.value, ...response]
      } catch (error) {
        console.error('Error fetching friend requests:', error)
      }
    }
    onMounted(() => {
      getFriendRequests()
    })

    return {
      requests,
      getFriendRequests
    }
  }
})
</script>
