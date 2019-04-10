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
      title: 'Enable fast load',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Learn how to enable the fast load option in Delm.`
        }
      ]
    }
  }
}
</script>
