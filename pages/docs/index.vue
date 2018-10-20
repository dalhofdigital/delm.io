<template>
    <div>
        <v-container>
            <h1>Delm Documentation</h1>

            <v-alert :value="true" type="info" class="mb-4">
                We're currently working on our documentation. Feel free to contact us via live chat or help@delm.io
            </v-alert>

            <h2 class="mb-3">Topics</h2>
            <ul>
                <li><nuxt-link to="/docs/fast-load">Fast load</nuxt-link></li>
                <!-- <li><nuxt-link to="/docs/google-optimize">How to setup an A/B test for Delm with Google Optimize</nuxt-link></li> -->
                <li><nuxt-link to="/docs/uninstall">Uninstalling Delm</nuxt-link></li>
            </ul>
        </v-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
        //   
    }
  },
  head () {
    return {
      title: 'Delm documentation',
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
