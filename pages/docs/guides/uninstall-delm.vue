<template>
  <div>
    <v-container>
      <h1 class="mb-2">Uninstalling Delm</h1>
      <p class="mb-0">If you wish to uninstall Delm, just click the bin icon in your Shopify admin apps overview. If you had troubles using Delm, please don't hesitate to <nuxt-link to="/support">contact us</nuxt-link> before uninstalling the app!</p>

      <div class="my-5">
        <img style="margin:0 auto;max-width:100%" class="d-block elevation-20" src="/images/docs/uninstall.png" alt="Uninstalling Delm">
      </div>

      <p>If you had enabled the fast load option, <nuxt-link to="/docs/fast-load">please remember to undo the made changes</nuxt-link>!</p>
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
