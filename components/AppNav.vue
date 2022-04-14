<template>
  <nav class="navigation">
    <ul>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/items">Items</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/contact">Contact</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNav',
}
</script>

<style lang="scss" scoped></style>
