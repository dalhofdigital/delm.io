<template>
  <div class="home">
    <div style="position:relative;overflow:hidden">
      <v-container>
        <v-layout row :wrap="$vuetify.breakpoint.sm" align-center justify-center>
          <v-flex md6>
            <div class="mb-4">
              <h1 style="font-size:34px" class="text-xs-center text-md-left font-weight-bold mb-4">Add estimated delivery dates to your Shopify product pages</h1>
            </div>
            <v-layout row :justify-center="$vuetify.breakpoint.smAndDown">
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
            <BrowserMockup>
              <div class="product-page-mockup">
                <div class="product-image"></div>
                <div class="product-info">
                  <div class="product-name">Your Awesome Product Page</div>
                  <div class="product-price">$7.50 per month</div>
                  <div class="product-cta">
                    <a href="https://apps.shopify.com/delm">Add to cart</a>
                  </div>
                  <div class="product-shipping-info">
                    <span class="product-shipping-info-date">Delivery between Mon., Apr. 22 and Thu., April. 25.</span> Order within <span class="product-shipping-info-countdown success--text">20 hrs and 42 min</span>.</div>
                </div>
              </div>
            </BrowserMockup>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <v-container class="py-5" grid-list-xl>
      <div class="text-xs-center mb-3">
        <h2 style="font-size:30px;font-weight:700">Here is why <span style="color:#439486;display:inline-block;border-bottom:solid 3px #439486;">everyone</span> should show estimated delivery dates:</h2>
      </div>
      <v-layout wrap justify-center align-center>
        <v-flex md4 class="text-xs-center">
          <div class="mb-4">
            <img style="height:160px" src="/images/investing.svg" alt="Increase conversion rate" class="no-zoom">
          </div>
          <h3 class="mb-2" style="font-size:22px;font-weight:700">Increase conversion rate (<a target="_blank" href="https://web.archive.org/web/20190418222132/https://baymard.com/blog/shipping-speed-vs-delivery-date">more</a>)</h3>
          <p style="font-size:22px;font-weight:300;margin:0;padding:0" class="grey--text text--darken-1 mb-0">Convert more visitors into customers by solving a seemingly simple question: "When will my order arrive?"</p>
        </v-flex>
        <v-flex md4 class="text-xs-center">
          <div class="mb-4">
            <img style="height:160px" src="/images/online-shopping.svg" alt="Improve user experience" class="no-zoom">
          </div>
          <h3 class="mb-2" style="font-size:22px;font-weight:700">Improve user experience</h3>
          <p style="font-size:22px;font-weight:300;margin:0;padding:0" class="grey--text text--darken-1 mb-0">Don't make your visitors leave your product pages. Design your product pages as convenient as possible.</p>
        </v-flex>
        <v-flex md4 class="text-xs-center">
          <div class="mb-4">
            <img style="height:160px" src="/images/questions.svg" alt="Reduce support requests" class="no-zoom">
          </div>
          <h3 class="mb-2" style="font-size:22px;font-weight:700">Reduce support requests</h3>
          <p style="font-size:22px;font-weight:300;margin:0;padding:0" class="grey--text text--darken-1 mb-0">Invest your precious time in other things because fewer customers will ask you delivery related questions.</p>
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
        <v-flex sm6 xs12>
          <v-layout justify-center align-center>
            <v-flex shrink>
              <div style="padding:50px">
                <h3 style="font-size:28px;margin:0;padding:0">{{ feature.title }}</h3>
                <p style="font-size:22px;font-weight:300;margin:0;padding:0" class="grey--text text--darken-1 mb-0" v-html="feature.description"></p>
                <div class="mt-2">
                  <v-btn class="ml-0" color="primary" :to="{ name: feature.routeName }">Learn more</v-btn>
                </div>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex sm6 xs12>
          <img :src="feature.image" :alt="feature.title">
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BrowserMockup from '~/components/BrowserMockup.vue'

export default {
  components: {
    BrowserMockup
  },
  data () {
    return {
      features: [
        {
          title: 'Fully customizable shipping info',
          description: '<b>Coding skills are</b> nice to have but <b>not required.</b>',
          image: '/gifs/customize-shipping-info.gif',
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
    font-size: 16px;
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
        padding: 5px 8px;
        font-size: .8em;
        line-height: .9em;
        text-transform: uppercase;
        background:#439486;
        color: #fff;
        font-weight: 600;
        text-decoration: none;
        letter-spacing: 1px;
        &:hover {
          background: darken(#439486, 10%);
        }
      }
    }
    .product-shipping-info {
      color: #333;
      .product-shipping-info-date {
        font-weight: 600;
      }
      .product-shipping-info-countdown {
      }
    }
  }
}
</style>
