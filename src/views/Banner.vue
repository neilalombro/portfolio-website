<template>
    <div id="banner">
        <a class="font-bold hover:cursor-pointer" @click.prevent="scrollToSection('#home')">
            Neil Alombro
        </a>

        <div id="links">
            <a :class="{ 'underline': currentSection === '#about-me' }" class="hover:cursor-pointer hidden sm:block" @click.prevent="scrollToSection('#about-me')">About Me</a>
            <a :class="{ 'underline': currentSection === '#experience' }" class="hover:cursor-pointer hidden sm:block" @click.prevent="scrollToSection('#experience')">Experience</a>
            <a :class="{ 'underline': currentSection === '#projects' }" class="hover:cursor-pointer hidden sm:block" @click.prevent="scrollToSection('#projects')">Projects</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { throttle } from 'lodash';

const currentSection = ref('');

const scrollToSection = (targetSection: string) => {
    const targetElement = document.querySelector(targetSection);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

const handleScroll = () => {
    const scrollContainer = document.getElementById('content');
    if (scrollContainer) {
        const scrollContainerTop = scrollContainer.getBoundingClientRect().top;
        const sections = ['#home', '#about-me', '#experience', '#projects', '#goodbye'];
        for (const section of sections) {
            const element = scrollContainer.querySelector(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                // TODO: A small offset of 1, need to debug further
                if (rect.top <= (scrollContainerTop + 1) && rect.bottom > (scrollContainerTop + 1)) {
                    currentSection.value = section;
                    break;
                }
            }
        }
    }
};

const throttledHandleScroll = throttle(handleScroll, 500);

onMounted(() => {
    document.getElementById('content')?.addEventListener('scroll', throttledHandleScroll);
});

onUnmounted(() => {
    document.getElementById('content')?.removeEventListener('scroll', throttledHandleScroll);
});

</script>