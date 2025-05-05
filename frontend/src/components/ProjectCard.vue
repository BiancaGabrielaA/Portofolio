<template>
    <div class="relative h-[360px] rounded-xl overflow-hidden shadow-lg">
        <img 
            :src="project.image" 
            :alt="project.title" 
            class="w-full h-full object-contain p-6" 
            style="background-color: var(--primary-dark-purple);" 
        />
        
        <div class="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
            <div class="absolute inset-0 hover-gradient opacity-90"></div>
            <div class="relative z-10 flex flex-col items-center">
                <h3 class="text-white text-2xl font-bold mb-3">{{ project.title }}</h3>
                <p class="text-white/90 text-base text-center mb-5 px-6">{{ project.description }}</p>
                
                <div class="flex gap-5">
                    <a 
                        :href="project.linkGithub" 
                        target="_blank" 
                        class="px-6 py-2 rounded text-base font-medium transition-colors text-white hover-button">
                        GitHub
                    </a>
                    <a 
                        :href="project.linkDemo" 
                        target="_blank" 
                        class="px-6 py-2 rounded text-base font-medium transition-colors text-white hover-button">
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
