<template>
  <div>
    <v-container v-html="content"></v-container>
  </div>
</template>

<script>
import content from '@/docs/essentials/what-is-delm.md'

export default {
  layout: 'docs',
  data () {
    return {
      content: content
    }
  },
  head () {
    return {
      title: 'Delm documentation - Fast load',
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
