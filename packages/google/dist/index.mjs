var Re = Object.defineProperty;
var De = (e, t, r) => t in e ? Re(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var C = (e, t, r) => (De(e, typeof t != "symbol" ? t + "" : t, r), r);
import { jsx as J, Fragment as ze } from "react/jsx-runtime";
import { useEffect as G, useRef as Oe, useState as Z, useCallback as Ge } from "react";
var Ae = typeof global == "object" && global && global.Object === Object && global, Fe = typeof self == "object" && self && self.Object === Object && self, m = Ae || Fe || Function("return this")(), S = m.Symbol, je = Object.prototype, He = je.hasOwnProperty, Ne = je.toString, x = S ? S.toStringTag : void 0;
function Ue(e) {
  var t = He.call(e, x), r = e[x];
  try {
    e[x] = void 0;
    var a = !0;
  } catch {
  }
  var s = Ne.call(e);
  return a && (t ? e[x] = r : delete e[x]), s;
}
var Ze = Object.prototype, Ke = Ze.toString;
function We(e) {
  return Ke.call(e);
}
var qe = "[object Null]", Xe = "[object Undefined]", re = S ? S.toStringTag : void 0;
function R(e) {
  return e == null ? e === void 0 ? Xe : qe : re && re in Object(e) ? Ue(e) : We(e);
}
function L(e) {
  return e != null && typeof e == "object";
}
var F = Array.isArray;
function $e(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Je = "[object AsyncFunction]", Ye = "[object Function]", Qe = "[object GeneratorFunction]", Ve = "[object Proxy]";
function Pe(e) {
  if (!$e(e))
    return !1;
  var t = R(e);
  return t == Ye || t == Qe || t == Je || t == Ve;
}
var K = m["__core-js_shared__"], ae = function() {
  var e = /[^.]+$/.exec(K && K.keys && K.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ke(e) {
  return !!ae && ae in e;
}
var et = Function.prototype, tt = et.toString;
function $(e) {
  if (e != null) {
    try {
      return tt.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var rt = /[\\^$.*+?()[\]{}|]/g, at = /^\[object .+?Constructor\]$/, nt = Function.prototype, st = Object.prototype, it = nt.toString, ot = st.hasOwnProperty, ut = RegExp(
  "^" + it.call(ot).replace(rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ft(e) {
  if (!$e(e) || ke(e))
    return !1;
  var t = Pe(e) ? ut : at;
  return t.test($(e));
}
function pt(e, t) {
  return e == null ? void 0 : e[t];
}
function E(e, t) {
  var r = pt(e, t);
  return ft(r) ? r : void 0;
}
var Y = E(m, "WeakMap"), lt = 9007199254740991, ct = /^(?:0|[1-9]\d*)$/;
function gt(e, t) {
  var r = typeof e;
  return t = t ?? lt, !!t && (r == "number" || r != "symbol" && ct.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ce(e, t) {
  return e === t || e !== e && t !== t;
}
var dt = 9007199254740991;
function Se(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= dt;
}
function ht(e) {
  return e != null && Se(e.length) && !Pe(e);
}
var _t = Object.prototype;
function yt(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || _t;
  return e === r;
}
function vt(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var mt = "[object Arguments]";
function ne(e) {
  return L(e) && R(e) == mt;
}
var Ee = Object.prototype, bt = Ee.hasOwnProperty, Tt = Ee.propertyIsEnumerable, wt = ne(/* @__PURE__ */ function() {
  return arguments;
}()) ? ne : function(e) {
  return L(e) && bt.call(e, "callee") && !Tt.call(e, "callee");
};
function At() {
  return !1;
}
var xe = typeof exports == "object" && exports && !exports.nodeType && exports, se = xe && typeof module == "object" && module && !module.nodeType && module, jt = se && se.exports === xe, ie = jt ? m.Buffer : void 0, $t = ie ? ie.isBuffer : void 0, Q = $t || At, Pt = "[object Arguments]", Ct = "[object Array]", St = "[object Boolean]", Et = "[object Date]", xt = "[object Error]", Mt = "[object Function]", Lt = "[object Map]", It = "[object Number]", Bt = "[object Object]", Rt = "[object RegExp]", Dt = "[object Set]", zt = "[object String]", Ot = "[object WeakMap]", Gt = "[object ArrayBuffer]", Ft = "[object DataView]", Ht = "[object Float32Array]", Nt = "[object Float64Array]", Ut = "[object Int8Array]", Zt = "[object Int16Array]", Kt = "[object Int32Array]", Wt = "[object Uint8Array]", qt = "[object Uint8ClampedArray]", Xt = "[object Uint16Array]", Jt = "[object Uint32Array]", f = {};
f[Ht] = f[Nt] = f[Ut] = f[Zt] = f[Kt] = f[Wt] = f[qt] = f[Xt] = f[Jt] = !0;
f[Pt] = f[Ct] = f[Gt] = f[St] = f[Ft] = f[Et] = f[xt] = f[Mt] = f[Lt] = f[It] = f[Bt] = f[Rt] = f[Dt] = f[zt] = f[Ot] = !1;
function Yt(e) {
  return L(e) && Se(e.length) && !!f[R(e)];
}
function Qt(e) {
  return function(t) {
    return e(t);
  };
}
var Me = typeof exports == "object" && exports && !exports.nodeType && exports, M = Me && typeof module == "object" && module && !module.nodeType && module, Vt = M && M.exports === Me, W = Vt && Ae.process, oe = function() {
  try {
    var e = M && M.require && M.require("util").types;
    return e || W && W.binding && W.binding("util");
  } catch {
  }
}(), ue = oe && oe.isTypedArray, Le = ue ? Qt(ue) : Yt, kt = Object.prototype, er = kt.hasOwnProperty;
function tr(e, t) {
  var r = F(e), a = !r && wt(e), s = !r && !a && Q(e), n = !r && !a && !s && Le(e), i = r || a || s || n, p = i ? vt(e.length, String) : [], o = p.length;
  for (var u in e)
    er.call(e, u) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    gt(u, o))) && p.push(u);
  return p;
}
function rr(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var ar = rr(Object.keys, Object), nr = Object.prototype, sr = nr.hasOwnProperty;
function ir(e) {
  if (!yt(e))
    return ar(e);
  var t = [];
  for (var r in Object(e))
    sr.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function or(e) {
  return ht(e) ? tr(e) : ir(e);
}
var I = E(Object, "create");
function ur() {
  this.__data__ = I ? I(null) : {}, this.size = 0;
}
function fr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var pr = "__lodash_hash_undefined__", lr = Object.prototype, cr = lr.hasOwnProperty;
function gr(e) {
  var t = this.__data__;
  if (I) {
    var r = t[e];
    return r === pr ? void 0 : r;
  }
  return cr.call(t, e) ? t[e] : void 0;
}
var dr = Object.prototype, hr = dr.hasOwnProperty;
function _r(e) {
  var t = this.__data__;
  return I ? t[e] !== void 0 : hr.call(t, e);
}
var yr = "__lodash_hash_undefined__";
function vr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = I && t === void 0 ? yr : t, this;
}
function j(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
j.prototype.clear = ur;
j.prototype.delete = fr;
j.prototype.get = gr;
j.prototype.has = _r;
j.prototype.set = vr;
function mr() {
  this.__data__ = [], this.size = 0;
}
function N(e, t) {
  for (var r = e.length; r--; )
    if (Ce(e[r][0], t))
      return r;
  return -1;
}
var br = Array.prototype, Tr = br.splice;
function wr(e) {
  var t = this.__data__, r = N(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : Tr.call(t, r, 1), --this.size, !0;
}
function Ar(e) {
  var t = this.__data__, r = N(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function jr(e) {
  return N(this.__data__, e) > -1;
}
function $r(e, t) {
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
b.prototype.clear = mr;
b.prototype.delete = wr;
b.prototype.get = Ar;
b.prototype.has = jr;
b.prototype.set = $r;
var B = E(m, "Map");
function Pr() {
  this.size = 0, this.__data__ = {
    hash: new j(),
    map: new (B || b)(),
    string: new j()
  };
}
function Cr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function U(e, t) {
  var r = e.__data__;
  return Cr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Sr(e) {
  var t = U(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Er(e) {
  return U(this, e).get(e);
}
function xr(e) {
  return U(this, e).has(e);
}
function Mr(e, t) {
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
P.prototype.clear = Pr;
P.prototype.delete = Sr;
P.prototype.get = Er;
P.prototype.has = xr;
P.prototype.set = Mr;
function Lr(e, t) {
  for (var r = -1, a = t.length, s = e.length; ++r < a; )
    e[s + r] = t[r];
  return e;
}
function Ir() {
  this.__data__ = new b(), this.size = 0;
}
function Br(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Rr(e) {
  return this.__data__.get(e);
}
function Dr(e) {
  return this.__data__.has(e);
}
var zr = 200;
function Or(e, t) {
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
w.prototype.clear = Ir;
w.prototype.delete = Br;
w.prototype.get = Rr;
w.prototype.has = Dr;
w.prototype.set = Or;
function Gr(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, s = 0, n = []; ++r < a; ) {
    var i = e[r];
    t(i, r, e) && (n[s++] = i);
  }
  return n;
}
function Fr() {
  return [];
}
var Hr = Object.prototype, Nr = Hr.propertyIsEnumerable, fe = Object.getOwnPropertySymbols, Ur = fe ? function(e) {
  return e == null ? [] : (e = Object(e), Gr(fe(e), function(t) {
    return Nr.call(e, t);
  }));
} : Fr;
function Zr(e, t, r) {
  var a = t(e);
  return F(e) ? a : Lr(a, r(e));
}
function pe(e) {
  return Zr(e, or, Ur);
}
var V = E(m, "DataView"), k = E(m, "Promise"), ee = E(m, "Set"), le = "[object Map]", Kr = "[object Object]", ce = "[object Promise]", ge = "[object Set]", de = "[object WeakMap]", he = "[object DataView]", Wr = $(V), qr = $(B), Xr = $(k), Jr = $(ee), Yr = $(Y), T = R;
(V && T(new V(new ArrayBuffer(1))) != he || B && T(new B()) != le || k && T(k.resolve()) != ce || ee && T(new ee()) != ge || Y && T(new Y()) != de) && (T = function(e) {
  var t = R(e), r = t == Kr ? e.constructor : void 0, a = r ? $(r) : "";
  if (a)
    switch (a) {
      case Wr:
        return he;
      case qr:
        return le;
      case Xr:
        return ce;
      case Jr:
        return ge;
      case Yr:
        return de;
    }
  return t;
});
var _e = m.Uint8Array, Qr = "__lodash_hash_undefined__";
function Vr(e) {
  return this.__data__.set(e, Qr), this;
}
function kr(e) {
  return this.__data__.has(e);
}
function H(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new P(); ++t < r; )
    this.add(e[t]);
}
H.prototype.add = H.prototype.push = Vr;
H.prototype.has = kr;
function ea(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function ta(e, t) {
  return e.has(t);
}
var ra = 1, aa = 2;
function Ie(e, t, r, a, s, n) {
  var i = r & ra, p = e.length, o = t.length;
  if (p != o && !(i && o > p))
    return !1;
  var u = n.get(e), g = n.get(t);
  if (u && g)
    return u == t && g == e;
  var d = -1, l = !0, y = r & aa ? new H() : void 0;
  for (n.set(e, t), n.set(t, e); ++d < p; ) {
    var h = e[d], _ = t[d];
    if (a)
      var c = i ? a(_, h, d, t, e, n) : a(h, _, d, e, t, n);
    if (c !== void 0) {
      if (c)
        continue;
      l = !1;
      break;
    }
    if (y) {
      if (!ea(t, function(v, A) {
        if (!ta(y, A) && (h === v || s(h, v, r, a, n)))
          return y.push(A);
      })) {
        l = !1;
        break;
      }
    } else if (!(h === _ || s(h, _, r, a, n))) {
      l = !1;
      break;
    }
  }
  return n.delete(e), n.delete(t), l;
}
function na(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a, s) {
    r[++t] = [s, a];
  }), r;
}
function sa(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a) {
    r[++t] = a;
  }), r;
}
var ia = 1, oa = 2, ua = "[object Boolean]", fa = "[object Date]", pa = "[object Error]", la = "[object Map]", ca = "[object Number]", ga = "[object RegExp]", da = "[object Set]", ha = "[object String]", _a = "[object Symbol]", ya = "[object ArrayBuffer]", va = "[object DataView]", ye = S ? S.prototype : void 0, q = ye ? ye.valueOf : void 0;
function ma(e, t, r, a, s, n, i) {
  switch (r) {
    case va:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ya:
      return !(e.byteLength != t.byteLength || !n(new _e(e), new _e(t)));
    case ua:
    case fa:
    case ca:
      return Ce(+e, +t);
    case pa:
      return e.name == t.name && e.message == t.message;
    case ga:
    case ha:
      return e == t + "";
    case la:
      var p = na;
    case da:
      var o = a & ia;
      if (p || (p = sa), e.size != t.size && !o)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      a |= oa, i.set(e, t);
      var g = Ie(p(e), p(t), a, s, n, i);
      return i.delete(e), g;
    case _a:
      if (q)
        return q.call(e) == q.call(t);
  }
  return !1;
}
var ba = 1, Ta = Object.prototype, wa = Ta.hasOwnProperty;
function Aa(e, t, r, a, s, n) {
  var i = r & ba, p = pe(e), o = p.length, u = pe(t), g = u.length;
  if (o != g && !i)
    return !1;
  for (var d = o; d--; ) {
    var l = p[d];
    if (!(i ? l in t : wa.call(t, l)))
      return !1;
  }
  var y = n.get(e), h = n.get(t);
  if (y && h)
    return y == t && h == e;
  var _ = !0;
  n.set(e, t), n.set(t, e);
  for (var c = i; ++d < o; ) {
    l = p[d];
    var v = e[l], A = t[l];
    if (a)
      var te = i ? a(A, v, l, t, e, n) : a(v, A, l, e, t, n);
    if (!(te === void 0 ? v === A || s(v, A, r, a, n) : te)) {
      _ = !1;
      break;
    }
    c || (c = l == "constructor");
  }
  if (_ && !c) {
    var D = e.constructor, z = t.constructor;
    D != z && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof z == "function" && z instanceof z) && (_ = !1);
  }
  return n.delete(e), n.delete(t), _;
}
var ja = 1, ve = "[object Arguments]", me = "[object Array]", O = "[object Object]", $a = Object.prototype, be = $a.hasOwnProperty;
function Pa(e, t, r, a, s, n) {
  var i = F(e), p = F(t), o = i ? me : T(e), u = p ? me : T(t);
  o = o == ve ? O : o, u = u == ve ? O : u;
  var g = o == O, d = u == O, l = o == u;
  if (l && Q(e)) {
    if (!Q(t))
      return !1;
    i = !0, g = !1;
  }
  if (l && !g)
    return n || (n = new w()), i || Le(e) ? Ie(e, t, r, a, s, n) : ma(e, t, o, r, a, s, n);
  if (!(r & ja)) {
    var y = g && be.call(e, "__wrapped__"), h = d && be.call(t, "__wrapped__");
    if (y || h) {
      var _ = y ? e.value() : e, c = h ? t.value() : t;
      return n || (n = new w()), s(_, c, r, a, n);
    }
  }
  return l ? (n || (n = new w()), Aa(e, t, r, a, s, n)) : !1;
}
function Be(e, t, r, a, s) {
  return e === t ? !0 : e == null || t == null || !L(e) && !L(t) ? e !== e && t !== t : Pa(e, t, r, a, Be, s);
}
function Ca(e, t) {
  return Be(e, t);
}
const Te = (e) => new google.maps.LatLng(e.lat, e.lng);
class Sa {
  /**
   * @constructor
   * @param element 지도를 올릴 타겟 엘리먼트
   * @param controlOption 컨트롤 옵션
   */
  constructor(t, r) {
    C(this, "map");
    C(this, "bounds");
    C(this, "markers");
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
      clickableIcons: !1,
      scrollwheel: (r == null ? void 0 : r.scrollWheel) || !1,
      gestureHandling: (r == null ? void 0 : r.gestureHandling) || "auto"
    };
    this.map = new google.maps.Map(t, a), this.bounds = new google.maps.LatLngBounds(), this.markers = [], google.maps.event.addListenerOnce(this.map, "tilesloaded", () => {
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
    if (this.markers.forEach((r) => r.setMap(null)), this.markers = [], t.length !== 0) {
      if (t.length <= 1) {
        const [r] = t, a = Te(r.position);
        this.setCenter(a);
      } else
        this.setBounds();
      t.forEach((r) => {
        const a = Te(r.position);
        this.bounds.extend(a);
        const s = new google.maps.Marker({
          position: a,
          map: this.map
        });
        this.markers.push(s);
      });
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
   */
  setBounds() {
    this.map.fitBounds(this.bounds);
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
class Ea {
  /**
   * @constructor
   * @param element 지도를 올릴 타겟 엘리먼트
   * @param controlOption 컨트롤 옵션
   */
  constructor(t, r) {
    C(this, "map");
    C(this, "markers");
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
    if (this.markers.forEach((r) => r.setMap(null)), this.markers = [], t.length !== 0) {
      if (t.length <= 1) {
        const [r] = t, a = X(r.position);
        this.setCenter(a);
      } else
        this.setBounds(t);
      t.forEach((r) => {
        const a = new naver.maps.Marker({
          position: X(r.position),
          map: this.map
        });
        this.markers.push(a);
      });
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
   * @param items 상품 정보 리스트
   */
  setBounds(t) {
    const r = t.map((a) => X(a.position));
    this.map.fitBounds(r);
  }
  /**
   * 지도 경계 객체 Get 함수
   * @returns 경계 객체
   */
  getBounds() {
    return this.map.getBounds();
  }
}
const we = "map-loaded", xa = ({ apiKey: e, isGoogle: t, initMap: r, children: a }) => (G(() => {
  if (document.getElementById(we))
    return;
  window.initMap = r;
  const s = document.createElement("script");
  s.src = t ? `https://maps.googleapis.com/maps/api/js?key=${e}&callback=initMap&region=KR` : `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${e}`, s.id = we, s.onload = () => r(), document.body.appendChild(s);
}, []), /* @__PURE__ */ J(ze, { children: a })), Ba = ({ type: e, apiKey: t, options: r, items: a, selectedItem: s, onClickMarker: n }) => {
  const i = Oe(null), p = e === "google", [o, u] = Z(), [g, d] = Z(a), [l, y] = Z(), h = Ge(() => {
    const c = i.current;
    if (!c)
      return;
    let v;
    p ? v = new Sa(c, r) : v = new Ea(c, r), u(v);
  }, []), _ = (c) => {
    y(c), n && n(c);
  };
  return G(() => {
    o && (o.initMapEventListener(_), o.makeMarkers(g));
  }, [o, g]), G(() => {
    Ca(a, g) || d(a);
  }, [a]), G(() => {
    s !== l && y(s);
  }, [s]), /* @__PURE__ */ J(
    xa,
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
  Ba as default
};
