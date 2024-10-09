<script>
import HuddleSideBar from './HuddleSideBar.vue'
import HuddleChatWindow from './HuddleChatWindow.vue'
import HuddleInfo from './HuddleInfo.vue'
import { HuddleService } from '@/Services/HuddleService'
export default {
  components: {
    HuddleChatWindow,
    HuddleInfo,
    HuddleSideBar
  },
  data() {
    return {
      selectedHuddle: null,
      huddles: []
    }
  },
  created() {
    this.getHuddles()
  },
  methods: {
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
          <HuddleChatWindow />
        </v-col>
        <v-col cols="4">
          <HuddleInfo :v-if="selectedHuddle" :huddle="selectedHuddle" />
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
