var Ie = Object.defineProperty;
var Be = (e, t, r) => t in e ? Ie(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var S = (e, t, r) => (Be(e, typeof t != "symbol" ? t + "" : t, r), r);
import { jsx as Re } from "react/jsx-runtime";
import { useRef as ze, useState as U, useCallback as De, useEffect as K } from "react";
var Te = typeof global == "object" && global && global.Object === Object && global, Ge = typeof self == "object" && self && self.Object === Object && self, m = Te || Ge || Function("return this")(), C = m.Symbol, we = Object.prototype, He = we.hasOwnProperty, Fe = we.toString, x = C ? C.toStringTag : void 0;
function Ze(e) {
  var t = He.call(e, x), r = e[x];
  try {
    e[x] = void 0;
    var a = !0;
  } catch {
  }
  var s = Fe.call(e);
  return a && (t ? e[x] = r : delete e[x]), s;
}
var Ne = Object.prototype, Ue = Ne.toString;
function Ke(e) {
  return Ue.call(e);
}
var Oe = "[object Null]", We = "[object Undefined]", te = C ? C.toStringTag : void 0;
function R(e) {
  return e == null ? e === void 0 ? We : Oe : te && te in Object(e) ? Ze(e) : Ke(e);
}
function M(e) {
  return e != null && typeof e == "object";
}
var H = Array.isArray;
function Ae(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var qe = "[object AsyncFunction]", Xe = "[object Function]", Je = "[object GeneratorFunction]", Ye = "[object Proxy]";
function je(e) {
  if (!Ae(e))
    return !1;
  var t = R(e);
  return t == Xe || t == Je || t == qe || t == Ye;
}
var O = m["__core-js_shared__"], re = function() {
  var e = /[^.]+$/.exec(O && O.keys && O.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Qe(e) {
  return !!re && re in e;
}
var Ve = Function.prototype, ke = Ve.toString;
function P(e) {
  if (e != null) {
    try {
      return ke.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var et = /[\\^$.*+?()[\]{}|]/g, tt = /^\[object .+?Constructor\]$/, rt = Function.prototype, at = Object.prototype, nt = rt.toString, st = at.hasOwnProperty, it = RegExp(
  "^" + nt.call(st).replace(et, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ot(e) {
  if (!Ae(e) || Qe(e))
    return !1;
  var t = je(e) ? it : tt;
  return t.test(P(e));
}
function ut(e, t) {
  return e == null ? void 0 : e[t];
}
function E(e, t) {
  var r = ut(e, t);
  return ot(r) ? r : void 0;
}
var J = E(m, "WeakMap"), ft = 9007199254740991, gt = /^(?:0|[1-9]\d*)$/;
function pt(e, t) {
  var r = typeof e;
  return t = t ?? ft, !!t && (r == "number" || r != "symbol" && gt.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Pe(e, t) {
  return e === t || e !== e && t !== t;
}
var lt = 9007199254740991;
function $e(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= lt;
}
function ct(e) {
  return e != null && $e(e.length) && !je(e);
}
var dt = Object.prototype;
function ht(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || dt;
  return e === r;
}
function _t(e, t) {
  for (var r = -1, a = Array(e); ++r < e; )
    a[r] = t(r);
  return a;
}
var yt = "[object Arguments]";
function ae(e) {
  return M(e) && R(e) == yt;
}
var Se = Object.prototype, mt = Se.hasOwnProperty, vt = Se.propertyIsEnumerable, bt = ae(/* @__PURE__ */ function() {
  return arguments;
}()) ? ae : function(e) {
  return M(e) && mt.call(e, "callee") && !vt.call(e, "callee");
};
function Tt() {
  return !1;
}
var Ce = typeof exports == "object" && exports && !exports.nodeType && exports, ne = Ce && typeof module == "object" && module && !module.nodeType && module, wt = ne && ne.exports === Ce, se = wt ? m.Buffer : void 0, At = se ? se.isBuffer : void 0, Y = At || Tt, jt = "[object Arguments]", Pt = "[object Array]", $t = "[object Boolean]", St = "[object Date]", Ct = "[object Error]", Et = "[object Function]", xt = "[object Map]", Lt = "[object Number]", Mt = "[object Object]", It = "[object RegExp]", Bt = "[object Set]", Rt = "[object String]", zt = "[object WeakMap]", Dt = "[object ArrayBuffer]", Gt = "[object DataView]", Ht = "[object Float32Array]", Ft = "[object Float64Array]", Zt = "[object Int8Array]", Nt = "[object Int16Array]", Ut = "[object Int32Array]", Kt = "[object Uint8Array]", Ot = "[object Uint8ClampedArray]", Wt = "[object Uint16Array]", qt = "[object Uint32Array]", f = {};
f[Ht] = f[Ft] = f[Zt] = f[Nt] = f[Ut] = f[Kt] = f[Ot] = f[Wt] = f[qt] = !0;
f[jt] = f[Pt] = f[Dt] = f[$t] = f[Gt] = f[St] = f[Ct] = f[Et] = f[xt] = f[Lt] = f[Mt] = f[It] = f[Bt] = f[Rt] = f[zt] = !1;
function Xt(e) {
  return M(e) && $e(e.length) && !!f[R(e)];
}
function Jt(e) {
  return function(t) {
    return e(t);
  };
}
var Ee = typeof exports == "object" && exports && !exports.nodeType && exports, L = Ee && typeof module == "object" && module && !module.nodeType && module, Yt = L && L.exports === Ee, W = Yt && Te.process, ie = function() {
  try {
    var e = L && L.require && L.require("util").types;
    return e || W && W.binding && W.binding("util");
  } catch {
  }
}(), oe = ie && ie.isTypedArray, xe = oe ? Jt(oe) : Xt, Qt = Object.prototype, Vt = Qt.hasOwnProperty;
function kt(e, t) {
  var r = H(e), a = !r && bt(e), s = !r && !a && Y(e), n = !r && !a && !s && xe(e), i = r || a || s || n, g = i ? _t(e.length, String) : [], o = g.length;
  for (var u in e)
    Vt.call(e, u) && !(i && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    s && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    pt(u, o))) && g.push(u);
  return g;
}
function er(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var tr = er(Object.keys, Object), rr = Object.prototype, ar = rr.hasOwnProperty;
function nr(e) {
  if (!ht(e))
    return tr(e);
  var t = [];
  for (var r in Object(e))
    ar.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function sr(e) {
  return ct(e) ? kt(e) : nr(e);
}
var I = E(Object, "create");
function ir() {
  this.__data__ = I ? I(null) : {}, this.size = 0;
}
function or(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ur = "__lodash_hash_undefined__", fr = Object.prototype, gr = fr.hasOwnProperty;
function pr(e) {
  var t = this.__data__;
  if (I) {
    var r = t[e];
    return r === ur ? void 0 : r;
  }
  return gr.call(t, e) ? t[e] : void 0;
}
var lr = Object.prototype, cr = lr.hasOwnProperty;
function dr(e) {
  var t = this.__data__;
  return I ? t[e] !== void 0 : cr.call(t, e);
}
var hr = "__lodash_hash_undefined__";
function _r(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = I && t === void 0 ? hr : t, this;
}
function j(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
j.prototype.clear = ir;
j.prototype.delete = or;
j.prototype.get = pr;
j.prototype.has = dr;
j.prototype.set = _r;
function yr() {
  this.__data__ = [], this.size = 0;
}
function Z(e, t) {
  for (var r = e.length; r--; )
    if (Pe(e[r][0], t))
      return r;
  return -1;
}
var mr = Array.prototype, vr = mr.splice;
function br(e) {
  var t = this.__data__, r = Z(t, e);
  if (r < 0)
    return !1;
  var a = t.length - 1;
  return r == a ? t.pop() : vr.call(t, r, 1), --this.size, !0;
}
function Tr(e) {
  var t = this.__data__, r = Z(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function wr(e) {
  return Z(this.__data__, e) > -1;
}
function Ar(e, t) {
  var r = this.__data__, a = Z(r, e);
  return a < 0 ? (++this.size, r.push([e, t])) : r[a][1] = t, this;
}
function v(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
v.prototype.clear = yr;
v.prototype.delete = br;
v.prototype.get = Tr;
v.prototype.has = wr;
v.prototype.set = Ar;
var B = E(m, "Map");
function jr() {
  this.size = 0, this.__data__ = {
    hash: new j(),
    map: new (B || v)(),
    string: new j()
  };
}
function Pr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function N(e, t) {
  var r = e.__data__;
  return Pr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function $r(e) {
  var t = N(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Sr(e) {
  return N(this, e).get(e);
}
function Cr(e) {
  return N(this, e).has(e);
}
function Er(e, t) {
  var r = N(this, e), a = r.size;
  return r.set(e, t), this.size += r.size == a ? 0 : 1, this;
}
function $(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var a = e[t];
    this.set(a[0], a[1]);
  }
}
$.prototype.clear = jr;
$.prototype.delete = $r;
$.prototype.get = Sr;
$.prototype.has = Cr;
$.prototype.set = Er;
function xr(e, t) {
  for (var r = -1, a = t.length, s = e.length; ++r < a; )
    e[s + r] = t[r];
  return e;
}
function Lr() {
  this.__data__ = new v(), this.size = 0;
}
function Mr(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Ir(e) {
  return this.__data__.get(e);
}
function Br(e) {
  return this.__data__.has(e);
}
var Rr = 200;
function zr(e, t) {
  var r = this.__data__;
  if (r instanceof v) {
    var a = r.__data__;
    if (!B || a.length < Rr - 1)
      return a.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new $(a);
  }
  return r.set(e, t), this.size = r.size, this;
}
function T(e) {
  var t = this.__data__ = new v(e);
  this.size = t.size;
}
T.prototype.clear = Lr;
T.prototype.delete = Mr;
T.prototype.get = Ir;
T.prototype.has = Br;
T.prototype.set = zr;
function Dr(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length, s = 0, n = []; ++r < a; ) {
    var i = e[r];
    t(i, r, e) && (n[s++] = i);
  }
  return n;
}
function Gr() {
  return [];
}
var Hr = Object.prototype, Fr = Hr.propertyIsEnumerable, ue = Object.getOwnPropertySymbols, Zr = ue ? function(e) {
  return e == null ? [] : (e = Object(e), Dr(ue(e), function(t) {
    return Fr.call(e, t);
  }));
} : Gr;
function Nr(e, t, r) {
  var a = t(e);
  return H(e) ? a : xr(a, r(e));
}
function fe(e) {
  return Nr(e, sr, Zr);
}
var Q = E(m, "DataView"), V = E(m, "Promise"), k = E(m, "Set"), ge = "[object Map]", Ur = "[object Object]", pe = "[object Promise]", le = "[object Set]", ce = "[object WeakMap]", de = "[object DataView]", Kr = P(Q), Or = P(B), Wr = P(V), qr = P(k), Xr = P(J), b = R;
(Q && b(new Q(new ArrayBuffer(1))) != de || B && b(new B()) != ge || V && b(V.resolve()) != pe || k && b(new k()) != le || J && b(new J()) != ce) && (b = function(e) {
  var t = R(e), r = t == Ur ? e.constructor : void 0, a = r ? P(r) : "";
  if (a)
    switch (a) {
      case Kr:
        return de;
      case Or:
        return ge;
      case Wr:
        return pe;
      case qr:
        return le;
      case Xr:
        return ce;
    }
  return t;
});
var he = m.Uint8Array, Jr = "__lodash_hash_undefined__";
function Yr(e) {
  return this.__data__.set(e, Jr), this;
}
function Qr(e) {
  return this.__data__.has(e);
}
function F(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new $(); ++t < r; )
    this.add(e[t]);
}
F.prototype.add = F.prototype.push = Yr;
F.prototype.has = Qr;
function Vr(e, t) {
  for (var r = -1, a = e == null ? 0 : e.length; ++r < a; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function kr(e, t) {
  return e.has(t);
}
var ea = 1, ta = 2;
function Le(e, t, r, a, s, n) {
  var i = r & ea, g = e.length, o = t.length;
  if (g != o && !(i && o > g))
    return !1;
  var u = n.get(e), c = n.get(t);
  if (u && c)
    return u == t && c == e;
  var d = -1, p = !0, _ = r & ta ? new F() : void 0;
  for (n.set(e, t), n.set(t, e); ++d < g; ) {
    var h = e[d], l = t[d];
    if (a)
      var y = i ? a(l, h, d, t, e, n) : a(h, l, d, e, t, n);
    if (y !== void 0) {
      if (y)
        continue;
      p = !1;
      break;
    }
    if (_) {
      if (!Vr(t, function(w, A) {
        if (!kr(_, A) && (h === w || s(h, w, r, a, n)))
          return _.push(A);
      })) {
        p = !1;
        break;
      }
    } else if (!(h === l || s(h, l, r, a, n))) {
      p = !1;
      break;
    }
  }
  return n.delete(e), n.delete(t), p;
}
function ra(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a, s) {
    r[++t] = [s, a];
  }), r;
}
function aa(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(a) {
    r[++t] = a;
  }), r;
}
var na = 1, sa = 2, ia = "[object Boolean]", oa = "[object Date]", ua = "[object Error]", fa = "[object Map]", ga = "[object Number]", pa = "[object RegExp]", la = "[object Set]", ca = "[object String]", da = "[object Symbol]", ha = "[object ArrayBuffer]", _a = "[object DataView]", _e = C ? C.prototype : void 0, q = _e ? _e.valueOf : void 0;
function ya(e, t, r, a, s, n, i) {
  switch (r) {
    case _a:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case ha:
      return !(e.byteLength != t.byteLength || !n(new he(e), new he(t)));
    case ia:
    case oa:
    case ga:
      return Pe(+e, +t);
    case ua:
      return e.name == t.name && e.message == t.message;
    case pa:
    case ca:
      return e == t + "";
    case fa:
      var g = ra;
    case la:
      var o = a & na;
      if (g || (g = aa), e.size != t.size && !o)
        return !1;
      var u = i.get(e);
      if (u)
        return u == t;
      a |= sa, i.set(e, t);
      var c = Le(g(e), g(t), a, s, n, i);
      return i.delete(e), c;
    case da:
      if (q)
        return q.call(e) == q.call(t);
  }
  return !1;
}
var ma = 1, va = Object.prototype, ba = va.hasOwnProperty;
function Ta(e, t, r, a, s, n) {
  var i = r & ma, g = fe(e), o = g.length, u = fe(t), c = u.length;
  if (o != c && !i)
    return !1;
  for (var d = o; d--; ) {
    var p = g[d];
    if (!(i ? p in t : ba.call(t, p)))
      return !1;
  }
  var _ = n.get(e), h = n.get(t);
  if (_ && h)
    return _ == t && h == e;
  var l = !0;
  n.set(e, t), n.set(t, e);
  for (var y = i; ++d < o; ) {
    p = g[d];
    var w = e[p], A = t[p];
    if (a)
      var ee = i ? a(A, w, p, t, e, n) : a(w, A, p, e, t, n);
    if (!(ee === void 0 ? w === A || s(w, A, r, a, n) : ee)) {
      l = !1;
      break;
    }
    y || (y = p == "constructor");
  }
  if (l && !y) {
    var z = e.constructor, D = t.constructor;
    z != D && "constructor" in e && "constructor" in t && !(typeof z == "function" && z instanceof z && typeof D == "function" && D instanceof D) && (l = !1);
  }
  return n.delete(e), n.delete(t), l;
}
var wa = 1, ye = "[object Arguments]", me = "[object Array]", G = "[object Object]", Aa = Object.prototype, ve = Aa.hasOwnProperty;
function ja(e, t, r, a, s, n) {
  var i = H(e), g = H(t), o = i ? me : b(e), u = g ? me : b(t);
  o = o == ye ? G : o, u = u == ye ? G : u;
  var c = o == G, d = u == G, p = o == u;
  if (p && Y(e)) {
    if (!Y(t))
      return !1;
    i = !0, c = !1;
  }
  if (p && !c)
    return n || (n = new T()), i || xe(e) ? Le(e, t, r, a, s, n) : ya(e, t, o, r, a, s, n);
  if (!(r & wa)) {
    var _ = c && ve.call(e, "__wrapped__"), h = d && ve.call(t, "__wrapped__");
    if (_ || h) {
      var l = _ ? e.value() : e, y = h ? t.value() : t;
      return n || (n = new T()), s(l, y, r, a, n);
    }
  }
  return p ? (n || (n = new T()), Ta(e, t, r, a, s, n)) : !1;
}
function Me(e, t, r, a, s) {
  return e === t ? !0 : e == null || t == null || !M(e) && !M(t) ? e !== e && t !== t : ja(e, t, r, a, Me, s);
}
function Pa(e, t) {
  return Me(e, t);
}
const be = (e) => new google.maps.LatLng(e.lat, e.lng);
class $a {
  /**
   * @constructor
   * @param element 지도를 올릴 타겟 엘리먼트
   * @param controlOption 컨트롤 옵션
   */
  constructor(t, r) {
    S(this, "map");
    S(this, "bounds");
    S(this, "markers");
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
        const [r] = t, a = be(r.position);
        this.setCenter(a);
      } else
        this.setBounds();
      t.forEach((r) => {
        const a = be(r.position);
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
class Sa {
  /**
   * @constructor
   * @param element 지도를 올릴 타겟 엘리먼트
   * @param controlOption 컨트롤 옵션
   */
  constructor(t, r) {
    S(this, "map");
    S(this, "markers");
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
      var g, o;
      s || (s = !0, this.map.panBy({ x: ((g = r == null ? void 0 : r.panBy) == null ? void 0 : g.x) || 0, y: ((o = r == null ? void 0 : r.panBy) == null ? void 0 : o.y) || 0 }));
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
const La = ({ type: e, apiKey: t, options: r, items: a, selectedItem: s, onClickMarker: n }) => {
  const i = ze(null), g = e === "google", [o, u] = U(), [c, d] = U(a), [p, _] = U();
  De(() => {
    const l = i.current;
    if (!l)
      return;
    let y;
    g ? y = new $a(l, r) : y = new Sa(l, r), u(y);
  }, []);
  const h = (l) => {
    _(l), n && n(l);
  };
  return K(() => {
    o && (o.initMapEventListener(h), o.makeMarkers(c));
  }, [o, c]), K(() => {
    Pa(a, c) || d(a);
  }, [a]), K(() => {
    s !== p && _(s);
  }, [s]), // <LoadScript
  //   apiKey={apiKey}
  //   isGoogle={isGoogle}
  //   initMap={initMap}
  // >
  //   <div
  //     ref={mapRef}
  //     style={{ width: '100%', height: '100%' }}
  //   />
  // </LoadScript>
  /* @__PURE__ */ Re("button", { children: "지도 컴포넌트" });
};
export {
  La as default
};
