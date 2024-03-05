import * as React from 'react';

export interface MapOptions {
  zoom?: number;
  zoomControl?: boolean;
  minZoom?: number;
  maxZoom?: number;
  scrollWheel?: boolean;
  clickableIcons?: boolean; // 구글용 옵션
  gestureHandling?: string; // 구글용 옵션
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

export interface GoogleMapProps {
  type: string;
  apiKey: string;
  options?: MapOptions;
  items: Array<MapItem>;
  selectedItem?: MapItem;
  onClickMarker?: (item?: MapItem) => void;
  children?: React.ReactNode;
}

export declare const GoogleMap: React.FunctionComponent<GoogleMapProps>;
