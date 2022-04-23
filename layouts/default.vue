<template>
  <div class="website">
    <BrowserWarning />
    <header class="header">
      <AppLogo />
      <AppNav />
    </header>
    <main class="content">
      <Nuxt />
    </main>
    <AppFooter class="footer" />
    <PageTransition />
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
