import Vue from 'vue'

const mixins = {
  mounted() {},
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}

Vue.mixin(mixins)
