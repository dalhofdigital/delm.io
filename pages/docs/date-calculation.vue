<template>
  <div v-html="content"></div>
</template>

<script>
import content from '@/docs/date-calculation.md'

export default {
  layout: 'docs',
  data () {
    return {
      content: content
    }
  },
  head () {
    return {
      title: 'Date calculation - Delm',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `With Delivery Message, you can add messages like "Want it tomorrow? Order within 2 hrs, 32 mins and 21 secs." to your product pages.`
        }
      ]
    }
  }
}
</script>
