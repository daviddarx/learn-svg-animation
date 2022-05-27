<template>
  <div class="gsap-split-text">
    <h2>GSAP Split Text & HSL</h2>
    <br />
    <div class="container">
      <h3 ref="text" @click="play">
        Se faire du souci, c'est un gaspillage de créativité.
      </h3>
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
import { SplitText } from 'gsap/dist/SplitText.js'

gsap.registerPlugin(SplitText)

export default {
  name: 'AnimationSplitText',
  data() {
    return {
      tl: undefined,
      chars: undefined,
    }
  },
  mounted() {
    const splitText = new SplitText(this.$refs.text, { type: 'words,chars' })
    this.chars = splitText.chars

    gsap.set(this.$refs.text, { perspective: 400 })

    gsap.set(this.chars, {
      scale: 0,
      y: 10,
      rotationX: 'random(180, 360)',
      color: 'hsl(random(111, 360), 100%, 50%) ',
    })

    this.initTL()
  },
  beforeDestroy() {
    this.timeline.kill()
  },
  methods: {
    textTL() {
      const tl = gsap
        .timeline()
        .to(this.chars, {
          duration: 1.5,
          scale: 1,
          y: 0,
          rotationX: 0,
          transformOrigin: '0% 50% -50',
          ease: 'power4.inOut',
          stagger: 0.01,
        })
        .to(
          this.chars,
          {
            duration: 2,
            color: 'hsl(111, 100%, 0%)',
          },
          '>-=1'
        )

      return tl
    },
    initTL() {
      this.timeline = gsap
        .timeline({
          repeat: -1,
          repeatDelay: 1,
          yoyo: true,
        })
        .eventCallback('onUpdate', this.updateTimelineRange)

      this.timeline.add(this.textTL())

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
}
svg {
  @apply w-full md:w-1/2 h-auto;
  @apply cursor-pointer;
}
.slider {
  @apply mb-4 mt-8;
}

h3 {
  @apply cursor-pointer;
  & * {
    @apply pointer-events-none;
  }
}
</style>
