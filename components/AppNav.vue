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
  @apply relative z-40;
  @apply py-2;
  @apply border-t border-b border-gray-900;

  @screen sm {
    @apply py-0;
  }
}

.nav__el {
  @apply block;
  @apply font-bold leading-none;

  @screen sm {
    @apply inline-block;
  }
}

.nav__link {
  @apply inline-block;
  @apply py-2 mb-0;
  @apply no-underline uppercase tracking-wider;

  @screen sm {
    @apply py-6 pr-4;
  }

  &.nuxt-link-exact-active,
  &.nuxt-link-active {
    @apply text-secondary-600;
  }
}
</style>
