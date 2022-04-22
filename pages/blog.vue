<template>
  <div class="blog">
    BLOG

    <li v-for="post of posts" :key="post.slug">
      <NuxtLink :to="post.slug">{{ post.title }}</NuxtLink>
    </li>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData({ $content }) {
    const posts = await $content('blog-posts').fetch()

    return {
      posts,
    }
  },
}
</script>

<style lang="postcss" scoped></style>
