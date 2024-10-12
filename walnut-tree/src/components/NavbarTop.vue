<template>
  <v-app-bar prominent class="navbar">
    <div class="nav-title">
      <HuddleLogo />
      <span class="logo-text">Huddles</span>
    </div>
    
    <v-spacer></v-spacer>
    
    <div v-if="!isLoginRoute" class="nav-icons">
      <HuddlesNotificationButton />

      <div v-if="!isLoginRoute" class="profile-container">
        <HuddleProfileButton @click="togglePopup" />
      </div>
    </div>
    <div v-if="showPopup" class="user-popup">
      <HuddleUserInfoPopUp :isVisible="showPopup" @close="togglePopup(false)" />
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import HuddleLogo from './buttons/HuddleLogo.vue';
import { loggedInUserStore } from '../stores/loggedInUser.js';
import HuddleUserInfoPopUp from '../components/huddle/HuddleUserInfoPopUp.vue';
import HuddleProfileButton from './buttons/HuddleProfileButton.vue';
import HuddlesNotificationButton from './buttons/HuddlesNotificationButton.vue';
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
export default defineComponent({
  components: { HuddleLogo, HuddleProfileButton, HuddlesNotificationButton, HuddleUserInfoPopUp },
  setup() {
    const showPopup = ref(false);
    const route = useRoute();
    const isLoginRoute = computed(() => route.path === '/huddles/login');
    const togglePopup = (value: boolean | Event | null = null) => {
      if (value instanceof Event) {
        showPopup.value = !showPopup.value;
      } else {
        showPopup.value = value !== null ? value : !showPopup.value;
      }
};

    onMounted(() => {
    });

    return {
      isLoginRoute,
      showPopup,
      togglePopup,
    };
  },
});
</script>
<style scoped>
.nav-title {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.logo-text {
  font-family: 'Pacifico', cursive;
  font-style: italic;
  font-size: 20px;
  margin-left: 10px;
}

.empty-space {
  flex-grow: 1;
}

.nav-icons {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.profile-container {
  position: relative;
}

.user-popup {
  position: absolute;
  margin-top: 100px;
  z-index: 10000; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: white; 
  border-radius: 8px; 
  padding: 10px; 
  width: 250px; 
  max-height: 300px;
}


.nav-icons > * {
  margin-left: 15px;
}

@media (max-width: 768px) {
  .logo-text {
    font-size: 18px;
  }
  .nav-icons > * {
    margin-left: 10px;
  }
}
</style>
