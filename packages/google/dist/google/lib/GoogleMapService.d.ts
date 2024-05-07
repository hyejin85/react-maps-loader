import { MapOptions, MapItem } from '../../common/lib';

interface GoogleMapOptions extends MapOptions {
    scrollwheel?: boolean;
    clickableIcons?: boolean;
    gestureHandling?: string;
}
declare class GoogleMapService {
    map: google.maps.Map;
    markers: Array<google.maps.Marker>;
    constructor(element: HTMLElement, controlOption?: GoogleMapOptions);
    initMapEventListener(callback: (item?: MapItem) => void): void;
    makeMarkers(items: Array<MapItem>): void;
    setZoom(zoom: number): void;
    getZoom(): number | undefined;
    setCenter(center: google.maps.LatLng): void;
    getCenter(): google.maps.LatLng | undefined;
    setBounds(bounds: google.maps.LatLngBounds): void;
    getBounds(): google.maps.LatLngBounds | undefined;
}
export default GoogleMapService;
