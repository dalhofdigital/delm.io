<template>
  <v-app>
    <DelmNavbar :navigation="navigation" />
    <v-content id="content">
      <v-container class="docs">
        <nuxt />
      </v-container>
    </v-content>
    <DelmFooter/>
  </v-app>
</template>

<script>
import DelmNavbar from '~/components/Navbar.vue'
import DelmFooter from '~/components/Footer.vue'

export default {
  components: {
    DelmNavbar,
    DelmFooter
  },
  data () {
    return {
      title: 'Delm',
      navigation: {
        groups: [
          {
            title: 'Essentials',
            items: [
              {
                title: 'What is Delm?',
                route: 'docs',
                exact: true
              },
              {
                title: 'Getting started',
                route: 'docs-getting-started',
                exact: false
              },
              {
                title: 'Date calculation',
                route: 'docs-date-calculation',
                exact: false
              },
              {
                title: 'Delivery areas',
                route: 'docs-delivery-areas',
                exact: false
              },
              {
                title: 'Shipping info',
                route: 'docs-shipping-info',
                exact: false
              },
              {
                title: 'Product overrides',
                route: 'docs-product-overrides',
                exact: false
              },
              {
                title: 'Holidays',
                route: 'docs-holidays',
                exact: false
              }
            ]
          },
          {
            title: 'Help',
            items: [
              {
                title: 'FAQ',
                route: 'docs-faq',
                exact: true
              },
              {
                title: 'Troubleshooting',
                route: 'docs-troubleshooting',
                exact: true
              },
              {
                title: 'Support',
                route: 'docs-support',
                exact: true
              }
            ]
          },
          {
            title: 'Guides',
            items: [
              {
                title: 'Manually include our JavaScript file',
                route: 'docs-fast-load',
                exact: true
              },
              {
                title: 'Uninstall Delm',
                route: 'docs-uninstall-delm',
                exact: true
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
#sidebar {
  padding-top: 16px;
  border-right: solid 1px #eee;
}
.docs {
  max-width: 1000px !important;
  font-size: 16px;
  line-height: 1.5;
  h1 {
    padding-bottom: 10px;
    font-size: 28px;
  }
  h2 {
    padding-bottom: 10px;
    font-size: 24px;
    border-bottom: solid 1px #eee;
  }
  h3 {
    font-size: 22px;
  }
  h4 {
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6 {
    position: relative;
    margin-top: 35px;
    margin-bottom: 15px;
    &:after {
      clear: both;
    }
    &:hover .header-anchor {
      display: inline-block;
    }
  }
  .header-anchor {
    display: none;
    position: absolute;
    left: -1.2em;
    padding-right: 1.2em;
    text-decoration: none;
    color: #ccc;
    font-weight: 300;
    &:hover {
      color: #aaa;
    }
  }
  code {
    background-color: #eee;
    border-radius: 2px;
    font-size: 0.8em;
    margin: 0;
    padding: 1px 0px;
    color: #ff5722;
    font-weight: 500;
    box-shadow: none;
  }
  pre code {
    margin-bottom: 18px;
    padding: 18px 25px;
    background-color: #f9f9f9;
    color: inherit;
    font-size: 100%;
    overflow-x: auto;
  }
  table {
    margin-bottom: 15px;
    border-spacing: 0;
    border-collapse: collapse;
    th, td {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
      border-spacing: 0;
    }
    th {
      white-space: nowrap;
    }
    tbody tr {
        background-color: rgba(0, 0, 0, 0.012);
      &:nth-child(2n) {
        background-color: #f6f8fa;
      }
    }
  }
  ol, ul {
    margin-bottom: 15px;
    padding-left: 25px;
    li {
      padding-left: 5px;
    }
  }
  img {
    max-width: 100%;
    margin: 0 auto;
    margin: 15px 0;
    box-shadow: 0 0px 20px 0px rgba(0, 0, 0, 0.3);
  }
  blockquote {
    margin-bottom: 16px;
    margin-top: 0;
    border-left: .25em solid #dfe2e5;
    color: #6a737d;
    padding: 0 1em;
  }
}
</style>
