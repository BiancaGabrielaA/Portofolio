<template>
     <nav class="flex flex-row justify-between items-center p-4">
        <div class="flex flex-row gap-4">
            <a href="#" class="navbar-link">Projects</a>
            <a href="#" class="navbar-link">About Me</a>
            <a href="#" class="navbar-link">Contact</a>
        </div>
        <div>
            <img src="../assets/logo.png" alt="logo" width="100px" height="100px"/>
        </div>
        <div class="flex flex-row gap-4">
            <a href="#" class="navbar-link">LinkedIn</a>
            <a href="#" class="navbar-link">GitHub</a>
            <a href="#" class="navbar-link">Instagram</a>
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