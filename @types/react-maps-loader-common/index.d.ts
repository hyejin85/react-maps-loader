declare module 'react-maps-loader-common';

/**
 * @example google | naver
 */
type MapType = 'google' | 'naver';

/**
 * @link https://developers.google.com/maps/documentation/javascript/interaction?hl=ko
 */
type GestureHandlingType = 'cooperative' | 'auto' | 'greedy' | 'none';

type ControlOption = {
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

type Location = {
  latitude: number;
  longitude: number;
};

/**
 * @interface MapItem
 * @member {number} id 상품 아이디
 * @member {string} name 상품 이름
 * @member {Location} location 상품 위/경도 정보
 */
interface MapItem {
  id: number;
  name: string;
  location: Location;
}