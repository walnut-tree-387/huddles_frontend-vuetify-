<template>
  <v-card class="login-card">
    <v-card-text>
      <v-form class="login-form" ref="form" v-model="valid" lazy-validation>
        <div style="width: 300px">
          <v-text-field v-model="userName" label="Username" required></v-text-field>
        </div>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          type="password"
          required
        ></v-text-field>
        <v-btn size="small" :disabled="!valid" @click="login" color="green">Login</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { LoginService } from '@/Services/HuddleLoginService.js'
import { defineComponent } from 'vue'
import { loggedInUserStore } from '../../stores/loggedInUser.js'
import { useWalnutToast } from '../../composables/toast.js'
import WebsocketService from '../../Services/WebsocketService.js'

export default defineComponent({
  components: {},
  setup() {
    const { showError, showSuccess } = useWalnutToast()
    const showToast = () => {
      showError('This is a sample Toast')
    }
    return {
      showSuccess,
      showToast,
      showError
    }
  },
  data() {
    return {
      loginToast: {
        type: 'error',
        toastId: null,
        message: ''
      },
      userName: '',
      password: '',
      valid: false,
      error: '',
      emailRules: [
        (v) => !!v || 'Email is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 2 || 'Password must be at least 2 characters long'
      ]
    }
  },
  methods: {
    async login() {
      this.error = ''
      if (this.$refs.form.validate()) {
        const websocketService = new WebsocketService()
        try {
          let requestBody = {
            userName: this.userName,
            password: this.password
          }
          const loginResponse = await LoginService.login(requestBody)
          loggedInUserStore().setUser(loginResponse)
          websocketService.connectWebSocket()
          this.showSuccess('Login successful! Redirecting to huddles...')
          setTimeout(() => {
            this.$router.push('/huddles')
          }, 2000)
        } catch (err) {
          this.showError(err?.message)
        }
      }
    }
  }
})
</script>

<style scoped>
.login-card {
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
}
</style>
