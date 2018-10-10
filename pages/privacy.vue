<template>
  <div>
    <v-container>
      <h1 class="mb-3">Privacy policy</h1>
        
      <p>This Privacy policy describes how personal information is collected, used, and shared when you install or use {{ appName }} in connection with your Shopify-supported store.</p>

      <h2 class="mb-2">Personal information {{ appName }} collects</h2>

      <p>When you install {{ appName }}, we are automatically able to access certain types of information from your Shopify account:</p>

      <ul class="mb-4">
        <li>Read products</li>
        <li>Read collections</li>
        <li>Read and write script tags</li>
      </ul>

      <p>Additionally, we collect the following types of personal information from you and/or your customers once you have installed {{ appName }}: Information about you and others who may access {{ appName }} on behalf of your store, such as your name, address, email address, phone number, and billing information.</p>

      <p>We collect personal information directly from the relevant individual, through your Shopify account, or using the following technologies: “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org. “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps. “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.</p>

      <h2 class="mb-2">How do we use your personal information?</h2>

      <p>We use the personal information we collect from you and your customers in order to provide the Service and to operate {{ appName }}.</p>

      <h2 class="mb-2">Sharing your personal information</h2>

      <p>Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>

      <p>Your Rights If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.</p>

      <p>Additionally, if you are a European resident we note that we are processing your information in order to fulfill contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information will be transferred outside of Europe, including to Canada and the United States.</p>

      <p>Changes We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.</p>

      <p>Contact Us For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at help@delm.io or by mail using the details provided below:</p>

      <di class="mt-3">dalhof.digital</di>
      <div>Tobias Dalhof</div>
      <div>Rispenweg 22</div>
      <div>73479 Ellwangen</div>
      <div>Germany</div>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      appName: 'Delm',
    }
  },
  head () {
    return {
      title: 'Delm privacy policy',
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
