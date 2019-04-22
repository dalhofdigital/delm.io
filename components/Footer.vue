<template>
  <div class="footer mt-5">
    <v-content class="py-0">
      <v-container class="px-0 py-5">
        <div class="text-xs-center mb-3">
          <a class="d-inline-block" href="https://apps.shopify.com/delm?utm_source=website&utm_medium=footer_app_store_badge">
            <img style="width: 240px" src="/images/shopify-app-store-black.png" alt="Shopify App Store">
          </a>
        </div>
        <div class="footer-links">
          <div
            v-for="link in links"
            :key="link.title"
            class="footer-link"
          >
            <nuxt-link
              v-if="link.routeName"
              :to="{ name: link.routeName }"
            >
              {{ link.title }}
            </nuxt-link>
            <a v-else :href="link.href">{{ link.title }}</a>
          </div>
        </div>
      </v-container>
    </v-content>
  </div>
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
          title: 'Public Trello board',
          href: 'https://trello.com/b/Vel5ZNX7/delm-public-board-for-new-features-and-bugs'
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
.footer {
  background: #f5f5f5;
}
.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  .footer-link {
    a {
      display: inline-block;
      padding: 5px 15px;
      color: #232323;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>

