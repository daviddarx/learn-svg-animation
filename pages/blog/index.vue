<template>
  <article class="blog">
    <h1 class="animate-in">Blog</h1>
    <aside class="animate-in animate-in--s1">
      <h2 class="hidden">Blog articles</h2>
      <ul>
        <li v-for="post of posts" :key="post.slug">
          <NuxtLink :to="'/blog/' + post.slug">
            <h3>{{ post.title }}</h3>
          </NuxtLink>
          {{ formatDate(post.date) }}
        </li>
      </ul>
    </aside>
  </article>
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
  data() {
    return {
      pageTitle: 'Blog',
    }
  },
  head() {
    return {
      title: `${this.pageTitle} - ${this.headTitleBase}`,
    }
  },
}
</script>

<style lang="postcss" scoped></style>
