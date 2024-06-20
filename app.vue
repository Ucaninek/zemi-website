<script setup lang="ts">
provideHeadlessUseId(() => useId())
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>