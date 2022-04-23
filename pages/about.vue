<template>
  <article class="about">
    <h1 class="animate-in">About</h1>
  </article>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      pageTitle: 'About',
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
