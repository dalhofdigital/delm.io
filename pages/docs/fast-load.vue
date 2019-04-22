<template>
  <div v-html="content"></div>
</template>

<script>
import content from '@/docs/fast-load.md'

export default {
  layout: 'docs',
  data () {
    return {
      content: content
    }
  },
  head () {
    return {
      title: 'Enable fast load - Delm',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `If fast load is disabled, we automatically inject a JavaScript file via the Shopify ScriptTag API to your store.`
        }
      ]
    }
  }
}
</script>
