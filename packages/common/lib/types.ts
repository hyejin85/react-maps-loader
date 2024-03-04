// import { MapTypeEnum } from './enum';

/**
 * @example google | naver
 */
// export type MapType = MapTypeEnum.GOOGLE | MapTypeEnum.NAVER;
export type MapType = 'google' | 'naver';

/**
 * @link https://developers.google.com/maps/documentation/javascript/interaction?hl=ko
 */
export type GestureHandlingType = 'cooperative' | 'auto' | 'greedy' | 'none';

export type ControlOption = {
  zoom?: number;
  zoomControl?: boolean;
  minZoom?: number;
  maxZoom?: number;
  scrollWheel?: boolean;
  clickableIcons?: boolean; // 구글용 옵션
  gestureHandling?: GestureHandlingType; // 구글용 옵션
  panBy?: {
    x: number;
    y: number;
  };
};

export type Location = {
  latitude: number;
  longitude: number;
};

/**
 * @interface MapItem
 * @member {number} id 상품 아이디
 * @member {string} name 상품 이름
 * @member {Location} location 상품 위/경도 정보
 */
export interface MapItem {
  id: number;
  name: string;
  location: Location;
}
