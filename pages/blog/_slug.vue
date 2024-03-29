<template>
  <article class="blog-detail">
    <AppBreadcrumb :title="pageTitle" class="animate-in" />
    <div class="col-right">
      <nuxt-img
        v-if="post.image"
        :src="post.image"
        sizes="xxl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
        format="jpg"
        quality="80"
        class="blog-detail__hero animate-in animate-in--s1"
      />
    </div>
    <div class="col-left">
      <h1 class="animate-in animate-in--s2">{{ post.title }}</h1>
    </div>

    <div class="col-left">
      <div class="animate-in animate-in--s3">
        <p class="blog-detail__date">{{ formatDate(post.date) }}</p>
        <p>{{ post.description }}</p>
      </div>
    </div>

    <div class="col-right">
      <nuxt-content :document="post" class="animate-in animate-in--s3" />
    </div>

    <div
      v-if="post.images"
      class="blog-detail__images animate-in animate-in--s4 grid-four"
    >
      <nuxt-img
        v-for="(img, index) in post.images"
        :key="img.image + index"
        :src="img.image"
        sizes="xxl:25vw xl:50vw lg:100vw sm:100vw xs:100vw"
        format="jpg"
        quality="80"
      />
    </div>

    <BlogPagination
      :prev="prev"
      :next="next"
      class="animate-in animate-in--s5"
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
}
</script>

<style lang="postcss" scoped>
.blog-detail__hero {
  @apply block object-cover w-full h-64;
}

.blog-detail__date {
  @apply font-bold;
}
</style>
