import { defineStore } from 'pinia'
interface TokenState {
  token: string | null
}
export const useTokenStore = defineStore('token', {
  state: (): TokenState => ({
    token:
      ''
  }),

  actions: {
    setToken(newToken: string | null) {
      this.token = newToken
    },
    clearToken() {
      this.token = null
    }
  },

  getters: {
    getToken: (state): string | null => state.token
  }
})
