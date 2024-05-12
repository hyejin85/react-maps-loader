import { type MapItem, MapEnum } from '@/common/lib';

export type GoogleOptions = google.maps.MapOptions;

/**
 * 위도/경도 값을 위치 객체로 변환하는 함수
 * @param position 위도/경도 값 객체
 * @returns 위치 객체
 */
const getPosition = (position: { lat: number; lng: number }): google.maps.LatLng => {
  return new google.maps.LatLng(position.lat, position.lng);
};

class GoogleService {
  /**
   * 구글 지도 객체
   */
  map: google.maps.Map;

  /**
   * 생성된 마커 리스트
   */
  markers: Array<google.maps.Marker>;

  /**
   * @constructor
   * @param element 지도를 올릴 타겟 엘리먼트
   * @param controlOption 컨트롤 옵션
   * @link https://developers.google.com/maps/documentation/javascript/reference/map?hl=ko#MapOptions
   */
  constructor(element: HTMLElement, controlOption?: GoogleOptions) {
    const mapOptions = {
      ...controlOption,
      zoom: controlOption?.zoom || MapEnum.ZOOM_SIZE,
    };

    this.map = new google.maps.Map(element, mapOptions);
    this.markers = [];
  }

  /**
   * 마커 이외의 영역 클릭 시 액티브 마커 해제하도록 설정하는 이벤트 등록 함수
   * @param callback 지도 클릭 이벤트 핸들러
   */
  initMapEventListener(callback: () => void): void {
    google.maps.event.addListener(this.map, 'click', () => {
      callback();
    });
  }

  /**
   * 마커 리스트 생성 함수
   * @param items 상품 정보 리스트
   * @reference google.maps.Marker
   * @link https://developers.google.com/maps/documentation/javascript/reference/marker
   */
  makeMarkers(items: Array<MapItem>): void {
    // 기존 마커들 삭제
    this.markers.forEach((marker) => marker.setMap(null));
    this.markers = [];

    if (items.length === 0) {
      return;
    }

    const bounds = new google.maps.LatLngBounds();
    items.forEach((item) => {
      const position = getPosition(item.position);
      // 마커 위치 정보를 경계 객체에 넘겨준다
      bounds.extend(position);

      const marker = new google.maps.Marker({
        position,
        map: this.map,
      });

      this.markers.push(marker);
    });

    if (items.length <= 1) {
      const [item] = items;
      const position = getPosition(item.position);
      // 지도 센터 위치를 지정한다
      this.setCenter(position);
    } else {
      // 줌이 경계 객체에 알맞게 조정된다
      this.setBounds(bounds);
    }
  }

  /**
   * 지도 줌 사이즈 Set 함수
   * @param zoom 줌 사이즈
   */
  setZoom(zoom: number): void {
    this.map.setZoom(zoom);
  }

  /**
   * 지도 줌 사이즈 Get 함수
   * @returns 줌 사이즈
   */
  getZoom(): number | undefined {
    return this.map.getZoom();
  }

  /**
   * 지도 센터 위치 Set 함수
   * @param center 센터로 지정할 위치
   */
  setCenter(center: google.maps.LatLng): void {
    this.map.setCenter(center);
  }

  /**
   * 지도 센터 위치 Get 함수
   * @returns 센터로 지정된 위치
   */
  getCenter(): google.maps.LatLng | undefined {
    return this.map.getCenter();
  }

  /**
   * 지도 경계 객체 위치 정보 Set 함수
   * @param bounds 경계 객체
   */
  setBounds(bounds: google.maps.LatLngBounds): void {
    this.map.fitBounds(bounds);
  }

  /**
   * 지도 경계 객체 Get 함수
   * @returns 경계 객체
   */
  getBounds(): google.maps.LatLngBounds | undefined {
    return this.map.getBounds();
  }
}

export default GoogleService;
