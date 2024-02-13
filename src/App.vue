<template>
  <header>
    <img class="rounded-full w-32 h-32" src="./assets/images/portrait.jpeg" />
    <div class="wrapper">
        <nav>
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/about">About Me</RouterLink>
        <RouterLink class="nav-link" to="/work">Work Experience</RouterLink>
        <RouterLink class="nav-link" to="/projects">Projects</RouterLink>
        <a class="nav-link" href="./resume.pdf"> Resume </a>
        <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
        </nav>
    </div>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>