var r = Object.defineProperty;
var f = (a, s, e) => s in a ? r(a, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[s] = e;
var h = (a, s, e) => (f(a, typeof s != "symbol" ? s + "" : s, e), e);
import { R as B } from "../ReactMap-BYRHjWuU.mjs";
const d = (a) => new google.maps.LatLng(a.lat, a.lng);
class k {
  constructor(s, e) {
    h(this, "map");
    h(this, "bounds");
    h(this, "markers");
    const m = {
      zoom: e == null ? void 0 : e.zoom,
      zoomControl: (e == null ? void 0 : e.zoomControl) || !1,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      minZoom: e == null ? void 0 : e.minZoom,
      maxZoom: e == null ? void 0 : e.maxZoom,
      mapTypeControl: !1,
      streetViewControl: !1,
      fullscreenControl: !1,
      clickableIcons: !1,
      scrollwheel: (e == null ? void 0 : e.scrollWheel) || !1,
      gestureHandling: (e == null ? void 0 : e.gestureHandling) || "auto"
    };
    this.map = new google.maps.Map(s, m), this.bounds = new google.maps.LatLngBounds(), this.markers = [], google.maps.event.addListenerOnce(this.map, "tilesloaded", () => {
      var g, u;
      this.map.panBy(((g = e == null ? void 0 : e.panBy) == null ? void 0 : g.x) || 0, ((u = e == null ? void 0 : e.panBy) == null ? void 0 : u.y) || 0);
    });
  }
  initMapEventListener(s) {
    google.maps.event.addListener(this.map, "click", () => {
      s();
    });
  }
  makeMarkers(s) {
    if (this.markers.forEach((e) => e.setMap(null)), this.markers = [], s.length !== 0) {
      if (s.length <= 1) {
        const [e] = s, m = d(e.position);
        this.setCenter(m);
      } else
        this.setBounds();
      s.forEach((e) => {
        const m = d(e.position);
        this.bounds.extend(m);
        const g = new google.maps.Marker({
          position: m,
          map: this.map
        });
        this.markers.push(g);
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
  setBounds() {
    this.map.fitBounds(this.bounds);
  }
  getBounds() {
    return this.map.getBounds();
  }
}
export {
  B as GoogleMap,
  k as default
};
