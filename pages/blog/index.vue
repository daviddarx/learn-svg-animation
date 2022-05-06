<template>
  <article class="blog">
    <AppBreadcrumb :title="pageTitle" class="animate-in" />
    <div class="col-left">
      <h1 class="animate-in animate-in--s1">{{ page.title }}</h1>
    </div>

    <div class="col-right">
      <nuxt-content
        :document="page"
        class="animate-in animate-in--s2 md-content"
      />
    </div>

    <aside class="animate-in animate-in--s2">
      <h2 class="hidden">Blog articles</h2>
      <ul class="blog__list grid-four">
        <li v-for="post of posts" :key="post.slug">
          <BlogCard
            :title="post.title"
            :date="formatDate(post.date)"
            :route="'/blog/' + post.slug"
          />
        </li>
      </ul>
    </aside>
  </article>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData({ $content }) {
    const page = await $content('blog/blog').fetch()
    const posts = await $content('blog-posts').sortBy('date', 'asc').fetch()

    return {
      page,
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
