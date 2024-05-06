import { FC } from 'react';

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
interface MapItem {
    id: number;
    name?: string;
    position: {
        lat: number;
        lng: number;
    };
}
interface ReactMapProps {
    type: 'google' | 'naver';
    apiKey: string;
    options?: MapOptions;
    items: Array<MapItem>;
    selectedItem?: MapItem;
    onClickMarker?: (item?: MapItem) => void;
}
declare const ReactMap: FC<ReactMapProps>;
export default ReactMap;
