<template>
  <v-app>
    <div class="indigo darken-2">
      <v-container class="pa-0">
        <v-toolbar flat color="indigo darken-2" dark height="64">
          <nuxt-link to="/" class="d-flex align-center" style="min-width:42px;min-height:42px;width:42px;height:42px">
            <img src="/logo.png" alt="Delm" class="d-inline-block" style="max-width:100%">
          </nuxt-link>
          <v-toolbar-title class="subheading font-weight-medium">Delm</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn flat round to="/docs">Documentation</v-btn>
          <v-btn color="success" round href="https://apps.shopify.com/delm">Open in Shopify App Store</v-btn>
        </v-toolbar>
      </v-container>
    </div>

    <v-content>
      <nuxt />
    </v-content>

    <v-container>
      <div>
        <nuxt-link to="/privacy" class="mr-3 d-inline-block">Privacy policy</nuxt-link>
        <nuxt-link to="/imprint" class="d-inline-block">Imprint</nuxt-link>
      </div>
    </v-container>

  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Vuetify.js'
      }
    }
  }
</script>

<style>
  .container {
    max-width: 1280px;
  }
</style>

