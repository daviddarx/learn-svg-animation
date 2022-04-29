<template>
  <article class="blog-detail">
    <img v-if="post.image" :src="post.image" class="blog-detail__hero" />

    <h1 class="animate-in">{{ post.title }}</h1>

    <div class="animate-in animate-in--s1">
      <p>{{ formatDate(post.date) }}</p>
      <p>{{ post.description }}</p>
    </div>

    <nuxt-content :document="post" class="animate-in animate-in--s2" />

    <div v-if="post.images" class="blog-detail__images grid-four">
      <img
        v-for="(img, index) in post.images"
        :key="img.image + index"
        :src="img.image"
      />
    </div>

    <BlogPagination
      :prev="prev"
      :next="next"
      class="animate-in animate-in--s3"
    />
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
      .only(['title', 'slug', 'date'])
      .sortBy('date', 'asc')
      .surround(params.slug)
      .fetch()

    const allPosts = await $content('blog-posts')
      .only(['title', 'slug', 'date'])
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
  head() {
    return {
      title: `${this.pageTitle} - ${this.headTitleBase}`,
    }
  },
  computed: {
    pageTitle() {
      return this.post.title
    },
  },
  mounted() {
    console.log(this.post)
  },
}
</script>

<style lang="postcss" scoped>
.blog-detail__hero {
  @apply block object-cover w-full h-64;
}
</style>
