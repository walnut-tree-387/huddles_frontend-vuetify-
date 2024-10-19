<template>
  <div v-if="isVisible" class="popup-backdrop" @click.self="close">
    <div class="popup-content">
      <div>
        <span v-text="'Hello ' + user.name" style="font-size: large; font-weight: bolder; color: black;"></span>
      </div>
      <v-btn size="small" color="primary" @click="logout">Log Out</v-btn>
      <HuddlePopUpCloseButton class="pop-up-close-btn" @click="close" />
    </div>
  </div>
</template>

<script lang="ts">
import { loggedInUserStore } from '../../stores/loggedInUser.js'; 
import { useTokenStore } from '../../stores/autorizationToken.js'; 
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import HuddlePopUpCloseButton from '../buttons/HuddlePopUpCloseButton.vue'
import { useWalnutToast } from '../../composables/toast.js';
export default defineComponent({
  components : {HuddlePopUpCloseButton},
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { emit }) {
    const router = useRouter();
    const user = loggedInUserStore().getUser;
    const { showError, showSuccess } = useWalnutToast();
    const showToast = () => {
      showError('This is a sample Toast');
    };
    const logout = () => {
      useTokenStore().clearToken();
      loggedInUserStore().clearUser();
      close();
      showSuccess('Log out successful! Redirecting to Login...');
      setTimeout(() => {
        router.push('/huddles/login');
      }, 2000);
      router.push('/huddles/login');
    };

    const close = () => {
      emit('close');
    };

    return {
      showSuccess,
      showError,
      user,
      logout,
      close
    };
  }
});
</script>

<style scoped>
.popup-backdrop {
  position: fixed;
  right: 0;
  margin-right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.pop-up-close-btn {
  position: absolute;
  top: 10px; 
  right: 10px; 
  cursor: pointer;
  background: none;
  border: none;
}
.popup-content {
  background-color: white;
  color: 'primary';
  padding: 40px;
  border-radius: 8px;
  min-width: 200px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}
</style>
