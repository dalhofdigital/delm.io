<template>
  <v-content>
    <div class="footer">
      <v-container class="px-0 py-2">
        <div class="footer-links">
          <div
            v-for="link in links"
            :key="link.title"
            class="footer-link"
          >
            <nuxt-link
              :to="{ name: link.routeName }"
            >
              {{ link.title }}
            </nuxt-link>
          </div>
        </div>
      </v-container>
    </div>
  </v-content>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          title: 'Support',
          routeName: 'docs-support'
        },
        {
          title: 'Privacy policy',
          routeName: 'privacy'
        },
        {
          title: 'Imprint',
          routeName: 'imprint'
        }
      ]
    }
  }
}
</script>


<style lang="scss">
.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  .footer-link {
    a {
      display: inline-block;
      padding: 15px;
      color: #232323;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>

