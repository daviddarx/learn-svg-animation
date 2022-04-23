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
  @apply relative inline-block z-50;
  @apply py-2 px-3;
  @apply bg-gray-900;
}

.logo__link {
  @apply text-gray-100 text-4xl no-underline;

  @screen tablet {
    @apply text-2xl;
  }
}
</style>
