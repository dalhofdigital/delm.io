<template>
  <div>
    <div class="indigo darken-2" style="position:relative;overflow:hidden">
      <v-container grid-list-xl>
        <v-layout row wrap align-center class="py-5">
          <v-flex sm6>
            <h1 class="display-2 font-weight-medium white--text mb-4">Add next delivery date and dispatch-countdown to your product pages</h1>
            <p style="font-size:20px;line-height:28px" class="font-weight-regular white--text mb-2"><span class="d-block">"<strong>Want it tomorrow?</strong> Order within <strong style="color:#C8E6C9">2 hrs, 32 mins and 21 secs</strong>."</span></p>
            <div class="mt-4 mb-3">
              <v-btn large round color="success" href="https://apps.shopify.com/delm">Open in Shopify App Store</v-btn>
              <v-btn color="white" large round href="https://demo.delm.io/products/demo-1" target="_blank">Demo</v-btn>
            </div>
            <p class="subheading white--text mb-0 font-weight-regular">Increase your conversion rate and customer trust.</p>
            <p class="subheading white--text mb-0 font-weight-light"> Only available for Shopify.</p>
          </v-flex>
          <v-flex sm6 v-show="$vuetify.breakpoint.smAndUp">
            <img src="/hero-image.png" alt="Delm" style="position: absolute; top: 4%; opacity: .5; zoom: 1;">
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container>
      <h2 class="mb-3">Comprehensive features</h2>

      <ul>
        <li>Add next delivery date and dispatch-countdown to your product pages.</li>
        <li>Delivery areas - Country based settings for delivery time, deliverable days and language.</li>
        <li>Automatically detect your visitors country and match it to a delivery area.</li>
        <li>Flexible multi-language templates - We offer 3 template types for each language: default, next day delivery template and template for message with delivery date range.</li>
        <li>Pre built templates.</li>
        <li>Automatic calculation of next dispatch and delivery date.</li>
        <li>Holidays - Disable delivery, disable dispatching or override dispatch time. Holidays can be global or attached to a delivery area.</li>
        <li>Support for fixed delivery date and delivery date range.</li>
        <li>Add delivery delay and dispatch delay to products.</li>
        <li>Hide app for specific products.</li>
        <li>Hide app when product is out of stock.</li>
        <li>Hide app for unavailable delivery areas - We recommend to hide the app if your customers location cannot be matched with a delivery area because the promised delivery date will be most likely inaccurate</li>
        <li>Add custom CSS.</li>
      </ul>

    </v-container>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Delm for Shopify',
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
