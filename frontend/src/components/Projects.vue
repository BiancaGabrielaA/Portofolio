<script setup>
import { ref } from 'vue';
import presentationImg from '../assets/presentation.svg';
import stackoverflowImg from '../assets/stackoverflow-light.svg';
import artistImg from '../assets/artist.svg';
import ProjectCard from './ProjectCard.vue';

const DEMO_PRESENTATION_URL = import.meta.env.VITE_DEMO_PRESENTATION_URL;
const DEMO_STACKOVERFLOW_URL = import.meta.env.VITE_DEMO_STACKOVERFLOW_URL;
const DEMO_ARTIST_URL = import.meta.env.VITE_DEMO_ARTIST_URL;

const projectCards = ref([
    {
        id: 1,
        title: 'Presentation',
        image: presentationImg,
        description: 'Presentation',
        linkGithub: 'https://github.com/BiancaGabrielaA/Portofolio/tree/main/demos/presentation',
        linkDemo: DEMO_PRESENTATION_URL,
    },
    {
        id: 2,
        title: 'Stackoverflow',
        image: stackoverflowImg,
        description: 'Stackoverflow',
        linkGithub: 'https://github.com/BiancaGabrielaA/Portofolio/tree/main/demos/stackoverflow',
        linkDemo: DEMO_STACKOVERFLOW_URL ,
    },
    {
        id: 3,
        title: 'Artist',
        image: artistImg,
        description: 'Artist',
        linkGithub: 'https://github.com/BiancaGabrielaA/Portofolio/tree/main/demos/artist',
        linkDemo: DEMO_ARTIST_URL,
    }
]);
</script>

<template>
    <div class="min-h-screen flex flex-col justify-center items-center pt-20">
        <p class="section-title mb-20  text-5xl font-semibold">Projects</p>
        <div class="container max-w-7xl mx-auto px-4 py-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                <ProjectCard v-for="project in projectCards" :key="project.id" :project="project" />
            </div>
        </div>
    </div>
</template>
