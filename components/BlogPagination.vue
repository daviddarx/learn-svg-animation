<template>
  <nav>
    <p v-if="prev">
      Prev:
      <NuxtLink :to="{ name: $route.name, params: { slug: prev.slug } }">
        {{ prev.title }}
      </NuxtLink>
    </p>
    <p v-if="next">
      Next:
      <NuxtLink :to="{ name: $route.name, params: { slug: next.slug } }">
        {{ next.title }}
      </NuxtLink>
    </p>
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

<style lang="scss" scoped></style>
