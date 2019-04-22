<template>
  <div v-html="content"></div>
</template>

<script>
import content from '@/docs/troubleshooting.md'

export default {
  layout: 'docs',
  data () {
    return {
      content: content
    }
  },
  head () {
    return {
      title: 'Troubleshooting',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Delm troubleshooting`
        }
      ]
    }
  }
}
</script>
