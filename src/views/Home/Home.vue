<template>

    <transition name="fade">
        <p :key="currentPrintStatement" class="animation-fade"> 
            {{ currentPrintStatement }}
        </p>
    </transition>

    <p>My name is Neil Alombro and I am a current Software Engineering student at the University of Canterbury.</p>

    <p>I am always looking to learn more from experience in the industry and I am looking for summer internships for 2024/2025.</p>

</template>

<script setup lang="ts">
import { ref } from 'vue';

const printStatements = [
    'print("Hello Employers")', 
    'System.out.println("Hello Employers!");',
    'console.log("Hello Employers!");',
];

const currentIndex = ref(0);
const currentPrintStatement = ref(printStatements[currentIndex.value])

const changeText = () => {
    currentIndex.value = (currentIndex.value + 1) % printStatements.length;
    currentPrintStatement.value = printStatements[currentIndex.value]
}

// Change text every 5000 ms
setInterval(changeText, 5000);

</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>