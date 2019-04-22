<template>
  <div v-html="content"></div>
</template>

<script>
import content from '@/docs/faq.md'

export default {
  layout: 'docs',
  data () {
    return {
      content: content
    }
  },
  head () {
    return {
      title: 'FAQ - Delm',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Delm frequently asked questions.`
        }
      ]
    }
  }
}
</script>
