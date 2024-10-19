<template>
  <v-card
    class="chat-card"
    :elevation="0"
    @click="handleClick"
    :class="{ 'chat-selected': selected }"
  >
    <v-row no-gutters>
      <v-col cols="2" class="avatar-container">
        <WalnutUserAvatar size="32" color="primary" :src="avatar" alt="avatar" />
      </v-col>

      <v-col cols="8" class="chat-details" style="padding-left: 15px">
        <div class="chat-info">
          <h4 class="chat-name">{{ name }}</h4>
          <p class="chat-message">{{ message }}</p>
        </div>
      </v-col>

      <v-col cols="2" class="chat-time">
        <div class="time-indicator">
          <span class="time">{{ time }}</span>
          <v-icon v-if="unread" class="unread-dot" color="red" size="small">mdi-circle</v-icon>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import WalnutUserAvatar from '../WalnutUserAvatar.vue'
export default {
  name: 'ChatCardComponent',
  components: { WalnutUserAvatar },
  props: {
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false
    },
    time: {
      type: String,
      required: false
    },
    avatar: {
      type: String,
      required: false
    },
    unread: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('chat-click')
    }
  }
}
</script>

<style scoped>
.chat-card {
  cursor: pointer;
  padding: 7px;
  transition: background-color 0.3s ease;
  border-radius: 0;
  margin-bottom: 5px;
}

.chat-card:hover {
  background-color: 'primary';
}

.chat-selected {
  background-color: 'primary';
}

.avatar-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.chat-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.chat-name {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  color: 'primary';
}

.chat-message {
  margin: 0;
  font-size: 13px;
  color: #777;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-time {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  padding-right: 2px;
}

.time-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.time {
  font-size: 8px;
  color: #999;
}

.unread-dot {
  margin-top: 5px;
}
</style>
