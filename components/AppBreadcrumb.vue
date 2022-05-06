<!-- prettier-ignore -->
<template>
  <ol class="breadcrumb">
    <li class="breadcrumb__list">
      <nuxt-link to="/" class="breadcrumb__link">Home</nuxt-link>
    </li><!--  
    --><li v-for="(crumb, index) in crumbs" :key="index" class="breadcrumb__list">
      <nuxt-link
        :to="crumb.path"
        :class="{
          'breadcrumb__link--disabled': $route.fullPath === crumb.path,
        }"
        class="breadcrumb__link"
        v-text="
          $route.fullPath === crumb.path && title !== null ? title : crumb.title
        "
      >
      </nuxt-link>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  computed: {
    crumbs() {
      const fullPath = this.$route.fullPath
      const params = fullPath.substring(1).split('/')
      const crumbs = []

      let path = ''

      params.forEach((param) => {
        path = `${path}/${param}`

        const match = this.$router.match(path)

        if (match.name !== null) {
          crumbs.push({
            title: param.replace(/-/g, ' '),
            ...match,
          })
        }
      })

      return crumbs
    },
  },
}
</script>

<style lang="postcss" scoped>
.breadcrumb {
  @apply text-xs mb-10;
}

.breadcrumb__list {
  @apply inline;

  &::after {
    content: ' / ';
  }

  &:last-child::after {
    content: '';
  }
}

.breadcrumb__link {
  @apply capitalize;
}

.breadcrumb__link--disabled {
  @apply no-underline pointer-events-none;
}
</style>
