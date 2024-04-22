# Sovendus Voucher Network & Checkout Benefits Component for Vue

## Install manually

Download the Sovendus component from [here](https://raw.githubusercontent.com/Sovendus-GmbH/Sovendus-Voucher-Network-and-Checkout-Benefits-Component-for-Vue/main/src/components/SovendusBanner.vue) and paste it into your Vue project / components folder

## Install through npmjs

Execute the following command to install it through npm:

```bash
npm install --save sovendus-voucher-network-and-checkout-benefits-vue
```

## Integrate into your Vue app

You can then use the component as with the following example on your order success / thank you page:

```vue
<SovendusBanner
  :trafficSourceNumber="YOU_TRAFFIC_SOURCE_NUMBER"
  :trafficMediumNumber="YOU_TRAFFIC_MEDIUM_NUMBER"
  sessionId="session-sdsdfsdfsd"
  :timestamp="1705504738"
  orderId="order-12345"
  :orderValue="15.99"
  orderCurrency="EUR"
  usedCouponCode="CouponCodeFromOrder"
  consumerSalutation="Mrs."
  consumerFirstName="John"
  consumerLastName="Smith"
  consumerEmail="test@example.com"
  consumerStreet="Street Name"
  consumerStreetNumber="12/4"
  consumerCity="CityName"
  consumerCountry="DE"
  consumerZipcode="94419"
  :consumerYearOfBirth="1991"
/>
```

### Additional steps for Switzerland

For Switzerland it is also required to add the following component on the home page / page where users will land coming from the Sovendus Voucher Network

```vue
<SovendusLandingPage />
```
