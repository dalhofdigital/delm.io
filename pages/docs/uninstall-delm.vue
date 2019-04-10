<template>
  <div v-html="content"></div>
</template>

<script>
import content from '@/docs/uninstall-delm.md'

export default {
  layout: 'docs',
  data () {
    return {
      content: content
    }
  },
  head () {
    return {
      title: 'Uninstall Delm',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Learn how to uninstall Delm.`
        }
      ]
    }
  }
}
</script>
