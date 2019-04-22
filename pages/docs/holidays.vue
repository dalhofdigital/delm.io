<template>
  <div v-html="content"></div>
</template>

<script>
import content from '@/docs/holidays.md'

export default {
  layout: 'docs',
  data () {
    return {
      content: content
    }
  },
  head () {
    return {
      title: 'Holidays - Delm',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `With holidays, you can influence the behaviour of our delivery date calculation algorithm.`
        }
      ]
    }
  }
}
</script>
