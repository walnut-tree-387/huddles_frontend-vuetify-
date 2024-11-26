<template>
  <v-table class="friend-request-table">
    <thead>
      <tr>
        <th class="text-left"></th>
        <th class="text-left">Name</th>
        <th class="text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="desserts.length === 0">
        <td colspan="3" class="text-center">No new friend requests</td>
      </tr>
      <tr v-for="item in desserts" :key="item.name">
        <td><WalnutUserAvatar color="primary" /></td>
        <td>{{ item.name }}</td>
        <td>
          <WalnutTreePrimaryAddButton
            color="green"
            @click="processRequest(item.uuid)"
            :title="'Accept'"
            :size="'small'"
          />
          <WalnutTreePrimaryRemoveButton
            color="red"
            @click="processRequest(item.uuid)"
            :title="'Reject'"
            :size="'small'"
          />
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script lang="ts">
import WalnutTreePrimaryAddButton from '../buttons/WalnutTreePrimaryAddButton.vue'
import { HuddleFriendRequestService } from '@/Services/HuddleFriendRequestService.js'
import WalnutTreePrimaryRemoveButton from '../buttons/WalnutTreePrimaryRemoveButton.vue'
import WalnutUserAvatar from '../WalnutUserAvatar.vue'
export default {
  props: {
    desserts: {
      type: Array,
      default: []
    }
  },
  components: {
    WalnutTreePrimaryAddButton,
    WalnutTreePrimaryRemoveButton,
    WalnutUserAvatar
  },
  methods: {
    async processRequest(uuid) {
      const status = await HuddleFriendRequestService.processFriendRequest(uuid)
      this.$emit('request-processed')
    }
  }
}
</script>
<style scoped>
.friend-request-table {
  margin: 2vw;
}
</style>
