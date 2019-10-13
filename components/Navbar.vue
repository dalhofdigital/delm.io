<template>
  <div>
    <v-toolbar
      app
      id="nav"
      ref="navbar"
      fixed
      flat
      light
      height="58"
      clipped-left
    >
      <v-toolbar-side-icon
        v-if="navigation && (window.width <= mobileBreakpoint)"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <nuxt-link to="/" class="d-flex align-center" style="min-width:32px;min-height:32px;width:32px;height:32px">
        <img src="/images/logo.png" alt="Delm" class="d-inline-block" style="max-width:100%">
      </nuxt-link>
      <div class="grey--text text--darken-4 headline" style="padding-left:16px;font-size:18px!important">Delm: Delivery Message</div>
      <v-spacer></v-spacer>
      <v-btn flat to="/docs">Docs</v-btn>
      <v-btn color="primary" href="https://apps.shopify.com/delm">Install Delm</v-btn>
    </v-toolbar>
    <v-navigation-drawer
      v-if="navigation"
      v-model="drawer"
      app
      fixed
      clipped
      floating
      id="sidebar"
      :mobile-break-point="mobileBreakpoint"
      :data-zindex="window.width <= mobileBreakpoint"
    >
      <div>
        <v-list subheader>
          <div
            v-for="group in navigation.groups"
            :key="group.title"
          >
            <v-subheader class="subheading font-weight-bold grey--text text--darken-3">{{ group.title }}</v-subheader>
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
                <v-list-tile-title style="font-size:16px">{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </div>
        </v-list>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    navigation: {
      required: false,
      type: Object
    }
  },
  data () {
    return {
      drawer: null,
      mobileBreakpoint: 860,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  methods: {
    isHome (route) {
      return route.path === '/'
    },
    scrollHandler (event) {
      if (!this.isHome(this.$route)) {
        this.showBorder = true
        return
      }
      if (window.scrollY > this.$refs.navbar.$el.clientHeight) {
        this.showBorder = true
      } else {
        this.showBorder = false
      }
    },
    resizeHandler () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
  },
  created () {
    if (!this.isHome(this.$route)) {
      this.showBorder = true
    }
    window.addEventListener('scroll', this.scrollHandler)
    window.addEventListener('resize', this.resizeHandler)
    this.resizeHandler()
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHandler)
    window.removeEventListener('resize', this.resizeHandler)
  }
}
</script>

<style lang="scss">
#nav {
  z-index: 11;
  transition: none;
  background-color: #fff;
  border-bottom: solid 1px #eee;
}
#sidebar[data-zindex="true"] {
  z-index: 12;
}
</style>
