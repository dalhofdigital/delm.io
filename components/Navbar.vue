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
    <v-btn flat to="/docs">Learn</v-btn>
    <v-btn color="primary" href="https://apps.shopify.com/delm">Install Delm</v-btn>
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
  z-index: 11;
  &.shadow:after {
    bottom: -3px;
    box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, .08);
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
