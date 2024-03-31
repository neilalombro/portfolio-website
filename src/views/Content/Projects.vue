<template>
    <div id="projects" class="information-div">
        <h2 class="green-heading underline font-bold text-lg mb-6">Projects</h2>

        <ProjectCard 
            v-for="projectCard in projectCards"
            :experience-type="projectCard.experienceType"
            :image-name="projectCard.imageName"
            :image-alt="projectCard.imageAlt"
            :project-title="projectCard.projectTitle"
            :tags="projectCard.tags"
            :subtags="projectCard.subtags"
            :description="projectCard.description"
            :github-link="projectCard.githubLink"
            />
    </div>
    
</template>

<script setup lang="ts">
import ProjectCard from './../../components/ProjectCard.vue'

const projectCards = [
    {
        experienceType: "Team",
        imageName: "safetrip.png",
        imageAlt: "SafeTrip app screenshot",
        projectTitle: "SafeTrip",
        tags: ["Java", "JavaScript", "SQL"],
        subtags: ["JavaFX", "Leaflet", "JUnit", "Cucumber", "Checkstyle"],
        description: "Completed as a team project as part of the course SENG 202. The desktop application uses NZ crash data from Waka Kotahi to create safety-informed journeys and analyses areas through a safety rating and data visualization through data graphing, crash heatmap, and mapping crash locations.",
        githubLink: "https://github.com/neilalombro/SafeTrip"
    },
    {
        experienceType: "Individual",
        imageName: "personal_website.png",
        imageAlt: "Personal website screenshot",
        projectTitle: "Personal Website",
        tags: ["TypeScript"],
        subtags: ["Vue", "Tailwind", "HTML", "CSS"],
        description: "A little meta but this website was a great playground for me to experiment with TypeScript and with various design decisions with scrolling and screen size.",
        githubLink: "https://github.com/neilalombro/portfolio-website"
    },
    {
        experienceType: "Individual",
        imageName: "code_copy.png",
        imageAlt: "Code copy extension screenshot",
        projectTitle: "Code Copy",
        tags: ["Javascript"],
        subtags: [],
        description: "A Chrome extension that solved a problem for a friend that had trouble with copying tests over from the University of Canterbury quiz server with click and drag.",
        githubLink: "https://github.com/neilalombro/code_copy"
    },
];

</script>