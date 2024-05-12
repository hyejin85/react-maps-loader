import { MapItem } from '../../common/lib';

export type GoogleOptions = google.maps.MapOptions;
declare class GoogleService {
    map: google.maps.Map;
    markers: Array<google.maps.Marker>;
    constructor(element: HTMLElement, controlOption?: GoogleOptions);
    initMapEventListener(callback: () => void): void;
    makeMarkers(items: Array<MapItem>): void;
    setZoom(zoom: number): void;
    getZoom(): number | undefined;
    setCenter(center: google.maps.LatLng): void;
    getCenter(): google.maps.LatLng | undefined;
    setBounds(bounds: google.maps.LatLngBounds): void;
    getBounds(): google.maps.LatLngBounds | undefined;
}
export default GoogleService;
