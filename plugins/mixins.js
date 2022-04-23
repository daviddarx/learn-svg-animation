import Vue from 'vue'
import { mapState } from 'vuex'

const mixins = {
  computed: {
    ...mapState(['headTitleBase']),
  },
  mounted() {},
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}

Vue.mixin(mixins)
