var Be = Object.defineProperty;
var Re = (e, t, r) => t in e ? Be(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var E = (e, t, r) => (Re(e, typeof t != "symbol" ? t + "" : t, r), r);
import { jsx as J, Fragment as ze } from "react/jsx-runtime";
import { useEffect as O, useRef as De, useState as Z, useCallback as Ge } from "react";
var we = typeof global == "object" && global && global.Object === Object && global, Oe = typeof self == "object" && self && self.Object === Object && self, m = we || Oe || Function("return this")(), C = m.Symbol, Ae = Object.prototype, Fe = Ae.hasOwnProperty, He = Ae.toString, x = C ? C.toStringTag : void 0;
function Ne(e) {
  var t = Fe.call(e, x), r = e[x];
  try {
    e[x] = void 0;
    var a = !0;
  } catch {
  }
  var s = He.call(e);
  return a && (t ? e[x] = r : delete e[x]), s;
}
var Ue = Object.prototype, Ze = Ue.toString;
function Ke(e) {
  return Ze.call(e);
}
var qe = "[object Null]", We = "[object Undefined]", re = C ? C.toStringTag : void 0;
function R(e) {
  return e == null ? e === void 0 ? We : qe : re && re in Object(e) ? Ne(e) : Ke(e);
}
function L(e) {
  return e != null && typeof e == "object";
}
var F = Array.isArray;
function je(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Xe = "[object AsyncFunction]", Je = "[object Function]", Ye = "[object GeneratorFunction]", Qe = "[object Proxy]";
function $e(e) {
  if (!je(e))
    return !1;
  var t = R(e);
  return t == Je || t == Ye || t == Xe || t == Qe;
}
var K = m["__core-js_shared__"], ae = function() {
  var e = /[^.]+$/.exec(K && K.keys && K.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Ve(e) {
  return !!ae && ae in e;
}
var ke = Function.prototype, et = ke.toString;
function $(e) {
  if (e != null) {
    try {
      return et.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var tt = /[\\^$.*+?()[\]{}|]/g, rt = /^\[object .+?Constructor\]$/, at = Function.prototype, nt = Object.prototype, st = at.toString, it = nt.hasOwnProperty, ot = RegExp(
  "^" + st.call(it).replace(tt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ut(e) {
  if (!je(e) || Ve(e))
    return !1;
  var t = $e(e) ? ot : rt;
  return t.test($(e));
}
function ft(e, t) {
  return e == null ? void 0 : e[t];
}
function S(e, t) {
  var r = ft(e, t);
  return ut(r) ? r : void 0;
}
var Y = S(m, "WeakMap"), pt = 9007199254740991, ct = /^(?:0|[1-9]\d*)$/;
function lt(e, t) {
  var r = typeof e;
  return t = t ?? pt, !!t && (r == "number" || r != "symbol" && ct.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Pe(e, t) {
  return e === t || e !== e && t !== t;
}
var gt = 9007199254740991;
function Ce(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= gt;
}
function dt(e) {
  return e != null && Ce(e.length) && !$e(e);
}
var ht = Object.prototype;
function _t(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || ht;
  return e === r;
}
function vt(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var yt = "[object Arguments]";
function ne(e) {
  return L(e) && R(e) == yt;
}
var Se = Object.prototype, mt = Se.hasOwnProperty, bt = Se.propertyIsEnumerable, Tt = ne(/* @__PURE__ */ function() {
  return arguments;
}()) ? ne : function(e) {
  return L(e) && mt.call(e, "callee") && !bt.call(e, "callee");
};
function wt() {
  return !1;
}
var Ee = typeof exports == "object" && exports && !exports.nodeType && exports, se = Ee && typeof module == "object" && module && !module.nodeType && module, At = se && se.exports === Ee, ie = At ? m.Buffer : void 0, jt = ie ? ie.isBuffer : void 0, Q = jt || wt, $t = "[object Arguments]", Pt = "[object Array]", Ct = "[object Boolean]", St = "[object Date]", Et = "[object Error]", xt = "[object Function]", Mt = "[object Map]", Lt = "[object Number]", It = "[object Object]", Bt = "[object RegExp]", Rt = "[object Set]", zt = "[object String]", Dt = "[object WeakMap]", Gt = "[object ArrayBuffer]", Ot = "[object DataView]", Ft = "[object Float32Array]", Ht = "[object Float64Array]", Nt = "[object Int8Array]", Ut = "[object Int16Array]", Zt = "[object Int32Array]", Kt = "[object Uint8Array]", qt = "[object Uint8ClampedArray]", Wt = "[object Uint16Array]", Xt = "[object Uint32Array]", f = {};
f[Ft] = f[Ht] = f[Nt] = f[Ut] = f[Zt] = f[Kt] = f[qt] = f[Wt] = f[Xt] = !0;
f[$t] = f[Pt] = f[Gt] = f[Ct] = f[Ot] = f[St] = f[Et] = f[xt] = f[Mt] = f[Lt] = f[It] = f[Bt] = f[Rt] = f[zt] = f[Dt] = !1;
function Jt(e) {
  return L(e) && Ce(e.length) && !!f[R(e)];
}
function Yt(e) {
  return function(t) {
    return e(t);
  };
}
var xe = typeof exports == "object" && exports && !exports.nodeType && exports, M = xe && typeof module == "object" && module && !module.nodeType && module, Qt = M && M.exports === xe, q = Qt && we.process, oe = function() {
  try {
    var e = M && M.require && M.require("util").types;
    return e || q && q.binding && q.binding("util");
  } catch {
  }
}(), ue = oe && oe.isTypedArray, Me = ue ? Yt(ue) : Jt, Vt = Object.prototype, kt = Vt.hasOwnProperty;
function er(e, t) {
  var r = F(e), a = !r && Tt(e), s = !r && !a && Q(e), n = !r && !a && !s && Me(e), i = r || a || s || n, p = i ? vt(e.length, String) : [], o = p.length;
  for (var u in e)
    kt.call(e, u) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    lt(u, o))) && p.push(u);
  return p;
}
function tr(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var rr = tr(Object.keys, Object), ar = Object.prototype, nr = ar.hasOwnProperty;
function sr(e) {
  if (!_t(e))
    return rr(e);
  var t = [];
  for (var r in Object(e))
    nr.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ir(e) {
  return dt(e) ? er(e) : sr(e);
}
var I = S(Object, "create");
function or() {
  this.__data__ = I ? I(null) : {}, this.size = 0;
}
function ur(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var fr = "__lodash_hash_undefined__", pr = Object.prototype, cr = pr.hasOwnProperty;
function lr(e) {
  var t = this.__data__;
  if (I) {
    var r = t[e];
    return r === fr ? void 0 : r;
  }
  return cr.call(t, e) ? t[e] : void 0;
}
var gr = Object.prototype, dr = gr.hasOwnProperty;
function hr(e) {
  var t = this.__data__;
  return I ? t[e] !== void 0 : dr.call(t, e);
}
var _r = "__lodash_hash_undefined__";
function vr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = I && t === void 0 ? _r : t, this;
}
function j(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
j.prototype.clear = or;
j.prototype.delete = ur;
j.prototype.get = lr;
j.prototype.has = hr;
j.prototype.set = vr;
function yr() {
  this.__data__ = [], this.size = 0;
}
function N(e, t) {
  for (var r = e.length; r--; )
    if (Pe(e[r][0], t))
      return r;
  return -1;
}
var mr = Array.prototype, br = mr.splice;
function Tr(e) {
  var t = this.__data__, r = N(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : br.call(t, r, 1), --this.size, !0;
}
function wr(e) {
  var t = this.__data__, r = N(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Ar(e) {
  return N(this.__data__, e) > -1;
}
function jr(e, t) {
  var r = this.__data__, a = N(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
function b(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
b.prototype.clear = yr;
b.prototype.delete = Tr;
b.prototype.get = wr;
b.prototype.has = Ar;
b.prototype.set = jr;
var B = S(m, "Map");
function $r() {
  this.size = 0, this.__data__ = {
    hash: new j(),
    map: new (B || b)(),
    string: new j()
  };
}
function Pr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function U(e, t) {
  var r = e.__data__;
  return Pr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Cr(e) {
  var t = U(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Sr(e) {
  return U(this, e).get(e);
}
function Er(e) {
  return U(this, e).has(e);
}
function xr(e, t) {
  var r = U(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
function P(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
P.prototype.clear = $r;
P.prototype.delete = Cr;
P.prototype.get = Sr;
P.prototype.has = Er;
P.prototype.set = xr;
function Mr(e, t) {
  for (var r = -1, a = t.length, s = e.length; ++r < a; )
    e[s + r] = t[r];
  return e;
}
function Lr() {
  this.__data__ = new b(), this.size = 0;
}
function Ir(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Br(e) {
  return this.__data__.get(e);
}
function Rr(e) {
  return this.__data__.has(e);
}
var zr = 200;
function Dr(e, t) {
  var r = this.__data__;
  if (r instanceof b) {
    var a = r.__data__;
    if (!B || a.length < zr - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new P(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
function w(e) {
  var t = this.__data__ = new b(e);
  this.size = t.size;
}
w.prototype.clear = Lr;
w.prototype.delete = Ir;
w.prototype.get = Br;
w.prototype.has = Rr;
w.prototype.set = Dr;
function Gr(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, s = 0, n = []; ++r < a; ) {
    var i = e[r];
    t(i, r, e) && (n[s++] = i);
  }
  return n;
}
function Or() {
  return [];
}
var Fr = Object.prototype, Hr = Fr.propertyIsEnumerable, fe = Object.getOwnPropertySymbols, Nr = fe ? function(e) {
  return e == null ? [] : (e = Object(e), Gr(fe(e), function(t) {
    return Hr.call(e, t);
  }));
} : Or;
function Ur(e, t, r) {
  var a = t(e);
  return F(e) ? a : Mr(a, r(e));
}
function pe(e) {
  return Ur(e, ir, Nr);
}
var V = S(m, "DataView"), k = S(m, "Promise"), ee = S(m, "Set"), ce = "[object Map]", Zr = "[object Object]", le = "[object Promise]", ge = "[object Set]", de = "[object WeakMap]", he = "[object DataView]", Kr = $(V), qr = $(B), Wr = $(k), Xr = $(ee), Jr = $(Y), T = R;
(V && T(new V(new ArrayBuffer(1))) != he || B && T(new B()) != ce || k && T(k.resolve()) != le || ee && T(new ee()) != ge || Y && T(new Y()) != de) && (T = function(e) {
  var t = R(e), r = t == Zr ? e.constructor : void 0, a = r ? $(r) : "";
  if (a)
    switch (a) {
      case Kr:
        return he;
      case qr:
        return ce;
      case Wr:
        return le;
      case Xr:
        return ge;
      case Jr:
        return de;
    }
  return t;
});
var _e = m.Uint8Array, Yr = "__lodash_hash_undefined__";
function Qr(e) {
  return this.__data__.set(e, Yr), this;
}
function Vr(e) {
  return this.__data__.has(e);
}
function H(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new P(); ++t < r; )
    this.add(e[t]);
}
H.prototype.add = H.prototype.push = Qr;
H.prototype.has = Vr;
function kr(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function ea(e, t) {
  return e.has(t);
}
var ta = 1, ra = 2;
function Le(e, t, r, a, s, n) {
  var i = r & ta, p = e.length, o = t.length;
  if (p != o && !(i && o > p))
    return !1;
  var u = n.get(e), g = n.get(t);
  if (u && g)
    return u == t && g == e;
  var d = -1, c = !0, v = r & ra ? new H() : void 0;
  for (n.set(e, t), n.set(t, e); ++d < p; ) {
    var h = e[d], _ = t[d];
    if (a)
      var l = i ? a(_, h, d, t, e, n) : a(h, _, d, e, t, n);
    if (l !== void 0) {
      if (l)
        continue;
      c = !1;
      break;
    }
    if (v) {
      if (!kr(t, function(y, A) {
        if (!ea(v, A) && (h === y || s(h, y, r, a, n)))
          return v.push(A);
      })) {
        c = !1;
        break;
      }
    } else if (!(h === _ || s(h, _, r, a, n))) {
      c = !1;
      break;
    }
  }
  return n.delete(e), n.delete(t), c;
}
function aa(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a, s) {
    r[++t] = [s, a];
  }), r;
}
function na(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a) {
    r[++t] = a;
  }), r;
}
var sa = 1, ia = 2, oa = "[object Boolean]", ua = "[object Date]", fa = "[object Error]", pa = "[object Map]", ca = "[object Number]", la = "[object RegExp]", ga = "[object Set]", da = "[object String]", ha = "[object Symbol]", _a = "[object ArrayBuffer]", va = "[object DataView]", ve = C ? C.prototype : void 0, W = ve ? ve.valueOf : void 0;
function ya(e, t, r, a, s, n, i) {
  switch (r) {
    case va:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case _a:
      return !(e.byteLength != t.byteLength || !n(new _e(e), new _e(t)));
    case oa:
    case ua:
    case ca:
      return Pe(+e, +t);
    case fa:
      return e.name == t.name && e.message == t.message;
    case la:
    case da:
      return e == t + "";
    case pa:
      var p = aa;
    case ga:
      var o = a & sa;
      if (p || (p = na), e.size != t.size && !o)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      a |= ia, i.set(e, t);
      var g = Le(p(e), p(t), a, s, n, i);
      return i.delete(e), g;
    case ha:
      if (W)
        return W.call(e) == W.call(t);
  }
  return !1;
}
var ma = 1, ba = Object.prototype, Ta = ba.hasOwnProperty;
function wa(e, t, r, a, s, n) {
  var i = r & ma, p = pe(e), o = p.length, u = pe(t), g = u.length;
  if (o != g && !i)
    return !1;
  for (var d = o; d--; ) {
    var c = p[d];
    if (!(i ? c in t : Ta.call(t, c)))
      return !1;
  }
  var v = n.get(e), h = n.get(t);
  if (v && h)
    return v == t && h == e;
  var _ = !0;
  n.set(e, t), n.set(t, e);
  for (var l = i; ++d < o; ) {
    c = p[d];
    var y = e[c], A = t[c];
    if (a)
      var te = i ? a(A, y, c, t, e, n) : a(y, A, c, e, t, n);
    if (!(te === void 0 ? y === A || s(y, A, r, a, n) : te)) {
      _ = !1;
      break;
    }
    l || (l = c == "constructor");
  }
  if (_ && !l) {
    var z = e.constructor, D = t.constructor;
    z != D && "constructor" in e && "constructor" in t && !(typeof z == "function" && z instanceof z && typeof D == "function" && D instanceof D) && (_ = !1);
  }
  return n.delete(e), n.delete(t), _;
}
var Aa = 1, ye = "[object Arguments]", me = "[object Array]", G = "[object Object]", ja = Object.prototype, be = ja.hasOwnProperty;
function $a(e, t, r, a, s, n) {
  var i = F(e), p = F(t), o = i ? me : T(e), u = p ? me : T(t);
  o = o == ye ? G : o, u = u == ye ? G : u;
  var g = o == G, d = u == G, c = o == u;
  if (c && Q(e)) {
    if (!Q(t))
      return !1;
    i = !0, g = !1;
  }
  if (c && !g)
    return n || (n = new w()), i || Me(e) ? Le(e, t, r, a, s, n) : ya(e, t, o, r, a, s, n);
  if (!(r & Aa)) {
    var v = g && be.call(e, "__wrapped__"), h = d && be.call(t, "__wrapped__");
    if (v || h) {
      var _ = v ? e.value() : e, l = h ? t.value() : t;
      return n || (n = new w()), s(_, l, r, a, n);
    }
  }
  return c ? (n || (n = new w()), wa(e, t, r, a, s, n)) : !1;
}
function Ie(e, t, r, a, s) {
  return e === t ? !0 : e == null || t == null || !L(e) && !L(t) ? e !== e && t !== t : $a(e, t, r, a, Ie, s);
}
function Pa(e, t) {
  return Ie(e, t);
}
const Te = (e) => new google.maps.LatLng(e.lat, e.lng);
class Ca {
  /**
   * @constructor
   * @param element 지도를 올릴 타겟 엘리먼트
   * @param controlOption 컨트롤 옵션
   */
  constructor(t, r) {
    /**
     * 구글 지도 객체
     */
    E(this, "map");
    /**
     * 생성된 마커 리스트
     */
    E(this, "markers");
    const a = {
      zoom: (r == null ? void 0 : r.zoom) || 16,
      zoomControl: (r == null ? void 0 : r.zoomControl) || !1,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      // minZoom: controlOption?.minZoom,
      // maxZoom: controlOption?.maxZoom,
      mapTypeControl: !1,
      streetViewControl: !1,
      fullscreenControl: !1,
      clickableIcons: (r == null ? void 0 : r.clickableIcons) || !1,
      scrollwheel: (r == null ? void 0 : r.scrollwheel) || !1,
      gestureHandling: (r == null ? void 0 : r.gestureHandling) || "auto"
    };
    this.map = new google.maps.Map(t, a), this.markers = [], google.maps.event.addListenerOnce(this.map, "tilesloaded", () => {
      var s, n;
      this.map.panBy(((s = r == null ? void 0 : r.panBy) == null ? void 0 : s.x) || 0, ((n = r == null ? void 0 : r.panBy) == null ? void 0 : n.y) || 0);
    });
  }
  /**
   * 마커 이외의 영역 클릭 시 액티브 마커 해제하도록 설정하는 이벤트 등록 함수
   * @param callback 지도 클릭 이벤트 핸들러
   */
  initMapEventListener(t) {
    google.maps.event.addListener(this.map, "click", () => {
      t();
    });
  }
  /**
   * 마커 리스트 생성 함수
   * @param items 상품 정보 리스트
   * @reference google.maps.Marker
   * https://developers.google.com/maps/documentation/javascript/reference/marker
   */
  makeMarkers(t) {
    if (this.markers.forEach((a) => a.setMap(null)), this.markers = [], t.length === 0)
      return;
    const r = new google.maps.LatLngBounds();
    if (t.forEach((a) => {
      const s = Te(a.position);
      r.extend(s);
      const n = new google.maps.Marker({
        position: s,
        map: this.map
      });
      this.markers.push(n);
    }), t.length <= 1) {
      const [a] = t, s = Te(a.position);
      this.setCenter(s);
    } else
      this.setBounds(r);
  }
  /**
   * 지도 줌 사이즈 Set 함수
   * @param zoom 줌 사이즈
   */
  setZoom(t) {
    this.map.setZoom(t);
  }
  /**
   * 지도 줌 사이즈 Get 함수
   * @returns 줌 사이즈
   */
  getZoom() {
    return this.map.getZoom();
  }
  /**
   * 지도 센터 위치 Set 함수
   * @param center 센터로 지정할 위치
   */
  setCenter(t) {
    this.map.setCenter(t);
  }
  /**
   * 지도 센터 위치 Get 함수
   * @returns 센터로 지정된 위치
   */
  getCenter() {
    return this.map.getCenter();
  }
  /**
   * 지도 경계 객체 위치 정보 Set 함수
   * @param bounds 경계 객체
   */
  setBounds(t) {
    this.map.fitBounds(t);
  }
  /**
   * 지도 경계 객체 Get 함수
   * @returns 경계 객체
   */
  getBounds() {
    return this.map.getBounds();
  }
}
const X = (e) => new naver.maps.LatLng(e.lat, e.lng);
class Sa {
  /**
   * @constructor
   * @param element 지도를 올릴 타겟 엘리먼트
   * @param controlOption 컨트롤 옵션
   */
  constructor(t, r) {
    /**
     * 네이버 지도 객체
     */
    E(this, "map");
    /**
     * 생성된 마커 리스트
     */
    E(this, "markers");
    var n, i;
    const a = {
      zoom: (r == null ? void 0 : r.zoom) || 16,
      zoomControl: (r == null ? void 0 : r.zoomControl) || !1,
      zoomControlOptions: {
        style: (n = naver.maps) == null ? void 0 : n.ZoomControlStyle.SMALL,
        position: (i = naver.maps) == null ? void 0 : i.Position.TOP_RIGHT
      },
      // minZoom: controlOption?.minZoom,
      // maxZoom: controlOption?.maxZoom,
      scaleControl: !1,
      logoControl: !1,
      mapDataControl: !1,
      mapTypeControl: !1,
      scrollWheel: (r == null ? void 0 : r.scrollWheel) || !1
    };
    this.map = new naver.maps.Map(t, a), this.markers = [];
    let s = !1;
    naver.maps.Event.addListener(this.map, "tilesloaded", () => {
      var p, o;
      s || (s = !0, this.map.panBy({ x: ((p = r == null ? void 0 : r.panBy) == null ? void 0 : p.x) || 0, y: ((o = r == null ? void 0 : r.panBy) == null ? void 0 : o.y) || 0 }));
    });
  }
  /**
   * 마커 이외의 영역 클릭 시 액티브 마커 해제하도록 설정하는 이벤트 등록 함수
   * @param callback 지도 클릭 이벤트 핸들러
   */
  initMapEventListener(t) {
    naver.maps.Event.addListener(this.map, "click", () => {
      t();
    });
  }
  /**
   * 마커 리스트 생성 함수
   * @param items 상품 정보 리스트
   * @param callback 마커 클릭 이벤트 핸들러
   * @reference naver.maps.Marker
   * https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html
   */
  makeMarkers(t) {
    if (this.markers.forEach((r) => r.setMap(null)), this.markers = [], t.length !== 0)
      if (t.forEach((r) => {
        const a = new naver.maps.Marker({
          position: X(r.position),
          map: this.map
        });
        this.markers.push(a);
      }), t.length <= 1) {
        const [r] = t, a = X(r.position);
        this.setCenter(a);
      } else {
        const r = t.map((a) => X(a.position));
        this.setBounds(r);
      }
  }
  /**
   * 지도 줌 사이즈 Set 함수
   * @param zoom 줌 사이즈
   */
  setZoom(t) {
    this.map.setZoom(t);
  }
  /**
   * 지도 줌 사이즈 Get 함수
   * @returns 줌 사이즈
   */
  getZoom() {
    return this.map.getZoom();
  }
  /**
   * 지도 센터 위치 Set 함수
   * @param center 센터로 지정할 위치
   */
  setCenter(t) {
    this.map.setCenter(t);
  }
  /**
   * 지도 센터 위치 Get 함수
   * @returns 센터로 지정된 위치
   */
  getCenter() {
    return this.map.getCenter();
  }
  /**
   * 지도 경계 객체 위치 정보 Set 함수
   * @param positions 위치 정보 리스트
   */
  setBounds(t) {
    this.map.fitBounds(t);
  }
  /**
   * 지도 경계 객체 Get 함수
   * @returns 경계 객체
   */
  getBounds() {
    return this.map.getBounds();
  }
}
const Ea = ({ apiKey: e, isGoogle: t, initMap: r, children: a }) => (O(() => {
  window.initMap = r;
  const s = document.createElement("script");
  s.src = t ? `https://maps.googleapis.com/maps/api/js?key=${e}&callback=initMap&region=KR` : `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${e}`, s.onload = () => r(), document.body.appendChild(s);
}, []), /* @__PURE__ */ J(ze, { children: a })), Ia = ({ type: e, apiKey: t, options: r, items: a, selectedItem: s, onClickMarker: n }) => {
  const i = De(null), p = e === "google", [o, u] = Z(), [g, d] = Z(a), [c, v] = Z(), h = Ge(() => {
    const l = i.current;
    if (!l)
      return;
    let y;
    p ? y = new Ca(l, r) : y = new Sa(l, r), u(y);
  }, []), _ = (l) => {
    v(l), n && n(l);
  };
  return O(() => {
    o && (o.initMapEventListener(_), o.makeMarkers(g));
  }, [o, g]), O(() => {
    Pa(a, g) || d(a);
  }, [a]), O(() => {
    s !== c && v(s);
  }, [s]), /* @__PURE__ */ J(
    Ea,
    {
      apiKey: t,
      isGoogle: p,
      initMap: h,
      children: /* @__PURE__ */ J(
        "div",
        {
          ref: i,
          style: { width: "100%", height: "100%" }
        }
      )
    }
  );
};
export {
  Ia as default
};
