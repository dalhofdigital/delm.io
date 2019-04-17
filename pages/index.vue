<template>
  <div class="home">
    <div style="position:relative;overflow:hidden">
      <v-container>
        <v-layout row wrap align-center justify-center>
          <v-flex sm6>
            <div class="mb-4">
              <h1 class="display-1 font-weight-bold mb-4">Estimated delivery dates for your Shopify product pages</h1>
            </div>
            <v-layout row>
              <v-flex shrink>
                <v-btn
                  href="https://apps.shopify.com/delm"
                  color="primary"
                  large
                  class="ma-0"
                >
                  Try for free
                </v-btn>
              </v-flex>
              <v-flex shrink class="mx-3">
                <v-btn
                  :to="{ name: 'docs' }"
                  large
                  class="ma-0"
                >
                  Get started
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex
            v-if="$vuetify.breakpoint.smAndUp"
            shrink
            class="ml-5"  
          >
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container class="py-5" grid-list-xl>
      <div class="text-xs-center mb-4">
        <h2 style="font-size:28px;font-weight:700">Why you should show estimated delivery dates</h2>
      </div>
      <v-layout wrap justify-center align-center>
        <v-flex md4 class="text-xs-center">
          <div class="mb-3">
            <img style="height:160px" src="/images/investing.svg" alt="Delm">
          </div>
          <h3 class="mb-2" style="font-size:22px;font-weight:700">Increase conversion rate</h3>
          <p style="font-size:20px">Convert more visitors into customers by solving a simple question: "When will my order arrive?"</p>
        </v-flex>
        <v-flex md4 class="text-xs-center">
          <div class="mb-3">
            <img style="height:160px" src="/images/user-flow.svg" alt="Delm">
          </div>
          <h3 class="mb-2" style="font-size:22px;font-weight:700">Improve user experience</h3>
          <p style="font-size:20px">The delivery date is a crucial piece of information. Don't make your visitors leave your product pages.</p>
        </v-flex>
        <v-flex md4 class="text-xs-center">
          <div class="mb-3">
            <img style="height:160px" src="/images/having-fun.svg" alt="Delm">
          </div>
          <h3 class="mb-2" style="font-size:22px;font-weight:700">Reduce support requests</h3>
          <p style="font-size:20px">Fewer customers will ask you delivery related questions. Invest your precious time in other things.</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container class="py-5" grid-list-xl>
      <h2 class="mb-5 display-1 font-weight-bold text-xs-center">Key features of Delm</h2>

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
  </div>
</template>

<script>
export default {
  data () {
    return {
      benefits: [
        {
          title: 'Better customer experience',
          icon: 'check_circle'
        },
        {
          title: 'More trust, more sales',
          icon: 'verified_user'
        },
        {
          title: 'Carefully crafted app',
          icon: 'code'
        }
      ],
      features: [
        {
          title: 'Fully customizable shipping info',
          description: 'Coding skills are nice to have but not required.',
          image: '/images/features/delivery-areas.png',
          routeName: 'docs-shipping-info'
        },
        {
          title: 'Date calculation based on visitor location',
          description: 'Allowing you to map simple or complex delivery conditions.',
          image: '/images/features/templates.png',
          routeName: 'docs-delivery-areas'
        },
        {
          title: 'Product overrides',
          description: 'Have products with varying delivery conditions? No problem.',
          image: '/images/features/product-settings.png',
          routeName: 'docs-product-overrides'
        },
        {
          title: 'Holidays',
          description: 'Add and manage business holidays with ease.',
          image: '/images/features/holidays.png',
          routeName: 'docs-holidays'
        }
      ]
    }
  },
  head () {
    return {
      title: 'Delm - Shipping info for Shopify',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Estimated delivery dates for your Shopify product pages. Higher conversion rate. Better user experience. Reduce support requests.`
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
