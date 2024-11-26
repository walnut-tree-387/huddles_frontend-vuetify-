<script lang="ts">
import HuddleSideBar from './HuddleSideBar.vue'
import HuddleChatWindow from './HuddleChatWindow.vue'
import { HuddleService } from '../../Services/HuddleService.js'
import { HuddleBuddiesService } from '../../Services/HuddleBuddyService'
import { HuddleUserService } from '../../Services/HuddleUserService.js'
import HuddleFriendsList from './HuddleFriendsList.vue'
import HuddleJoinRquestList from './HuddleJoinRquestList.vue'
import { ref } from 'vue'
export default {
  components: {
    HuddleChatWindow,
    HuddleSideBar,
    HuddleFriendsList,
    HuddleJoinRquestList
  },
  data() {
    return {
      selectedHuddle: null,
      huddles: [],
      friendList: []
    }
  },
  created() {
    this.getHuddles()
    this.getFriends()
    this.getCurrentHuddleMembers()
  },
  setup() {
    const huddleUsers = ref<[]>()
    return {
      huddleUsers
    }
  },
  methods: {
    updateBothTypeUsers() {
      this.getFriends()
      this.getCurrentHuddleMembers()
    },
    handleHuddleUpdate(value: any) {
      this.selectedHuddle = value
    },
    async addUserToHuddle(value: any) {
      let body = {
        uuid: this.selectedHuddle.uuid,
        newUsers: value.map((uuid: any) => ({ uuid }))
      }
      try {
        const responseStatus = await HuddleService.addUserToHuddle(body)
        if (responseStatus === 204) {
          this.getFriends()
          this.getCurrentHuddleMembers()
        }
      } catch (error) {
        console.error('Error fetching huddles:', error)
      }
    },
    passHuddleToHuddleInfo(value) {
      this.selectedHuddle = value
    },
    async getHuddles() {
      try {
        const response = await HuddleService.getHuddles()
        this.huddles = response
      } catch (error) {
        console.error('Error fetching huddles:', error)
      }
    },
    async getCurrentHuddleMembers() {
      const route = this.$route
      const uuid = route.params.huddleUuid
      try {
        this.huddleUsers = await HuddleUserService.getHuddleUsers(uuid)
      } catch (error) {
        throw new Error(error)
      }
    },
    async getFriends() {
      try {
        const response = await HuddleBuddiesService.getBuddies()
        this.friendList = response
      } catch (error) {
        console.log('Error fetch the app users', error)
      }
    }
  }
}
</script>
<template>
  <v-app>
    <v-container fluid class="root-container">
      <v-row no-gutters class="full-height-row">
        <v-col cols="2">
          <HuddleSideBar :huddles="huddles" @huddle-clicked="passHuddleToHuddleInfo" />
        </v-col>
        <v-col cols="6">
          <HuddleChatWindow
            :huddleUsers="huddleUsers"
            :huddle="selectedHuddle"
            @update:huddle="handleHuddleUpdate"
            @fetch-app-users="getFriends"
          />
        </v-col>
        <v-col cols="4" class="right-column">
          <HuddleFriendsList
            :items="friendList"
            :enable-check-box="true"
            :title="'Invite your friends'"
            @user-selected="addUserToHuddle"
            :enable-invite-btn="true"
          />
          <HuddleJoinRquestList @request-processed="updateBothTypeUsers" />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.root-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.full-height-row {
  height: 100%;
}
.right-column {
  display: flex;
  flex-direction: column;
}
.v-col {
  overflow: hidden;
}
</style>
