<template>
  <article class="animation">
    <AppBreadcrumb :title="pageTitle" class="animate-in" />
    <div class="col-left">
      <h1 class="animate-in animate-in--s1">Animation</h1>
    </div>
    <div class="col-right animate-in animate-in--s2">
      <AnimationGsapBasics />
      <AnimationSvgBasics />
    </div>
  </article>
</template>

<script>
export default {
  name: 'AnimationPage',
  async asyncData({ $content }) {
    const page = await $content('contact/contact').fetch()

    return {
      page,
    }
  },
  data() {
    return {
      pageTitle: 'Animation',
    }
  },
  head() {
    return {
      title: `${this.pageTitle} - ${this.headTitleBase}`,
    }
  },
}
</script>

<style lang="postcss" scoped>
::v-deep h2 {
  @apply pt-20;
}
::v-deep .container {
  @apply bg-white;
  @apply mt-4 mb-8 p-12;
}

::v-deep .slider {
  @apply h-px bg-black outline-none;

  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    @apply w-5 h-5 bg-black rounded-full cursor-pointer;

    -webkit-appearance: none;
    appearance: none;
  }

  &::-moz-range-thumb {
    @apply w-5 h-5 bg-black rounded-full shadow-none outline-none;
  }
}
</style>
