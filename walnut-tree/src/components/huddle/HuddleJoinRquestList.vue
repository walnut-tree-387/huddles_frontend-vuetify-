<template>
  <v-card class="mx-auto join-request-list">
    <v-card-title style="text-align: center font-size: large; font-weight: bolder; ">
      Join Requests
    </v-card-title>
    <v-divider></v-divider>
    <v-list shaped dense>
      <v-list-item-group>
        <template v-if="items.length > 0" v-for="(item, i) in items" :key="`item-${i}`">
          <v-divider v-if="!item"></v-divider>
          <v-list-item v-else :value="item" class="huddle-list-item">
            <v-row align="center" class="w-100">
              <v-col cols="2" class="d-flex align-center">
                <v-list-item-avatar>
                  <WalnutUserAvatar />
                </v-list-item-avatar>
              </v-col>
              <v-col cols="4" class="d-flex align-center">
                <v-list-item-content>
                  <v-list-item-title
                    v-text="item?.huddleMember?.name"
                    class="truncate"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-col>
              <v-col cols="6" class="d-flex">
                <v-list-item-action>
                  <WalnutTreePrimaryAddButton
                    :color="'green'"
                    size="small"
                    :title="'Accept'"
                    @click="() => processRequest(item.huddleMember.uuid, 'ACCEPT')"
                  />
                </v-list-item-action>
                <v-list-item-action>
                  <WalnutTreePrimaryRemoveButton
                    :color="'red'"
                    size="small"
                    :title="'Reject'"
                    @click="() => processRequest(item.huddleMember.uuid, 'DENIED')"
                  />
                </v-list-item-action>
              </v-col>
            </v-row>
          </v-list-item>
        </template>
        <template v-else>
          <span
            v-text="'No new join request..'"
            style="font-size: small; font-weight: lighter; text-align: center; display: block"
          ></span>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script lang="ts">
import WalnutTreePrimaryAddButton from '../buttons/WalnutTreePrimaryAddButton.vue'
import WalnutTreePrimaryRemoveButton from '../buttons/WalnutTreePrimaryRemoveButton.vue'
import WalnutUserAvatar from '../WalnutUserAvatar.vue'
import HuddleRemoveButton from '../buttons/HuddleRemoveButton.vue'
import { HuddleService } from '../../Services/HuddleService.js'
import { useWalnutToast } from '../../composables/toast.js'
import { emit } from 'process'
export default {
  components: {
    HuddleRemoveButton,
    WalnutUserAvatar,
    WalnutTreePrimaryAddButton,
    WalnutTreePrimaryRemoveButton
  },
  data() {
    return {
      items: []
    }
  },
  created() {
    this.getJoinRequestList()
  },
  setup(props, { emit }) {
    {
      const { showError, showSuccess } = useWalnutToast()
      return {
        showSuccess
      }
    }
  },
  methods: {
    async processRequest(userUuid: any, action: string) {
      const route = this.$route
      const huddleUuid = route?.params?.huddleUuid
      if (!huddleUuid || !userUuid) {
        console.error('Huddle UUID or User UUID is undefined', huddleUuid, userUuid)
        return
      }
      try {
        const status = await HuddleService.processHuddleRequest(huddleUuid, userUuid, action)
        if (status === 204) {
          this.$emit('request-processed')
          this.getJoinRequestList()
          action === 'ACCEPT'
            ? this.showSuccess('Member added to huddle successfully')
            : this.showSuccess('Request denied to huddle successfully')
        }
      } catch (error) {
        console.error('Error processing join request:', error)
      }
    },
    async getJoinRequestList() {
      const route = this.$route
      const huddleUuid = route?.params?.huddleUuid
      try {
        const response = await HuddleService.getHuddleRequests(huddleUuid)
        if (response) {
          this.items = response
        }
      } catch (error) {
        console.error('Error removing user from huddle:', error)
      }
    }
  }
}
</script>
<style scoped>
.join-request-list {
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 85%;
}
</style>
