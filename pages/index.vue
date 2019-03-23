<template>
  <div class="home">
    <div style="position:relative;overflow:hidden">
      <v-container>
        <v-layout row wrap align-center justify-center>
          <v-flex sm6>
            <div class="mb-4">
              <h1 class="mb-3">Estimated delivery dates for your Shopify product pages</h1>
              <v-layout column class="benefits">
                <v-flex
                  v-for="benefit in benefits"
                  :key="benefit.title"
                  class="benefit"
                >
                  <v-layout row align-center>
                    <v-flex shrink class="mr-2">
                      <v-icon color="success">{{ benefit.icon }}</v-icon>
                    </v-flex>
                    <v-flex>
                      {{ benefit.title }}
                    </v-flex>
                  </v-layout>
                </v-flex>
              </v-layout>
            </div>
            <v-layout row>
              <v-flex shrink>
                <v-btn
                  href="https://apps.shopify.com/delm"
                  color="primary"
                  large
                  class="ma-0"
                >
                  Try Delm for free
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
              <v-flex shrink>
                <v-btn
                  href="https://demo.delm.io/products/demo-1"
                  large
                  flat
                  class="ma-0"
                >
                  Demo
                </v-btn>
              </v-flex>
            </v-layout>
            <p class="mt-3 mb-0">Only available for Shopify users</p>
          </v-flex>
          <v-flex
            v-if="$vuetify.breakpoint.smAndUp"
            shrink
            class="ml-5"  
          >
            <img class="hero-image" src="/images/hero-image.png" alt="Delm">
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

    <v-container grid-list-md>
      <v-layout column align-center justify-center>
        <v-flex>
          <h2>What are you waiting for?</h2>
        </v-flex>
        <v-flex>
          <v-btn large color="primary" href="https://apps.shopify.com/delm">Try Delm for free</v-btn>
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
          title: 'Delivery areas',
          description: 'Configuration based on visitor location. In order to provide your visitors with accurate estimates, we automatically match their country and region with a delivery area.',
          image: '/images/features/delivery-areas.png'
        },
        {
          title: 'Flexible and multilingual shipping info',
          description: 'Flexible components for delivery date, delivery date range and dispatch countdown. Craft your own templates or use one of your pre built templates.',
          image: '/images/features/templates.png'
        },
        {
          title: 'Product overrides',
          description: 'Hide the shipping info for specific products or change their delivery conditions. Products are able to override delivery areas. This is helpful if you have products with different lead times.',
          image: '/images/features/product-settings.png'
        },
        {
          title: 'Holidays',
          description: 'Easily manage business holidays.',
          image: '/images/features/holidays.png'
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
          content: `Increase your conversion rate and customer trust by telling your customers when they will get their delivery.`
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.home {
  .hero-image {
    max-width: 400px;
    opacity: .5;
  }
  .benefits {
    font-size: 20px;
    .benefit {
      color: #232323;
      margin-bottom: 5px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
