import { defineStore } from 'pinia'
interface TokenState {
  token: string | null
}
export const useTokenStore = defineStore('token', {
  state: (): TokenState => ({
    token: localStorage.getItem('token')
  }),

  actions: {
    setToken(newToken: string | null) {
      this.token = newToken
      if(newToken){
        localStorage.setItem('token', newToken);
      }
    },
    clearToken() {
      this.token = null
    }
  },

  getters: {
    getToken: (state): string | null => state.token
  }
})
