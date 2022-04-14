<template>
  <div class="logo">
    <h1>
      <nuxt-link to="/" class="logo__link">LOGO</nuxt-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'AppLogo',
}
</script>

<style lang="postcss" scoped>
.logo__link {
  @apply text-4xl no-underline;

  @screen tablet {
    @apply text-2xl;
  }
}
</style>
