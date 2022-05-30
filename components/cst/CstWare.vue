<template>
  <g ref="ware" class="ware">
    <rect width="14" height="6" fill="#000000" class="bg" rx="3" />
  </g>
</template>

<script>
export default {
  name: 'CstWare',
  data() {
    return {
      offsetX: 0,
      offsetY: 0,
    }
  },
  mounted() {
    this.offsetX =
      parseFloat(this.$refs.ware.querySelector('rect').getAttribute('width')) *
      -0.5
    this.offsetY =
      parseFloat(this.$refs.ware.querySelector('rect').getAttribute('height')) *
      -0.5
  },
}
</script>

<style lang="postcss" scoped></style>
