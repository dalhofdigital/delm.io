# Delm fast load

If fast load is disabled, we automatically inject a JavaScript file via the [Shopify ScriptTag API](https://help.shopify.com/en/api/reference/online-store/scripttag) to your store.

Because all ScriptTags are being loaded at the very end of the page load cycle, you might experience a slight delay before the shipping info gets visible.

## How to enable fast load

The delay can be reduced by adding the following line of code just above `</head>` in your `theme.liquid` file.

```html
<script async src="https://cdn.delm.io/deliverymessage.js"></script>
```

### Video guide

<video controls style="max-width:100%;height:auto">
    <source src="/videos/enable-fast-load.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
