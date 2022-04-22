<template>
  <div class="blog">
    BLOG
    <nav>
      <ul>
        <li v-for="post of posts" :key="post.slug">
          <NuxtLink :to="'/blog/' + post.slug">
            {{ post.title }}
          </NuxtLink>
          - {{ formatDate(post.date) }}
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData({ $content }) {
    const posts = await $content('blog-posts').sortBy('date', 'asc').fetch()

    return {
      posts,
    }
  },
}
</script>

<style lang="postcss" scoped></style>
