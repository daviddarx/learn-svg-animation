<template>
  <div class="gsap-pathes">
    <h2>Vue mouse move</h2>
    <br />
    <div
      class="container"
      :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
      @mousemove="xCoordinate"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'AnimationSVGPathes',
  data() {
    return {
      x: 0,
    }
  },
  methods: {
    xCoordinate(e) {
      this.x = e.clientX
    },
  },
}
</script>

<style lang="postcss" scoped>
.container {
  @apply h-20;

  /* transition: 0.2s background-color ease; */
}
</style>
