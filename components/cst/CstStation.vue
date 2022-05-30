<template>
  <g>
    <circle
      cx="14"
      cy="14"
      r="13"
      fill="#48B8A8"
      stroke="#fff"
      stroke-width="2"
      class="bg"
    />

    <text
      fill="white"
      xml:space="preserve"
      style="white-space: pre"
      font-size="16"
      font-weight="bold"
      letter-spacing="0em"
      ><tspan x="9" y="19.3182">{{ name }}</tspan></text
    >
  </g>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'CstStation',
  props: {
    name: {
      type: String,
      default: 'B',
    },
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
    r: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    radius() {
      return (
        parseFloat(this.$el.querySelector('.bg').getAttribute('r')) +
        parseFloat(this.$el.querySelector('.bg').getAttribute('stroke-width')) *
          0.5
      )
    },
  },
  mounted() {
    this.position()
  },
  methods: {
    position() {
      gsap.set(this.$el, {
        x: this.x - this.radius,
        y: this.y - this.radius,
        transformOrigin: 'center',
      })
    },
  },
}
</script>

<style lang="postcss" scoped></style>
