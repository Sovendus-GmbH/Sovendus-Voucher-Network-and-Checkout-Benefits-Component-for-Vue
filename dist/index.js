import { defineComponent as h, toRefs as g, openBlock as B, createElementBlock as E } from "vue";
const x = /* @__PURE__ */ h({
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
  setup(e) {
    const n = e, {
      trafficSourceNumber: s,
      trafficMediumNumber: u,
      sessionId: t,
      timestamp: a,
      orderId: m,
      orderValue: c,
      orderCurrency: i,
      usedCouponCode: d,
      consumerSalutation: l,
      consumerFirstName: v,
      consumerLastName: p,
      consumerEmail: f,
      consumerStreet: C,
      consumerStreetNumber: y,
      consumerCity: w,
      consumerCountry: N,
      consumerZipcode: b,
      consumerYearOfBirth: I
    } = g(n);
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
        integrationType: "vue-1.0.4"
      }), window.sovConsumer = {
        consumerSalutation: l.value,
        consumerFirstName: v.value,
        consumerLastName: p.value,
        consumerEmail: f.value,
        consumerStreet: C.value,
        consumerStreetNumber: y.value,
        consumerCity: w.value,
        consumerCountry: N.value,
        consumerZipcode: b.value,
        consumerYearOfBirth: I.value
      };
      const o = document.createElement("script");
      o.async = !0, o.src = "https://api.sovendus.com/sovabo/common/js/flexibleIframe.js", o.type = "text/javascript", document.getElementsByTagName("body")[0].appendChild(o);
    })(), (o, S) => (B(), E("div", { id: r }));
  }
}), D = {
  mounted() {
    if (["CH", void 0].includes(document.documentElement.lang.split("-")[1]) && window.location.pathname === "/") {
      var e = document.createElement("script");
      e.type = "text/javascript", e.async = !0, e.src = "https://api.sovendus.com/js/landing.js", document.body.appendChild(e);
    }
  }
};
export {
  x as SovendusBanner,
  D as SovendusLandingPage
};
