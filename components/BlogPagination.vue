<template>
  <nav class="blog-pagination grid-four">
    <h2 class="hidden">Blog Pagination</h2>
    <div v-if="prev">
      <BlogCard
        :subline="'Previous:'"
        :title="prev.title"
        :date="formatDate(prev.date)"
        :route="{ name: $route.name, params: { slug: prev.slug } }"
      />
    </div>
    <div v-if="next">
      <BlogCard
        :subline="'Next:'"
        :title="next.title"
        :date="formatDate(next.date)"
        :route="{ name: $route.name, params: { slug: next.slug } }"
      />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BlogPagination',
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="postcss" scoped></style>
