<template>
  <div class="website">
    <AppLogo />
    <AppNav />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppLogo,
    AppNav,
    AppFooter,
  },
}
</script>

<style lang="scss" scoped></style>
