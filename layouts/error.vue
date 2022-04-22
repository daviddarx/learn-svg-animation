<template>
  <div>
    <h1>{{ pageTitle }}</h1>

    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    pageTitle() {
      let title = 'A problem occured'

      if (this.error.statusCode === 404) {
        title = 'Page not found'
      } else if (this.error.message) {
        title = this.error.message
      }

      return title
    },
  },
}
</script>
