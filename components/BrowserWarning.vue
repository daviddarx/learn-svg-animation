<template>
  <div v-if="isDisplayed" class="browser-warning">
    <h2 class="browser-warning__title">
      Really?! 😳 <br />
      Please use a modern browser to access this website... 😇 <br />
    </h2>

    <p class="browser-warning__desc">
      Download for example
      <a href="https://brave.com/" target="_blank"> Brave</a>,
      <a href="https://www.google.com/chrome/" target="_blank">Google Chrome</a>
      or
      <a href="https://www.mozilla.org/firefox/" target="_blank"
        >Mozilla Firefox</a
      >
      and visit this website again to view it's content.
    </p>
  </div>
</template>

<script>
import browser from 'browser-detect'

export default {
  name: 'BrowserWarning',
  data() {
    return {
      isDisplayed: false,
      browserInfo: {},
    }
  },
  mounted() {
    this.browserInfo = browser()

    this.$store.commit('setBrowserInfo', this.browserInfo)

    this.markDOM()
    this.displayWarning()
  },
  methods: {
    markDOM() {
      document.body.classList.add(this.browserInfo.name)

      if (
        this.browserInfo.os === 'Windows 10' ||
        this.browserInfo.os === 'Windows 11'
      ) {
        document.body.classList.add('windows')
      }
    },
    displayWarning() {
      if (this.browserInfo.name === 'ie') {
        this.isWarningDisplayed = true
      }
      if (
        (this.browserInfo.name === 'edge') &
        (this.browserInfo.versionNumber < 19)
      ) {
        this.isWarningDisplayed = true
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.browser-warning {
  @apply w-full box-border p-8 bg-gray-300;
}
</style>
