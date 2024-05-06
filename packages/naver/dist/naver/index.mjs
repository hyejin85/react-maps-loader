var v = Object.defineProperty;
var C = (a, s, e) => s in a ? v(a, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[s] = e;
var r = (a, s, e) => (C(a, typeof s != "symbol" ? s + "" : s, e), e);
import { R as y } from "../ReactMap-BYRHjWuU.mjs";
const h = (a) => new naver.maps.LatLng(a.lat, a.lng);
class k {
  constructor(s, e) {
    r(this, "map");
    r(this, "markers");
    var f, u;
    const m = {
      zoom: e == null ? void 0 : e.zoom,
      zoomControl: (e == null ? void 0 : e.zoomControl) || !1,
      zoomControlOptions: {
        style: (f = naver.maps) == null ? void 0 : f.ZoomControlStyle.SMALL,
        position: (u = naver.maps) == null ? void 0 : u.Position.TOP_RIGHT
      },
      minZoom: e == null ? void 0 : e.minZoom,
      maxZoom: e == null ? void 0 : e.maxZoom,
      scaleControl: !1,
      logoControl: !1,
      mapDataControl: !1,
      mapTypeControl: !1,
      scrollWheel: (e == null ? void 0 : e.scrollWheel) || !1
    };
    this.map = new naver.maps.Map(s, m), this.markers = [];
    let t = !1;
    naver.maps.Event.addListener(this.map, "tilesloaded", () => {
      var d, i;
      t || (t = !0, this.map.panBy({ x: ((d = e == null ? void 0 : e.panBy) == null ? void 0 : d.x) || 0, y: ((i = e == null ? void 0 : e.panBy) == null ? void 0 : i.y) || 0 }));
    });
  }
  initMapEventListener(s) {
    naver.maps.Event.addListener(this.map, "click", () => {
      s();
    });
  }
  makeMarkers(s) {
    if (this.markers.forEach((e) => e.setMap(null)), this.markers = [], s.length !== 0) {
      if (s.length <= 1) {
        const [e] = s, m = h(e.position);
        this.setCenter(m);
      } else
        this.setBounds(s);
      s.forEach((e) => {
        const m = new naver.maps.Marker({
          position: h(e.position),
          map: this.map
        });
        this.markers.push(m);
      });
    }
  }
  setZoom(s) {
    this.map.setZoom(s);
  }
  getZoom() {
    return this.map.getZoom();
  }
  setCenter(s) {
    this.map.setCenter(s);
  }
  getCenter() {
    return this.map.getCenter();
  }
  setBounds(s) {
    const e = s.map((m) => h(m.position));
    this.map.fitBounds(e);
  }
  getBounds() {
    return this.map.getBounds();
  }
}
export {
  y as NaverMap,
  k as default
};
