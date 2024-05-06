import { j as c, G as x, N as E, i as R } from "../NaverMapService--Cosggtm.mjs";
import { useEffect as i, useRef as w, useState as u, useCallback as L } from "react";
const S = ({ apiKey: o, isGoogle: p, initMap: s, children: t }) => {
  const a = (e) => p ? `https://maps.googleapis.com/maps/api/js?key=${e}&callback=initMap&region=KR` : `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${e}`;
  return i(() => {
    window.initMap = s;
    const e = document.createElement("script");
    e.src = a(o), e.async = !0, document.body.appendChild(e);
  }, []), /* @__PURE__ */ c.jsx(c.Fragment, { children: t });
}, C = ({ type: o, apiKey: p, options: s, items: t, selectedItem: a, onClickMarker: e }) => {
  const f = w(null), d = o === "google", [r, M] = u(), [l, v] = u(t), [h, g] = u(), j = L(() => {
    const n = f.current;
    if (!n)
      return;
    let m;
    d ? m = new x(n, s) : m = new E(n, s), M(m);
  }, []), k = (n) => {
    g(n), e && e(n);
  };
  return i(() => {
    r && (r.initMapEventListener(k), r.makeMarkers(l));
  }, [r, l]), i(() => {
    R(t, l) || v(t);
  }, [t]), i(() => {
    a !== h && g(a);
  }, [a]), /* @__PURE__ */ c.jsx(S, { apiKey: p, isGoogle: d, initMap: j, children: /* @__PURE__ */ c.jsx("div", { ref: f, style: { width: "100%", height: "100%" } }) });
};
export {
  C as ReactMap
};
