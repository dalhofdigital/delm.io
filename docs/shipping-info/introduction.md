# Shipping info

## Shipping info types

In Delm, there are three shipping info *types*.

### Type: Default

> Active when the calculated delivery date is **not tomorrow**.

#### Example

```html
<div>asdasd</div>
```

### Type: Delivery time range

> Active when the calculated delivery date is a **date range**.

#### Example

```html
…
```


### Type: Next day delivery

> Active when the calculated delivery date is **tomorrow**.

#### Example

```html
…
```

## Shipping info editor

### {{date}} variable

#### Options


| Option   | Description                                                                                                            | Required? |
| :------- | :--------------------------------------------------------------------------------------------------------------------- | :-------- |
| `type`   | `delivery`, `delivery_min` (only available in date range), `delivery_max` (only available in date range) or `dispatch` | Yes       |
| `format` | Date format. See options below.                                                                                        | Yes       |


#### Date format options

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
| `[yyyy]` | 2018    | 4 digit year                                           |
| `[yy]`   | 18      | 2 digit year                                           |

#### Example

```
{{date type="delivery" format="[dddd], [mmm]. [dd]"}}

Output: Thursday, Apr. 04 
```


### {{countdown}} variable

#### Options
