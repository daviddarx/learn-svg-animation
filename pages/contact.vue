<template>
  <article class="contact">
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
  </article>
</template>

<script>
export default {
  name: 'ContactPage',
  async asyncData({ $content }) {
    const page = await $content('contact/contact').fetch()

    return {
      page,
    }
  },
  data() {
    return {
      pageTitle: 'Contact',
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
