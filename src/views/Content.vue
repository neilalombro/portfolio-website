<template>

    <div id="content" class="scroll-container">
        <Home class="scroll-item"/>
        <AboutMe class="scroll-item alternate-section"/>
        <Experience class="scroll-item"/>
        <Projects class="scroll-item alternate-section"/>
        <Goodbye class="scroll-item"/>
    </div>
  
</template>

<script setup lang="ts">

import Home from './Content/Home.vue';
import AboutMe from './Content/AboutMe.vue';
import Experience from './Content/Experience.vue';
import Projects from './Content/Projects.vue';
import Goodbye from './Content/Goodbye.vue';

</script>