import { MapTypeEnum } from './enum';

/**
 * @example google | naver
 */
type MapType = MapTypeEnum.GOOGLE | MapTypeEnum.NAVER;

/**
 * @link https://developers.google.com/maps/documentation/javascript/interaction?hl=ko
 */
type GestureHandlingType = 'cooperative' | 'auto' | 'greedy' | 'none';

type ControlOption = {
  zoom?: number;
  zoomControl?: boolean;
  scrollWheel?: boolean;
  clickableIcons?: boolean; // 구글용 옵션
  gestureHandling?: GestureHandlingType; // 구글용 옵션
  panBy?: {
    x: number;
    y: number;
  };
};

type Location = {
  latitude: number;
  longitude: number;
};

export type { MapType, ControlOption, Location };
