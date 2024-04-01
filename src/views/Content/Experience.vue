<template>
    <div id="experience" class="information-div">
        <h2 class="green-heading underline font-bold text-lg mb-6">Work Experience</h2>

        <ExperienceCard 
            v-for="(experienceCard, index) in experienceCards"
            :key="index"
            :experienceType="experienceCard.experienceType"
            :imageName="experienceCard.imageName"
            :imageAlt="experienceCard.imageAlt" 
            :companyName="experienceCard.companyName"
            :roleName="experienceCard.roleName"
            :date="experienceCard.date"
            :tags="experienceCard.tags"
            :subtags="experienceCard.subtags"
            :description="experienceCard.description"
        />
    </div>
</template>

<script setup lang="ts">
import ExperienceCard from './../../components/ExperienceCard.vue';

const experienceCards = [
  {
    experienceType: "Software",
    imageName: "aurecon.png",
    imageAlt: "Aurecon logo",
    companyName: "Aurecon",
    roleName: "Student Consultant",
    date: "Nov 2023 - Present",
    tags: ["C#", "Typescript"],
    subtags: ["React", "Vue", "Speckle"],
    description: "During my internship ending February 2024, I worked in a team of software developers that work on internal-facing products such as an internal 'Geometry' library, a script-sharing web application 'Script Library', and an intern-led project based on linear infrastructure design. Currently I work part time to help out with building a web application that involves AI driven design with the use of the Speckle platform."
  },
  {
    experienceType: "Software",
    imageName: "ucvision.png",
    imageAlt: "UCVision logo",
    companyName: "UCVision",
    roleName: "Summer Research Assistant",
    date: "Dec 2022 - Feb 2023",
    tags: ["Kotlin", "Python"],
    subtags: ["OpenCV", "ROS"],
    description: "In my summer, I helped develop an Android mobile app for a drone controller to establish communication to a drone's onboard NUC for catkin and branch pruning. In conjunction, a point-based object selection and tracking Python script was also developed."
  },
  {
    experienceType: "Tutoring",
    imageName: "uc.png",
    imageAlt: "University of Canterbury logo",
    companyName: "University of Canterbury",
    roleName: "PALS Leader",
    date: "Jul 2022 - Present",
    tags: ["Communication", "Active Listening"],
    subtags: [],
    description: "Tutoring COSC 131 (Introduction to Programming for Engineers) students to learn how to program in the Python language in 'Peer Assisted Learning Sessions'."
  },
  {
    experienceType: "Leadership",
    imageName: "uc.png",
    imageAlt: "University of Canterbury logo",
    companyName: "University of Canterbury",
    roleName: "Kaitaki Ākonga - Service Coordinator",
    date: "Nov 2021 - Nov 2022",
    tags: ["Service", "Mentoring", "Leadership"],
    description: "Part of a team of six leaders of the He Tētēkura Emerging Leaders Scholarship Development Program. Mentored a group of scholarship-winning students through their first year of university and organised the service portion of the program."
  },
  {
    experienceType: "Tutoring",
    imageName: "aheadstart.png",
    imageAlt: "AHeadStart logo",
    companyName: "AHeadStart",
    roleName: "Tutor",
    date: "Feb 2021 - Feb 2023",
    tags: ["Communication", "Active Listening"],
    subtags: [],
    description: "Tutoring secondary school students in NCEA subjects I excelled in within the Math, English, Science, Business, and Technology fields. Also tutored some primary school students in basic literacy and numeracy."
  },
];

</script>