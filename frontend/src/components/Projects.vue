<script setup>
import { ref } from 'vue';
import ecomerceImg from '../assets/ecomerce.svg';
import presentationImg from '../assets/presentation.svg';
import stackoverflowImg from '../assets/stackoverflow-light.svg';
import artistImg from '../assets/artist.svg';
import ProjectCard from './ProjectCard.vue';

const projectCards = ref([
    {
        id: 1,
        title: 'Ecomerce',
        image: ecomerceImg,
        description: 'Ecomerce',
        linkGithub: 'https://github.com/biancagabriela',
        linkDemo: 'https://github.com/biancagabriela',
    },
    {
        id: 2,
        title: 'Presentation',
        image: presentationImg,
        description: 'Presentation',
        linkGithub: 'https://github.com/biancagabriela',
        linkDemo: 'https://github.com/biancagabriela',
    },
    {
        id: 3,
        title: 'Stackoverflow',
        image: stackoverflowImg,
        description: 'Stackoverflow',
        linkGithub: 'https://github.com/biancagabriela',
        linkDemo: 'https://github.com/biancagabriela',
    },
    {
        id: 4,
        title: 'Artist',
        image: artistImg,
        description: 'Artist',
        linkGithub: 'https://github.com/biancagabriela',
        linkDemo: 'https://github.com/biancagabriela',
    }
]);
</script>

<template>
    <div class="min-h-screen flex flex-col justify-center items-center pt-20">
        <div class="container max-w-4xl mx-auto px-4 py-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <ProjectCard v-for="project in projectCards" :key="project.id" :project="project" />
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>