<template>
     <nav class="flex flex-row justify-between items-center p-4">
        <!-- Desktop Menu -->
        <div class="hidden sm:flex flex-row gap-4">
            <a href="#projects" class="navbar-link">Projects</a>
            <a href="#aboutme" class="navbar-link">About Me</a>
            <a href="#contact" class="navbar-link">Contact</a>
        </div>
        
        <!-- Logo -->
        <div>
            <img src="../assets/asset-1.svg" alt="logo" width="50px" height="50px"/>
        </div>

        <!-- Desktop Social Links -->
        <div class="hidden sm:flex flex-row gap-4">
            <a href="https://www.linkedin.com/in/bianca-gabriela-asavoaei/" class="navbar-link">LinkedIn</a>
            <a href="https://github.com/BiancaGabrielaA" class="navbar-link">GitHub</a>
            <a href="https://www.instagram.com/gizzehhh/" class="navbar-link">Instagram</a>
        </div>

        <!-- Burger Menu Button (Mobile) -->
        <button @click="toggleMenu" class="sm:hidden text-[var(--primary-light-pink)]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" 
             class="sm:hidden fixed top-0 left-0 right-0 bg-[var(--primary-dark-purple)] shadow-lg p-4 flex flex-col gap-4 z-50"
             @click.stop>
            <div class="flex flex-row justify-between items-center">
                <img src="../assets/asset-1.svg" alt="logo" width="50px" height="50px"/>
                <button @click="closeMenu" class="text-[var(--primary-light-pink)]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <a href="#projects" class="navbar-link" @click="closeMenu">Projects</a>
            <a href="#aboutme" class="navbar-link" @click="closeMenu">About Me</a>
            <a href="#contact" class="navbar-link" @click="closeMenu">Contact</a>
            <div class="border-t border-gray-200 my-2"></div>
            <a href="https://www.linkedin.com/in/bianca-gabriela-asavoaei/" class="navbar-link" @click="closeMenu">LinkedIn</a>
            <a href="https://github.com/BiancaGabrielaA" class="navbar-link" @click="closeMenu">GitHub</a>
            <a href="https://www.instagram.com/gizzehhh/" class="navbar-link" @click="closeMenu">Instagram</a>
        </div>

        <!-- Overlay -->
        <div v-if="isMenuOpen" 
             class="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
             @click="closeMenu">
        </div>
     </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

// Close menu when pressing Escape key
const handleEscape = (e) => {
    if (e.key === 'Escape' && isMenuOpen.value) {
        closeMenu();
    }
};

onMounted(() => {
    document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
    document.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
.navbar-link {
    color: var(--primary-light-pink);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    transition: color 0.3s ease;
}

.navbar-link:hover {
    color: var(--primary-pink);
}
</style>