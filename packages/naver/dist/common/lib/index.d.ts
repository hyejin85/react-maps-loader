interface MapOptions {
    zoom?: number;
    zoomControl?: boolean;
    minZoom?: number;
    maxZoom?: number;
    panBy?: {
        x: number;
        y: number;
    };
}
interface MapItem {
    id: number;
    name?: string;
    position: {
        lat: number;
        lng: number;
    };
}
export type { MapOptions, MapItem };
export { default } from './ReactMap';
