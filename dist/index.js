import { defineComponent as B, toRefs as g, openBlock as E, createElementBlock as _ } from "vue";
const O = /* @__PURE__ */ B({
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
    consumerYearOfBirth: {},
    consumerDateOfBirth: {}
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
      consumerSalutation: v,
      consumerFirstName: l,
      consumerLastName: p,
      consumerEmail: f,
      consumerStreet: C,
      consumerStreetNumber: y,
      consumerCity: N,
      consumerCountry: b,
      consumerZipcode: I,
      consumerYearOfBirth: S,
      consumerDateOfBirth: w
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
        integrationType: "vue-1.0.8"
      }), window.sovConsumer = {
        consumerSalutation: v.value,
        consumerFirstName: l.value,
        consumerLastName: p.value,
        consumerEmail: f.value,
        consumerStreet: C.value,
        consumerStreetNumber: y.value,
        consumerCity: N.value,
        consumerCountry: b.value,
        consumerZipcode: I.value,
        consumerYearOfBirth: S.value,
        consumerDateOfBirth: w.value
      };
      const o = document.createElement("script");
      o.async = !0, o.src = "https://api.sovendus.com/sovabo/common/js/flexibleIframe.js", o.type = "text/javascript", document.getElementsByTagName("body")[0].appendChild(o);
    })(), (o, h) => (E(), _("div", { id: r }));
  }
}), x = {
  mounted() {
    if (["CH", void 0].includes(document.documentElement.lang.split("-")[1])) {
      var e = document.createElement("script");
      e.type = "text/javascript", e.async = !0, e.src = "https://api.sovendus.com/js/landing.js", document.body.appendChild(e);
    }
  }
};
export {
  O as SovendusBanner,
  x as SovendusLandingPage
};
