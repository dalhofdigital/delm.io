# Manually include our JavaScript file

If the option **Manually include our JavaScript file** disabled, we automatically inject a JavaScript file via the [Shopify ScriptTag API](https://help.shopify.com/en/api/reference/online-store/scripttag) to your store.

Because all ScriptTags are being loaded at the **very end** of the page load cycle, you might experience a **slight delay before the shipping info gets visible**.

The delay can be reduced by manually including our script file.

Please contact us if you need help!

**Note:** You have to manually remove the script on app uninstall. We don't do that automatically.

## How to manually include our JavaScript file

1. Open your `theme.liquid` file
2. Search for `</head>`
3. Copy and paste our script just before `</head>`

```html
<script async src="https://cdn.delm.io/deliverymessage.js"></script>
```

### Video guide

<video controls style="max-width:100%;height:auto">
    <source src="/videos/enable-fast-load.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
