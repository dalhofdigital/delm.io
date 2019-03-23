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
      width="250"
      id="sidebar"
    >
      <div >
        <v-list dense subheader>
          <div
            v-for="group in navigation.groups"
            :key="group.title"
          >
            <v-subheader class="font-weight-bold">{{ group.title }}</v-subheader>
            <v-list-tile
              v-for="item in group.items"
              :key="item.title"
              :to="{ name: item.route }"
              :exact="item.exact"
              :nuxt="true"
              ripple
              color="grey"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </div>
        </v-list>
      </div>
    </v-navigation-drawer>
    <v-content>
      <nuxt />
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
                title: 'Installation',
                route: 'docs-installation',
                exact: true
              },
              {
                title: 'Frequently asked questions',
                route: 'docs-faq',
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
                route: 'docs-delivey-areas-examples',
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
                title: 'Uninstalling Delm',
                route: 'docs-guides-uninstall-delm',
                exact: true
              },
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scss>
  #sidebar {
    padding-top: 16px;
    border-right: solid 1px #eee;
  }
  .container {
    max-width: 1200px !important;
  }
</style>
