/// <reference types="google.maps" />
interface MapOptions {
    zoom?: number;
    zoomControl?: boolean;
    minZoom?: number;
    maxZoom?: number;
    scrollWheel?: boolean;
    clickableIcons?: boolean;
    gestureHandling?: string;
    panBy?: {
        x: number;
        y: number;
    };
}
declare class GoogleMapService {
    map: google.maps.Map;
    bounds: google.maps.LatLngBounds;
    markers: Array<google.maps.Marker>;
    constructor(element: HTMLElement, controlOption?: MapOptions);
    initMapEventListener(callback: (item?: any) => void): void;
    makeMarkers(items: Array<any>): void;
    setZoom(zoom: number): void;
    getZoom(): number | undefined;
    setCenter(center: google.maps.LatLng): void;
    getCenter(): google.maps.LatLng | undefined;
    setBounds(): void;
    getBounds(): google.maps.LatLngBounds | undefined;
}
export default GoogleMapService;
