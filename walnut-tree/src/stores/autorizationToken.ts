import { defineStore } from 'pinia'
interface TokenState {
  token: string | null
}
export const useTokenStore = defineStore('token', {
  state: (): TokenState => ({
    token:
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuYXptdWxAdHRjLmNvbSIsInBhc3N3b3JkIjoiMTIzNCIsInJvbGVzIjpbeyJhdXRob3JpdHkiOiJDT01NT05FUiJ9XSwiZXhwIjoxNzI4NzE1OTg5LCJpYXQiOjE3Mjg2NzI3ODksImVtYWlsIjoibmF6bXVsQHR0Yy5jb20ifQ.UBLuONfPT7fKJZqKQNaUcrlU4_-ERVjwzanUmcdqQ4Y'
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
