<template>
  <v-app>
    <DelmNavbar />
    <v-content>
      <nuxt />
    </v-content>

    <DelmFooter />
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
      title: 'Delm'
    }
  }
}
</script>

<style scss>
  .container {
    max-width: 1200px !important;
  }
</style>

