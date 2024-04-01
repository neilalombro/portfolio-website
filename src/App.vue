<template>

    <SpeedInsights />
    <RouterView />
    
</template>

<script setup lang="ts">

import { inject } from "@vercel/analytics"
import { SpeedInsights } from "@vercel/speed-insights/vue"
import { RouterView } from "vue-router"

inject();

</script>