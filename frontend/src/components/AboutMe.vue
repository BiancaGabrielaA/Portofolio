<template>
    <div class="items-center justify-center min-h-screen text-center px-4 w-full pt-40">
        <p class="section-title mb-20  text-5xl font-semibold">About Me</p>
      
      <div class="flex flex-col md:flex-row items-center justify-center text-center px-4 w-full gap-10">
        <div class="flex flex-col md:flex-row items-center gap-12">
  
          <!-- Left: Visual / Icons / Fun Element -->
          <div class="flex-1 flex justify-center">
            <!-- Add visual or icon here -->
            <img src="../assets/about-me.jpg" alt="Modern Mozart" width="500px" className="img-fluid rounded shadow" />
          </div>
  
          <!-- Right: Info -->
          <div class="flex-1 text-center md:text-left">
            <p class="text-lg text-gray-300 mb-4 leading-relaxed">
              Hey! I'm a full-stack developer based in Bucharest, Romania. I graduated from the University of Bucharest in 2024 and specialize in building fast, secure, and scalable web applications.
            </p>
            <p class="text-lg text-gray-300 mb-4 leading-relaxed">
              I love writing clean code, crafting smooth user experiences, and turning ideas into reality. When I’m not coding, I teach kids how to program in C++ — combining creativity and logic in a way that keeps me inspired.
            </p>
            <p class="text-lg text-gray-300 leading-relaxed">
              I believe great work comes from balance, so I make time to travel, stay active, and recharge — all while leveling up my skills and taking on new challenges.
            </p>
            <div class="mt-10">
                <button class="bg-primary-light-pink text-primary-dark-purple px-4 py-2 rounded-md" @click="downloadCV">
                    <i class="pi pi-download mr-2"></i> Download my CV
                </button>
            </div>
            </div>
          </div>
  
        </div>
        
      </div>
      
  </template>
<script setup>
import CV from '@/assets/cv.pdf'


function downloadCV() {
  const link = document.createElement('a');
  link.href = CV; // path relative to public/
  link.download = 'Bianca-Gabriela-Asavoaei-CV.pdf';
  link.click();
}
</script>
 
  
  