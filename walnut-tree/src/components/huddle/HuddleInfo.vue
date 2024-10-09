<template>
  <v-card class="pa-5 huddle-card">
    <v-card-title class="title text-h5">
      {{ huddle?.name || 'Huddle Name' }}
    </v-card-title>
    <v-card-subtitle class="subtitle">
      {{ huddle?.description || 'Huddle Description' }}
    </v-card-subtitle>

    <v-card-text>
      <v-container fluid class="huddle-info-container">
        <v-row justify="center" class="icon-row">
          <v-btn icon>
            <v-icon>mdi-message</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-phone</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-video</v-icon>
          </v-btn>
        </v-row>

        <v-divider class="my-4"></v-divider>
        <v-list lines="three">
          <v-list-item
            v-for="user in userList"
            :key="user.uuid"
            :title="user.memberName"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
            :prepend-avatar="'https://randomuser.me/api/portraits/women/8.jpg'"
          ></v-list-item>
        </v-list>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import WalnutUserAvatar from '../WalnutUserAvatar.vue'
import { HuddleUserService } from '@/Services/HuddleUserService'

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
  components: { WalnutUserAvatar },
  methods: {
    async getHuddleUsers() {
      console.log('new Huddle  -----------------> ' + this.huddle)
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
.huddle-card {
  max-width: 600px;
  margin: auto;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-weight: bold;
  color: #3c4b64;
}

.subtitle {
  text-align: center;
  margin-top: -10px;
  color: #717d91;
}

.icon-row {
  justify-content: space-around;
}

.user-card {
  background-color: #f9fafb;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
}

.user-name {
  font-weight: bold;
  color: #2e3a4e;
}

.user-role {
  color: #717d91;
}

.huddle-info-container {
  margin-top: 15px;
}

.v-avatar {
  border: 2px solid #e0e6ed;
}

.v-btn {
  color: #536b84;
}

.v-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.v-divider {
  background-color: #e0e6ed;
}
</style>
