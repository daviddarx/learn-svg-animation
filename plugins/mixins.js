import Vue from 'vue'
import { mapState } from 'vuex'
import { marked } from 'marked'

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
    getHTMLfromMD(markdownString) {
      return marked(markdownString)
    },
  },
}

Vue.mixin(mixins)
