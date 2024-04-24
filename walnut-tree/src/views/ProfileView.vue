<script setup>
// import NilamAvatar from '../components/NilamAvatar.vue'
import NilamProfileTab from '../components/NilamProfileTab.vue'
</script>

<template>      
  <v-container class="avatar-container">
    <!-- <nilam-avatar 
      :size="'80px'"
      :image="'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'"  
    /> -->
    <nilam-profile-tab />
  </v-container>
</template>

<style scoped>
.avatar-container{
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}
</style>
