<template>
  <div class="select-group">
    <label :for="id">{{ label }}</label>
    <select :id="id" ref="select" :name="id" @change="onChange">
      <option
        v-for="option in options"
        :key="option.name"
        ref="options"
        :value="option.name"
        :selected="option.name === defaultValue"
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
    defaultValue: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      value: 0,
    }
  },
  mounted() {
    this.value = this.$refs.select.value
    if (this.defaultValue) this.value = this.defaultValue
  },
  methods: {
    onChange() {
      this.value = this.$refs.select.value
    },
  },
}
</script>

<style lang="postcss" scoped>
.select-group {
  @apply block;
}
select {
  @apply block w-full p-4;
}
</style>
