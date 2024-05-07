var Lt = Object.defineProperty;
var Dt = (t, e, r) => e in t ? Lt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var P = (t, e, r) => (Dt(t, typeof e != "symbol" ? e + "" : e, r), r);
import { jsx as J, Fragment as Nt } from "react/jsx-runtime";
import { useEffect as Z, useRef as Bt, useState as U, useCallback as Zt } from "react";
var et = /* @__PURE__ */ ((t) => (t[t.ZOOM_SIZE = 16] = "ZOOM_SIZE", t[t.MARKER_ZINDEX = 0] = "MARKER_ZINDEX", t[t.CLICKED_MARKER_ZINDEX = 1] = "CLICKED_MARKER_ZINDEX", t[t.HOVERED_MARKER_ZINDEX = 2] = "HOVERED_MARKER_ZINDEX", t[t.INFO_WINDOW_ZINDEX = 10] = "INFO_WINDOW_ZINDEX", t))(et || {}), wt = typeof global == "object" && global && global.Object === Object && global, Gt = typeof self == "object" && self && self.Object === Object && self, b = wt || Gt || Function("return this")(), $ = b.Symbol, Ot = Object.prototype, Ft = Ot.hasOwnProperty, zt = Ot.toString, I = $ ? $.toStringTag : void 0;
function Ht(t) {
  var e = Ft.call(t, I), r = t[I];
  try {
    t[I] = void 0;
    var n = !0;
  } catch {
  }
  var s = zt.call(t);
  return n && (e ? t[I] = r : delete t[I]), s;
}
var Ut = Object.prototype, Kt = Ut.toString;
function Xt(t) {
  return Kt.call(t);
}
var Wt = "[object Null]", qt = "[object Undefined]", nt = $ ? $.toStringTag : void 0;
function L(t) {
  return t == null ? t === void 0 ? qt : Wt : nt && nt in Object(t) ? Ht(t) : Xt(t);
}
function M(t) {
  return t != null && typeof t == "object";
}
var G = Array.isArray;
function Et(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Jt = "[object AsyncFunction]", Yt = "[object Function]", Qt = "[object GeneratorFunction]", Vt = "[object Proxy]";
function jt(t) {
  if (!Et(t))
    return !1;
  var e = L(t);
  return e == Yt || e == Qt || e == Jt || e == Vt;
}
var K = b["__core-js_shared__"], at = function() {
  var t = /[^.]+$/.exec(K && K.keys && K.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function kt(t) {
  return !!at && at in t;
}
var te = Function.prototype, ee = te.toString;
function E(t) {
  if (t != null) {
    try {
      return ee.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var re = /[\\^$.*+?()[\]{}|]/g, ne = /^\[object .+?Constructor\]$/, ae = Function.prototype, se = Object.prototype, ie = ae.toString, oe = se.hasOwnProperty, ue = RegExp(
  "^" + ie.call(oe).replace(re, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function fe(t) {
  if (!Et(t) || kt(t))
    return !1;
  var e = jt(t) ? ue : ne;
  return e.test(E(t));
}
function ce(t, e) {
  return t == null ? void 0 : t[e];
}
function S(t, e) {
  var r = ce(t, e);
  return fe(r) ? r : void 0;
}
var Y = S(b, "WeakMap"), pe = 9007199254740991, le = /^(?:0|[1-9]\d*)$/;
function ge(t, e) {
  var r = typeof t;
  return e = e ?? pe, !!e && (r == "number" || r != "symbol" && le.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function $t(t, e) {
  return t === e || t !== t && e !== e;
}
var de = 9007199254740991;
function St(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= de;
}
function he(t) {
  return t != null && St(t.length) && !jt(t);
}
var _e = Object.prototype;
function ve(t) {
  var e = t && t.constructor, r = typeof e == "function" && e.prototype || _e;
  return t === r;
}
function ye(t, e) {
  for (var r = -1, n = Array(t); ++r < t; )
    n[r] = e(r);
  return n;
}
var be = "[object Arguments]";
function st(t) {
  return M(t) && L(t) == be;
}
var Pt = Object.prototype, me = Pt.hasOwnProperty, Te = Pt.propertyIsEnumerable, Ae = st(/* @__PURE__ */ function() {
  return arguments;
}()) ? st : function(t) {
  return M(t) && me.call(t, "callee") && !Te.call(t, "callee");
};
function we() {
  return !1;
}
var It = typeof exports == "object" && exports && !exports.nodeType && exports, it = It && typeof module == "object" && module && !module.nodeType && module, Oe = it && it.exports === It, ot = Oe ? b.Buffer : void 0, Ee = ot ? ot.isBuffer : void 0, Q = Ee || we, je = "[object Arguments]", $e = "[object Array]", Se = "[object Boolean]", Pe = "[object Date]", Ie = "[object Error]", Ce = "[object Function]", Me = "[object Map]", Re = "[object Number]", xe = "[object Object]", Le = "[object RegExp]", De = "[object Set]", Ne = "[object String]", Be = "[object WeakMap]", Ze = "[object ArrayBuffer]", Ge = "[object DataView]", Fe = "[object Float32Array]", ze = "[object Float64Array]", He = "[object Int8Array]", Ue = "[object Int16Array]", Ke = "[object Int32Array]", Xe = "[object Uint8Array]", We = "[object Uint8ClampedArray]", qe = "[object Uint16Array]", Je = "[object Uint32Array]", u = {};
u[Fe] = u[ze] = u[He] = u[Ue] = u[Ke] = u[Xe] = u[We] = u[qe] = u[Je] = !0;
u[je] = u[$e] = u[Ze] = u[Se] = u[Ge] = u[Pe] = u[Ie] = u[Ce] = u[Me] = u[Re] = u[xe] = u[Le] = u[De] = u[Ne] = u[Be] = !1;
function Ye(t) {
  return M(t) && St(t.length) && !!u[L(t)];
}
function Qe(t) {
  return function(e) {
    return t(e);
  };
}
var Ct = typeof exports == "object" && exports && !exports.nodeType && exports, C = Ct && typeof module == "object" && module && !module.nodeType && module, Ve = C && C.exports === Ct, X = Ve && wt.process, ut = function() {
  try {
    var t = C && C.require && C.require("util").types;
    return t || X && X.binding && X.binding("util");
  } catch {
  }
}(), ft = ut && ut.isTypedArray, Mt = ft ? Qe(ft) : Ye, ke = Object.prototype, tr = ke.hasOwnProperty;
function er(t, e) {
  var r = G(t), n = !r && Ae(t), s = !r && !n && Q(t), a = !r && !n && !s && Mt(t), i = r || n || s || a, c = i ? ye(t.length, String) : [], f = c.length;
  for (var o in t)
    tr.call(t, o) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (o == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (o == "offset" || o == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (o == "buffer" || o == "byteLength" || o == "byteOffset") || // Skip index properties.
    ge(o, f))) && c.push(o);
  return c;
}
function rr(t, e) {
  return function(r) {
    return t(e(r));
  };
}
var nr = rr(Object.keys, Object), ar = Object.prototype, sr = ar.hasOwnProperty;
function ir(t) {
  if (!ve(t))
    return nr(t);
  var e = [];
  for (var r in Object(t))
    sr.call(t, r) && r != "constructor" && e.push(r);
  return e;
}
function or(t) {
  return he(t) ? er(t) : ir(t);
}
var R = S(Object, "create");
function ur() {
  this.__data__ = R ? R(null) : {}, this.size = 0;
}
function fr(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var cr = "__lodash_hash_undefined__", pr = Object.prototype, lr = pr.hasOwnProperty;
function gr(t) {
  var e = this.__data__;
  if (R) {
    var r = e[t];
    return r === cr ? void 0 : r;
  }
  return lr.call(e, t) ? e[t] : void 0;
}
var dr = Object.prototype, hr = dr.hasOwnProperty;
function _r(t) {
  var e = this.__data__;
  return R ? e[t] !== void 0 : hr.call(e, t);
}
var vr = "__lodash_hash_undefined__";
function yr(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = R && e === void 0 ? vr : e, this;
}
function O(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
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
function z(t, e) {
  for (var r = t.length; r--; )
    if ($t(t[r][0], e))
      return r;
  return -1;
}
var mr = Array.prototype, Tr = mr.splice;
function Ar(t) {
  var e = this.__data__, r = z(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : Tr.call(e, r, 1), --this.size, !0;
}
function wr(t) {
  var e = this.__data__, r = z(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function Or(t) {
  return z(this.__data__, t) > -1;
}
function Er(t, e) {
  var r = this.__data__, n = z(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function m(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
m.prototype.clear = br;
m.prototype.delete = Ar;
m.prototype.get = wr;
m.prototype.has = Or;
m.prototype.set = Er;
var x = S(b, "Map");
function jr() {
  this.size = 0, this.__data__ = {
    hash: new O(),
    map: new (x || m)(),
    string: new O()
  };
}
function $r(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function H(t, e) {
  var r = t.__data__;
  return $r(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function Sr(t) {
  var e = H(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Pr(t) {
  return H(this, t).get(t);
}
function Ir(t) {
  return H(this, t).has(t);
}
function Cr(t, e) {
  var r = H(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function j(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
j.prototype.clear = jr;
j.prototype.delete = Sr;
j.prototype.get = Pr;
j.prototype.has = Ir;
j.prototype.set = Cr;
function Mr(t, e) {
  for (var r = -1, n = e.length, s = t.length; ++r < n; )
    t[s + r] = e[r];
  return t;
}
function Rr() {
  this.__data__ = new m(), this.size = 0;
}
function xr(t) {
  var e = this.__data__, r = e.delete(t);
  return this.size = e.size, r;
}
function Lr(t) {
  return this.__data__.get(t);
}
function Dr(t) {
  return this.__data__.has(t);
}
var Nr = 200;
function Br(t, e) {
  var r = this.__data__;
  if (r instanceof m) {
    var n = r.__data__;
    if (!x || n.length < Nr - 1)
      return n.push([t, e]), this.size = ++r.size, this;
    r = this.__data__ = new j(n);
  }
  return r.set(t, e), this.size = r.size, this;
}
function A(t) {
  var e = this.__data__ = new m(t);
  this.size = e.size;
}
A.prototype.clear = Rr;
A.prototype.delete = xr;
A.prototype.get = Lr;
A.prototype.has = Dr;
A.prototype.set = Br;
function Zr(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length, s = 0, a = []; ++r < n; ) {
    var i = t[r];
    e(i, r, t) && (a[s++] = i);
  }
  return a;
}
function Gr() {
  return [];
}
var Fr = Object.prototype, zr = Fr.propertyIsEnumerable, ct = Object.getOwnPropertySymbols, Hr = ct ? function(t) {
  return t == null ? [] : (t = Object(t), Zr(ct(t), function(e) {
    return zr.call(t, e);
  }));
} : Gr;
function Ur(t, e, r) {
  var n = e(t);
  return G(t) ? n : Mr(n, r(t));
}
function pt(t) {
  return Ur(t, or, Hr);
}
var V = S(b, "DataView"), k = S(b, "Promise"), tt = S(b, "Set"), lt = "[object Map]", Kr = "[object Object]", gt = "[object Promise]", dt = "[object Set]", ht = "[object WeakMap]", _t = "[object DataView]", Xr = E(V), Wr = E(x), qr = E(k), Jr = E(tt), Yr = E(Y), T = L;
(V && T(new V(new ArrayBuffer(1))) != _t || x && T(new x()) != lt || k && T(k.resolve()) != gt || tt && T(new tt()) != dt || Y && T(new Y()) != ht) && (T = function(t) {
  var e = L(t), r = e == Kr ? t.constructor : void 0, n = r ? E(r) : "";
  if (n)
    switch (n) {
      case Xr:
        return _t;
      case Wr:
        return lt;
      case qr:
        return gt;
      case Jr:
        return dt;
      case Yr:
        return ht;
    }
  return e;
});
var vt = b.Uint8Array, Qr = "__lodash_hash_undefined__";
function Vr(t) {
  return this.__data__.set(t, Qr), this;
}
function kr(t) {
  return this.__data__.has(t);
}
function F(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.__data__ = new j(); ++e < r; )
    this.add(t[e]);
}
F.prototype.add = F.prototype.push = Vr;
F.prototype.has = kr;
function tn(t, e) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
    if (e(t[r], r, t))
      return !0;
  return !1;
}
function en(t, e) {
  return t.has(e);
}
var rn = 1, nn = 2;
function Rt(t, e, r, n, s, a) {
  var i = r & rn, c = t.length, f = e.length;
  if (c != f && !(i && f > c))
    return !1;
  var o = a.get(t), g = a.get(e);
  if (o && g)
    return o == e && g == t;
  var d = -1, p = !0, v = r & nn ? new F() : void 0;
  for (a.set(t, e), a.set(e, t); ++d < c; ) {
    var h = t[d], _ = e[d];
    if (n)
      var l = i ? n(_, h, d, e, t, a) : n(h, _, d, t, e, a);
    if (l !== void 0) {
      if (l)
        continue;
      p = !1;
      break;
    }
    if (v) {
      if (!tn(e, function(y, w) {
        if (!en(v, w) && (h === y || s(h, y, r, n, a)))
          return v.push(w);
      })) {
        p = !1;
        break;
      }
    } else if (!(h === _ || s(h, _, r, n, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(t), a.delete(e), p;
}
function an(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n, s) {
    r[++e] = [s, n];
  }), r;
}
function sn(t) {
  var e = -1, r = Array(t.size);
  return t.forEach(function(n) {
    r[++e] = n;
  }), r;
}
var on = 1, un = 2, fn = "[object Boolean]", cn = "[object Date]", pn = "[object Error]", ln = "[object Map]", gn = "[object Number]", dn = "[object RegExp]", hn = "[object Set]", _n = "[object String]", vn = "[object Symbol]", yn = "[object ArrayBuffer]", bn = "[object DataView]", yt = $ ? $.prototype : void 0, W = yt ? yt.valueOf : void 0;
function mn(t, e, r, n, s, a, i) {
  switch (r) {
    case bn:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case yn:
      return !(t.byteLength != e.byteLength || !a(new vt(t), new vt(e)));
    case fn:
    case cn:
    case gn:
      return $t(+t, +e);
    case pn:
      return t.name == e.name && t.message == e.message;
    case dn:
    case _n:
      return t == e + "";
    case ln:
      var c = an;
    case hn:
      var f = n & on;
      if (c || (c = sn), t.size != e.size && !f)
        return !1;
      var o = i.get(t);
      if (o)
        return o == e;
      n |= un, i.set(t, e);
      var g = Rt(c(t), c(e), n, s, a, i);
      return i.delete(t), g;
    case vn:
      if (W)
        return W.call(t) == W.call(e);
  }
  return !1;
}
var Tn = 1, An = Object.prototype, wn = An.hasOwnProperty;
function On(t, e, r, n, s, a) {
  var i = r & Tn, c = pt(t), f = c.length, o = pt(e), g = o.length;
  if (f != g && !i)
    return !1;
  for (var d = f; d--; ) {
    var p = c[d];
    if (!(i ? p in e : wn.call(e, p)))
      return !1;
  }
  var v = a.get(t), h = a.get(e);
  if (v && h)
    return v == e && h == t;
  var _ = !0;
  a.set(t, e), a.set(e, t);
  for (var l = i; ++d < f; ) {
    p = c[d];
    var y = t[p], w = e[p];
    if (n)
      var rt = i ? n(w, y, p, e, t, a) : n(y, w, p, t, e, a);
    if (!(rt === void 0 ? y === w || s(y, w, r, n, a) : rt)) {
      _ = !1;
      break;
    }
    l || (l = p == "constructor");
  }
  if (_ && !l) {
    var D = t.constructor, N = e.constructor;
    D != N && "constructor" in t && "constructor" in e && !(typeof D == "function" && D instanceof D && typeof N == "function" && N instanceof N) && (_ = !1);
  }
  return a.delete(t), a.delete(e), _;
}
var En = 1, bt = "[object Arguments]", mt = "[object Array]", B = "[object Object]", jn = Object.prototype, Tt = jn.hasOwnProperty;
function $n(t, e, r, n, s, a) {
  var i = G(t), c = G(e), f = i ? mt : T(t), o = c ? mt : T(e);
  f = f == bt ? B : f, o = o == bt ? B : o;
  var g = f == B, d = o == B, p = f == o;
  if (p && Q(t)) {
    if (!Q(e))
      return !1;
    i = !0, g = !1;
  }
  if (p && !g)
    return a || (a = new A()), i || Mt(t) ? Rt(t, e, r, n, s, a) : mn(t, e, f, r, n, s, a);
  if (!(r & En)) {
    var v = g && Tt.call(t, "__wrapped__"), h = d && Tt.call(e, "__wrapped__");
    if (v || h) {
      var _ = v ? t.value() : t, l = h ? e.value() : e;
      return a || (a = new A()), s(_, l, r, n, a);
    }
  }
  return p ? (a || (a = new A()), On(t, e, r, n, s, a)) : !1;
}
function xt(t, e, r, n, s) {
  return t === e ? !0 : t == null || e == null || !M(t) && !M(e) ? t !== t && e !== e : $n(t, e, r, n, xt, s);
}
function Sn(t, e) {
  return xt(t, e);
}
const At = (t) => new google.maps.LatLng(t.lat, t.lng);
class Pn {
  /**
   * @constructor
   * @param element 지도를 올릴 타겟 엘리먼트
   * @param controlOption 컨트롤 옵션
   * @link https://developers.google.com/maps/documentation/javascript/reference/map?hl=ko#MapOptions
   */
  constructor(e, r) {
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
      zoom: (r == null ? void 0 : r.zoom) || et.ZOOM_SIZE
    };
    this.map = new google.maps.Map(e, n), this.markers = [];
  }
  /**
   * 마커 이외의 영역 클릭 시 액티브 마커 해제하도록 설정하는 이벤트 등록 함수
   * @param callback 지도 클릭 이벤트 핸들러
   */
  initMapEventListener(e) {
    google.maps.event.addListener(this.map, "click", () => {
      e();
    });
  }
  /**
   * 마커 리스트 생성 함수
   * @param items 상품 정보 리스트
   * @reference google.maps.Marker
   * @link https://developers.google.com/maps/documentation/javascript/reference/marker
   */
  makeMarkers(e) {
    if (this.markers.forEach((n) => n.setMap(null)), this.markers = [], e.length === 0)
      return;
    const r = new google.maps.LatLngBounds();
    if (e.forEach((n) => {
      const s = At(n.position);
      r.extend(s);
      const a = new google.maps.Marker({
        position: s,
        map: this.map
      });
      this.markers.push(a);
    }), e.length <= 1) {
      const [n] = e, s = At(n.position);
      this.setCenter(s);
    } else
      this.setBounds(r);
  }
  /**
   * 지도 줌 사이즈 Set 함수
   * @param zoom 줌 사이즈
   */
  setZoom(e) {
    this.map.setZoom(e);
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
  setCenter(e) {
    this.map.setCenter(e);
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
  setBounds(e) {
    this.map.fitBounds(e);
  }
  /**
   * 지도 경계 객체 Get 함수
   * @returns 경계 객체
   */
  getBounds() {
    return this.map.getBounds();
  }
}
const q = (t) => new naver.maps.LatLng(t.lat, t.lng);
class In {
  /**
   * @constructor
   * @param element 지도를 올릴 타겟 엘리먼트
   * @param controlOption 컨트롤 옵션
   * @link https://navermaps.github.io/maps.js.ncp/docs/naver.maps.html#.MapOptions
   */
  constructor(e, r) {
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
      zoom: (r == null ? void 0 : r.zoom) || et.ZOOM_SIZE
    };
    this.map = new naver.maps.Map(e, n), this.markers = [];
  }
  /**
   * 마커 이외의 영역 클릭 시 액티브 마커 해제하도록 설정하는 이벤트 등록 함수
   * @param callback 지도 클릭 이벤트 핸들러
   */
  initMapEventListener(e) {
    naver.maps.Event.addListener(this.map, "click", () => {
      e();
    });
  }
  /**
   * 마커 리스트 생성 함수
   * @param items 상품 정보 리스트
   * @param callback 마커 클릭 이벤트 핸들러
   * @link https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html
   */
  makeMarkers(e) {
    if (this.markers.forEach((r) => r.setMap(null)), this.markers = [], e.length !== 0)
      if (e.forEach((r) => {
        const n = new naver.maps.Marker({
          position: q(r.position),
          map: this.map
        });
        this.markers.push(n);
      }), e.length <= 1) {
        const [r] = e, n = q(r.position);
        this.setCenter(n);
      } else {
        const r = e.map((n) => q(n.position));
        this.setBounds(r);
      }
  }
  /**
   * 지도 줌 사이즈 Set 함수
   * @param zoom 줌 사이즈
   */
  setZoom(e) {
    this.map.setZoom(e);
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
  setCenter(e) {
    this.map.setCenter(e);
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
  setBounds(e) {
    this.map.fitBounds(e);
  }
  /**
   * 지도 경계 객체 Get 함수
   * @returns 경계 객체
   */
  getBounds() {
    return this.map.getBounds();
  }
}
const Cn = ({ apiKey: t, isGoogle: e, initMap: r, children: n }) => {
  const s = `https://maps.googleapis.com/maps/api/js?key=${t}&callback=initMap&region=KR`, a = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${t}`;
  return Z(() => {
    window.initMap = r;
    const i = document.createElement("script");
    i.src = e ? s : a, i.onload = () => r(), document.body.appendChild(i);
  }, []), /* @__PURE__ */ J(Nt, { children: n });
}, Ln = ({ type: t, apiKey: e, options: r, items: n, selectedItem: s, onClickMarker: a }) => {
  const i = Bt(null), c = t === "google", [f, o] = U(), [g, d] = U(n), [p, v] = U(), h = Zt(() => {
    const l = i.current;
    if (!l)
      return;
    let y;
    c ? y = new Pn(l, r) : y = new In(l, r), o(y);
  }, []), _ = (l) => {
    v(l), a && a(l);
  };
  return Z(() => {
    f && (f.initMapEventListener(_), f.makeMarkers(g));
  }, [f, g]), Z(() => {
    Sn(n, g) || d(n);
  }, [n]), Z(() => {
    s !== p && v(s);
  }, [s]), /* @__PURE__ */ J(
    Cn,
    {
      apiKey: e,
      isGoogle: c,
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
  et as MapEnum,
  Ln as default
};
