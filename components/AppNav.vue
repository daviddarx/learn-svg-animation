<template>
  <nav class="nav">
    <h3 class="hidden">Main navigation</h3>
    <ul class="nav__list">
      <li class="nav__el">
        <nuxt-link to="/about" class="nav__link">About</nuxt-link>
      </li>
      <li class="nav__el">
        <nuxt-link to="/blog" class="nav__link">Blog</nuxt-link>
      </li>
      <li class="nav__el">
        <nuxt-link to="/contact" class="nav__link">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
}
</script>

<style lang="postcss" scoped>
.nav {
  @apply mt-16;
  @apply border-t border-b border-gray-900;

  @screen tablet {
    @apply py-2 mt-8;
  }
}

.nav__el {
  @apply inline-block;
  @apply font-bold leading-none;

  @screen mobile {
    @apply block;
  }
}

.nav__link {
  @apply inline-block;
  @apply py-4 pr-4;
  @apply no-underline uppercase tracking-wider;

  @screen mobile {
    @apply py-2 mb-0;
  }

  &.nuxt-link-exact-active,
  &.nuxt-link-active {
    @apply text-secondary-600;
  }
}
</style>
