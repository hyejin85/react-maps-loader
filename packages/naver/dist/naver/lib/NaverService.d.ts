import { MapItem } from '../../common/lib';

export type NaverOptions = naver.maps.MapOptions;
declare class NaverService {
    map: naver.maps.Map;
    markers: Array<naver.maps.Marker>;
    constructor(element: HTMLElement, controlOption?: NaverOptions);
    initMapEventListener(callback: () => void): void;
    makeMarkers(items: Array<MapItem>): void;
    setZoom(zoom: number): void;
    getZoom(): number;
    setCenter(center: naver.maps.Coord): void;
    getCenter(): naver.maps.Coord;
    setBounds(positions: Array<naver.maps.LatLng>): void;
    getBounds(): naver.maps.Bounds;
}
export default NaverService;
