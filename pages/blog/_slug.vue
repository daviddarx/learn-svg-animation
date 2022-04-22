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
      post = await $content(`blog-posts/${params.slug}`).fetch() // params come from nuxt context
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
