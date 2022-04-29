<template>
  <article class="home">
    <div class="col-left">
      <h1 class="page-title animate-in">{{ page.title }}</h1>
    </div>
    <div class="col-right">
      <nuxt-content
        :document="page"
        class="animate-in animate-in--s1 md-content"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: 'HomePage',
  async asyncData({ $content }) {
    const page = await $content('home/home').fetch()

    return {
      page,
    }
  },
  data() {
    return {
      pageTitle: 'Home',
    }
  },
  head() {
    return {
      title: `${this.pageTitle} - ${this.headTitleBase}`,
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped></style>
