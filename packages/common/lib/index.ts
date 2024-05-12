import { type GoogleOptions } from '@/google/lib/GoogleService';
import { type NaverOptions } from '@/naver/lib/NaverService';

export type MapType = 'google' | 'naver';

export type MapOptions<T> = T extends 'google' ? GoogleOptions : NaverOptions;

export const isGoogleMap = (type: MapType): boolean => {
  return type === 'google';
};

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
