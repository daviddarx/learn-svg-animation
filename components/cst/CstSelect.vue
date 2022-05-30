<template>
  <div class="select-group">
    <label :for="id">{{ label }}</label>
    <select :id="id" ref="select" :name="id" @change="onChange">
      <option
        v-for="option in options"
        :key="option.name"
        ref="options"
        :value="option.name"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CstSelect',
  props: {
    id: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      value: 0,
    }
  },
  watch: {
    options(newVal) {
      if (newVal.length) this.value = newVal[0].name
    },
  },
  mounted() {},
  methods: {
    onChange() {
      this.value = this.$refs.select.value
    },
  },
}
</script>

<style lang="postcss" scoped>
.select-group {
  @apply inline-block;
}
select {
  @apply block w-full p-4;
}
</style>
