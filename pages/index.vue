<template>
  <article class="home">
    <h1>Home</h1>
  </article>
</template>

<script>
export default {
  name: 'HomePage',
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped></style>
