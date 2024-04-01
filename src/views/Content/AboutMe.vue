<template>
    
    <div id="about-me" class="information-div">
        <h2 class="green-heading underline font-bold text-lg mb-6">About Me</h2>
        <div class="flex flex-1 justify-center items-center">
            <div class="flex flex-wrap justify-center items-start">
                <AboutMeCard
                    v-for="(card, index) in aboutMeCards"
                    :key="index"
                    :imageName="card.imageName"
                    :imageAlt="card.imageAlt"
                    :aboutDescription="card.aboutDescription"
                />
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import AboutMeCard from './../../components/AboutMeCard.vue';

const aboutMeCards = [
  {
    imageName: "study.png",
    imageAlt: "Male studying emoji",
    aboutDescription: "Currently pursuing an undergraduate honours degree in Software Engineering at the University of Canterbury."
  },
  {
    imageName: "volunteer.png",
    imageAlt: "Two hands shaking emoji",
    aboutDescription: "Involved in university initiatives in the Student Volunteer Army and QCanterbury (UC Rainbow Club) executives."
  },
  {
    imageName: "tennis.png",
    imageAlt: "Tennis ball emoji",
    aboutDescription: "Enjoy socializing through sports like tennis and badminton, always up for a friendly match in my free time."
  },
  {
    imageName: "work.png",
    imageAlt: "Briefcase emoji",
    aboutDescription: "Seeking internship opportunities for the summer of 2024/2025 and aiming for graduate roles in 2026."
  }
];

</script>