<template>
  <div class="gsap-basics">
    <h2>SVG basics</h2>
    <br />
    <div class="container">
      <svg
        id="test1"
        version="1.1"
        viewBox="0 0 130 140"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        @click="play"
      >
        <circle ref="bg" cx="64" cy="64" fill="#000000" r="62" />
        <g>
          <g ref="heart">
            <path
              d="M94.7,17.3c-6.9,0-13,3-17.2,7.8c-4.2-4.8-10.4-7.8-17.2-7.8c-12.7,0-23,10.3-23,23   c0,7.2,3.3,13.6,8.5,17.8l0,0l31.8,25.1l31.2-24.6l0,0c5.5-4.2,9.1-10.8,9.1-18.3C117.7,27.6,107.4,17.3,94.7,17.3z"
              fill="#ADADAD"
            />
            <path
              d="M54.6,58.2c-4.7-5.2-8.5-10.6-8.5-17.8c0-11.2,8-20.5,18.5-22.6c-1.4-0.3-2.9-0.4-4.5-0.4   c-12.7,0-23,10.3-23,23c0,7.2,3.3,13.6,8.5,17.8l0,0l31.8,25.1L54.6,58.2L54.6,58.2z"
              fill="#FDFDFE"
            />
            <path
              ref="heartline"
              d="   M94.7,23.6c9.2,0,16.7,7.5,16.7,16.7"
              fill="none"
              stroke="#FFFFFF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="5"
            />
            />
            <path
              d="M94.7,16c-6.5,0-12.7,2.6-17.2,7.2C72.9,18.6,66.6,16,60.2,16c-13.4,0-24.3,10.9-24.3,24.3   c0,7.3,3.2,14.1,8.9,18.8c0,0,0.1,0.1,0.1,0.1l31.8,25.1c0.2,0.2,0.5,0.3,0.8,0.3s0.6-0.1,0.8-0.3l31.2-24.6c0.1,0,0.1-0.1,0.2-0.2   c6-4.7,9.4-11.6,9.4-19.2C119,26.9,108.1,16,94.7,16z M107.8,57.6c-0.1,0.1-0.1,0.1-0.2,0.2L77.4,81.6L46.6,57.2c0,0-0.1,0-0.1-0.1   c-5.1-4.1-8-10.3-8-16.8c0-11.9,9.7-21.7,21.7-21.7c6.2,0,12.1,2.7,16.2,7.4c0.5,0.6,1.5,0.6,2,0c4.1-4.7,10-7.4,16.2-7.4   c11.9,0,21.7,9.7,21.7,21.7C116.3,47.1,113.2,53.4,107.8,57.6z"
              fill="#000000"
            />
          </g>

          <g ref="hand">
            <path
              d="M110.3,96.7L88,104.4l0,0c0.7-1.1,1.1-2.4,1-3.8c-0.3-3.1-3-5.4-6.1-5.4h-16c-6.2-9-22.9-9-22.9-9H30.4   v27.2l31.6,10c0,0,9.5,2.8,16.4,0c5.8-2.4,29.2-14.9,36.6-18.8c1.4-0.8,3.4-3,2.3-5.5l0,0C116.5,96.9,114.7,95.4,110.3,96.7z"
              fill="#ADADAD"
            />
            <path
              d="M83,102.6H64.2c-2.5,0-4.5,2-4.5,4.5v0H83c3.3,0,5.9-2.7,5.9-5.9c0-0.4-0.1-2.8-0.1-3.2   C88.3,100.6,85.9,102.6,83,102.6z"
              fill="#FDFDFE"
            />
            <path
              d="M35.8,114.4V86.2h-5.4v27.2l5.3,1.7C35.8,114.9,35.8,114.6,35.8,114.4z"
              fill="#FDFDFE"
            />
            <path
              d="M30.4,114.4V85.5c0-1.9-1.6-3.5-3.5-3.5H11.2c-0.4,0-0.7,0.1-0.9,0.2c0,0.2,0,0.3,0,0.5   c0,12.9,3.7,25,10.2,35.2H27C28.9,117.9,30.4,116.3,30.4,114.4z"
              fill="#5C5C5C"
            />

            <path
              d="M20.5,119.2H27c2.4,0,4.3-1.7,4.7-4l30,9.5c0.2,0.1,4.5,1.3,9.5,1.3h0c3,0,5.6-0.5,7.8-1.4   c5.9-2.4,29.6-15.1,36.7-18.9c1.9-1,4.3-3.9,2.9-7.2c-1-2.4-2.8-3.6-5.4-3.6c-1,0-2.1,0.2-3.4,0.5l-19.6,6.8c0-0.1,0-0.1,0-0.2   c0-0.1,0-0.3,0-0.4c0-0.1,0-0.2,0-0.4c0,0,0-0.1,0-0.1c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1   c0-0.2-0.1-0.4-0.1-0.6c0,0,0,0,0-0.1c0,0,0,0,0-0.1c-0.7-3.2-3.8-5.7-7.3-5.7H67.5c-6.8-8.9-22.9-9-23.6-9H31.8   c-0.3-2.4-2.3-4.3-4.8-4.3H11.2c-0.6,0-1.1,0.1-1.5,0.4C9.3,81.2,9,81.7,9,82.1l0,0.2c0,0.1,0,0.2,0,0.3c0,12.7,3.6,25.2,10.4,35.9   C19.6,119,20,119.2,20.5,119.2z M31.8,87.6h12.1c0.2,0,16.1,0.1,21.8,8.4c0.3,0.4,0.7,0.6,1.1,0.6h16c2.5,0,4.6,1.8,4.8,4.1   c0,0.1,0,0.1,0,0.2c0,0.1,0,0.3,0,0.4c0,0.2,0,0.4-0.1,0.6c0,0.1,0,0.2,0,0.3c0,0.2-0.1,0.4-0.2,0.6c0,0.1,0,0.1-0.1,0.2   c-0.7,1.6-2.3,2.8-4.2,2.8H59.8c-0.7,0-1.3,0.6-1.3,1.3s0.6,1.3,1.3,1.3H83c2.4,0,4.4-1.1,5.8-2.9l21.8-7.6c1-0.3,1.9-0.4,2.6-0.4   c1.5,0,2.3,0.6,2.9,2c0.7,1.8-0.8,3.4-1.7,3.8c-7.1,3.8-30.7,16.4-36.4,18.8c-1.9,0.8-4.2,1.2-6.8,1.2h0c-4.6,0-8.7-1.2-8.7-1.2   l-30.7-9.7V87.6z M27,83.3c1.2,0,2.1,1,2.1,2.1v0.8v27.2v1c0,1.2-1,2.1-2.1,2.1h-5.7c-6.1-10-9.4-21.5-9.6-33.2H27z"
              fill="#000000"
            />
          </g>
        </g>
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
  name: 'AnimationSVGBasics',
  data() {
    return {
      tl: undefined,
    }
  },
  mounted() {
    gsap.set(this.$refs.bg, {
      scale: 0,
      y: 50,
      transformOrigin: 'center',
    })
    gsap.set(this.$refs.heart, {
      scale: 0,
      rotation: 50,
      y: 75,
      transformOrigin: 'center',
    })
    gsap.set(this.$refs.hand, {
      rotation: 5,
      y: 0,
    })
    this.initTL()

    gsap.set(this.$refs.heartline, {
      drawSVG: '50% 50%',
    })
  },
  beforeDestroy() {
    this.timeline.kill()
  },
  methods: {
    bgTL() {
      const tl = gsap.timeline().addLabel('start').to(this.$refs.bg, {
        scale: 0.8,
        y: 5,
        duration: 0.45,
        delay: 0.1,
        ease: 'power4.out',
      })

      return tl
    },
    handTL() {
      const tl = gsap.timeline().to(this.$refs.hand, {
        rotation: -5,
        y: 5,
        duration: 1,
        ease: 'back.out(2)',
      })

      return tl
    },
    heartTL() {
      const tl = gsap
        .timeline()
        .to(this.$refs.heart, {
          scale: 1,
          rotation: 0,
          y: 5,
          duration: 1,
          ease: 'back.out(2)',
          transformOrigin: 'center',
        })
        .to(
          this.$refs.heartline,
          {
            drawSVG: '100%',
            duration: 1,
            ease: 'power4.inOut',
          },
          '>-=0.8'
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

      this.timeline
        .add(this.bgTL())
        .add(this.handTL(), '<')
        .add(this.heartTL(), '>-=1')

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
  @apply w-full md:w-1/2 lg:w-1/3 h-auto;
  @apply cursor-pointer;
}
.slider {
  @apply my-4;
}
</style>
