<template>
  <v-navigation-drawer app>
    <span v-text="'Huddles I am in..'" style="font-size: large; font-weight: bolder;"></span>
    <v-text-field
      v-model="searchTerm"
      prepend-inner-icon="mdi-magnify"
      label="Search"
      solo
      hide-details
      dense
    ></v-text-field>
    <div class="scrollable-chat-list">
      <v-list dense>
        <v-list-item-group>
          <v-list-item
            v-for="(huddle, index) in filteredHuddles"
            :key="index"
            :class="{ 'active-chat': selectedHuddle === index }"
            @click="selectHuddle(index)"
          >
            <HuddleChatCard
              :name="huddle.name"
              :message="huddle.lastMessage"
              :time="huddle.time"
              :avatar="huddle.avatar"
              @chat-click="selectHuddle(index)"
            />
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
    <v-divider></v-divider>
    <WalnutTreePrimaryAddButton :title="'Start a Huddle'" style="margin: 10px 0 0 20px"/>
  </v-navigation-drawer>
</template>

<script lang="ts">
import WalnutTreePrimaryAddButton from '../buttons/WalnutTreePrimaryAddButton.vue'
import HuddleChatCard from '../huddle/HuddleChatCard.vue'
import HuddleChatWindow from '../huddle/HuddleChatWindow.vue'
import { HuddleService } from '../../Services/HuddleService.js'
import { defineComponent } from 'vue';
export default defineComponent({
  components: { HuddleChatCard, HuddleChatWindow, WalnutTreePrimaryAddButton },
  props: {
    huddles: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      searchTerm: '',
      selectedHuddle: null,
      huddleList: []
    }
  },
  computed: {
    filteredHuddles() {
      if (!this.searchTerm) {
        return this.huddleList
      }
      return this.huddleList.filter((huddle) =>
        huddle.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      )
    }
  },
  watch: {
    huddles(newVal) {
      if (newVal) {
        this.huddleList = this.huddles
      }
    }
  },
  created() {
    this.getMyHuddles()
  },
  methods: {
    selectHuddle(index) {
      this.selectedHuddle = this.huddles[index]
      this.$emit('huddle-clicked', this.selectedHuddle)
    },
    async getMyHuddles() {
      try {
        const response = await HuddleService.getMyHuddles()
        this.huddleList = response;
      } catch (error) {
        console.error('Error fetching huddles:', error)
      }
    }
  }
});
</script>

<style scoped>
.scrollable-chat-list {
  width: inherit;
}
</style>
