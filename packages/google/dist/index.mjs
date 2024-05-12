var Le = Object.defineProperty;
var De = (e, t, r) => t in e ? Le(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var P = (e, t, r) => (De(e, typeof t != "symbol" ? t + "" : t, r), r);
import { jsx as G, Fragment as Ne } from "react/jsx-runtime";
import { useEffect as Z, useRef as Be, useState as K, useCallback as Ze } from "react";
var we = typeof global == "object" && global && global.Object === Object && global, Ge = typeof self == "object" && self && self.Object === Object && self, y = we || Ge || Function("return this")(), $ = y.Symbol, Oe = Object.prototype, Fe = Oe.hasOwnProperty, ze = Oe.toString, I = $ ? $.toStringTag : void 0;
function He(e) {
  var t = Fe.call(e, I), r = e[I];
  try {
    e[I] = void 0;
    var n = !0;
  } catch {
  }
  var s = ze.call(e);
  return n && (t ? e[I] = r : delete e[I]), s;
}
var Ue = Object.prototype, Ke = Ue.toString;
function Xe(e) {
  return Ke.call(e);
}
var We = "[object Null]", qe = "[object Undefined]", ne = $ ? $.toStringTag : void 0;
function L(e) {
  return e == null ? e === void 0 ? qe : We : ne && ne in Object(e) ? He(e) : Xe(e);
}
function M(e) {
  return e != null && typeof e == "object";
}
var F = Array.isArray;
function Ee(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Je = "[object AsyncFunction]", Ye = "[object Function]", Qe = "[object GeneratorFunction]", Ve = "[object Proxy]";
function je(e) {
  if (!Ee(e))
    return !1;
  var t = L(e);
  return t == Ye || t == Qe || t == Je || t == Ve;
}
var X = y["__core-js_shared__"], ae = function() {
  var e = /[^.]+$/.exec(X && X.keys && X.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ke(e) {
  return !!ae && ae in e;
}
var et = Function.prototype, tt = et.toString;
function E(e) {
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
var rt = /[\\^$.*+?()[\]{}|]/g, nt = /^\[object .+?Constructor\]$/, at = Function.prototype, st = Object.prototype, it = at.toString, ot = st.hasOwnProperty, ut = RegExp(
  "^" + it.call(ot).replace(rt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ft(e) {
  if (!Ee(e) || ke(e))
    return !1;
  var t = je(e) ? ut : nt;
  return t.test(E(e));
}
function ct(e, t) {
  return e == null ? void 0 : e[t];
}
function S(e, t) {
  var r = ct(e, t);
  return ft(r) ? r : void 0;
}
var Y = S(y, "WeakMap"), pt = 9007199254740991, lt = /^(?:0|[1-9]\d*)$/;
function gt(e, t) {
  var r = typeof e;
  return t = t ?? pt, !!t && (r == "number" || r != "symbol" && lt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function $e(e, t) {
  return e === t || e !== e && t !== t;
}
var dt = 9007199254740991;
function Se(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= dt;
}
function ht(e) {
  return e != null && Se(e.length) && !je(e);
}
var _t = Object.prototype;
function vt(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || _t;
  return e === r;
}
function yt(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var bt = "[object Arguments]";
function se(e) {
  return M(e) && L(e) == bt;
}
var Pe = Object.prototype, mt = Pe.hasOwnProperty, Tt = Pe.propertyIsEnumerable, At = se(/* @__PURE__ */ function() {
  return arguments;
}()) ? se : function(e) {
  return M(e) && mt.call(e, "callee") && !Tt.call(e, "callee");
};
function wt() {
  return !1;
}
var Ie = typeof exports == "object" && exports && !exports.nodeType && exports, ie = Ie && typeof module == "object" && module && !module.nodeType && module, Ot = ie && ie.exports === Ie, oe = Ot ? y.Buffer : void 0, Et = oe ? oe.isBuffer : void 0, Q = Et || wt, jt = "[object Arguments]", $t = "[object Array]", St = "[object Boolean]", Pt = "[object Date]", It = "[object Error]", Ct = "[object Function]", Mt = "[object Map]", Rt = "[object Number]", xt = "[object Object]", Lt = "[object RegExp]", Dt = "[object Set]", Nt = "[object String]", Bt = "[object WeakMap]", Zt = "[object ArrayBuffer]", Gt = "[object DataView]", Ft = "[object Float32Array]", zt = "[object Float64Array]", Ht = "[object Int8Array]", Ut = "[object Int16Array]", Kt = "[object Int32Array]", Xt = "[object Uint8Array]", Wt = "[object Uint8ClampedArray]", qt = "[object Uint16Array]", Jt = "[object Uint32Array]", u = {};
u[Ft] = u[zt] = u[Ht] = u[Ut] = u[Kt] = u[Xt] = u[Wt] = u[qt] = u[Jt] = !0;
u[jt] = u[$t] = u[Zt] = u[St] = u[Gt] = u[Pt] = u[It] = u[Ct] = u[Mt] = u[Rt] = u[xt] = u[Lt] = u[Dt] = u[Nt] = u[Bt] = !1;
function Yt(e) {
  return M(e) && Se(e.length) && !!u[L(e)];
}
function Qt(e) {
  return function(t) {
    return e(t);
  };
}
var Ce = typeof exports == "object" && exports && !exports.nodeType && exports, C = Ce && typeof module == "object" && module && !module.nodeType && module, Vt = C && C.exports === Ce, W = Vt && we.process, ue = function() {
  try {
    var e = C && C.require && C.require("util").types;
    return e || W && W.binding && W.binding("util");
  } catch {
  }
}(), fe = ue && ue.isTypedArray, Me = fe ? Qt(fe) : Yt, kt = Object.prototype, er = kt.hasOwnProperty;
function tr(e, t) {
  var r = F(e), n = !r && At(e), s = !r && !n && Q(e), a = !r && !n && !s && Me(e), i = r || n || s || a, f = i ? yt(e.length, String) : [], p = f.length;
  for (var o in e)
    er.call(e, o) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (o == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (o == "offset" || o == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (o == "buffer" || o == "byteLength" || o == "byteOffset") || // Skip index properties.
    gt(o, p))) && f.push(o);
  return f;
}
function rr(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var nr = rr(Object.keys, Object), ar = Object.prototype, sr = ar.hasOwnProperty;
function ir(e) {
  if (!vt(e))
    return nr(e);
  var t = [];
  for (var r in Object(e))
    sr.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function or(e) {
  return ht(e) ? tr(e) : ir(e);
}
var R = S(Object, "create");
function ur() {
  this.__data__ = R ? R(null) : {}, this.size = 0;
}
function fr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var cr = "__lodash_hash_undefined__", pr = Object.prototype, lr = pr.hasOwnProperty;
function gr(e) {
  var t = this.__data__;
  if (R) {
    var r = t[e];
    return r === cr ? void 0 : r;
  }
  return lr.call(t, e) ? t[e] : void 0;
}
var dr = Object.prototype, hr = dr.hasOwnProperty;
function _r(e) {
  var t = this.__data__;
  return R ? t[e] !== void 0 : hr.call(t, e);
}
var vr = "__lodash_hash_undefined__";
function yr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = R && t === void 0 ? vr : t, this;
}
function O(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
O.prototype.clear = ur;
O.prototype.delete = fr;
O.prototype.get = gr;
O.prototype.has = _r;
O.prototype.set = yr;
function br() {
  this.__data__ = [], this.size = 0;
}
function H(e, t) {
  for (var r = e.length; r--; )
    if ($e(e[r][0], t))
      return r;
  return -1;
}
var mr = Array.prototype, Tr = mr.splice;
function Ar(e) {
  var t = this.__data__, r = H(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Tr.call(t, r, 1), --this.size, !0;
}
function wr(e) {
  var t = this.__data__, r = H(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Or(e) {
  return H(this.__data__, e) > -1;
}
function Er(e, t) {
  var r = this.__data__, n = H(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function b(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
b.prototype.clear = br;
b.prototype.delete = Ar;
b.prototype.get = wr;
b.prototype.has = Or;
b.prototype.set = Er;
var x = S(y, "Map");
function jr() {
  this.size = 0, this.__data__ = {
    hash: new O(),
    map: new (x || b)(),
    string: new O()
  };
}
function $r(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function U(e, t) {
  var r = e.__data__;
  return $r(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Sr(e) {
  var t = U(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Pr(e) {
  return U(this, e).get(e);
}
function Ir(e) {
  return U(this, e).has(e);
}
function Cr(e, t) {
  var r = U(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function j(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
j.prototype.clear = jr;
j.prototype.delete = Sr;
j.prototype.get = Pr;
j.prototype.has = Ir;
j.prototype.set = Cr;
function Mr(e, t) {
  for (var r = -1, n = t.length, s = e.length; ++r < n; )
    e[s + r] = t[r];
  return e;
}
function Rr() {
  this.__data__ = new b(), this.size = 0;
}
function xr(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Lr(e) {
  return this.__data__.get(e);
}
function Dr(e) {
  return this.__data__.has(e);
}
var Nr = 200;
function Br(e, t) {
  var r = this.__data__;
  if (r instanceof b) {
    var n = r.__data__;
    if (!x || n.length < Nr - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new j(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function T(e) {
  var t = this.__data__ = new b(e);
  this.size = t.size;
}
T.prototype.clear = Rr;
T.prototype.delete = xr;
T.prototype.get = Lr;
T.prototype.has = Dr;
T.prototype.set = Br;
function Zr(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, s = 0, a = []; ++r < n; ) {
    var i = e[r];
    t(i, r, e) && (a[s++] = i);
  }
  return a;
}
function Gr() {
  return [];
}
var Fr = Object.prototype, zr = Fr.propertyIsEnumerable, ce = Object.getOwnPropertySymbols, Hr = ce ? function(e) {
  return e == null ? [] : (e = Object(e), Zr(ce(e), function(t) {
    return zr.call(e, t);
  }));
} : Gr;
function Ur(e, t, r) {
  var n = t(e);
  return F(e) ? n : Mr(n, r(e));
}
function pe(e) {
  return Ur(e, or, Hr);
}
var V = S(y, "DataView"), k = S(y, "Promise"), ee = S(y, "Set"), le = "[object Map]", Kr = "[object Object]", ge = "[object Promise]", de = "[object Set]", he = "[object WeakMap]", _e = "[object DataView]", Xr = E(V), Wr = E(x), qr = E(k), Jr = E(ee), Yr = E(Y), m = L;
(V && m(new V(new ArrayBuffer(1))) != _e || x && m(new x()) != le || k && m(k.resolve()) != ge || ee && m(new ee()) != de || Y && m(new Y()) != he) && (m = function(e) {
  var t = L(e), r = t == Kr ? e.constructor : void 0, n = r ? E(r) : "";
  if (n)
    switch (n) {
      case Xr:
        return _e;
      case Wr:
        return le;
      case qr:
        return ge;
      case Jr:
        return de;
      case Yr:
        return he;
    }
  return t;
});
var ve = y.Uint8Array, Qr = "__lodash_hash_undefined__";
function Vr(e) {
  return this.__data__.set(e, Qr), this;
}
function kr(e) {
  return this.__data__.has(e);
}
function z(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new j(); ++t < r; )
    this.add(e[t]);
}
z.prototype.add = z.prototype.push = Vr;
z.prototype.has = kr;
function en(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function tn(e, t) {
  return e.has(t);
}
var rn = 1, nn = 2;
function Re(e, t, r, n, s, a) {
  var i = r & rn, f = e.length, p = t.length;
  if (f != p && !(i && p > f))
    return !1;
  var o = a.get(e), h = a.get(t);
  if (o && h)
    return o == t && h == e;
  var g = -1, c = !0, v = r & nn ? new z() : void 0;
  for (a.set(e, t), a.set(t, e); ++g < f; ) {
    var d = e[g], l = t[g];
    if (n)
      var _ = i ? n(l, d, g, t, e, a) : n(d, l, g, e, t, a);
    if (_ !== void 0) {
      if (_)
        continue;
      c = !1;
      break;
    }
    if (v) {
      if (!en(t, function(A, w) {
        if (!tn(v, w) && (d === A || s(d, A, r, n, a)))
          return v.push(w);
      })) {
        c = !1;
        break;
      }
    } else if (!(d === l || s(d, l, r, n, a))) {
      c = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), c;
}
function an(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, s) {
    r[++t] = [s, n];
  }), r;
}
function sn(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var on = 1, un = 2, fn = "[object Boolean]", cn = "[object Date]", pn = "[object Error]", ln = "[object Map]", gn = "[object Number]", dn = "[object RegExp]", hn = "[object Set]", _n = "[object String]", vn = "[object Symbol]", yn = "[object ArrayBuffer]", bn = "[object DataView]", ye = $ ? $.prototype : void 0, q = ye ? ye.valueOf : void 0;
function mn(e, t, r, n, s, a, i) {
  switch (r) {
    case bn:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case yn:
      return !(e.byteLength != t.byteLength || !a(new ve(e), new ve(t)));
    case fn:
    case cn:
    case gn:
      return $e(+e, +t);
    case pn:
      return e.name == t.name && e.message == t.message;
    case dn:
    case _n:
      return e == t + "";
    case ln:
      var f = an;
    case hn:
      var p = n & on;
      if (f || (f = sn), e.size != t.size && !p)
        return !1;
      var o = i.get(e);
      if (o)
        return o == t;
      n |= un, i.set(e, t);
      var h = Re(f(e), f(t), n, s, a, i);
      return i.delete(e), h;
    case vn:
      if (q)
        return q.call(e) == q.call(t);
  }
  return !1;
}
var Tn = 1, An = Object.prototype, wn = An.hasOwnProperty;
function On(e, t, r, n, s, a) {
  var i = r & Tn, f = pe(e), p = f.length, o = pe(t), h = o.length;
  if (p != h && !i)
    return !1;
  for (var g = p; g--; ) {
    var c = f[g];
    if (!(i ? c in t : wn.call(t, c)))
      return !1;
  }
  var v = a.get(e), d = a.get(t);
  if (v && d)
    return v == t && d == e;
  var l = !0;
  a.set(e, t), a.set(t, e);
  for (var _ = i; ++g < p; ) {
    c = f[g];
    var A = e[c], w = t[c];
    if (n)
      var re = i ? n(w, A, c, t, e, a) : n(A, w, c, e, t, a);
    if (!(re === void 0 ? A === w || s(A, w, r, n, a) : re)) {
      l = !1;
      break;
    }
    _ || (_ = c == "constructor");
  }
  if (l && !_) {
    var D = e.constructor, N = t.constructor;
    D != N && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof N == "function" && N instanceof N) && (l = !1);
  }
  return a.delete(e), a.delete(t), l;
}
var En = 1, be = "[object Arguments]", me = "[object Array]", B = "[object Object]", jn = Object.prototype, Te = jn.hasOwnProperty;
function $n(e, t, r, n, s, a) {
  var i = F(e), f = F(t), p = i ? me : m(e), o = f ? me : m(t);
  p = p == be ? B : p, o = o == be ? B : o;
  var h = p == B, g = o == B, c = p == o;
  if (c && Q(e)) {
    if (!Q(t))
      return !1;
    i = !0, h = !1;
  }
  if (c && !h)
    return a || (a = new T()), i || Me(e) ? Re(e, t, r, n, s, a) : mn(e, t, p, r, n, s, a);
  if (!(r & En)) {
    var v = h && Te.call(e, "__wrapped__"), d = g && Te.call(t, "__wrapped__");
    if (v || d) {
      var l = v ? e.value() : e, _ = d ? t.value() : t;
      return a || (a = new T()), s(l, _, r, n, a);
    }
  }
  return c ? (a || (a = new T()), On(e, t, r, n, s, a)) : !1;
}
function xe(e, t, r, n, s) {
  return e === t ? !0 : e == null || t == null || !M(e) && !M(t) ? e !== e && t !== t : $n(e, t, r, n, xe, s);
}
function Sn(e, t) {
  return xe(e, t);
}
var te = /* @__PURE__ */ ((e) => (e[e.ZOOM_SIZE = 16] = "ZOOM_SIZE", e[e.MARKER_ZINDEX = 0] = "MARKER_ZINDEX", e[e.CLICKED_MARKER_ZINDEX = 1] = "CLICKED_MARKER_ZINDEX", e[e.HOVERED_MARKER_ZINDEX = 2] = "HOVERED_MARKER_ZINDEX", e[e.INFO_WINDOW_ZINDEX = 10] = "INFO_WINDOW_ZINDEX", e))(te || {});
const Pn = (e) => e === "google", Ae = (e) => new google.maps.LatLng(e.lat, e.lng);
class In {
  /**
   * @constructor
   * @param element 지도를 올릴 타겟 엘리먼트
   * @param controlOption 컨트롤 옵션
   * @link https://developers.google.com/maps/documentation/javascript/reference/map?hl=ko#MapOptions
   */
  constructor(t, r) {
    /**
     * 구글 지도 객체
     */
    P(this, "map");
    /**
     * 생성된 마커 리스트
     */
    P(this, "markers");
    const n = {
      ...r,
      zoom: (r == null ? void 0 : r.zoom) || te.ZOOM_SIZE
    };
    this.map = new google.maps.Map(t, n), this.markers = [];
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
   * @link https://developers.google.com/maps/documentation/javascript/reference/marker
   */
  makeMarkers(t) {
    if (this.markers.forEach((n) => n.setMap(null)), this.markers = [], t.length === 0)
      return;
    const r = new google.maps.LatLngBounds();
    if (t.forEach((n) => {
      const s = Ae(n.position);
      r.extend(s);
      const a = new google.maps.Marker({
        position: s,
        map: this.map
      });
      this.markers.push(a);
    }), t.length <= 1) {
      const [n] = t, s = Ae(n.position);
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
const J = (e) => new naver.maps.LatLng(e.lat, e.lng);
class Cn {
  /**
   * @constructor
   * @param element 지도를 올릴 타겟 엘리먼트
   * @param controlOption 컨트롤 옵션
   * @link https://navermaps.github.io/maps.js.ncp/docs/naver.maps.html#.MapOptions
   */
  constructor(t, r) {
    /**
     * 네이버 지도 객체
     */
    P(this, "map");
    /**
     * 생성된 마커 리스트
     */
    P(this, "markers");
    const n = {
      ...r,
      zoom: (r == null ? void 0 : r.zoom) || te.ZOOM_SIZE
    };
    this.map = new naver.maps.Map(t, n), this.markers = [];
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
   * @link https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html
   */
  makeMarkers(t) {
    if (this.markers.forEach((r) => r.setMap(null)), this.markers = [], t.length !== 0)
      if (t.forEach((r) => {
        const n = new naver.maps.Marker({
          position: J(r.position),
          map: this.map
        });
        this.markers.push(n);
      }), t.length <= 1) {
        const [r] = t, n = J(r.position);
        this.setCenter(n);
      } else {
        const r = t.map((n) => J(n.position));
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
const Mn = ({ apiKey: e, isGoogle: t, initMap: r, children: n }) => {
  const s = `https://maps.googleapis.com/maps/api/js?key=${e}&callback=initMap&region=KR`, a = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${e}`;
  return Z(() => {
    window.initMap = r;
    const i = document.createElement("script");
    i.src = t ? s : a, i.onload = () => r(), document.body.appendChild(i);
  }, []), /* @__PURE__ */ G(Ne, { children: n });
}, Rn = ({
  type: e,
  apiKey: t,
  options: r,
  items: n,
  selectedItem: s
  // onClickMarker,
}) => {
  const a = Be(null), i = Pn(e), [f, p] = K(), [o, h] = K(n), [g, c] = K(), v = Ze(() => {
    const l = a.current;
    if (!l)
      return;
    let _;
    i ? _ = new In(l, r) : _ = new Cn(l, r), p(_);
  }, []), d = () => {
    c(void 0);
  };
  return Z(() => {
    f && (f.initMapEventListener(d), f.makeMarkers(o));
  }, [f, o]), Z(() => {
    Sn(n, o) || h(n);
  }, [n]), Z(() => {
    s !== g && c(s);
  }, [s]), /* @__PURE__ */ G(
    Mn,
    {
      apiKey: t,
      isGoogle: i,
      initMap: v,
      children: /* @__PURE__ */ G(
        "div",
        {
          ref: a,
          style: { width: "100%", height: "100%" }
        }
      )
    }
  );
}, Nn = (e) => /* @__PURE__ */ G(
  Rn,
  {
    type: "google",
    ...e
  }
);
export {
  Nn as default
};
