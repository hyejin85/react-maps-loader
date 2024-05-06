var Re = Object.defineProperty;
var Be = (e, t, r) => t in e ? Re(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var C = (e, t, r) => (Be(e, typeof t != "symbol" ? t + "" : t, r), r);
import { jsx as J, Fragment as ze } from "react/jsx-runtime";
import { useEffect as F, useRef as De, useState as K, useCallback as Ge } from "react";
const O = (e) => new naver.maps.LatLng(e.lat, e.lng);
class Fe {
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
      zoom: r == null ? void 0 : r.zoom,
      zoomControl: (r == null ? void 0 : r.zoomControl) || !1,
      zoomControlOptions: {
        style: (n = naver.maps) == null ? void 0 : n.ZoomControlStyle.SMALL,
        position: (i = naver.maps) == null ? void 0 : i.Position.TOP_RIGHT
      },
      minZoom: r == null ? void 0 : r.minZoom,
      maxZoom: r == null ? void 0 : r.maxZoom,
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
        const [r] = t, a = O(r.position);
        this.setCenter(a);
      } else
        this.setBounds(t);
      t.forEach((r) => {
        const a = new naver.maps.Marker({
          position: O(r.position),
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
    const r = t.map((a) => O(a.position));
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
const He = Fe;
var we = typeof global == "object" && global && global.Object === Object && global, Ne = typeof self == "object" && self && self.Object === Object && self, y = we || Ne || Function("return this")(), S = y.Symbol, Ae = Object.prototype, Ze = Ae.hasOwnProperty, Ue = Ae.toString, x = S ? S.toStringTag : void 0;
function Ke(e) {
  var t = Ze.call(e, x), r = e[x];
  try {
    e[x] = void 0;
    var a = !0;
  } catch {
  }
  var s = Ue.call(e);
  return a && (t ? e[x] = r : delete e[x]), s;
}
var Oe = Object.prototype, We = Oe.toString;
function qe(e) {
  return We.call(e);
}
var Xe = "[object Null]", Je = "[object Undefined]", re = S ? S.toStringTag : void 0;
function B(e) {
  return e == null ? e === void 0 ? Je : Xe : re && re in Object(e) ? Ke(e) : qe(e);
}
function L(e) {
  return e != null && typeof e == "object";
}
var H = Array.isArray;
function $e(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ye = "[object AsyncFunction]", Qe = "[object Function]", Ve = "[object GeneratorFunction]", ke = "[object Proxy]";
function je(e) {
  if (!$e(e))
    return !1;
  var t = B(e);
  return t == Qe || t == Ve || t == Ye || t == ke;
}
var W = y["__core-js_shared__"], ae = function() {
  var e = /[^.]+$/.exec(W && W.keys && W.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function et(e) {
  return !!ae && ae in e;
}
var tt = Function.prototype, rt = tt.toString;
function j(e) {
  if (e != null) {
    try {
      return rt.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var at = /[\\^$.*+?()[\]{}|]/g, nt = /^\[object .+?Constructor\]$/, st = Function.prototype, it = Object.prototype, ot = st.toString, ut = it.hasOwnProperty, ft = RegExp(
  "^" + ot.call(ut).replace(at, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function pt(e) {
  if (!$e(e) || et(e))
    return !1;
  var t = je(e) ? ft : nt;
  return t.test(j(e));
}
function ct(e, t) {
  return e == null ? void 0 : e[t];
}
function E(e, t) {
  var r = ct(e, t);
  return pt(r) ? r : void 0;
}
var Y = E(y, "WeakMap"), gt = 9007199254740991, lt = /^(?:0|[1-9]\d*)$/;
function dt(e, t) {
  var r = typeof e;
  return t = t ?? gt, !!t && (r == "number" || r != "symbol" && lt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Pe(e, t) {
  return e === t || e !== e && t !== t;
}
var ht = 9007199254740991;
function Ce(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ht;
}
function mt(e) {
  return e != null && Ce(e.length) && !je(e);
}
var _t = Object.prototype;
function vt(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || _t;
  return e === r;
}
function yt(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var bt = "[object Arguments]";
function ne(e) {
  return L(e) && B(e) == bt;
}
var Se = Object.prototype, Tt = Se.hasOwnProperty, wt = Se.propertyIsEnumerable, At = ne(/* @__PURE__ */ function() {
  return arguments;
}()) ? ne : function(e) {
  return L(e) && Tt.call(e, "callee") && !wt.call(e, "callee");
};
function $t() {
  return !1;
}
var Ee = typeof exports == "object" && exports && !exports.nodeType && exports, se = Ee && typeof module == "object" && module && !module.nodeType && module, jt = se && se.exports === Ee, ie = jt ? y.Buffer : void 0, Pt = ie ? ie.isBuffer : void 0, Q = Pt || $t, Ct = "[object Arguments]", St = "[object Array]", Et = "[object Boolean]", xt = "[object Date]", Mt = "[object Error]", Lt = "[object Function]", It = "[object Map]", Rt = "[object Number]", Bt = "[object Object]", zt = "[object RegExp]", Dt = "[object Set]", Gt = "[object String]", Ft = "[object WeakMap]", Ht = "[object ArrayBuffer]", Nt = "[object DataView]", Zt = "[object Float32Array]", Ut = "[object Float64Array]", Kt = "[object Int8Array]", Ot = "[object Int16Array]", Wt = "[object Int32Array]", qt = "[object Uint8Array]", Xt = "[object Uint8ClampedArray]", Jt = "[object Uint16Array]", Yt = "[object Uint32Array]", f = {};
f[Zt] = f[Ut] = f[Kt] = f[Ot] = f[Wt] = f[qt] = f[Xt] = f[Jt] = f[Yt] = !0;
f[Ct] = f[St] = f[Ht] = f[Et] = f[Nt] = f[xt] = f[Mt] = f[Lt] = f[It] = f[Rt] = f[Bt] = f[zt] = f[Dt] = f[Gt] = f[Ft] = !1;
function Qt(e) {
  return L(e) && Ce(e.length) && !!f[B(e)];
}
function Vt(e) {
  return function(t) {
    return e(t);
  };
}
var xe = typeof exports == "object" && exports && !exports.nodeType && exports, M = xe && typeof module == "object" && module && !module.nodeType && module, kt = M && M.exports === xe, q = kt && we.process, oe = function() {
  try {
    var e = M && M.require && M.require("util").types;
    return e || q && q.binding && q.binding("util");
  } catch {
  }
}(), ue = oe && oe.isTypedArray, Me = ue ? Vt(ue) : Qt, er = Object.prototype, tr = er.hasOwnProperty;
function rr(e, t) {
  var r = H(e), a = !r && At(e), s = !r && !a && Q(e), n = !r && !a && !s && Me(e), i = r || a || s || n, p = i ? yt(e.length, String) : [], o = p.length;
  for (var u in e)
    tr.call(e, u) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    dt(u, o))) && p.push(u);
  return p;
}
function ar(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var nr = ar(Object.keys, Object), sr = Object.prototype, ir = sr.hasOwnProperty;
function or(e) {
  if (!vt(e))
    return nr(e);
  var t = [];
  for (var r in Object(e))
    ir.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ur(e) {
  return mt(e) ? rr(e) : or(e);
}
var I = E(Object, "create");
function fr() {
  this.__data__ = I ? I(null) : {}, this.size = 0;
}
function pr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var cr = "__lodash_hash_undefined__", gr = Object.prototype, lr = gr.hasOwnProperty;
function dr(e) {
  var t = this.__data__;
  if (I) {
    var r = t[e];
    return r === cr ? void 0 : r;
  }
  return lr.call(t, e) ? t[e] : void 0;
}
var hr = Object.prototype, mr = hr.hasOwnProperty;
function _r(e) {
  var t = this.__data__;
  return I ? t[e] !== void 0 : mr.call(t, e);
}
var vr = "__lodash_hash_undefined__";
function yr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = I && t === void 0 ? vr : t, this;
}
function $(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
$.prototype.clear = fr;
$.prototype.delete = pr;
$.prototype.get = dr;
$.prototype.has = _r;
$.prototype.set = yr;
function br() {
  this.__data__ = [], this.size = 0;
}
function Z(e, t) {
  for (var r = e.length; r--; )
    if (Pe(e[r][0], t))
      return r;
  return -1;
}
var Tr = Array.prototype, wr = Tr.splice;
function Ar(e) {
  var t = this.__data__, r = Z(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : wr.call(t, r, 1), --this.size, !0;
}
function $r(e) {
  var t = this.__data__, r = Z(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function jr(e) {
  return Z(this.__data__, e) > -1;
}
function Pr(e, t) {
  var r = this.__data__, a = Z(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
function b(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
b.prototype.clear = br;
b.prototype.delete = Ar;
b.prototype.get = $r;
b.prototype.has = jr;
b.prototype.set = Pr;
var R = E(y, "Map");
function Cr() {
  this.size = 0, this.__data__ = {
    hash: new $(),
    map: new (R || b)(),
    string: new $()
  };
}
function Sr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function U(e, t) {
  var r = e.__data__;
  return Sr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Er(e) {
  var t = U(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xr(e) {
  return U(this, e).get(e);
}
function Mr(e) {
  return U(this, e).has(e);
}
function Lr(e, t) {
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
P.prototype.clear = Cr;
P.prototype.delete = Er;
P.prototype.get = xr;
P.prototype.has = Mr;
P.prototype.set = Lr;
function Ir(e, t) {
  for (var r = -1, a = t.length, s = e.length; ++r < a; )
    e[s + r] = t[r];
  return e;
}
function Rr() {
  this.__data__ = new b(), this.size = 0;
}
function Br(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function zr(e) {
  return this.__data__.get(e);
}
function Dr(e) {
  return this.__data__.has(e);
}
var Gr = 200;
function Fr(e, t) {
  var r = this.__data__;
  if (r instanceof b) {
    var a = r.__data__;
    if (!R || a.length < Gr - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new P(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
function w(e) {
  var t = this.__data__ = new b(e);
  this.size = t.size;
}
w.prototype.clear = Rr;
w.prototype.delete = Br;
w.prototype.get = zr;
w.prototype.has = Dr;
w.prototype.set = Fr;
function Hr(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, s = 0, n = []; ++r < a; ) {
    var i = e[r];
    t(i, r, e) && (n[s++] = i);
  }
  return n;
}
function Nr() {
  return [];
}
var Zr = Object.prototype, Ur = Zr.propertyIsEnumerable, fe = Object.getOwnPropertySymbols, Kr = fe ? function(e) {
  return e == null ? [] : (e = Object(e), Hr(fe(e), function(t) {
    return Ur.call(e, t);
  }));
} : Nr;
function Or(e, t, r) {
  var a = t(e);
  return H(e) ? a : Ir(a, r(e));
}
function pe(e) {
  return Or(e, ur, Kr);
}
var V = E(y, "DataView"), k = E(y, "Promise"), ee = E(y, "Set"), ce = "[object Map]", Wr = "[object Object]", ge = "[object Promise]", le = "[object Set]", de = "[object WeakMap]", he = "[object DataView]", qr = j(V), Xr = j(R), Jr = j(k), Yr = j(ee), Qr = j(Y), T = B;
(V && T(new V(new ArrayBuffer(1))) != he || R && T(new R()) != ce || k && T(k.resolve()) != ge || ee && T(new ee()) != le || Y && T(new Y()) != de) && (T = function(e) {
  var t = B(e), r = t == Wr ? e.constructor : void 0, a = r ? j(r) : "";
  if (a)
    switch (a) {
      case qr:
        return he;
      case Xr:
        return ce;
      case Jr:
        return ge;
      case Yr:
        return le;
      case Qr:
        return de;
    }
  return t;
});
var me = y.Uint8Array, Vr = "__lodash_hash_undefined__";
function kr(e) {
  return this.__data__.set(e, Vr), this;
}
function ea(e) {
  return this.__data__.has(e);
}
function N(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new P(); ++t < r; )
    this.add(e[t]);
}
N.prototype.add = N.prototype.push = kr;
N.prototype.has = ea;
function ta(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function ra(e, t) {
  return e.has(t);
}
var aa = 1, na = 2;
function Le(e, t, r, a, s, n) {
  var i = r & aa, p = e.length, o = t.length;
  if (p != o && !(i && o > p))
    return !1;
  var u = n.get(e), l = n.get(t);
  if (u && l)
    return u == t && l == e;
  var d = -1, c = !0, _ = r & na ? new N() : void 0;
  for (n.set(e, t), n.set(t, e); ++d < p; ) {
    var h = e[d], m = t[d];
    if (a)
      var g = i ? a(m, h, d, t, e, n) : a(h, m, d, e, t, n);
    if (g !== void 0) {
      if (g)
        continue;
      c = !1;
      break;
    }
    if (_) {
      if (!ta(t, function(v, A) {
        if (!ra(_, A) && (h === v || s(h, v, r, a, n)))
          return _.push(A);
      })) {
        c = !1;
        break;
      }
    } else if (!(h === m || s(h, m, r, a, n))) {
      c = !1;
      break;
    }
  }
  return n.delete(e), n.delete(t), c;
}
function sa(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a, s) {
    r[++t] = [s, a];
  }), r;
}
function ia(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a) {
    r[++t] = a;
  }), r;
}
var oa = 1, ua = 2, fa = "[object Boolean]", pa = "[object Date]", ca = "[object Error]", ga = "[object Map]", la = "[object Number]", da = "[object RegExp]", ha = "[object Set]", ma = "[object String]", _a = "[object Symbol]", va = "[object ArrayBuffer]", ya = "[object DataView]", _e = S ? S.prototype : void 0, X = _e ? _e.valueOf : void 0;
function ba(e, t, r, a, s, n, i) {
  switch (r) {
    case ya:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case va:
      return !(e.byteLength != t.byteLength || !n(new me(e), new me(t)));
    case fa:
    case pa:
    case la:
      return Pe(+e, +t);
    case ca:
      return e.name == t.name && e.message == t.message;
    case da:
    case ma:
      return e == t + "";
    case ga:
      var p = sa;
    case ha:
      var o = a & oa;
      if (p || (p = ia), e.size != t.size && !o)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      a |= ua, i.set(e, t);
      var l = Le(p(e), p(t), a, s, n, i);
      return i.delete(e), l;
    case _a:
      if (X)
        return X.call(e) == X.call(t);
  }
  return !1;
}
var Ta = 1, wa = Object.prototype, Aa = wa.hasOwnProperty;
function $a(e, t, r, a, s, n) {
  var i = r & Ta, p = pe(e), o = p.length, u = pe(t), l = u.length;
  if (o != l && !i)
    return !1;
  for (var d = o; d--; ) {
    var c = p[d];
    if (!(i ? c in t : Aa.call(t, c)))
      return !1;
  }
  var _ = n.get(e), h = n.get(t);
  if (_ && h)
    return _ == t && h == e;
  var m = !0;
  n.set(e, t), n.set(t, e);
  for (var g = i; ++d < o; ) {
    c = p[d];
    var v = e[c], A = t[c];
    if (a)
      var te = i ? a(A, v, c, t, e, n) : a(v, A, c, e, t, n);
    if (!(te === void 0 ? v === A || s(v, A, r, a, n) : te)) {
      m = !1;
      break;
    }
    g || (g = c == "constructor");
  }
  if (m && !g) {
    var z = e.constructor, D = t.constructor;
    z != D && "constructor" in e && "constructor" in t && !(typeof z == "function" && z instanceof z && typeof D == "function" && D instanceof D) && (m = !1);
  }
  return n.delete(e), n.delete(t), m;
}
var ja = 1, ve = "[object Arguments]", ye = "[object Array]", G = "[object Object]", Pa = Object.prototype, be = Pa.hasOwnProperty;
function Ca(e, t, r, a, s, n) {
  var i = H(e), p = H(t), o = i ? ye : T(e), u = p ? ye : T(t);
  o = o == ve ? G : o, u = u == ve ? G : u;
  var l = o == G, d = u == G, c = o == u;
  if (c && Q(e)) {
    if (!Q(t))
      return !1;
    i = !0, l = !1;
  }
  if (c && !l)
    return n || (n = new w()), i || Me(e) ? Le(e, t, r, a, s, n) : ba(e, t, o, r, a, s, n);
  if (!(r & ja)) {
    var _ = l && be.call(e, "__wrapped__"), h = d && be.call(t, "__wrapped__");
    if (_ || h) {
      var m = _ ? e.value() : e, g = h ? t.value() : t;
      return n || (n = new w()), s(m, g, r, a, n);
    }
  }
  return c ? (n || (n = new w()), $a(e, t, r, a, s, n)) : !1;
}
function Ie(e, t, r, a, s) {
  return e === t ? !0 : e == null || t == null || !L(e) && !L(t) ? e !== e && t !== t : Ca(e, t, r, a, Ie, s);
}
function Sa(e, t) {
  return Ie(e, t);
}
const Te = (e) => new google.maps.LatLng(e.lat, e.lng);
class Ea {
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
      zoom: r == null ? void 0 : r.zoom,
      zoomControl: (r == null ? void 0 : r.zoomControl) || !1,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
      },
      minZoom: r == null ? void 0 : r.minZoom,
      maxZoom: r == null ? void 0 : r.maxZoom,
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
const xa = ({ apiKey: e, isGoogle: t, initMap: r, children: a }) => {
  const s = (n) => t ? `https://maps.googleapis.com/maps/api/js?key=${n}&callback=initMap&region=KR` : `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${n}`;
  return F(() => {
    window.initMap = r;
    const n = document.createElement("script");
    n.src = s(e), n.async = !0, document.body.appendChild(n);
  }, []), /* @__PURE__ */ J(ze, { children: a });
}, Ma = ({ type: e, apiKey: t, options: r, items: a, selectedItem: s, onClickMarker: n }) => {
  const i = De(null), p = e === "google", [o, u] = K(), [l, d] = K(a), [c, _] = K(), h = Ge(() => {
    const g = i.current;
    if (!g)
      return;
    let v;
    p ? v = new Ea(g, r) : v = new He(g, r), u(v);
  }, []), m = (g) => {
    _(g), n && n(g);
  };
  return F(() => {
    o && (o.initMapEventListener(m), o.makeMarkers(l));
  }, [o, l]), F(() => {
    Sa(a, l) || d(a);
  }, [a]), F(() => {
    s !== c && _(s);
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
}, Ba = Ma;
export {
  Ba as NaverMap,
  He as default
};
