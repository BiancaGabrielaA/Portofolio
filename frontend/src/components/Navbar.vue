<template>
     <nav class="flex flex-row justify-between items-center p-4">
        <div class="flex flex-row gap-4">
            <a href="#projects" class="navbar-link">Projects</a>
            <a href="#aboutme" class="navbar-link">About Me</a>
            <a href="#contact" class="navbar-link">Contact</a>
        </div>
        <div>
            <img src="../assets/asset-1.svg" alt="logo" width="50px" height="50px"/>
        </div>
        <div class="flex flex-row gap-4">
            <a href="https://www.linkedin.com/in/bianca-gabriela-asavoaei/" class="navbar-link">LinkedIn</a>
            <a href="https://github.com/BiancaGabrielaA" class="navbar-link">GitHub</a>
            <a href="https://www.instagram.com/gizzehhh/" class="navbar-link">Instagram</a>
        </div>
     </nav>
</template>

<style scoped>
.navbar-link {
    color: var(--primary-light-pink);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    transition: color 0.3s ease;
}


</style>