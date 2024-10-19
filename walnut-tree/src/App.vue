<template>
  <v-app>
    <div class="root">
      <NavbarTop />
      <v-main>
        <v-title></v-title>
        <body>
          <router-view />
        </body>
      </v-main>
    </div>
  </v-app>
</template>

<script lang="ts">
import NavbarTop from './components/NavbarTop.vue'
export default {
  name: 'App',
  components: {
    NavbarTop
  },
  data: () => ({
    //
  })
}
</script>
<style scoped>
.root {
  display: flex;
  flex-direction: column;
}
</style>
