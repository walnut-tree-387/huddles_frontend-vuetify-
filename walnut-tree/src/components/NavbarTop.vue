<template>
  <v-app-bar prominent class="navbar">
    <div class="nav-title">
      <HuddleLogo />
      <span class="logo-text">Huddles</span>
    </div>
    <div class="empty-space"></div>
    <div class="nav-icons">
      <HuddlesNotificationButton />
      <HuddleProfileButton />
    </div>
  </v-app-bar>
</template>

<script>
import HuddleLogo from './buttons/HuddleLogo.vue'
import HuddleProfileButton from './buttons/HuddleProfileButton.vue'
import HuddlesNotificationButton from './buttons/HuddlesNotificationButton.vue'

export default {
  components: { HuddleLogo, HuddleProfileButton, HuddlesNotificationButton }
}
</script>

<style>
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
