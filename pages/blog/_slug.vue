<template>
  <article>
    <h2>{{ post.title }}</h2>
    <p>{{ formatDate(post.date) }}</p>
    <p>{{ post.description }}</p>
    <nuxt-content :document="post" />
  </article>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content('blog-posts', params.slug).fetch()
      // OR const article = await $content(`articles/${params.slug}`).fetch()
      // Params part of nuxt context: https://nuxtjs.org/docs/internals-glossary/context/
    } catch (e) {
      error({ message: 'Blog Post not found' })
    }

    return {
      post,
    }
  },
  mounted() {
    console.log('blog post content', this.post)
  },
}
</script>
