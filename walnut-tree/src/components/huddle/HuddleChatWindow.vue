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
          :class="message.isOutgoing ? 'message-wrapper outgoing' : 'message-wrapper incoming'"
        >
          <div class="message" @click="toggleTime(index)">
            <WalnutUserAvatar v-if="!message.isOutgoing" />
            <div
              :class="message.isOutgoing ? 'message-content outgoing' : 'message-content incoming '"
            >
              <v-list-item-title>{{ message.text }}</v-list-item-title>
            </div>
            <v-list-item-subtitle v-if="message.showTime" class="message-time">
              {{ message.time }}
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
    <HuddleInfo class="huddle-info" :huddle="huddle" :huddle-users="huddleUsers" @fetch-app-users="sendEmitToParent"/>
  </v-container>
</template>

<script lang="ts">
import HuddleFileButton from '../buttons/HuddleFileButton.vue'
import HuddleTextInput from '../inputs/HuddleTextInput.vue'
import WalnutUserAvatar from '../WalnutUserAvatar.vue'
import HuddleInfo from '../huddle/HuddleInfo.vue'
import { HuddleService } from '../../Services/HuddleService.js'
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
    this.getHuddle();
  },
  data() {
    return {
      messageInput: '',
      userAvatar: 'https://via.placeholder.com/40',
      messages: [
        {
          text: 'Hello, how are you?',
          time: '10:00 AM',
          avatar: 'https://via.placeholder.com/40',
          isOutgoing: false,
          showTime: false
        },
        {
          text: 'I am doing well, thank you!',
          time: '10:01 AM',
          avatar: 'https://via.placeholder.com/40',
          isOutgoing: true,
          showTime: false
        },
        {
          text: 'Hello, how are you?',
          time: '10:00 AM',
          avatar: 'https://via.placeholder.com/40',
          isOutgoing: false,
          showTime: false
        },
        {
          text: 'I am doing well, thank you!',
          time: '10:01 AM',
          avatar: 'https://via.placeholder.com/40',
          isOutgoing: true,
          showTime: false
        },
        {
          text: 'Hello, how are you?',
          time: '10:00 AM',
          avatar: 'https://via.placeholder.com/40',
          isOutgoing: false,
          showTime: false
        },
        {
          text: 'I am doing well, thank you!',
          time: '10:01 AM',
          avatar: 'https://via.placeholder.com/40',
          isOutgoing: true,
          showTime: false
        }
      ]
    }
  },
  methods: {
    sendEmitToParent(){
      this.$emit('fetch-app-users')
      console.log('Event passed in Chat window');
    },
    async getHuddle(){
      try{
        const route = useRoute(); 
        const uuid = route.params.uuid; 
        const routedHuddle = await HuddleService.getHuddle(uuid);
        this.$emit('update:huddle', routedHuddle);
      }catch(error){
        throw new Error(error);
      }
    },
    sendMessage() {
      if (this.messageInput.trim()) {
        this.messages.push({
          text: this.messageInput,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          avatar: this.userAvatar,
          isOutgoing: true,
          showTime: false
        })
        this.messageInput = ''
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
.huddle-info{
  position: relative;
}
.chat-card{
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}
</style>
