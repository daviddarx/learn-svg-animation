<template>
  <article class="contact">
    <h1 class="animate-in">{{ page.title }}</h1>
    <nuxt-content :document="page" class="animate-in animate-in--s1" />
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
