<template>
  <v-app>
    <DelmNavbar color="red" />
    <v-navigation-drawer
      v-model="drawer"
      app
      fixed
      clipped
      floating
      width="239"
      id="sidebar"
    >
      <v-list style="padding: 12px 0">
        <!-- <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          :exact="item.exact"
        >
          <v-list-tile-action class="mr-3" style="min-width:initial">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->
      </v-list>
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
      items: [

      ]
    }
  },
  mounted () {
    console.log(this.$router.options.routes)
  }
}
</script>

<style scss>
  .container {
    max-width: 1200px !important;
  }
</style>
