import { MapOptions, MapItem } from '../../common/lib';

interface NaverMapOptions extends MapOptions {
    scrollWheel?: boolean;
}
declare class NaverMapService {
    map: naver.maps.Map;
    markers: Array<naver.maps.Marker>;
    constructor(element: HTMLElement, controlOption?: NaverMapOptions);
    initMapEventListener(callback: (item?: MapItem) => void): void;
    makeMarkers(items: Array<MapItem>): void;
    setZoom(zoom: number): void;
    getZoom(): number;
    setCenter(center: naver.maps.Coord): void;
    getCenter(): naver.maps.Coord;
    setBounds(positions: Array<naver.maps.LatLng>): void;
    getBounds(): naver.maps.Bounds;
}
export default NaverMapService;
