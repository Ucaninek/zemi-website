<template>
    <div>
        <BlurryCircles />
        <TheNavbar />
        <NuxtPage />
    </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import BlurryCircles from '~/components/BlurryCircles.vue';

export default {
    components: {
        TheNavbar,
        BlurryCircles
    }
}
</script>