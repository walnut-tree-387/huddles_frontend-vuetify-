import { defineStore } from 'pinia';

interface LoggedInUserState {
  token: string | null;
  uuid: string | null;
  name: string | null;
  email: string | null;
}

export const loggedInUserStore = defineStore('loggedInUser', {
  state: (): LoggedInUserState => ({
    token: null,
    uuid: null,
    name: null,
    email: null,
  }),

  actions: {
    setUser(newUser: LoggedInUserState) {
      this.token = newUser.token;
      this.uuid = newUser.uuid;
      this.name = newUser.name;
      this.email = newUser.email;
    },
    clearUser() {
      this.token = null;
      this.uuid = null;
      this.name = null;
      this.email = null;
    },
  },

  getters: {
    getUser: (state) => {
      return {
        token: state.token,
        uuid: state.uuid,
        name: state.name,
        email: state.email,
      };
    },
    isLoggedIn: (state) => !!state.token, 
  },
});
