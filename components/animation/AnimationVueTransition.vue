<template>
  <div class="gsap-pathes">
    <h2>Vue transition</h2>
    <br />
    <div class="container">
      <!-- components staying in place can react with dynamic classes -->
      <div class="content" :class="{ 'is-blurred': isShowing }">
        <button @click="toggleShow">
          <span v-if="isShowing">Hide modal</span>
          <span v-else>Show modal</span>
        </button>
      </div>

      <!-- transition component is good for elements that appears and disappear in the dom -->
      <transition name="fade">
        <div v-if="isShowing" class="modal">
          <h3>I am the modal</h3>
          <button @click="toggleShow">Close</button>
        </div>
      </transition>

      <!-- transition can also have external class attributed for the different states -->
      <transition enter-active-class="bounce" leave-active-class="bounce">
        <h3 v-if="isShowing" class="test-title">
          Title with enter-class attribution
        </h3>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimationVueTransition',
  data() {
    return {
      isShowing: false,
    }
  },
  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing
    },
  },
}
</script>

<style lang="postcss" scoped>
.container {
  @apply relative;
}

.modal {
  @apply absolute w-80 bg-gray-200 top-0 right-0 p-10 z-20;
}

.test-title {
  @apply absolute z-10;
}

.fade-enter-active {
  transition: opacity 0.25s ease-out,
    transform 0.4s theme('transitionTimingFunction.out-back');
}

.fade-leave-active {
  transition: opacity 0.4s ease-out,
    transform 0.5s theme('transitionTimingFunction.in-expo');
}

.fade-enter, /* .fade-enter-from, for vue3 */
.fade-leave-to {
  opacity: 0;
  transform: translateY(100%);
}

.content {
  transition: opacity 0.25s ease-out;

  &.is-blurred {
    @apply opacity-20;
  }
}

.bounce {
  animation: bouncein 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
}

@keyframes bouncein {
  1% {
  }
  20%,
  40%,
  60%,
  80%,
  95%,
  99%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  30% {
    transform: translate3d(-10px, 0, 0);
  }
  50% {
    transform: translate3d(4px, 0, 0);
  }
  70% {
    transform: translate3d(-7px, 0, 0);
  }
  90% {
    transform: translate3d(2px, 0, 0);
  }
  97% {
    transform: translate3d(-8px, 0, 0);
  }
}
</style>
