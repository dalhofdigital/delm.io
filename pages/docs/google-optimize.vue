<template>
  <div>
    <v-container>
      <h1 class="mb-2">How to setup an A/B test for Delm with Google Optimize</h1>
      <p>A/B testing is a great way to find out if a change to your store influences the conversion rate. With <a href="https://optimize.google.com" target="_blank">Google Optimize</a>, you can easlily setup A/B tests for free.</p>

      <h2 class="mb-2">Presuppositions</h2>
      <ul>
        <li>Your store is using <a href="https://help.shopify.com/en/manual/reports-and-analytics/google-analytics/google-analytics-setup" target="_blank">Google Analytics with ecommerce tracking enabled</a></li>
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
