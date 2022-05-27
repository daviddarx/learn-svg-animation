<template>
  <div class="gsap-basics">
    <h2>GSAP basics</h2>
    <br />
    .set() .to()
    <div class="container">
      <div class="test clickable" @click="testTo"></div>
    </div>
    .fromTo()
    <div class="container">
      <div class="test clickable" @click="testFromTo"></div>
    </div>
    <a href="https://greensock.com/docs/v3/Staggers" target="_blank"
      >simultaneous staggers</a
    >
    <div class="container stagger">
      <div class="test clickable" @click="testStaggers"></div>
      <div class="test clickable" @click="testStaggers"></div>
      <div class="test clickable" @click="testStaggers"></div>
      <div class="test clickable" @click="testStaggers"></div>
      <div class="test clickable" @click="testStaggers"></div>
      <br />
      <div class="test clickable" @click="testStaggers"></div>
      <div class="test clickable" @click="testStaggers"></div>
      <div class="test clickable" @click="testStaggers"></div>
      <div class="test clickable" @click="testStaggers"></div>
      <div class="test clickable" @click="testStaggers"></div>
      <br />
      <div class="test clickable" @click="testStaggers"></div>
      <div class="test clickable" @click="testStaggers"></div>
      <div class="test clickable" @click="testStaggers"></div>
      <div class="test clickable" @click="testStaggers"></div>
      <div class="test clickable" @click="testStaggers"></div>
    </div>
    <a href="https://greensock.com/docs/v3/GSAP/Timeline" target="_blank"
      >nested timelines</a
    >
    <div class="container timeline">
      <div class="test test1 clickable" @click="testTimeline"></div>
      <div class="test test2 clickable" @click="testTimeline"></div>
      <div class="flex justify-end space-x-2">
        <div class="test test3 clickable" @click="testTimeline"></div>
        <div class="test test4 clickable" @click="testTimeline"></div>
      </div>
      <br /><br />
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

export default {
  name: 'AnimationGsapBasics',
  data() {
    return {
      timeline: undefined,
    }
  },
  mounted() {
    this.initTimeLine()
  },
  beforeDestroy() {
    this.timeline.kill()
  },
  methods: {
    testTo(el) {
      gsap.killTweensOf(el.target)
      gsap.set(el.target, {
        x: 0,
        scale: 1,
        opacity: 1,
      })
      gsap.to(el.target, {
        x: 100,
        scale: 2,
        opacity: 0.5,
        duration: 1,
        ease: 'elastic.out(1, 0.25)',
      })
    },
    testFromTo(el) {
      gsap.fromTo(
        el.target,
        {
          x: 0,
          scaleX: 1,
          opacity: 1,
        },
        {
          x: 100,
          scaleX: 2,
          opacity: 0.5,
          duration: 2,
          ease: 'elastic.out(1, 0.25)',
        }
      )
    },
    testStaggers() {
      gsap.killTweensOf('.stagger .test')
      gsap.set('.stagger .test', {
        scale: 1,
        rotation: 0,
        backgroundColor: '#000000',
      })
      gsap.fromTo(
        '.stagger .test',
        {
          scale: 1,
          rotation: 0,
        },
        {
          scale: 0.5,
          rotation: 'random(0,360)',
          duration: 1,
          ease: 'elastic.out(1, 0.25)',
          stagger: { grid: [3, 5], from: 'center', amount: 0.25, axis: 'x' },
        }
      )
      gsap.fromTo(
        '.stagger .test',
        {
          backgroundColor: '#000000',
        },
        {
          duration: 2,
          delay: 0.5,
          backgroundColor: '#ff00ff',
          ease: 'elastic.out(1, 0.25)',
          stagger: { grid: [3, 5], from: 'center', amount: 0.25, axis: 'x' },
        }
      )
    },
    firstTimeline() {
      const tl = gsap
        .timeline()
        .to('.timeline .test1', {
          scale: 0.5,
          rotation: 90,
          duration: 1,
          delay: 0.2,
          ease: 'elastic.out(1, 0.25)',
        })
        .addLabel('TL1Anime1Finished')
        .to(
          '.timeline .test2',
          {
            scale: 2,
            rotation: 180,
            duration: 1,
            ease: 'elastic.out(1, 0.25)',
          },
          '>-=0.75'
        )

      return tl
    },
    secondTimeline() {
      const tl = gsap
        .timeline()
        .to('.timeline .test3', {
          x: -200,
          rotation: -90,
          duration: 1,
          ease: 'elastic.out(1, 0.25)',
        })
        .addLabel('TL2Anime1Finished')
        .to(
          '.timeline .test4',
          {
            x: -100,
            y: Math.PI * 2,
            modifiers: {
              y: (y) => {
                return Math.sin(parseFloat(y)) * 90 + 'px'
              },
            },
            scale: 2,
            rotation: -90,
            duration: 1,
            ease: 'power4.out',
          },
          '>-=0.75'
        )

      return tl
    },
    initTimeLine() {
      this.timeline = gsap
        .timeline({
          yoyo: true,
          repeat: 1,
          repeatDelay: 0.5,
          paused: true,
        })
        .eventCallback('onUpdate', this.updateTimelineRange)

      this.timeline
        .add(this.firstTimeline())
        .add(this.secondTimeline(), '>-=0.5')
    },
    testTimeline() {
      this.timeline.pause(0).play()
      // to debug an animation, play it to the label where you want to adjust to not have to watch the full timeline eachtime
      // this.timeline.seek('TL2Anime1Finished').play()
    },
    rangeTimeline() {
      this.timeline
        .pause()
        .seek((this.timeline.duration() * this.$refs.timelineRange.value) / 100)
    },
    updateTimelineRange() {
      this.$refs.timelineRange.value = this.timeline.progress() * 100
    },
  },
}
</script>

<style lang="postcss" scoped>
.test {
  @apply inline-block;
  @apply w-16 h-16;
  @apply bg-black;
}
.clickable {
  cursor: pointer;
}
</style>
