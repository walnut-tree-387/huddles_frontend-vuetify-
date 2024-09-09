<script setup lang="ts">
import { useDefaults } from 'vuetify'
import IconUserCircle from '~icons/wt-regular-users-people/user-circle'

useDefaults()
</script>

<template>
  <v-avatar :rounded="50" :icon="IconUserCircle" variant="tonal" />
</template>
