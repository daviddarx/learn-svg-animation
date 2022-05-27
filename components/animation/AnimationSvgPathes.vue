<template>
  <div class="gsap-pathes">
    <h2>SVG pathes</h2>
    <br />
    <div class="container">
      <svg
        width="171"
        height="146"
        viewBox="0 0 171 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="play"
      >
        <path
          ref="line"
          d="M42 14C27.5 42 2.50003 111 32 62C61.5 13 99.5 -18.5 64.5 32.5C29.5 83.5 -16.5 187 32 120.5C80.5 54 131 -7.5 86.5 62C42 131.5 102 56 121.5 39C141 22 138 54.5 115 88.5C92 122.5 108.5 156.5 131 136.5"
          stroke="black"
        />
        <circle ref="circle" cx="41" cy="13" r="7" fill="black" />
        <rect ref="rectangle" width="2" height="30" fill="black" />
      </svg>

      <input
        ref="timelineRange"
        class="slider"
        type="range"
        min="1"
        max="100"
        value="0"
        @input="rangeTimeline"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin.js'
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin.js'

gsap.registerPlugin(DrawSVGPlugin)
gsap.registerPlugin(MotionPathPlugin)

export default {
  name: 'AnimationSVGPathes',
  data() {
    return {
      tl: undefined,
    }
  },
  mounted() {
    gsap.set(this.$refs.line, {
      drawSVG: '0%',
    })
    gsap.set(this.$refs.circle, {
      scale: 0.3,
    })
    this.initTL()
  },
  beforeDestroy() {
    this.timeline.kill()
  },
  methods: {
    linesTL() {
      const tl = gsap
        .timeline()
        .to(this.$refs.line, {
          drawSVG: '100%',
          duration: 2,
          ease: 'power4.inOut',
        })
        .to(
          this.$refs.circle,
          {
            motionPath: {
              path: this.$refs.line,
              align: this.$refs.line,
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
              start: 0,
              end: 0.9,
            },
            scale: 2,
            duration: 2,
            ease: 'power4.inOut',
          },
          '<+=0.5'
        )
        .to(
          this.$refs.rectangle,
          {
            motionPath: {
              path: [
                { x: 100, y: 40 },
                { x: 100, y: 50 },
                { x: 50, y: 100 },
                { x: 140, y: 80 },
              ],
              curviness: 2,
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
            },
            transformOrigin: 'center',
            duration: 2,
            ease: 'power4.inOut',
          },
          '<+=0.5'
        )
      return tl
    },
    initTL() {
      this.timeline = gsap
        .timeline({
          repeat: -1,
          yoyo: true,
        })
        .eventCallback('onUpdate', this.updateTimelineRange)

      this.timeline.add(this.linesTL())

      // debugging
      // this.timeline.timeScale(0.5)
    },
    rangeTimeline() {
      this.timeline
        .pause()
        .seek((this.timeline.duration() * this.$refs.timelineRange.value) / 100)
    },
    updateTimelineRange() {
      this.$refs.timelineRange.value = this.timeline.progress() * 100
    },
    play() {
      if (this.timeline.isActive()) {
        this.timeline.pause()
      } else {
        this.timeline.play()
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.container {
  @apply flex flex-col items-center justify-center;
}
svg {
  @apply w-full md:w-1/2 h-auto;
  @apply cursor-pointer;
}
.slider {
  @apply mb-4 mt-8;
}
</style>
