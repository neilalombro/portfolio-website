<template>

    <div class="flex flex-col justify-center items-center lg:w-1/4 md:w-1/2 sm:w-full p-4">
        <img :src="`/src/assets/images/emojis/${imageName}`" class="w-1/3 md:w-1/3 lg:w-1/2 h-auto mb-16 rounded-3xl p-8" style="background-color: #CED5C1;" >
        <p class="centred">{{ aboutDescription }}</p>
    </div>

</template>

<script setup lang="ts">
defineProps(['imageName', 'imageAlt', 'aboutDescription']);

</script>