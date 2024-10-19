<template>
  <v-app-bar prominent class="navbar">
    <div class="nav-title">
      <HuddleLogo />
      <span class="logo-text">Huddles</span>
    </div>
    <v-switch
    style="margin-left: 35vw; margin-top: 2vw;"
      @change="currenThemeName == 'artisticDarkTheme' ? toggleTheme('artisticLightTheme') : toggleTheme('artisticDarkTheme')"
      :label="currentThemeMode"
      color="deep-purple accent-4"
      dark
    ></v-switch>
    <v-spacer></v-spacer>
    <div v-if="!isLoginRoute" class="nav-icons">
      <HuddlesNotificationButton @click="toggleNotificationPopup" />
      <div v-if="!isLoginRoute" class="profile-container">
        <HuddleProfileButton @click="toggleInfoPopup" />
      </div>
    </div>
    <div v-if="showInfoPopup" class="user-popup">
      <HuddleUserInfoPopUp :isVisible="showInfoPopup" @close="toggleInfoPopup(false)" />
    </div>
    <div v-if="showNotificationPopup" class="user-popup">
      <HuddleNotificationPopUp
        :isVisible="showNotificationPopup"
        @close="toggleNotificationPopup(false)"
      />
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import HuddleLogo from './buttons/HuddleLogo.vue'
import HuddleUserInfoPopUp from '../components/huddle/HuddleUserInfoPopUp.vue'
import HuddleProfileButton from './buttons/HuddleProfileButton.vue'
import HuddlesNotificationButton from './buttons/HuddlesNotificationButton.vue'
import { defineComponent, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import HuddleNotificationPopUp from './huddle/HuddleNotificationPopUp.vue'
import { useTheme } from 'vuetify'
export default defineComponent({
  components: {
    HuddleLogo,
    HuddleProfileButton,
    HuddlesNotificationButton,
    HuddleUserInfoPopUp,
    HuddleNotificationPopUp
  },
  setup() {
    const theme = useTheme()
    const currentThemeMode = ref('Dark mode')
    const currenThemeName = ref('artisticLightTheme')
    const showInfoPopup = ref(false)
    const showNotificationPopup = ref(false)
    const route = useRoute()
    const isLoginRoute = computed(() => route.path === '/huddles/login')
    const toggleTheme = (name : string) => {
      theme.global.name.value = name;
      currenThemeName.value = name;
      currentThemeMode.value = currentThemeMode.value === 'Dark mode' ? 'Light mode' : 'Dark mode';
    }
    const toggleInfoPopup = (value: boolean | Event | null = null) => {
      console.log('profile clicked')
      if (value instanceof Event) {
        showInfoPopup.value = !showInfoPopup.value
      } else {
        showInfoPopup.value = value !== null ? value : !showInfoPopup.value
      }
    }
    const toggleNotificationPopup = (value: boolean | Event | null = null) => {
      if (value instanceof Event) {
        showNotificationPopup.value = !showNotificationPopup.value
      } else {
        showNotificationPopup.value = value !== null ? value : !showNotificationPopup.value
      }
    }
    return {
      isLoginRoute,
      showInfoPopup,
      showNotificationPopup,
      toggleInfoPopup,
      toggleNotificationPopup,
      currenThemeName,
      toggleTheme,
      currentThemeMode
    }
  }
})
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
  background-color: 'primary';
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
