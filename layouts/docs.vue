<template>
  <v-app>
    <DelmNavbar />
    <v-navigation-drawer
      value="true"
      stateless
      app
      fixed
      clipped
      floating
      id="sidebar"
    >
      <div>
        <v-list subheader>
          <div
            v-for="group in navigation.groups"
            :key="group.title"
          >
            <v-subheader class="font-weight-bold grey--text text--darken-3">{{ group.title }}</v-subheader>
            <v-list-tile
              v-for="item in group.items"
              :key="item.title"
              :to="{ name: item.route }"
              :exact="item.exact"
              :nuxt="true"
              ripple
              color="grey darken-1"
            >
              <v-list-tile-content>
                <v-list-tile-title style="font-size:14px">{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </div>
        </v-list>
      </div>
    </v-navigation-drawer>
    <v-content>
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
import mediumZoom from 'medium-zoom'

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
                title: 'Installation',
                route: 'docs-installation',
                exact: true
              },
              {
                title: 'Frequently asked questions',
                route: 'docs-faq',
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
            title: 'Shipping info',
            items: [
              {
                title: 'Introduction',
                route: 'docs-shipping-info',
                exact: true
              },
              {
                title: 'Examples',
                route: 'docs-shipping-info-examples',
                exact: true
              }
            ]
          },
          {
            title: 'Delivey areas',
            items: [
              {
                title: 'Introduction',
                route: 'docs-delivery-areas',
                exact: true
              },
              {
                title: 'Examples',
                route: 'docs-delivery-areas-examples',
                exact: true
              },
              {
                title: 'How to test your delivery areas',
                route: 'docs-delivery-areas-how-to-test',
                exact: true
              }
            ]
          },
          {
            title: 'Product overrides',
            items: [
              {
                title: 'Introduction',
                route: 'docs-product-overrides',
                exact: true
              }
            ]
          },
          {
            title: 'Holidays',
            items: [
              {
                title: 'Introduction',
                route: 'docs-holidays',
                exact: true
              }
            ]
          },
          {
            title: 'Guides',
            items: [
              {
                title: 'Enable fast load',
                route: 'docs-guides-fast-load',
                exact: true
              },
              {
                title: 'Uninstall Delm',
                route: 'docs-guides-uninstall-delm',
                exact: true
              }
            ]
          }
        ]
      }
    }
  },
  mounted () {
    mediumZoom('.docs img')
  }
}
</script>

<style lang="scss">
.medium-zoom-overlay {
  z-index: 100;
}
.medium-zoom-image--opened {
  z-index: 101;
}
#sidebar {
  padding-top: 16px;
  border-right: solid 1px #eee;
}
.docs {
  max-width: 1080px !important;
  font-size: 16px;
  line-height: 1.5;
  h1 {
    padding-bottom: 10px;
    font-size: 28px;
    border-bottom: solid 1px #ddd;
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
    background-color: #444;
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: .1em .2em;
    color: #fff;
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
}
</style>
