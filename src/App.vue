<template>

    <SpeedInsights />
    <RouterView />
    
</template>

<script setup lang="ts">

import { SpeedInsights } from "@vercel/speed-insights/vue"
import { RouterView } from "vue-router"

</script>