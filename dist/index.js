import { defineComponent as B, toRefs as h, openBlock as E, createElementBlock as _ } from "vue";
const D = /* @__PURE__ */ B({
  __name: "SovendusBanner",
  props: {
    trafficSourceNumber: {},
    trafficMediumNumber: {},
    sessionId: {},
    timestamp: {},
    orderId: {},
    orderValue: {},
    orderCurrency: {},
    usedCouponCode: {},
    consumerSalutation: {},
    consumerFirstName: {},
    consumerLastName: {},
    consumerEmail: {},
    consumerStreet: {},
    consumerStreetNumber: {},
    consumerCity: {},
    consumerCountry: {},
    consumerZipcode: {},
    consumerYearOfBirth: {}
  },
  setup(o) {
    const n = o, {
      trafficSourceNumber: s,
      trafficMediumNumber: u,
      sessionId: t,
      timestamp: a,
      orderId: m,
      orderValue: c,
      orderCurrency: i,
      usedCouponCode: d,
      consumerSalutation: v,
      consumerFirstName: l,
      consumerLastName: p,
      consumerEmail: f,
      consumerStreet: C,
      consumerStreetNumber: y,
      consumerCity: N,
      consumerCountry: I,
      consumerZipcode: b,
      consumerYearOfBirth: w
    } = h(n);
    window.sovDivId = 1 + (window.sovDivId || 0);
    const r = `sovendus-integration-container-${window.sovDivId}`;
    return (async () => {
      window.sovIframes = window.sovIframes || [], window.sovIframes.push({
        trafficSourceNumber: s.value,
        trafficMediumNumber: u.value,
        sessionId: t.value,
        timestamp: a.value,
        orderId: m.value,
        orderValue: c.value,
        orderCurrency: i.value,
        usedCouponCode: d.value,
        iframeContainerId: r,
        integrationType: "vue-1.0.3"
      }), window.sovConsumer = {
        consumerSalutation: v.value,
        consumerFirstName: l.value,
        consumerLastName: p.value,
        consumerEmail: f.value,
        consumerStreet: C.value,
        consumerStreetNumber: y.value,
        consumerCity: N.value,
        consumerCountry: I.value,
        consumerZipcode: b.value,
        consumerYearOfBirth: w.value
      };
      const e = document.createElement("script");
      e.async = !0, e.src = "https://api.sovendus.com/sovabo/common/js/flexibleIframe.js", e.type = "text/javascript", document.getElementsByTagName("body")[0].appendChild(e);
    })(), (e, S) => (E(), _("div", { id: r }));
  }
});
export {
  D as SovendusBanner
};
