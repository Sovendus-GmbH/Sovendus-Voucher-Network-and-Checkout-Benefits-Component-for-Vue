# Sovendus Voucher Network & Checkout Benefits Component for Vue

## Integrate into your Vue app
1. Download the Sovendus component from [here](https://raw.githubusercontent.com/Sovendus-GmbH/Sovendus-Voucher-Network-and-Checkout-Benefits-Component-for-Vue/main/releases/sovendus-voucher-network-checkout-benefits-vue-latest.zip) and unpack it into your Vue project / components folder
2. You can then use the component like with the following example:
    ```html
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