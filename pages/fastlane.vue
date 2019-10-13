<template>
  <div class="home">
    <div style="position:relative;overflow:hidden">
      <v-container>
        <v-card color="success" dark class="mb-3 elevation-5">
          <v-card-text>
            <div class="mb-1 subheading font-weight-bold">
              🥳🙌 Special offer sponsored by our friends at <a style="color:#fff" target="_blank" href="https://ecommercefastlane.com/">eCommerceFastlane.com</a>
            </div>
            <div>Try Delm for free with our <strong>extended 30 day trial</strong> instead of just 7 days. Only valid from October 14th to October 28th.</div>
          </v-card-text>
        </v-card>
        <v-layout row :wrap="$vuetify.breakpoint.sm" align-center justify-center>
          <v-flex md6>
            <div class="mb-4">
              <h1 style="font-size:30px" class="mb-2 text-xs-center text-md-left font-weight-bold">Add estimated delivery dates and order deadlines to your Shopify product pages</h1>
              <p class="mb-4 grey--text text--darken-2 text-xs-center text-md-left" style="font-weight:300;font-size:22px">
                Try for free with our <strong><strike>{{ trialLength }}-day</strike> limited extended 30-day</strong> trial.
                <br>For just ${{ price }}/month. 
              </p>
            </div>
            <v-layout row :justify-center="$vuetify.breakpoint.smAndDown">
              <v-flex shrink>
                <v-btn
                  href="https://apps.shopify.com/delm"
                  color="primary"
                  large
                  class="ma-0"
                >
                  Add Delm to your store
                </v-btn>
              </v-flex>
              <v-flex shrink class="mx-3">
                <v-btn
                  :to="{ name: 'docs-getting-started' }"
                  large
                  class="ma-0"
                >
                  Read docs
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex
            v-if="$vuetify.breakpoint.smAndUp"
            shrink
            class="ml-5"  
          >
            <BrowserMockup>
              <div class="product-page-mockup">
                <div class="product-image"></div>
                <div class="product-info">
                  <div class="product-name">Your Awesome Product Page</div>
                  <div class="product-price">${{ price }}/month</div>
                  <div class="product-cta">
                    <a href="https://apps.shopify.com/delm">Add to cart</a>
                  </div>
                  <div class="product-shipping-info">
                    <span class="product-shipping-info-date">Delivery between <span class="d-inline-block">{{ minDeliveryDate().format('MMM D') }}</span> and <span class="d-inline-block">{{ maxDeliveryDate().format('MMM D') }}</span>.</span><br>Order within <span class="product-shipping-info-countdown success--text">3 hrs and 22 min</span>.
                  </div>
                  <div><a style="font-size:0.8em" href="https://demo.delm.io/products/demo-1" target="_blank">Visit our demo store</a></div>
                </div>
              </div>
            </BrowserMockup>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container class="py-5" grid-list-xl>
      <v-layout wrap justify-center align-center>
        <v-flex md4 class="text-xs-center">
          <div class="mb-4">
            <img style="height:160px" src="/images/conversion-rate.svg" alt="Increase conversion rate" class="no-zoom">
          </div>
          <h3 class="mb-2" style="font-size:22px;font-weight:700">🛒 <a target="_blank" href="https://web.archive.org/web/20190418222132/https://baymard.com/blog/shipping-speed-vs-delivery-date">Increase conversion rate</a></h3>
          <p style="font-size:22px;font-weight:400;margin:0;padding:0" class="grey--text text--darken-1 mb-0">Solve a seemingly simple customer question "When will my order arrive?" and create urgency by showing your order deadline.</p>
        </v-flex>
        <v-flex md4 class="text-xs-center">
          <div class="mb-4">
            <img style="height:160px" src="/images/user-experience.svg" alt="Improve user experience" class="no-zoom">
          </div>
          <h3 class="mb-2" style="font-size:22px;font-weight:700">✨ Improve user experience</h3>
          <p style="font-size:22px;font-weight:400;margin:0;padding:0" class="grey--text text--darken-1 mb-0">Stop forcing your customers to leave your product pages for more information about shipping by adding estimated delivery dates.</p>
        </v-flex>
        <v-flex md4 class="text-xs-center">
          <div class="mb-4">
            <img style="height:160px" src="/images/save-time.svg" alt="Save valuable time" class="no-zoom">
          </div>
          <h3 class="mb-2" style="font-size:22px;font-weight:700">🎉 Save valuable time</h3>
          <p style="font-size:22px;font-weight:400;margin:0;padding:0" class="grey--text text--darken-1 mb-0">Spend less time answering support tickets. Most delivery date related questions will be answered instantly on your product pages.</p>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container class="py-5" grid-list-xl>
      <div class="text-xs-center mb-5">
        <h2 style="font-size:30px;font-weight:700">Key features of Delm</h2>
      </div>

      <v-layout
        v-for="(feature, index) in features"
        :key="feature.title"
        :reverse="index % 2 === 0"
        row
        wrap
        class="mb-5 pb-3 features"
        justify-center
        align-center
      >
        <v-flex sm7 xs12>
          <v-layout justify-center align-center>
            <v-flex shrink>
              <div style="max-width:500px">
                <h3 style="font-size:28px;margin:0;padding:0">{{ feature.title }}</h3>
                <p style="font-size:22px;font-weight:400;margin:0;padding:0" class="grey--text text--darken-1 mb-0" v-html="feature.description"></p>
                <div class="mt-3">
                  <v-btn class="ml-0" :to="{ name: feature.routeName }">Learn more</v-btn>
                </div>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex sm5 xs12>
          <img :src="feature.image" :alt="feature.title">
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import moment from 'moment'
import BrowserMockup from '~/components/BrowserMockup.vue'

