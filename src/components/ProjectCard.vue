<template>
    <div class="w-full">
        <div class="rounded-3xl mt-0 mb-6 ml-4 mr-4 p-4" style="background-color: #42473F;">
            <p class="text-md font-bold text-white pl-4 pb-2"> {{ experienceType }}</p>
            <div class="flex xs:flex-col lg:flex-row">
                <div class="flex-shrink-0 lg:pl-4 lg:pb-2">
                    <div class="flex justify-center items-center">
                        <img :src="`/images/project_screenshots/${imageName}`" :alt="imageAlt" class="h-auto w-96" />
                    </div>
                </div>
                <div class="flex flex-col lg:ml-4 p-4">
                    <div class="flex flex-row items-center">
                        <h3 class="text-4xl font-bold text-white">{{ projectTitle }}</h3>
                        <a v-if="githubLink" :href="githubLink" target="_blank">
                            <img src="/images/contacts/github.png" alt="GitHub icon" class="invert w-8 h-8 ml-2">
                        </a>
                    </div>
                    <div class="flex flex-wrap mt-2">
                        <span v-for="tag in tags" class="text-sm text-black rounded-full px-6 py-1 mr-1 mb-1" style="background-color: #DAE3D7;">{{ tag }}</span>
                        <span v-for="subtag in subtags" class="text-sm text-black rounded-full px-6 py-1 mr-1 mb-1" style="background-color: #838F80;">{{ subtag }}</span>
                    </div>
                    <p class="text-md text-white mt-1">{{ description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    experienceType: {
        type: String,
        required: true,
    },
    imageName: {
        type: String,
        required: true,
    },
    imageAlt: {
        type: String,
        required: true,
    },
    projectTitle: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
        default: () => [],
    },
    subtags: {
        type: Array,
        required: true,
        default: () => [],
    },
    description: {
        type: String,
        required: true,
    },
    githubLink: {
        type: String,
        required: false,
    },
});

</script>