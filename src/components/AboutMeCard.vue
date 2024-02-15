<template>
<div id="about-me-card">
    <img :src="`/src/assets/images/${imageName}`" class="about-me-image" >
    <p class="centred">{{ aboutDescription }}</p>
</div>

</template>

<script setup lang="ts">
defineProps(['imageName', 'imageAlt', 'aboutDescription']);

</script>