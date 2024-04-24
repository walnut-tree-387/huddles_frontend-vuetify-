<script setup>
import NilamAvatar from '../components/NilamAvatar.vue'
</script>

<template>      
  <v-container class="avatar-container">
    <nilam-avatar 
      :size="'80px'"
      :image="'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460'"  
    />
  </v-container>
</template>

<style scoped>
.avatar-container{
  margin-top: 400px;
}
</style>
