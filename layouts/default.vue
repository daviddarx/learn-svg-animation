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
  --website-padding: 10vw;
  --border-padding-ratio: calc(var(--website-padding) * 0.5);

  @screen lg {
    --website-padding: 5vw;
  }

  @apply flex flex-col min-h-screen;

  &::before,
  &::after {
    @apply fixed block box-border z-50;
    @apply pointer-events-none;
    content: '';
  }

  &::before {
    @apply top-0 left-0 w-full h-screen;
    @apply border-gray-100;

    border-width: var(--border-padding-ratio);
  }

  &::after {
    top: var(--border-padding-ratio);
    bottom: var(--border-padding-ratio);
    left: var(--border-padding-ratio);
    right: var(--border-padding-ratio);

    outline: 1px solid theme('colors.primary.900');
  }
}

.header,
.content,
.footer {
  @apply p-[var(--website-padding)];
}

.header {
  @apply pb-[var(--border-padding-ratio)];
}

.content {
  @apply flex-grow pt-0;
}

::v-deep .nav {
  @apply mt-[var(--border-padding-ratio)];
}
</style>
