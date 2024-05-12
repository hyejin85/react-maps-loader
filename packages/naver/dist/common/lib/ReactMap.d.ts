import { MapType, MapItem, MapOptions } from './index';

export interface ReactMapProps<T extends MapType> {
    type: T;
    apiKey: string;
    options?: MapOptions<T>;
    items: Array<MapItem>;
    selectedItem?: MapItem;
}
declare const ReactMap: <T extends MapType>({ type, apiKey, options, items, selectedItem, }: ReactMapProps<T>) => import("react").JSX.Element;
export default ReactMap;
