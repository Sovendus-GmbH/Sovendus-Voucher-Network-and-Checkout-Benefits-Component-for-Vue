<script setup lang="ts">
import { toRefs } from 'vue'

export interface Props {
  trafficSourceNumber: number
  trafficMediumNumber: number
  sessionId?: string
  timestamp?: number
  orderId?: string
  orderValue?: number
  orderCurrency?: string
  usedCouponCode?: string
  consumerSalutation?: string
  consumerFirstName?: string
  consumerLastName?: string
  consumerEmail?: string
  consumerStreet?: string
  consumerStreetNumber?: string
  consumerCity?: string
  consumerCountry?: string
  consumerZipcode?: string
  consumerYearOfBirth?: number
  consumerDateOfBirth?: string
}

const props = defineProps<Props>()
const {
  trafficSourceNumber,
  trafficMediumNumber,
  sessionId,
  timestamp,
  orderId,
  orderValue,
  orderCurrency,
  usedCouponCode,
  consumerSalutation,
  consumerFirstName,
  consumerLastName,
  consumerEmail,
  consumerStreet,
  consumerStreetNumber,
  consumerCity,
  consumerCountry,
  consumerZipcode,
  consumerYearOfBirth,
  consumerDateOfBirth
} = toRefs(props)

interface SovWindow extends Window {
  sovIframes: any
  sovConsumer: any
  sovDivId: number
}

declare const window: SovWindow

window.sovDivId = 1 + (window.sovDivId || 0);
const sovDivId = `sovendus-integration-container-${window.sovDivId}`
const init = async () => {
  window.sovIframes = window.sovIframes || []
  window.sovIframes.push({
    trafficSourceNumber: trafficSourceNumber.value,
    trafficMediumNumber: trafficMediumNumber.value,
    sessionId: sessionId.value,
    timestamp: timestamp.value,
    orderId: orderId.value,
    orderValue: orderValue.value,
    orderCurrency: orderCurrency.value,
    usedCouponCode: usedCouponCode.value,
    iframeContainerId: sovDivId,
    integrationType: "vue-1.0.8"
  })
  window.sovConsumer = {
    consumerSalutation: consumerSalutation.value,
    consumerFirstName: consumerFirstName.value,
    consumerLastName: consumerLastName.value,
    consumerEmail: consumerEmail.value,
    consumerStreet: consumerStreet.value,
    consumerStreetNumber: consumerStreetNumber.value,
    consumerCity: consumerCity.value,
    consumerCountry: consumerCountry.value,
    consumerZipcode: consumerZipcode.value,
    consumerYearOfBirth: consumerYearOfBirth.value,
    consumerDateOfBirth: consumerDateOfBirth.value
  }
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://api.sovendus.com/sovabo/common/js/flexibleIframe.js'
  script.type = 'text/javascript'
  const body = document.getElementsByTagName('body')[0]
  body.appendChild(script)
}
init()
</script>

<template>
  <div :id="sovDivId"></div>
</template>
