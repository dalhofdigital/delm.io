<template>
  <div v-html="content"></div>
</template>

<script>
import content from '@/docs/shipping-info.md'

export default {
  layout: 'docs',
  data () {
    return {
      content: content
    }
  },
  head () {
    return {
      title: 'Shipping info - Delm',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Fully customizable shipping info for Shopify. Coding skills are nice to have but not required.`
        }
      ]
    }
  }
}
</script>
