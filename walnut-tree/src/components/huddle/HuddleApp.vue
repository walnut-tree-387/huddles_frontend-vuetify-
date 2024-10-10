<script>
import HuddleSideBar from './HuddleSideBar.vue'
import HuddleChatWindow from './HuddleChatWindow.vue'
import { HuddleService } from '@/Services/HuddleService'
import { UserService } from '@/Services/userService'
import HuddleFriendsList from './HuddleFriendsList.vue'
export default {
  components: {
    HuddleChatWindow,
    HuddleSideBar,
    HuddleFriendsList
  },
  data() {
    return {
      selectedHuddle: null,
      huddles: [],
      appUsers: []
    }
  },
  created() {
    this.getHuddles()
    this.getUsers()
  },
  methods: {
    addUserToHuddle(value) {
      let body = {
        uuid: this.selectedHuddle.uuid,
        newUsers: value.map((uuid) => ({ uuid }))
      }
      try {
        HuddleService.addUserToHuddle(body)
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
    async getUsers() {
      try {
        const response = await UserService.getUsers()
        this.appUsers = response
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
          <HuddleChatWindow :huddle="selectedHuddle" />
        </v-col>
        <v-col cols="4">
          <HuddleFriendsList
            :items="appUsers"
            :enable-check-box="true"
            :title="'User List'"
            @user-selected="addUserToHuddle"
            :enable-invite-btn="true"
          />
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

.v-col {
  overflow: hidden;
}
</style>
