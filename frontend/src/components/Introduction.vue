<template>
    <section class="flex flex-col items-center justify-center min-h-screen text-center px-4 w-full">
        <img  alt="Avatar" class="w-32 h-32 rounded-full mb-4 shadow-lg" />
        <h1 class="text-3xl font-bold mb-2">Bianca-Gabriela</h1>
        <p class="text-lg text-gray-600 max-w-md">
            Full-stack developer with expertise in modern web technologies. 
            Passionate about UX, performance optimization, and brand identity. 
            I turn ideas into functional, dynamic, and visually compelling digital solutions.
        </p>
        <div class="flex justify-center">
            <button class="bg-primary-light-pink text-primary-dark-purple px-4 py-2 rounded-md" @click="downloadCV">
                <i class="pi pi-download mr-2"></i> Download my CV
            </button>
        </div>
    </section>
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