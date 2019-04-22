# Delivery areas

With delivery areas, you are able to model simple and sophisticated delivery setups.

In a delivery area, delivery time, deliverable days and language are defined. A delivery area can have multiple countries and regions/states attached to it.


## How delivery areas work

When a visitor visits your store, we are able to get his location (country and region/state) through his IP address and then try to match it with a delivery area that you've created.

If his location has matched with a delivery area, the shipping info will be shown with the configuration of your delivery area. If his location does not match with a delivery area, we will fallback to the "Rest of world" settings.

**We strongly recommend that you research the correct delivery times for the respective countries and regions/states.**

![Delivery areas](/gifs/delivery-areas.gif)

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
