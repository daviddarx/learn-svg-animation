<template>
  <article class="about">
    <h1 class="animate-in">{{ page.title }}</h1>
    <section
      v-for="(content, index) of page.content"
      :key="'content' + index"
      class="animate-in"
      :class="'animate-in--s' + (index + 1)"
    >
      <h2 v-if="content.title">{{ content.title }}</h2>

      <p v-html="getHTMLfromMD(content.body)"></p>

      <dl v-if="content.definitionList">
        <template v-for="list of content.definitionList">
          <dt :key="list.dlTitle" v-html="list.dlTitle"></dt>
          <dd :key="list.dlBody" v-html="list.dlBody"></dd>
        </template>
      </dl>
    </section>
  </article>
</template>

<script>
export default {
  name: 'AboutPage',
  async asyncData({ $content }) {
    const page = await $content('about/about').fetch()

    return {
      page,
    }
  },
  data() {
    return {
      pageTitle: 'About',
    }
  },
  head() {
    return {
      title: `${this.pageTitle} - ${this.headTitleBase}`,
    }
  },
  mounted() {
    console.log(this.page.content)
  },
}
</script>

<style lang="postcss" scoped></style>
