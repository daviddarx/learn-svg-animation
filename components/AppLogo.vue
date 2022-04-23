<template>
  <div class="logo">
    <h2>
      <nuxt-link to="/" class="logo__link">Logo</nuxt-link>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'AppLogo',
}
</script>

<style lang="postcss" scoped>
.logo {
  @apply relative z-50;
}

.logo__link {
  @apply text-4xl no-underline;

  @screen tablet {
    @apply text-2xl;
  }
}
</style>
