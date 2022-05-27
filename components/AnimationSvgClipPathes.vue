<template>
  <div class="gsap-clip-pathes">
    <h2>SVG clip-pathes</h2>
    <br />
    Remind: only pathes can be morphed (!=shapes)
    <div class="container">
      <svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="play"
      >
        <clipPath id="mask" ref="mask">
          <circle
            id="circle"
            ref="circle"
            class="circle"
            cx="110"
            cy="110"
            r="76"
            fill="black"
          />
        </clipPath>

        <path
          id="blob"
          ref="blob"
          class="blob"
          d="M98.0046 9.23134C118.475 -1.89942 88.733 66.0637 112.005 67.2313C133.314 68.3005 129.279 2.47512 140.505 20.6192C146.621 30.5051 133.66 42.1352 141.881 50.3554C150.101 58.5756 165.804 41.6637 171.617 51.7313C177.429 61.799 148.384 65.0023 151.392 76.2314C154.401 87.4604 219.005 79.1062 219.005 90.7314C219.005 102.356 139.013 90.0023 136.005 101.231C132.996 112.46 206.817 133.664 201.005 143.731C195.192 153.799 159.613 142.011 151.392 150.231C143.172 158.452 136.96 137.919 126.892 143.731C116.825 149.544 134.621 175.723 123.392 178.731C112.163 181.74 109.63 212.731 98.0046 212.731C86.3795 212.731 93.1739 157.176 81.9449 154.167C70.7159 151.158 65.5723 173.656 55.5046 167.843C45.437 162.031 103.613 128.452 95.3924 120.231C87.1722 112.011 30.205 146.799 24.3925 136.731C18.5799 126.664 64.0134 114.46 61.0046 103.231C57.9958 92.0023 13.0046 105.856 13.0046 94.2313C13.0046 82.6062 35.0601 89.4006 38.0689 78.1716C41.0777 66.9426 -5.30798 58.299 0.504583 48.2314C6.31715 38.1637 54.7844 70.9516 63.0046 62.7314C71.2248 54.5111 45.437 26.4317 55.5046 20.6192C65.5723 14.8066 70.7159 37.3045 81.9449 34.2956C93.1739 31.2868 87.7917 14.7846 98.0046 9.23134Z"
          fill="black"
        />

        <g clip-path="url(#mask)">
          <path
            id="star"
            ref="star"
            class="start"
            d="M110 25L126.06 50.0643L152.5 36.3878L153.876 66.124L183.612 67.5L169.936 93.9403L195 110L169.936 126.06L183.612 152.5L153.876 153.876L152.5 183.612L126.06 169.936L110 195L93.9403 169.936L67.5 183.612L66.124 153.876L36.3878 152.5L50.0643 126.06L25 110L50.0643 93.9403L36.3878 67.5L66.124 66.124L67.5 36.3878L93.9403 50.0643L110 25Z"
            fill="black"
          />
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
import { MorphSVGPlugin } from 'gsap/dist/MorphSVGPlugin.js'

gsap.registerPlugin(MorphSVGPlugin)

export default {
  name: 'AnimationSvgClipPathes',
  data() {
    return {
      tl: undefined,
    }
  },
  mounted() {
    MorphSVGPlugin.convertToPath('#circle')

    this.initTL()
  },
  beforeDestroy() {
    this.timeline.kill()
  },
  methods: {
    linesTL() {
      const tl = gsap
        .timeline()
        .addLabel('start')
        .to('#circle', {
          // id because the circle is recreated by the .convertToPath
          morphSVG: '#blob',
          duration: 2,
          delay: 1,
          ease: 'elastic.out(1, 0.3)',
        })
        .to(
          this.$refs.star,
          {
            rotation: 180,
            duration: 2,
            delay: 0.75,
            transformOrigin: 'center',
            ease: 'power4.inOut',
          },
          'start'
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
.blob {
  @apply hidden;
}
</style>
