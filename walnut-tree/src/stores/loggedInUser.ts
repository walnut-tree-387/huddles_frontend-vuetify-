import { defineStore } from 'pinia';

interface LoggedInUserState {
  token: string | null;
  uuid: string | null;
  name: string | null;
  email: string | null;
}

export const loggedInUserStore = defineStore('loggedInUser', {
  state: (): LoggedInUserState => ({
    token: localStorage.getItem('token'),
    uuid: null,
    name: localStorage.getItem('name'),
    email: null,
  }),

  actions: {
    setUser(newUser: LoggedInUserState) {
      this.uuid = newUser.uuid;
      this.name = newUser.name;
      this.email = newUser.email;
      if(this.name){
        this.token = newUser.token;
        localStorage.setItem('name', this.name)
      }
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
