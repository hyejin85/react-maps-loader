export interface MapOptions {
  zoom?: number;
  zoomControl?: boolean;
  minZoom?: number;
  maxZoom?: number;
  panBy?: {
    x: number;
    y: number;
  };
}

export interface MapItem {
  id: number;
  name?: string;
  position: {
    lat: number;
    lng: number;
  };
}

export { MapEnum } from './enum';
export { default } from './ReactMap';
