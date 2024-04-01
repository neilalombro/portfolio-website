<template>

    <div id="content" class="scroll-container">
        <Introduction class="scroll-item"/>
        <AboutMe class="scroll-item alternate-section"/>
        <Experience class="scroll-item"/>
        <Projects class="scroll-item alternate-section"/>
        <Goodbye class="scroll-item"/>
    </div>
  
</template>

<script setup lang="ts">

import Introduction from './../Content/Introduction.vue';
import AboutMe from './../Content/AboutMe.vue';
import Experience from './../Content/Experience.vue';
import Projects from './../Content/Projects.vue';
import Goodbye from './../Content/Goodbye.vue';

</script>