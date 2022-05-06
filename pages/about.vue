<template>
  <article class="about">
    <AppBreadcrumb :title="pageTitle" class="animate-in" />
    <div class="col-left">
      <h1 class="animate-in animate-in--s1 page-title">{{ page.title }}</h1>
    </div>
    <section
      v-for="(content, index) of page.content"
      :key="'content' + index"
      :class="{ 'col-left': index % 2 != 0, 'col-right': index % 2 == 0 }"
    >
      <div class="animate-in md-content" :class="'animate-in--s' + (index + 2)">
        <h2 v-if="content.title">{{ content.title }}</h2>

        <div v-html="getHTMLfromMD(content.body)"></div>

        <dl v-if="content.definitionList">
          <template v-for="(list, listIndex) of content.definitionList">
            <dt :key="list.dlTitle + listIndex" v-html="list.dlTitle"></dt>
            <dd :key="list.dlBody + listIndex" v-html="list.dlBody"></dd>
          </template>
        </dl>
      </div>
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
}
</script>

<style lang="postcss" scoped></style>
