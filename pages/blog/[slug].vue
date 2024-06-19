<script setup lang="ts">
const route = useRoute()

const { data } = await useAsyncData(`content-${route.path}`, () => (
    queryContent().where({ _path: route.path }).findOne()
));
</script>

<template>
    <main class="p-16">
        <div class="size-full p-16 bg-slate-800 bg-opacity-80 rounded-2xl">
            <headers>
                <h1>{{ data?.title }}</h1>
                <p>{{ data?.description }}</p>
                <p v-if="data?.author">{{ data.author }}</p>
            </headers>
            <ContentRenderer :value="data" />
        </div>
    </main>
</template>