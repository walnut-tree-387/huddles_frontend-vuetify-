<template>
  <v-container fluid class="chat-window">
    <v-card class="pa-0 chat-card">
      <v-card-title style="text-align: center">{{ huddle?.name }}</v-card-title>
      <v-divider></v-divider>
      <v-card-text class="messages-container">
        <div v-if="messages.length === 0" class="no-messages">
          Select a chat from the sidebar to start chatting.
        </div>
        <div
          v-for="(message, index) in messages"
          :key="index"
          :class="message.outgoing ? 'message-wrapper outgoing' : 'message-wrapper incoming'"
        >
          <div class="message" @click="toggleTime(index)">
            <WalnutUserAvatar v-if="!message.outgoing" color="primary" />
            <div
              :class="message.outgoing ? 'message-content outgoing' : 'message-content incoming '"
            >
              <v-list-item-title>{{ message.text }}</v-list-item-title>
            </div>
            <v-list-item-subtitle v-if="message.showTime" class="message-time">
              {{ message.createdAt }}
            </v-list-item-subtitle>
          </div>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <HuddleFileButton />
        <HuddleTextInput
          :modelValue="messageInput"
          @update:modelValue="messageInput = $event"
          @send-message="sendMessage"
        />
      </v-card-actions>
    </v-card>
    <HuddleInfo
      class="huddle-info"
      :huddle="huddle"
      :huddle-users="huddleUsers"
      @fetch-app-users="sendEmitToParent"
    />
  </v-container>
</template>

<script lang="ts">
import HuddleFileButton from '../buttons/HuddleFileButton.vue'
import HuddleTextInput from '../inputs/HuddleTextInput.vue'
import WalnutUserAvatar from '../WalnutUserAvatar.vue'
import HuddleInfo from '../huddle/HuddleInfo.vue'
import { HuddleService } from '../../Services/HuddleService'
import { ChatService } from '../../Services/ChatService'
import { useRoute } from 'vue-router'
export default {
  name: 'HuddleChatWindow',
  components: { WalnutUserAvatar, HuddleFileButton, HuddleTextInput, HuddleInfo },
  props: {
    huddle: {
      type: Object,
      default: null
    },
    huddleUsers: {
      type: Array,
      default: []
    }
  },
  created() {
    this.getHuddle()
    this.getHuddleMessages()
  },
  data() {
    return {
      messageInput: '',
      userAvatar: 'https://via.placeholder.com/40',
      messages: []
    }
  },
  methods: {
    sendEmitToParent() {
      this.$emit('fetch-app-users')
    },
    async getHuddleMessages() {
      try {
        const route = useRoute()
        this.messages = await ChatService.getMessagesByHuddleUuid(this.$route.params.huddleUuid)
      } catch (error) {
        console.error('Error fetching huddle messages:', error)
      }
    },
    async getHuddle() {
      try {
        const route = useRoute()
        const routedHuddle = await HuddleService.getHuddle(this.$route.params.huddleUuid)
        this.$emit('update:huddle', routedHuddle)
      } catch (error) {
        throw new Error(error)
      }
    },
    async sendMessage() {
      if (this.messageInput.trim()) {
        await ChatService.sendNewMessageToHuddle({
          huddleUuid: this.huddle.uuid,
          text: this.messageInput,
        })
        this.messageInput = ''
        this.getHuddleMessages()
      }
    },
    toggleTime(index) {
      this.messages[index].showTime = !this.messages[index].showTime
    }
  }
}
</script>

<style scoped>
.messages-container {
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.no-messages {
  text-align: center;
  color: #888;
}
.message-wrapper {
  display: flex;
  margin-bottom: 10px;
}

.message-wrapper.incoming {
  justify-content: flex-start;
}

.message-wrapper.outgoing {
  justify-content: flex-end;
}

.message {
  display: flex;
  align-items: center;
  max-width: 75%;
  padding: 8px;
  border-radius: 10px;
  cursor: pointer;
}

.message-content.incoming {
  background-color: #e0f7fa;
  margin-right: 10px;
}

.message-content.outgoing {
  background-color: #c8e6c9;
  margin-left: 10px;
}

.message-content {
  padding: 8px;
  border-radius: 10px;
  color: black;
}

.message-time {
  margin-top: 2px;
  font-size: 12px;
  color: #666;
}
.send-message-input .v-input__control .v-field .v-field__field input {
  padding: inherit;
}
.huddle-info {
  position: relative;
}
.chat-card {
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}
.chat-window {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
