<template>
  <article class="contact">
    <h1 class="animate-in">Contact</h1>
  </article>
</template>

<script>
export default {
  name: 'ContactPage',
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
