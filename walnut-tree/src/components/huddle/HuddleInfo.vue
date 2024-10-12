<template>
  <div class="huddle-info-root">
    <HuddleFriendsList :title="'Huddle Members'" :items="userList" :remove-icon="true" @user-removed="getHuddleUsers"/>
  </div>
</template>

<script lang="ts">
import WalnutUserAvatar from '../WalnutUserAvatar.vue'
import { HuddleUserService } from '../../Services/HuddleUserService.js'
import HuddleFriendsList from './HuddleFriendsList.vue'

export default {
  props: {
    huddle: {
      type: Object,
      default: null
    }, huddleUsers: {
      type: Array,
      default: []
    }
  },
  watch: {
    huddleUsers(newVal, oldVal){
      if(newVal){
        this.userList = newVal;
      }
    },
    huddle(newVal, oldVal) {
      console.log('Huddle changed:', { newVal, oldVal })
      if (newVal) {
        console.log('Call for users')
        this.getHuddleUsers()
      }
    }
  },
  components: { WalnutUserAvatar, HuddleFriendsList },
  methods: {
    async getHuddleUsers() {
      try {
        const response = await HuddleUserService.getHuddleUsers(this.huddle?.uuid)
        this.userList = response;
        console.log('Event passed in Huddle Info');
        this.$emit('fetch-app-users');
      } catch (error) {
        console.error('Error fetching huddles:', error)
      }
    }
  },
  created() {
    if (this.huddle) this.getHuddleUsers()
  },
  data() {
    return {
      userList: []
    }
  }
}
</script>

<style scoped>
.huddle-info-root {
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}
</style>
