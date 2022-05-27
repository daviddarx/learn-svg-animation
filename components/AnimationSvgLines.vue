<template>
  <div class="gsap-lines">
    <h2>SVG lines</h2>
    <br />
    <div class="container">
      <svg
        width="171"
        height="146"
        viewBox="0 0 171 146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="svg-line"
          d="M23 15.5C56.5 39.5 44 57 67 39C90 21 108 4 105.5 49.5C103 95 89 150.5 121.5 112C154 73.5 179 7.5 126.5 52.5C74 97.5 45.5 181 60.5 110C75.5 39 75.5 36.5 52.5 66.5"
          stroke="black"
        />
        <path
          class="svg-line"
          d="M42 14C27.5 42 2.50003 111 32 62C61.5 13 99.5 -18.5 64.5 32.5C29.5 83.5 -16.5 187 32 120.5C80.5 54 131 -7.5 86.5 62C42 131.5 102 56 121.5 39C141 22 138 54.5 115 88.5C92 122.5 108.5 156.5 131 136.5"
          stroke="black"
        />
        <path
          class="svg-line"
          d="M144.5 33C119 10.5 78.5 -11 111.5 27C144.5 65 181.5 174 155.5 131C129.5 88 55.5 -24.5 83.5 37.5"
          stroke="black"
        />
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
gsap.registerPlugin(DrawSVGPlugin)

export default {
  name: 'AnimationSVGLines',
  data() {
    return {
      tl: undefined,
    }
  },
  mounted() {
    this.initTL()
  },
  beforeDestroy() {
    this.timeline.kill()
  },
  methods: {
    linesTL() {
      const tl = gsap.timeline().to('.svg-line', {
        drawSVG: '50% 50%',
        duration: 'random(0.5,3)',
        ease: 'power4.inOut',
        stagger: { amount: 1 },
      })

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
