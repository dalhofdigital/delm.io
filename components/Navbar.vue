<template>
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
    <nuxt-link to="/" class="d-flex align-center" style="min-width:42px;min-height:42px;width:42px;height:42px">
      <img src="/images/logo.png" alt="Delm" class="d-inline-block" style="max-width:100%">
    </nuxt-link>
    <div class="grey--text text--darken-4 headline" style="padding-left:15px;font-size:20px!important">Delm</div>
    <v-spacer></v-spacer>
    <v-btn flat to="/docs">Learn</v-btn>
    <v-btn color="primary" href="https://apps.shopify.com/delm">Try for free</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      showBorder: false
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
    }
  },
  created () {
    if (!this.isHome(this.$route)) {
      this.showBorder = true
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
  background-color: transparent;
  transition: none;
  &[data-border="true"] {
    background-color: #fff;
    border-bottom: solid 1px #eee;
  }
}
</style>
