import { j as c, G as k, N as x, i as E } from "../NaverMapService--Cosggtm.mjs";
import { useEffect as i, useRef as w, useState as u, useCallback as L } from "react";
const S = ({ apiKey: p, isGoogle: o, initMap: s, children: t }) => {
  const n = (e) => o ? `https://maps.googleapis.com/maps/api/js?key=${e}&callback=initMap&region=KR` : `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${e}`;
  return i(() => {
    window.initMap = s;
    const e = document.createElement("script");
    e.src = n(p), e.async = !0, document.body.appendChild(e);
  }, []), /* @__PURE__ */ c.jsx(c.Fragment, { children: t });
}, C = ({ type: p, apiKey: o, options: s, items: t, selectedItem: n, onClickMarker: e }) => {
  const f = w(null), M = p === "google", [r, g] = u(), [l, v] = u(t), [h, d] = u(), j = L(() => {
    const a = f.current;
    if (!a)
      return;
    let m;
    M ? m = new k(a, s) : m = new x(a, s), g(m);
  }, []), R = (a) => {
    d(a), e && e(a);
  };
  return i(() => {
    r && (r.initMapEventListener(R), r.makeMarkers(l));
  }, [r, l]), i(() => {
    E(t, l) || v(t);
  }, [t]), i(() => {
    n !== h && d(n);
  }, [n]), /* @__PURE__ */ c.jsx(S, { apiKey: o, isGoogle: M, initMap: j, children: /* @__PURE__ */ c.jsx("div", { ref: f, style: { width: "100%", height: "100%" } }) });
};
export {
  C as ReactMaps
};
