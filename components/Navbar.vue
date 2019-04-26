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
      :data-border="showBorder"
    >
      <v-toolbar-side-icon
        v-if="navigation && (window.width <= mobileBreakpoint)"
        @click="drawer = !drawer"
      ></v-toolbar-side-icon>
      <nuxt-link to="/" class="d-flex align-center" style="min-width:42px;min-height:42px;width:42px;height:42px">
        <img src="/images/logo.png" alt="Delm" class="d-inline-block" style="max-width:100%">
      </nuxt-link>
      <div class="grey--text text--darken-4 headline font-weight-bold" style="padding-left:18px;font-size:18px!important">Delm</div>
      <v-spacer></v-spacer>
      <v-btn flat to="/docs">Learn</v-btn>
      <v-btn color="primary" href="https://apps.shopify.com/delm">Install</v-btn>
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
      showBorder: false,
      mobileBreakpoint: 860,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  watch: {
    '$route' (to, from) {
      if (!this.isHome(to)) {
        this.showBorder = true
      } else {
        this.showBorder = false
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
    if (!process.server) {
      window.addEventListener('scroll', this.scrollHandler)
      window.addEventListener('resize', this.resizeHandler)
      this.resizeHandler()
    }
  },
  destroyed () {
    if (!process.server) {
      window.removeEventListener('scroll', this.scrollHandler)
      window.removeEventListener('resize', this.resizeHandler)
    }
  }
}
</script>

<style lang="scss">
#nav {
  z-index: 11;
  background-color: transparent;
  transition: none;
  &[data-border="true"] {
    background-color: #fff;
    border-bottom: solid 1px #eee;
  }
}
#sidebar[data-zindex="true"] {
  z-index: 12;
}
</style>
