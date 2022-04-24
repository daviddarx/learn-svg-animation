<template>
  <article class="blog-card">
    <NuxtLink :to="route" class="blog-card__link">
      <span v-if="subline" class="blog-card__subline">{{ subline }}</span>
      <h3 class="blog-card__title">
        {{ title }}
      </h3>
      <p class="blog-card__date">
        {{ date }}
      </p>
    </NuxtLink>
  </article>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    subline: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    route: {
      type: [String, Object],
      default: '',
    },
  },
}
</script>

<style lang="postcss" scoped>
.blog-card {
  /* @apply mb-5; */
  @apply border border-gray-900;

  height: 100%;
}

.blog-card__subline {
  @apply block mb-4;
  @apply text-secondary-600;
}

.blog-card__link {
  @apply block;
  @apply p-5;
  @apply no-underline;
  @apply transition-bg duration-250;
  height: 100%;

  &:hover {
    @apply bg-white;
  }
}
</style>
