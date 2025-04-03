<template>
    <div class="relative h-[180px] rounded-lg overflow-hidden shadow-md">
        <img :src="project.image" :alt="project.title" class="w-full h-full object-contain p-4" style="background-color: var(--primary-dark-purple);" />
        
        <div class="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
            <div class="absolute inset-0 hover-gradient opacity-90"></div>
            <div class="relative z-10 flex flex-col items-center">
                <h3 class="text-white text-lg font-semibold mb-2">{{ project.title }}</h3>
                <p class="text-white/90 text-sm text-center mb-4 px-4">{{ project.description }}</p>
                
                <div class="flex gap-3">
                    <a :href="project.linkGithub" 
                       target="_blank" 
                       class="px-4 py-1.5 rounded text-sm transition-colors text-white hover-button">
                        GitHub
                    </a>
                    <a :href="project.linkDemo" 
                       target="_blank" 
                       class="px-4 py-1.5 rounded text-sm transition-colors text-white hover-button">
                        Demo
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
});
</script>

<style scoped>
.hover-gradient {
    background: linear-gradient(to bottom right, 
        var(--primary-fuchsia) 0%,
        var(--primary-dark-purple) 100%
    );
}

.hover-button {
    background-color: var(--primary-dark-purple);
}

.hover-button:hover {
    background-color: var(--primary-brownish);
}
</style>