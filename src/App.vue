<template>

    <Analytics />
    <SpeedInsights />
    
    <RouterView />
    
</template>

<script setup lang="ts">

import { Analytics } from "@vercel/analytics"
import { SpeedInsights } from "@vercel/speed-insights/vue"
import { RouterView } from "vue-router"

</script>