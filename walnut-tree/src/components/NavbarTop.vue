<template>
    <nav class="navbar">
      <div class="nav-logo">
        <img class="logo-image" src='@/assets/logo.svg'/>
        <span class="logo-text">Nilam</span>
      </div>
      <div class="empty-space"></div>
      <nilam-navbar class="nilam-navbar"/> <!-- This will render the NilamNavbar component -->
    </nav>
  </template>
  
  <script>
  import NilamNavbar from '../components/NilamNavbar.vue'; // Import NilamNavbar component
  
  export default {
    components: {
      NilamNavbar // Register NilamNavbar component
    },
    data() {
      return {
        menuItems: [
          { text: "Films", link: "/films" },
          { text: "Services", link: "/services" },
          // Add more menu items as needed
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
  background-color: transparent;
  color: rgb(0, 0, 0);
  padding: 10px 0;
  z-index: 1000; /* Ensure the navbar is on top of other content */
}

.nav-logo {
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-right: 20px;
  margin-left: 20px;
}

.logo-image {
  width: 40px; /* Adjust the width as needed */
  height: 40px; /* Maintain aspect ratio */
  margin-right: 10px; /* Add spacing between image and text */
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
