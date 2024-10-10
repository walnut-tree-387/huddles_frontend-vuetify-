<template>
  <div class="huddle-info-root">
    <HuddleFriendsList :title="'Huddle Members'" :items="userList" />
  </div>
</template>

<script>
import WalnutUserAvatar from '../WalnutUserAvatar.vue'
import { HuddleUserService } from '@/Services/HuddleUserService'
import HuddleFriendsList from './HuddleFriendsList.vue'

export default {
  props: {
    huddle: {
      type: Object,
      default: null
    }
  },
  watch: {
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
        this.userList = response
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
  margin: 10px;
}
</style>
