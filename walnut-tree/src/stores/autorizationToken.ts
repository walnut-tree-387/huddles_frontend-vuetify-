import { defineStore } from 'pinia'
interface TokenState {
  token: string | null
}
export const useTokenStore = defineStore('token', {
  state: (): TokenState => ({
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhdGF1cjM4NyIsInBhc3N3b3JkIjoiMTIzNDUiLCJyb2xlcyI6W3siYXV0aG9yaXR5IjoiQ09NTU9ORVIifV0sImV4cCI6MTcyODU3NDYxMSwiaWF0IjoxNzI4NTMxNDExLCJlbWFpbCI6ImF0YXVyLnN0dTIwMTZAanVuaXYuZWR1In0.KSC530HlMobJNYtRJxjKE7yfRr2epqfkMAq_2OuIv7E'
  }),

  actions: {
    setToken(newToken: string) {
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
