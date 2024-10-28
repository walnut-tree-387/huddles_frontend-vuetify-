<template>
    <HuddleFriendsList :title="'Friend Request'" :items="requests"/>
</template>
<script lang="ts">
import { HuddleFriendRequestService } from '@/Services/HuddleFriendRequestService.js';
import HuddleFriendsList from '@/components/huddle/HuddleFriendsList.vue.js';
export default {
  name: 'HuddleFriendsList',
  props: {
    items: {
      type: Array,
      default: () => []
    },
  },
  components: { },
  data() {
    return {
      requests: [
        {
          name: 'Dummy User',
          memberRole: 'Commonner',
          uuid:  '2312312312'
        }
      ]
    }
  },
  created() {
    this.getFriendRequests();
  },
  methods: {
    async getFriendRequests() {
      try {
        const response = await HuddleFriendRequestService.getFriendRequestList();
        this.requests = response;
      } catch (error) {
        console.error('Error removing user from huddle:', error);
      }
    },
}
}
</script>