<template>
  <div>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: '_slug',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
}
</script>
