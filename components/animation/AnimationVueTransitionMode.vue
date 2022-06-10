<template>
  <div class="gsap-pathes">
    <h2>Vue transition mode out-in</h2>
    <br />
    <div class="container">
      <div class="tabs">
        <div class="tabs__header">
          <button
            class="tabs__btn"
            :class="{ active: tabID == 1 }"
            @click="displayTab(1)"
          >
            Tab 1</button
          ><!--           
          --><button
            class="tabs__btn"
            :class="{ active: tabID == 2 }"
            @click="displayTab(2)"
          >
            Tab 2
          </button>
        </div>
        <div class="tabs__content">
          <transition name="tab-fade" mode="out-in">
            <!-- keys are necessary to get the animation working -->
            <div v-if="tabID === 1" key="1" class="tabs__panel">
              <h3>First tab</h3>
            </div>
            <div v-else key="2" class="tabs__panel">
              <h3>Second tab</h3>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimationVueTransitionMode',
  data() {
    return {
      tabID: 1,
    }
  },
  methods: {
    displayTab(tabID) {
      this.tabID = tabID
    },
  },
}
</script>

<style lang="postcss" scoped>
.container {
}

.tabs__header {
  @apply border border-b border-black mb-10;
}

.tabs__btn {
  @apply inline-block px-4 py-2;

  transition: background-color 0.2s ease-out;

  &.active {
    @apply bg-black text-white;
  }
}

.tab-fade-enter-active {
  transition: opacity 0.25s ease-out,
    transform 0.4s theme('transitionTimingFunction.out-back');
}

.tab-fade-leave-active {
  transition: opacity 0.2s ease-out;
}

.tab-fade-enter, /* .tab-fade-enter-from, for vue3 */
.tab-fade-leave-to {
  opacity: 0;
}

.tab-fade-enter {
  transform: translateY(30px);
}
</style>
