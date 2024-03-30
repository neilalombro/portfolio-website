<template>

    <div class="flex flex-row rounded-3xl mb-6 w-full p-4" style="background-color: #42473F;">
        <div class="flex w-68 h-68 p-4">
            <div class="aspect-w-1 aspect-h-1 w-60 h-60">
                <img :src="`/src/assets/images/company_logos/${imageName}`" :alt="imageAlt" class="object-cover" />
            </div>
        </div>
        <div class="flex flex-col ml-4 p-4">
            <h3 class="text-3xl font-bold text-white">{{ companyName }}</h3>
            <p class="text-3xl font-bold text-white">{{ roleName }}</p>
            <p class="text-sm text-white">{{ date }}</p>
            <div class="flex flex-wrap mt-2">
                <span v-for="tag in tags" class="text-xs text-black rounded-full px-6 py-1 mr-1" style="background-color: #DAE3D7;">{{ tag }}</span>
            </div>
            <p class="text-sm text-white mt-2">{{ description }}</p>
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
    companyName: {
        type: String,
        required: true,
    },
    roleName: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
        default: () => [],
    },
    description: {
        type: String,
        required: true,
    },
});
</script>