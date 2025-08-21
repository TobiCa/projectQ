<template>
  <main>
    <div id="left-navbar-container">
      <LeftNavbar />
    </div>
    <div id="chat-container">
      <Chat />
    </div>
  </main>
</template>

<script setup lang="ts">
import Chat from '../components/TheChat.vue'
import LeftNavbar from '@/components/LeftNavbar.vue'
</script>

<style scoped></style>
