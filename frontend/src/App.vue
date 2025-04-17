<script setup>
import Navbar from './components/Navbar.vue'
import Introduction from './components/Introduction.vue'
import Projects from './components/Projects.vue'
import Toolkit from './components/Toolkit.vue'
import AboutMe from './components/AboutMe.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <div class="gradient-background  relative">
    <!-- Fixed Navbar -->
    <Navbar class="fixed top-0 left-0 w-full z-50" />

    <!-- Main Content -->
    <div class="pt-16 snap-y snap-mandatory overflow-y-scroll h-screen">
      <div class="min-h-screen snap-start"><Introduction /></div>
      <div class="min-h-screen snap-start"><Projects /></div>
      <div class="min-h-screen snap-start"><Toolkit /></div>
      <div class="min-h-screen snap-start"><AboutMe /></div>
      <div class="min-h-screen snap-start"><Contact /></div>
    </div>

      <!-- PAGE NOT FOUND  -->
  </div>
</template>

