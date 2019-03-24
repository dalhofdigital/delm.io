<template>
  <div>
    <v-container>
      <h1 class="mb-2">Delm fast load</h1>
      <p>If fast load is disabled, we automatically inject a JavaScript file via the Shopify ScriptTag API to your store. Because all ScriptTags are being loaded at the very end of page load, you might experience a slight delay before the app gets visible.</p>

      <h2 class="mb-2">How to enable fast load</h2>
      <p>The delay can be reduced by adding the following line of code just above <code v-text="'</head>'"></code> in your <code v-text="'theme.liquid'"></code> file.</p>

      <div class="mb-4">
        <code v-text='`<script src="https://cdn.delm.io/deliverymessage.js"></script>`'></code>
      </div>

      <video controls style="max-width:100%;height:auto">
        <source src="/videos/enable-fast-load.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'docs',
  data () {
    return {
        //   
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
