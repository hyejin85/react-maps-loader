"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("../NaverMapService-CqUVvVtM.js"),t=require("react"),j=({apiKey:o,isGoogle:p,initMap:i,children:n})=>{const r=e=>p?`https://maps.googleapis.com/maps/api/js?key=${e}&callback=initMap&region=KR`:`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${e}`;return t.useEffect(()=>{window.initMap=i;const e=document.createElement("script");e.src=r(o),e.async=!0,document.body.appendChild(e)},[]),s.jsxRuntimeExports.jsx(s.jsxRuntimeExports.Fragment,{children:n})},R=({type:o,apiKey:p,options:i,items:n,selectedItem:r,onClickMarker:e})=>{const f=t.useRef(null),m=o==="google",[c,d]=t.useState(),[u,g]=t.useState(n),[v,M]=t.useState(),E=t.useCallback(()=>{const a=f.current;if(!a)return;let l;m?l=new s.GoogleMapService(a,i):l=new s.NaverMapService(a,i),d(l)},[]),x=a=>{M(a),e&&e(a)};return t.useEffect(()=>{c&&(c.initMapEventListener(x),c.makeMarkers(u))},[c,u]),t.useEffect(()=>{s.isEqual(n,u)||g(n)},[n]),t.useEffect(()=>{r!==v&&M(r)},[r]),s.jsxRuntimeExports.jsx(j,{apiKey:p,isGoogle:m,initMap:E,children:s.jsxRuntimeExports.jsx("div",{ref:f,style:{width:"100%",height:"100%"}})})};exports.ReactMap=R;
