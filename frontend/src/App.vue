<script setup>
import {ref} from 'vue';
import Navbar from './components/Navbar.vue'
import Introduction from './components/Introduction.vue'
import Projects from './components/Projects.vue'
import Toolkit from './components/Toolkit.vue'
import AboutMe from './components/AboutMe.vue'
import Contact from './components/Contact.vue'

const x = ref(0)
const y = ref(0)

const handleMouseMove = (e) => {
  x.value = e.clientX
  y.value = e.clientY
}
</script>

<template>
   <div @mousemove="handleMouseMove" class="gradient-background relative overflow-hidden">
    <!-- Glowing Cursor Light -->
    <div
      class="pointer-events-none fixed z-40 w-96 h-96 rounded-full bg-white opacity-10 blur-3xl transition-all duration-100"
      :style="{ top: `${y - 192}px`, left: `${x - 192}px` }"
    ></div>

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
    <!-- Page not found -->
  </div>
</template>
