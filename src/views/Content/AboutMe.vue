<template>
    
    <div id="information-div">
        <h2 class="green-underlined">About Me</h2>

        <div id="about-me-cards">
            <AboutMeCard
                imageName="study.png"
                imageAlt="Male studying emoji"
                aboutDescription="Completing an undergraduate honours degree in 
                            Software Engineering at the University of Canterbury" />

            <AboutMeCard
                imageName="volunteer.png"
                imageAlt="Two hands shaking emoji"
                aboutDescription="Involved in campus life with the Student 
                            Volunteer Army and QCanterbury (UC Rainbow Club) executives" />

            <AboutMeCard
                imageName="tennis.png"
                imageAlt="Tennis ball emoji"
                aboutDescription="When I find spare time away from university, I am 
                            always keen for a hit on the tennis or badminton court" />

            <AboutMeCard
                imageName="work.png"
                imageAlt="Briefcase emoji"
                aboutDescription="Looking for internships for 2024/2025 summer 
                            period and graduate roles for 2025 and beyond" />
        </div>
    </div>
    
    
</template>

<script setup lang="ts">
import AboutMeCard from './../../components/AboutMeCard.vue';
</script>