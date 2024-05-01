<script setup lang="ts">
import ReviewCard from '@/components/ReviewCard.vue'
</script>

<template>
  <section class="reviews">
    <h2>reviews</h2>
    <h3>Read What Others Have To Say</h3>
    <div class="review-container">
      <ReviewCard author="Wheatley" src="src\assets\wheatley.png"
        >I wish I could take it all back. I honestly do. I honestly do wish I could take it all
        back. And not just 'cause I'm stranded in space.</ReviewCard
      >
      <ReviewCard author="Wheatley" src="src\assets\wheatley.png"
        >I wish I could take it all back. I honestly do. I honestly do wish I could take it all
        back. And not just 'cause I'm stranded in space.</ReviewCard
      >
      <ReviewCard author="Wheatley" src="src\assets\wheatley.png"
        >I wish I could take it all back. I honestly do. I honestly do wish I could take it all
        back. And not just 'cause I'm stranded in space.</ReviewCard
      >
    </div>
  </section>
</template>

<style scoped>
.reviews {
  text-align: center;
}

.review-container {
  text-align: center;
  @apply grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6;
}

.review-container div {
  @apply hover:scale-95 shadow-2xl hover:shadow-sm;
}

.reviews h3 {
  font-family: 'Outfit';
  @apply font-bold text-3xl xl:text-4xl col-span-3 col-start-2;
}

@media only screen and (min-width: 530px) and (max-width: 639px) {
  .review-container {
    @apply grid-cols-2 !important;
  }
}
</style>