export default {
  components: {
    BrowserMockup
  },
  data () {
    return {
      price: '8.49',
      trialLength: 7,
      features: [
        {
          title: 'Fully customizable shipping info',
          description: '<b>Coding skills are</b> nice to have but <b>not required.</b>',
          image: '/images/features/shipping-info.png',
          routeName: 'docs-shipping-info'
        },
        {
          title: 'Location based date calculation',
          description: 'Map simple or complex delivery conditions. We find the address (country and state / region) of your visitors via their IP address.',
          image: '/images/features/delivery-areas.png',
          routeName: 'docs-delivery-areas'
        },
        {
          title: 'Product overrides',
          description: 'Have products with varying delivery conditions? No problem.',
          image: '/images/features/product-overrides.png',
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
  methods: {
    minDeliveryDate () {
      const date = moment().add(3, 'days')
      while (date.format('dddd') === 'Saturday' || date.format('dddd') === 'Sunday') {
        date.add(1, 'days')
      }
      return date
    },
    maxDeliveryDate () {
      const date = this.minDeliveryDate().clone().add(2, 'days')
      while (date.format('dddd') === 'Saturday' || date.format('dddd') === 'Sunday') {
        date.add(1, 'days')
      }
      return date
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

<style lang="scss" scoped>
.features {
  img {
    max-width: 100%;
    box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.3);
  }
}
.product-page-mockup {
  width: 425px;
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 15px;
  background: rgba(0,0,0,0.009);
  .product-image {
    min-width: 80px;
    width: 80px;
    height: 80px;
    background: #f2f2f2;
  }
  .product-info {
    padding-left: 15px;
    font-size: 1em;
    color: #777;
    .product-name {
    }
    .product-price {
      padding-bottom: 5px;
      color: #aaa;
    }
    .product-cta {
      padding-bottom: 5px;
      a {
        display: inline-block;
        padding: 6px 8px;
        font-size: .9em;
        line-height: .9em;
        text-transform: uppercase;
        background:#439486;
        color: #fff;
        font-weight: 500;
        text-decoration: none;
        letter-spacing: 1px;
        border-radius: 3px;
        &:hover {
          background: darken(#439486, 10%);
        }
      }
    }
    .product-shipping-info {
      color: #333;
      .product-shipping-info-date {
        font-weight: 700;
      }
    }
  }
}
.highlighted {
  color: #439486;
}
</style>
