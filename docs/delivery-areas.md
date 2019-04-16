# Delivery areas

![xD](https://i.imgur.com/ulEpheo.gif)

## How to test your delivery areas

No need to mess around with a VPN! Just append our `delm_country` and `delm_region` (optional) parameters to your product URL to change your current location.

| Parameter      | Description                                                         | Example           |
| :------------- | :------------------------------------------------------------------ | :---------------- |
| `delm_country` | [ISO 3166-1 alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-2) | `delm_country=US` |
| `delm_region`  | Optional code for region/state                                      | `delm_region=CA`  |

This is very useful if you want to validate that Delm is working correctly.

### Example for United States, California

Append `?delm_country=US&delm_region=CA` to your product URL to set your current location to United States, California.

```text
https://yourstore.com/product/awesome-product?delm_country=US&delm_region=CA
```
