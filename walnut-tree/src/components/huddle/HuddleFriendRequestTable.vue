<template>
  <v-table class="friend-request-table">
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td>{{ item.name }}</td>
        <td>
          <WalnutTreePrimaryAddButton
            color="black"
            @click="processRequest(item.uuid)"
            :title="'Accept'"
          />
          <WalnutTreePrimaryRemoveButton
            color="red"
            @click="processRequest(item.uuid)"
            :title="'Reject'"
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
export default {
  props: {
    desserts: {
      type: Array,
      default: []
    }
  },
  components: {
    WalnutTreePrimaryAddButton,
    WalnutTreePrimaryRemoveButton
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
