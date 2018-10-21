<template>
  <div>
    <div class="indigo darken-2" style="position:relative;overflow:hidden">
      <v-container grid-list-xl>
        <v-layout row wrap align-center class="py-5">
          <v-flex sm6>
            <h1 class="display-1 font-weight-medium white--text mb-4">Increase your conversion rate and customer trust by telling your customers when they will get their delivery</h1>
            <p style="font-size:20px;line-height:28px" class="font-weight-regular white--text mb-2">With Delm, you can easily add messages like <span class="d-block"><strong>Want it tomorrow?</strong> Order within <strong class="indigo--text text--lighten-4">2 hrs, 32 mins and 21 secs</strong>.</span> to your product pages.</p>
            <div class="mt-4 mb-3">
              <v-btn large round color="yellow" light href="https://apps.shopify.com/delm">Try Delm for free</v-btn>
              <v-btn large round color="indigo darken-1" dark href="https://demo.delm.io/products/demo-1">Delm Demo Store</v-btn>
            </div>
            <p class="subheading white--text mb-0 font-weight-light"> Only available for Shopify.</p>
          </v-flex>
          <v-flex sm6 v-show="$vuetify.breakpoint.smAndUp">
            <img src="/images/hero-image.png" alt="Delm" style="position: absolute; top: 4%; opacity: .5; zoom: 1;">
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container class="py-5" grid-list-xl>
      <h2 class="mb-5 display-1 font-weight-bold text-xs-center">Delm features</h2>

      <v-layout
        v-for="(feature, index) in features"
        :key="feature.title"
        :reverse="index % 2 === 0"
        row
        wrap
        class="mb-5"
        justify-space-around
      >
        <v-flex sm5 xs12>
          <v-layout fill-height align-center justify-center>
            <v-flex sm12>
              <div class="d-inline-block">
                <h3 class="headline font-weight-bold mb-3">{{ feature.title }}</h3>
                <p style="line-height:26px;font-size:16px" class="grey--text text--darken-2 mb-0">{{ feature.description }}</p>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex sm5 xs12>
          <v-img 
            :src="feature.image"
            aspect-ratio="1.7"
            class="elevation-20"
          ></v-img>
        </v-flex>
      </v-layout>
    </v-container>

    <div class="indigo darken-2">
      <v-container class="white--text" grid-list-md>
        <v-layout column align-center justify-center>
          <v-flex>
            <h2>What are you waiting for? Start your free 7-day trial today!</h2>
          </v-flex>
          <v-flex>
            <v-btn round large color="yellow" light href="https://apps.shopify.com/delm">Try Delm for free</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      features: [
        {
          title: 'Support for multiple countries',
          description: 'Country based settings for delivery time, deliverable days and language. In order to provide your customers with accurate estimates, we automatically match the countries of your customers with a delivery area. We use GeoLite2 data created by MaxMind to locate visitors.',
          image: '/images/features/delivery-areas.png',
        },
        {
          title: 'Flexible and multilingual templates',
          description: 'Flexible components for delivery date, delivery date range and dispatch countdown. Craft your own templates or use one of your pre built templates. Currently available in 7 languages (English, Spanish, German, French, Dutch, Portuguese and Italian).',
          image: '/images/features/templates.png',
        },
        {
          title: 'Product based settings',
          description: 'Hide Delm for specific products. Extend the dispatch date. Extend the delivery date. Override working days and dispatch times.',
          image: '/images/features/product-settings.png',
        },
        {
          title: 'Holidays',
          description: 'Exclude days or override dispatch times. Add global holidays or delivery area specific holidays.',
          image: '/images/features/holidays.png',
        },
      ],
    }
  },
  head () {
    return {
      title: 'Delm for Shopify',
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: `Increase your conversion rate and customer trust by telling your customers when they will get their delivery.`
        }
      ]
    }
  },
}
</script>
