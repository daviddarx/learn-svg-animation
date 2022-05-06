<template>
  <div class="logo">
    <h2 class="logo__text">
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
  @apply relative inline-block z-40;
  @apply py-2 px-3;
  @apply bg-gray-900;
}

.logo__text {
  @apply text-gray-100 text-2xl leading-none no-underline;

  @screen lg {
    @apply text-4xl;
  }
}

.logo__link {
  @apply no-underline;
}
</style>
