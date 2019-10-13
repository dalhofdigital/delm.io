# Date calculation

## Dispatch date

The dispatch date means the date upon which an order is leaving your warehouse and handed over to your shipping carrier.

### Your working days and dispatch times

We need your working days and dispatch time to calculate the next dispatch date.

## Delivery date

The delivery date means the date upon your customer will receive their order.

### Shipping carrier working days

Shipping carrier working days are related to the delivery time.

Each day of the delivery time will be added one by one to the calculated dispatch date. Before one day gets added, our algorithm checks if the current weekday is a shipping carrier working day. If not, the current weekday will be skipped hence your delivery time will automatically increase.

### Delay

The delay gets added to the calculated dispatch date. May be used to add processing time.

![Holidays](/images/docs/date-calculation.png)
