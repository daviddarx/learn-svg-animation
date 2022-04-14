<template>
  <div class="website">
    <div class="header">
      <AppLogo />
      <AppNav />
    </div>

    <Nuxt class="content" />
    <AppFooter class="footer" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style lang="postcss" scoped>
.website {
  @apply flex flex-col min-h-screen;
}

.header,
.content,
.footer {
  @apply p-5vw;

  @screen desktop {
    @apply p-10vw;
  }
}

.content {
  @apply flex-grow pt-0;
}
</style>
