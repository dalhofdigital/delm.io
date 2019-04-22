<template>
  <div v-html="content"></div>
</template>

<script>
import content from '@/docs/getting-started.md'

export default {
  layout: 'docs',
  data () {
    return {
      content: content
    }
  },
  head () {
    return {
      title: 'Getting started - Delm',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Learn how to install Delm.`
        }
      ]
    }
  }
}
</script>
