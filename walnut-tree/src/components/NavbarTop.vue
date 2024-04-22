<template>
    <nav class="navbar">
      <div class="nav-logo">
        <img class="logo-image" src='@/assets/logo.svg'/>
        <span class="logo-text">Nilam</span>
      </div>
      <div class="empty-space"></div>
      <nilam-navbar class="nilam-navbar"/> 
    </nav>
  </template>
  
  <script>
  import NilamNavbar from '../components/NilamNavbar.vue';
  
  export default {
    components: {
      NilamNavbar
    },
    data() {
      return {
        menuItems: [
          { text: "Films", link: "/films" },
          { text: "Services", link: "/services" },
        ],
      };
    },
  };
  </script>

<style>
.nilam-navbar{
    margin: 10px 10px 10px 10px;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  color: rgb(0, 0, 0);
  padding: 10px 0;
  z-index: 1000;
}

.nav-logo {
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-right: 20px;
  margin-left: 20px;
}

.logo-image {
  width: 40px; 
  height: 40px; 
  margin-right: 10px;
}

.logo-text {
  font-weight: bold;
  font-size: medium;
  font-family: 'Times New Roman', Times, serif;
}

.empty-space {
  flex-grow: 1;
}

.nav-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-link {
  text-decoration: none;
  color: white;
}

.social-icons {
  font-size: 24px;
  margin-right: 15px;
}
.person{
  color: white;
}
</style>
