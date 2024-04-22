<template>
    <img 
        src="../../assets/code-commit-solid.svg" 
        alt="Place your order icon" 
        :style="{height: iconHeight, width: iconWidth}"
        class="commit-icon"
    >
 </template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    iconWidth: {
      type: String, 
      default: '5%', 
    },
    iconHeight: {
      type: String,
      default: '5%' 
    }
  }
});
</script>
<style scoped>
img{
  margin: 10px;
}
</style>