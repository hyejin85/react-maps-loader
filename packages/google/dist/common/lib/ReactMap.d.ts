import { FC } from 'react';
import { MapItem, MapOptions } from './index';

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
