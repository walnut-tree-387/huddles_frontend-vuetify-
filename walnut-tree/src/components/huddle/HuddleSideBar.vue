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
            v-for="(huddle) in filteredHuddles"
            :key="huddle.uuid"
            :class="{ 'active-chat': selectedHuddle === huddle.uuid }"
            @click="selectHuddle(huddle.uuid)"
          >
            <HuddleChatCard
              :name="huddle.name"
              :message="huddle.lastMessage"
              :time="huddle.time"
              :avatar="huddle.avatar"
              @chat-click="selectHuddle(huddle.uuid)"
            />
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
    <v-divider></v-divider>
    <WalnutTreePrimaryAddButton @click="showPopup = !showPopup" :title="'Start a Huddle'" style="margin: 10px 0 0 20px"/>
  </v-navigation-drawer>
  <teleport to="body">
    <div v-if="showPopup">
      <HuddleCreatePopUp :isVisible="showPopup" @close="handleAfterHuddlleCreated" />
    </div>
  </teleport>
</template>

<script lang="ts">
import WalnutTreePrimaryAddButton from '../buttons/WalnutTreePrimaryAddButton.vue'
import HuddleCreatePopUp from '../huddle/HuddleCreatePopUp.vue'
import HuddleChatCard from '../huddle/HuddleChatCard.vue'
import HuddleChatWindow from '../huddle/HuddleChatWindow.vue'
import { HuddleService } from '../../Services/HuddleService.js'
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: { HuddleChatCard, HuddleChatWindow, WalnutTreePrimaryAddButton, HuddleCreatePopUp },
  props: {
    huddles: {
      type: Array,
      default: []
    }
  },
  emits: ['huddle-clicked'],
  data() {
    return {
      searchTerm: '',
      selectedHuddle: null,
      huddleList: []
    }
  },
  setup(){
    const showPopup = ref(false);
    const togglePopup = (value: boolean | Event | null = null) => {
        if (value instanceof Event) {
          showPopup.value = !showPopup.value;
        } else {
        showPopup.value = value !== null ? value : !showPopup.value;
      }
    };
    return {
      showPopup,
      togglePopup,
    };
  },
  computed: {
    filteredHuddles() {
      if (!this.searchTerm) {
        return this.huddleList
      }
      return this.huddleList.filter((huddle : any) =>
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
    handleAfterHuddlleCreated(){
      this.togglePopup(false);
      this.getMyHuddles();
    },
    selectHuddle(uuid : any) {
      this.selectedHuddle = this.huddles.find((huddle : any) => huddle.uuid === uuid);
      this.$emit('huddle-clicked', this.selectedHuddle);
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
