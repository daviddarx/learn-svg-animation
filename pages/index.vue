<template>
  <div class="home">HOME</div>
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

<style lang="scss" scoped></style>
