<template>
  <v-toolbar
    app
    id="nav"
    :class="{ 'shadow': showShadow }"
    ref="navbar"
    fixed
    flat
    light
    height="58"
    color="white"
    clipped-left
  >
    <nuxt-link to="/" class="d-flex align-center" style="min-width:42px;min-height:42px;width:42px;height:42px">
      <img src="/images/logo.png" alt="Delm" class="d-inline-block" style="max-width:100%">
    </nuxt-link>
    <v-spacer></v-spacer>
    <v-btn flat round to="/support">Support</v-btn>
    <v-btn flat round to="/docs">Docs</v-btn>
    <v-btn flat round href="https://app.delm.io">Login</v-btn>
    <v-btn color="primary" round href="https://apps.shopify.com/delm">Start using Delm</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      showShadow: false
    }
  },
  watch: {
    '$route' (to, from) {
      if (!this.isHome(to)) {
        this.showShadow = true
      } else {
        this.showShadow = false
      }
    }
  },
  methods: {
    isHome (route) {
      return route.path === '/'
    },
    scrollHandler (event) {
      if (!this.isHome(this.$route)) {
        this.showShadow = true
        return
      }
      if (window.scrollY > this.$refs.navbar.$el.clientHeight) {
        this.showShadow = true
      } else {
        this.showShadow = false
      }
    }
  },
  created () {
    if (!this.isHome(this.$route)) {
      this.showShadow = true
    }
    window.addEventListener('scroll', this.scrollHandler)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style lang="scss">
#nav {
  position: relative;
  z-index: 10;
  &.shadow:after {
    bottom: -5px;
    box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, .12);
    content: "";
    height: 5px;
    left: 0px;
    opacity: 1;
    pointer-events: none;
    position: absolute;
    right: 0px;
    width: 100%;
    z-index: 10;
  }
}
</style>
