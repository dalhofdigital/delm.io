<template>
  <div>
    <v-container>
      <h1 class="mb-3">Imprint</h1>
      <div class="font-weight-medium">Address:</div>
      <div>dalhof.digital</div>
      <div>Tobias Dalhof</div>
      <div>Rispenweg 22</div>
      <div>73479 Ellwangen</div>
      <div>Germany</div>
  
      <div class="mt-3 font-weight-medium">Contact:</div>
      <div>help@delm.io</div>

      <div class="mt-3 font-weight-medium">Value-added tax identification number in accordance to §27a Turnover Tax Law:</div>
      <div>DE302819339</div>
    </v-container>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Delm imprint',
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: `With Delivery Message, you can add messages like "Want it tomorrow? Order within 2 hrs, 32 mins and 21 secs." to your product pages.`
        }
      ]
    }
  }
}
</script>
