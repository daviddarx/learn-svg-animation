<template>
  <article>
    <h2>{{ post.title }}</h2>
    <p>{{ formatDate(post.date) }}</p>
    <p>{{ post.description }}</p>
    <nuxt-content :document="post" />
    <BlogPagination :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content(`blog-posts/${params.slug}`).fetch() // params come from nuxt context
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    let [prev, next] = await $content('blog-posts')
      .only(['title', 'slug'])
      .sortBy('date', 'asc')
      .surround(params.slug)
      .fetch()

    const allPosts = await $content('blog-posts')
      .only(['title', 'slug'])
      .sortBy('date', 'asc')
      .fetch()

    if (!prev) {
      prev = allPosts.pop()
    }

    if (!next) {
      next = allPosts[0]
    }

    return {
      post,
      prev,
      next,
    }
  },
  mounted() {
    // console.log('blog-post content', this.post)
  },
}
</script>
