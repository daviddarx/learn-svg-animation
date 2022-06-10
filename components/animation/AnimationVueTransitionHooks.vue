<template>
  <div class="gsap-pathes">
    <h2>Vue transition hooks</h2>
    <br />
    <div class="container">
      <button @click="show = !show">Toggle</button>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false"
      >
        <p v-if="show" class="inline-block">Demo</p>
      </transition>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'AnimationVueTransitionHooks',
  data() {
    return {
      show: false,
    }
  },
  methods: {
    // --------
    // ENTERING
    // --------

    beforeEnter(el) {
      console.log('before enter', el)
    },
    // the done callback is optional when
    // used in combination with CSS
    enter(el, done) {
      console.log('enter', el)

      gsap.timeline({ onComplete: done }).from(el, {
        x: 'random(-100, 100)',
        y: 'random(-100, -100)',
        rotation: 'random(-360, 360)',
        scaleX: 2,
        duration: 1,
        transformOrigin: '50% 50%',
        ease: 'elastic.out(1, 0.25)',
      })
    },
    afterEnter(el) {
      console.log('after enter', el)
    },
    enterCancelled(el) {
      console.log('enter canceled', el)
    },

    // --------
    // LEAVING
    // --------

    beforeLeave(el) {
      console.log('before leave', el)
    },
    // the done callback is optional when
    // used in combination with CSS
    leave(el, done) {
      gsap.timeline({ onComplete: done }).to(el, {
        x: 'random(-100, 100)',
        y: 'random(-100, -100)',
        rotation: 'random(-360, 360)',
        scaleX: 2,
        duration: 1,
        opacity: 0,
        transformOrigin: '50% 50%',
        ease: 'elastic.out(1, 0.25)',
      })
    },
    afterLeave(el) {
      console.log('after leave', el)
    },
    // leaveCancelled only available with v-show
    leaveCancelled(el) {
      console.log('leave canceled', el)
    },
  },
}
</script>

<style lang="postcss" scoped>
.container {
}
</style>
