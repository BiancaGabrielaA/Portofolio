<template>
    <div class="min-h-screen flex flex-col justify-center items-center pt-20">
    
      <p class="section-title mb-20  text-5xl font-semibold">Toolkit</p>
  
      <div ref="toolkitRef" class="toolkit-container flex flex-row flex-wrap gap-8 justify-center">
        <div  v-for="(tool, index) in toolkit" :key="tool.name"  class="tool-item flex flex-col items-center justify-center w-20 opacity-0">
          <img :src="tool.icon" :alt="tool.name" class="h-12 w-auto mb-2"/>
          <p class="text-sm text-xl text-center">{{ tool.name }}</p>
        </div>
      </div>
    </div>
  </template>

<script setup>
import aws from '@/assets/toolkit-logos/aws.svg'
import docker from '@/assets/toolkit-logos/docker.svg'
import github from '@/assets/toolkit-logos/github.svg'
import mongodb from '@/assets/toolkit-logos/mongodb.svg'
import php from '@/assets/toolkit-logos/php.svg'
import react from '@/assets/toolkit-logos/react.svg'
import typescript from '@/assets/toolkit-logos/typescript.svg'
import vue from '@/assets/toolkit-logos/vue.svg'
import sass from '@/assets/toolkit-logos/sass.svg'
import tailwind from '@/assets/toolkit-logos/tailwind.svg'
import nodejs from '@/assets/toolkit-logos/nodejs.svg'

import { ref, onMounted } from 'vue'

const toolkit = ref([
    { name: 'AWS', icon: aws },
    { name: 'Docker', icon: docker },
    { name: 'GitHub', icon: github },
    { name: 'MongoDB', icon: mongodb },
    { name: 'PHP', icon: php },
    { name: 'React', icon: react },
    { name: 'TypeScript', icon: typescript },
    { name: 'NodeJS', icon: nodejs },
    { name: 'VueJS', icon: vue },
    { name: 'Sass', icon: sass },
    { name: 'Tailwind', icon: tailwind },
])

const toolkitRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = toolkitRef.value.querySelectorAll('.tool-item')
          items.forEach((el, index) => {
            el.classList.remove('opacity-0')
            el.classList.add(index < items.length / 2 ? 'fade-in-left' : 'fade-in-right')
          })
        } else {
          const items = toolkitRef.value.querySelectorAll('.tool-item')
          items.forEach((el) => {
            el.classList.remove('fade-in-left', 'fade-in-right')
            el.classList.add('opacity-0')
          })
        }
      })
    },
    { threshold: 1 }
  )

  if (toolkitRef.value) {
    observer.observe(toolkitRef.value)
  }
})

</script>

<style scoped>
@keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .fade-in-left {
    animation: fadeInLeft 0.6s ease-out forwards;
  }
  
  .fade-in-right {
    animation: fadeInRight 0.6s ease-out forwards;
  }

</style>