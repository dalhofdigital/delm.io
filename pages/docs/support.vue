<template>
  <div v-html="content"></div>
</template>

<script>
import content from '@/docs/support.md'

export default {
  layout: 'docs',
  data () {
    return {
      content: content
    }
  },
  head () {
    return {
      title: 'Support - Delm',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Please do not hesitate to contact us if you have any questions! We speak English and German and are based in Germany.`
        }
      ]
    }
  }
}
</script>
