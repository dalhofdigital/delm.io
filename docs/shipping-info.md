# Shipping info

In Delm, there are three shipping info *variants*. We have introduced three variants to make the shipping info as flexible as possible. You are able to use *variables* (see below) in each variant.

| Variant             | ⚠️ When is it used?                          |
| :------------------ | :------------------------------------------- |
| Default             | Calculated delivery date is **not tomorrow** |
| Next day delivery   | Calculated delivery date is **tomorrow**     |
| Delivery time range | Calculated delivery date is a **date range** |

Note: In the shipping info you may use some good ol' HTML!

![Delivery areas](/gifs/shipping-info.gif)

## Default example

```html
Want it {{date type="delivery" format="[dddd], [mmm]. [dd]"}}? Order within {{countdown hide_zero_values="true" unit_format="long" show_seconds="4_hours"}}.
```

> Want it Thursday, Apr. 11? Order within 19 hours and 29 minutes.

## Next day delivery example

```html
Want it tomorrow, {{date type="delivery" format="[mmm]. [dd]"}}? Order within {{countdown hide_zero_values="true" unit_format="short" show_seconds="4_hours"}}.
```

> Want it tomorrow, Apr. 11? Order within 19 hours and 29 minutes.

## Delivery time range example

```html
Delivery between {{date type="delivery_min" format="[ddd]., [mmm]. [dd]"}} and {{date type="delivery_max" format="[ddd]., [mmm]. [dd]"}}. Order within {{countdown hide_zero_values="true" unit_format="short" show_seconds="4_hours"}}.
```

> Delivery between Fri., Apr. 12 and Mon., Apr. 15. Order within 19 hrs and 17 min.

## Variables

### {{date}}

`{{date}}` renders a delivery date or dispatch date.

#### Date example

```html
{{date type="delivery" format="[dddd], [mmm]. [dd]"}}
```

> Saturday, Apr. 20

#### Date options

| Option   | Description                                                                                                            | Is required? |
| :------- | :--------------------------------------------------------------------------------------------------------------------- | :----------- |
| `type`   | `delivery`, `delivery_min` (only available in date range), `delivery_max` (only available in date range) or `dispatch` | ⚠️ **Yes**   |
| `format` | Date format. See options below.                                                                                        | ⚠️ **Yes**   |

#### Date format options - {{date format="`[dddd], [mmm]. [dd]`"}}

| Input    | Example | Description                                            |
| :------- | :------ | :----------------------------------------------------- |
| `[dddd]` | Monday  | Day name                                               |
| `[ddd]`  | Mon     | First three characters of day name                     |
| `[dd]`   | 01      | Day of month number with trailing zero (from 01 to 31) |
| `[d]`    | 1       | Day of month number (from 1 to 31)                     |
| `[S]`    | st      | Ordinal suffix                                         |
| `[mmmm]` | January | Month name                                             |
| `[mmm]`  | Jan     | First three characters of month name                   |
| `[mm]`   | 01      | Month with trailing zero from 01 to 12                 |
| `[m]`    | 1       | Month from 1 to 12                                     |
| `[yyyy]` | 2019    | 4 digit year                                           |
| `[yy]`   | 19      | 2 digit year                                           |

### {{countdown}}

`{{countdown}}` renders a countdown that counts down to the next cut-off date. The cut-off countdown helps you to create urgency without being too pushy.

#### Countdown example

```html
{{countdown hide_zero_values="true" unit_format="long" show_seconds="4_hours"}}
```

> 4 hours, 20 minutes and 13 seconds

#### Countdown options

| Option             | Description                                                                                       | Is required? |
| :----------------- | :------------------------------------------------------------------------------------------------ | :----------- |
| `hide_zero_values` | `true` or `false`. Hide or show zero values. Example: 20 min 20 sec => 0 days 0 hrs 20 min 20 sec | ⚠️ **Yes**   |
| `unit_format`      | `long` (default) or `short` Example: minute => min, hour => hr, ...                               | No           |
| `show_seconds`     | `always` (default), `never`, `4_hours`, `3_hours`, `2_hours` or `1_hour`                          | No           |
| `separator`        | Change unit separator. Example: 1 day`,` 2 hrs`,` 20 min and 10 sec                               | No           |
| `last_separator`   | Change separator for last unit. Example: 2 hrs, 20 min, `and` 10 sec                              | No           |
| `day`              | Override translation for "day"                                                                    | No           |
| `days`             | Override translation for "days"                                                                   | No           |
| `hour`             | Override translation for "hour"                                                                   | No           |
| `hours`            | Override translation for "hours"                                                                  | No           |
| `minute`           | Override translation for "minute"                                                                 | No           |
| `minutes`          | Override translation for "minutes"                                                                | No           |
| `second`           | Override translation for "second"                                                                 | No           |
| `seconds`          | Override translation for "seconds"                                                                | No           |
