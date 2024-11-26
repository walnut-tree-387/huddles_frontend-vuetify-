import { defineStore } from 'pinia'

interface LoggedInUserState {
  token: string | null
  uuid: string | null
  name: string | null
  email: string | null
  role: string | null
}

export const loggedInUserStore = defineStore('loggedInUser', {
  state: (): LoggedInUserState => ({
    token: localStorage.getItem('token'),
    uuid: localStorage.getItem('uuid'),
    name: localStorage.getItem('name'),
    email: null,
    role: null
  }),

  actions: {
    setUser(newUser: LoggedInUserState) {
      this.uuid = newUser.uuid
      this.name = newUser.name
      this.email = newUser.email
      this.role = newUser.role
      if (this.name) {
        this.token = newUser.token
        localStorage.setItem('name', this.name)
        localStorage.setItem('uuid', this.uuid)
      }
    },
    clearUser() {
      this.token = null
      this.uuid = null
      this.name = null
      this.email = null
      this.role = null
    }
  },

  getters: {
    getUser: (state) => {
      return {
        token: state.token,
        uuid: state.uuid,
        name: state.name,
        email: state.email,
        role: state.role
      }
    },
    isLoggedIn: (state) => !!state.token
  }
})
