<template>
  <div v-html="content"></div>
</template>

<script>
import content from '@/docs/what-is-delm.md'

export default {
  layout: 'docs',
  data () {
    return {
      content: content
    }
  },
  head () {
    return {
      title: 'What is Delm?',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Delm is a Shopify application that allows you to add estimated delivery dates like "Want it tomorrow? Order within 3 hrs and 42 min" to your product pages.`
        }
      ]
    }
  }
}
</script>
