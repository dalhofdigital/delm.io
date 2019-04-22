<template>
  <div v-html="content"></div>
</template>

<script>
import content from '@/docs/product-overrides.md'

export default {
  layout: 'docs',
  data () {
    return {
      content: content
    }
  },
  head () {
    return {
      title: 'Product overrides - Delm',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Product overrides are being used to override delivery area configurations. That is useful especially if you have products with varying delivery times.`
        }
      ]
    }
  }
}
</script>
