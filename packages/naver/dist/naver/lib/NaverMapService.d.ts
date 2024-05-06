/// <reference types="navermaps" />
interface MapOptions {
    zoom?: number;
    zoomControl?: boolean;
    minZoom?: number;
    maxZoom?: number;
    scrollWheel?: boolean;
    panBy?: {
        x: number;
        y: number;
    };
}
declare class NaverMapService {
    map: naver.maps.Map;
    markers: Array<naver.maps.Marker>;
    constructor(element: HTMLElement, controlOption?: MapOptions);
    initMapEventListener(callback: (item?: any) => void): void;
    makeMarkers(items: Array<any>): void;
    setZoom(zoom: number): void;
    getZoom(): number;
    setCenter(center: naver.maps.Coord): void;
    getCenter(): naver.maps.Coord;
    setBounds(items: Array<any>): void;
    getBounds(): naver.maps.Bounds;
}
export default NaverMapService;
