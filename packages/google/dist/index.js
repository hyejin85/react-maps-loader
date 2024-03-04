(()=>{var __webpack_modules__={2:(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";eval("/* harmony import */ var react_maps_loader_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(717);\n/* harmony import */ var react_maps_loader_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_maps_loader_common__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack://react-maps-loader/./lib/google/lib/index.js?")},717:()=>{eval('(function () {\n  "use strict";\n\n  var __webpack_modules__ = {\n      590: function _(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {\n        eval(\'\\n// UNUSED EXPORTS: ReactMaps\\n\\n// EXTERNAL MODULE: ./node_modules/react/index.js\\nvar react = __webpack_require__(540);\\n;// CONCATENATED MODULE: ./lib/common/lib/enum.js\\nvar enum_MapTypeEnum;\\n(function (MapTypeEnum) {\\n  MapTypeEnum["GOOGLE"] = "google";\\n  MapTypeEnum["NAVER"] = "naver";\\n})(enum_MapTypeEnum || (enum_MapTypeEnum = {}));\\nvar MapOptionEnum;\\n(function (MapOptionEnum) {\\n  // 지도 생성 시 옵션 값\\n  MapOptionEnum[MapOptionEnum["ZOOM_SIZE"] = 14] = "ZOOM_SIZE";\\n  MapOptionEnum[MapOptionEnum["MIN_ZOOM_SIZE"] = 5] = "MIN_ZOOM_SIZE";\\n  MapOptionEnum[MapOptionEnum["MAX_ZOOM_SIZE"] = 20] = "MAX_ZOOM_SIZE";\\n  // 마커/윈도우창 z-index 값\\n  MapOptionEnum[MapOptionEnum["MARKER_ZINDEX"] = 0] = "MARKER_ZINDEX";\\n  MapOptionEnum[MapOptionEnum["CLICKED_MARKER_ZINDEX"] = 1] = "CLICKED_MARKER_ZINDEX";\\n  MapOptionEnum[MapOptionEnum["HOVERED_MARKER_ZINDEX"] = 2] = "HOVERED_MARKER_ZINDEX";\\n  MapOptionEnum[MapOptionEnum["INFO_WINDOW_ZINDEX"] = 10] = "INFO_WINDOW_ZINDEX";\\n})(MapOptionEnum || (MapOptionEnum = {}));\\n\\n;// CONCATENATED MODULE: ./lib/common/lib/LoadScript.jsx\\n\\n/**\\n * Maps API CDN 실행 컴포넌트\\n * @prop {string} apiKey - API key\\n * @prop {boolean} isGoogle - Map 타입\\n * @prop {() => void} initMap - script 로드 후 실행 할 콜백 함수\\n */\\nvar LoadScript_LoadScript = function LoadScript(_ref) {\\n  var apiKey = _ref.apiKey,\\n    isGoogle = _ref.isGoogle,\\n    initMap = _ref.initMap,\\n    children = _ref.children;\\n  var getURL = function getURL(apiKey) {\\n    return isGoogle ? "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey, "&callback=initMap&region=KR") : "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=".concat(apiKey);\\n  };\\n  /**\\n   * Google Map은 API 로드할때 callback 파라메타에 initMap을 지정해줘야 한다.\\n   * window에 initMap을 먼저 선언해둔다. (window.d.ts 파일 참조)\\n   * 컴포넌트가 마운트될 때, 부모 컴포넌트에서 구현해둔 initMap을 할당한다.\\n   */\\n  useEffect(function () {\\n    window.initMap = initMap;\\n    var script = document.createElement(\\\'script\\\');\\n    script.src = getURL(apiKey);\\n    script.async = true;\\n    document.body.appendChild(script);\\n  }, []);\\n  return /*#__PURE__*/React.createElement(React.Fragment, null, children);\\n};\\n/* harmony default export */ const lib_LoadScript = ((/* unused pure expression or super */ null && (LoadScript_LoadScript)));\\n;// CONCATENATED MODULE: ./lib/common/lib/ReactMaps.jsx\\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\\n\\n\\n\\n\\n\\n\\n/**\\n * @prop {string} type - 구글/네이버 지도 타입\\n * @prop {string} apiKey - 지도 API Key\\n * @prop {ControlOption} controlOption - 지도 컨트롤 옵션 값\\n * @prop {Array<MapItem>} items - 마커로 생성할 위치 정보 리스트\\n * @prop {MapItem} selectedItem - 액티브 상태로 표시할 마커 위치 정보\\n * @prop {(item: MapItem) => void} onClickMarker - 마커 클릭 이벤트 리스너\\n */\\nvar ReactMaps = function ReactMaps(_ref) {\\n  var type = _ref.type,\\n    apiKey = _ref.apiKey,\\n    controlOption = _ref.controlOption,\\n    items = _ref.items,\\n    selectedItem = _ref.selectedItem,\\n    onClickMarker = _ref.onClickMarker;\\n  /**\\n   * 지도 객체가 올라가는 Element\\n   */\\n  var mapRef = useRef(null);\\n  /**\\n   * 구글/네이버 지도 타입\\n   */\\n  var isGoogle = type === MapTypeEnum.GOOGLE;\\n  /**\\n   * 지도 객체\\n   */\\n  var _useState = useState(),\\n    _useState2 = _slicedToArray(_useState, 2),\\n    mapInstance = _useState2[0],\\n    setMapInstance = _useState2[1];\\n  /**\\n   * 마커로 표시 할 상품 리스트\\n   */\\n  var _useState3 = useState(items),\\n    _useState4 = _slicedToArray(_useState3, 2),\\n    itemList = _useState4[0],\\n    setItemList = _useState4[1];\\n  /**\\n   * 현재 Active 상태의 마커로 설정하려는 아이템\\n   */\\n  var _useState5 = useState(),\\n    _useState6 = _slicedToArray(_useState5, 2),\\n    activeMarker = _useState6[0],\\n    setActiveMarker = _useState6[1];\\n  /**\\n   * LoadScript에서 Map API를 가져온 후에 실행될 콜백 함수\\n   */\\n  var initMap = useCallback(function () {\\n    var mapElement = mapRef.current;\\n    if (!mapElement) {\\n      return;\\n    }\\n    var map;\\n    if (isGoogle) {\\n      map = new GoogleMap(mapElement, controlOption);\\n    } else {\\n      map = new NaverMap(mapElement, controlOption);\\n    }\\n    setMapInstance(map);\\n  }, []);\\n  /**\\n   * 지도 마커 이외의 영역 클릭 이벤트 핸들러\\n   * @param item 액티브 마커 상태의 상품 정보\\n   */\\n  var mapClickHandler = function mapClickHandler(item) {\\n    setActiveMarker(item);\\n    if (onClickMarker) {\\n      onClickMarker(item);\\n    }\\n  };\\n  /**\\n   * 지도 인스턴스가 생성된 이후 가장 먼저 실행된다.\\n   * 지도의 상품 리스트를 마커로 생성한다.\\n   */\\n  useEffect(function () {\\n    if (!mapInstance) {\\n      return;\\n    }\\n    // 지도 클릭 이벤트 리스너 등록\\n    mapInstance.initMapEventListener(mapClickHandler);\\n    // 마커 생성\\n    mapInstance.makeMarkers(itemList);\\n  }, [mapInstance, itemList]);\\n  /**\\n   * 지도에 표시할 상품 리스트가 변경됐을 때 실행된다.\\n   */\\n  useEffect(function () {\\n    if (!isEqual(items, itemList)) {\\n      setItemList(items);\\n    }\\n  }, [items]);\\n  /**\\n   * 지도의 밖에서 이벤트가 발생했을때 해당 아이템을 할당했을 때 실행된다.\\n   * (예를 들어 LP 필터 리스트 항목에서 아이템을 클릭했을 경우)\\n   * 현재 액티브 마커로 등록한다.\\n   */\\n  useEffect(function () {\\n    if (selectedItem === activeMarker) {\\n      return;\\n    }\\n    setActiveMarker(selectedItem);\\n  }, [selectedItem]);\\n  return /*#__PURE__*/React.createElement(LoadScript, {\\n    apiKey: apiKey,\\n    isGoogle: isGoogle,\\n    initMap: initMap\\n  }, /*#__PURE__*/React.createElement("div", {\\n    ref: mapRef,\\n    style: {\\n      width: \\\'100%\\\',\\n      height: \\\'100%\\\'\\n    }\\n  }));\\n};\\n/* harmony default export */ const lib_ReactMaps = ((/* unused pure expression or super */ null && (ReactMaps)));\\n;// CONCATENATED MODULE: ./lib/common/lib/index.js\\n\\n\\n//# sourceURL=webpack://react-maps-loader/./lib/common/lib/index.js_+_3_modules?\');\n      },\n      287: function _(__unused_webpack_module, exports) {\n        eval(\'var __webpack_unused_export__;\\n/**\\n * @license React\\n * react.production.min.js\\n *\\n * Copyright (c) Facebook, Inc. and its affiliates.\\n *\\n * This source code is licensed under the MIT license found in the\\n * LICENSE file in the root directory of this source tree.\\n */\\nvar l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}\\nvar B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};\\nE.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;\\nH.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};\\nfunction M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}\\nfunction N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\\\\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}\\nfunction R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=\\na[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}\\nfunction S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}\\nvar U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};__webpack_unused_export__={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};__webpack_unused_export__=E;__webpack_unused_export__=p;\\n__webpack_unused_export__=r;__webpack_unused_export__=G;__webpack_unused_export__=q;__webpack_unused_export__=w;__webpack_unused_export__=W;\\n__webpack_unused_export__=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);\\nfor(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};__webpack_unused_export__=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};__webpack_unused_export__=M;__webpack_unused_export__=function(a){var b=M.bind(null,a);b.type=a;return b};__webpack_unused_export__=function(){return{current:null}};\\n__webpack_unused_export__=function(a){return{$$typeof:v,render:a}};__webpack_unused_export__=O;__webpack_unused_export__=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};__webpack_unused_export__=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};__webpack_unused_export__=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};__webpack_unused_export__=function(){throw Error("act(...) is not supported in production builds of React.");};\\n__webpack_unused_export__=function(a,b){return U.current.useCallback(a,b)};__webpack_unused_export__=function(a){return U.current.useContext(a)};__webpack_unused_export__=function(){};__webpack_unused_export__=function(a){return U.current.useDeferredValue(a)};__webpack_unused_export__=function(a,b){return U.current.useEffect(a,b)};__webpack_unused_export__=function(){return U.current.useId()};__webpack_unused_export__=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};\\n__webpack_unused_export__=function(a,b){return U.current.useInsertionEffect(a,b)};__webpack_unused_export__=function(a,b){return U.current.useLayoutEffect(a,b)};__webpack_unused_export__=function(a,b){return U.current.useMemo(a,b)};__webpack_unused_export__=function(a,b,e){return U.current.useReducer(a,b,e)};__webpack_unused_export__=function(a){return U.current.useRef(a)};__webpack_unused_export__=function(a){return U.current.useState(a)};__webpack_unused_export__=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};\\n__webpack_unused_export__=function(){return U.current.useTransition()};__webpack_unused_export__="18.2.0";\\n\\n\\n//# sourceURL=webpack://react-maps-loader/./node_modules/react/cjs/react.production.min.js?\');\n      },\n      540: function _(module, __unused_webpack_exports, __webpack_require__) {\n        eval("\\n\\nif (true) {\\n  /* unused reexport */ __webpack_require__(287);\\n} else {}\\n\\n\\n//# sourceURL=webpack://react-maps-loader/./node_modules/react/index.js?");\n      }\n    },\n    __webpack_module_cache__ = {};\n  function __nested_webpack_require_14906__(e) {\n    var n = __webpack_module_cache__[e];\n    if (void 0 !== n) return n.exports;\n    var t = __webpack_module_cache__[e] = {\n      exports: {}\n    };\n    return __webpack_modules__[e](t, t.exports, __nested_webpack_require_14906__), t.exports;\n  }\n  var __webpack_exports__ = __nested_webpack_require_14906__(590);\n})();\n\n//# sourceURL=webpack://react-maps-loader/./packages/common/dist/index.js?')}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(n,{a:n}),n},__webpack_require__.d=(e,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n);var __webpack_exports__=__webpack_require__(2)})();