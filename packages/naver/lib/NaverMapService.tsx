import type { MapOptions, MapItem } from '@/common/lib';

/**
 * 위도/경도 값을 위치 객체로 변환하는 함수
 * @param position 위도/경도 값
 * @returns 위치 객체
 */
const getPosition = (position: { lat: number; lng: number }): naver.maps.LatLng => {
  return new naver.maps.LatLng(position.lat, position.lng);
};

interface NaverMapOptions extends MapOptions {
  /**
   * 스크롤 휠모션 허용 여부
   */
  scrollWheel?: boolean;
}

class NaverMapService {
  /**
   * 네이버 지도 객체
   */
  map: naver.maps.Map;

  /**
   * 생성된 마커 리스트
   */
  markers: Array<naver.maps.Marker>;

  /**
   * @constructor
   * @param element 지도를 올릴 타겟 엘리먼트
   * @param controlOption 컨트롤 옵션
   */
  constructor(element: HTMLElement, controlOption?: NaverMapOptions) {
    const mapOptions: naver.maps.MapOptions = {
      zoom: controlOption?.zoom || 16,
      zoomControl: controlOption?.zoomControl || false,
      zoomControlOptions: {
        style: naver.maps?.ZoomControlStyle.SMALL,
        position: naver.maps?.Position.TOP_RIGHT,
      },
      // minZoom: controlOption?.minZoom,
      // maxZoom: controlOption?.maxZoom,
      scaleControl: false,
      logoControl: false,
      mapDataControl: false,
      mapTypeControl: false,
      scrollWheel: controlOption?.scrollWheel || false,
    };

    this.map = new naver.maps.Map(element, mapOptions);
    this.markers = [];

    let isLoadedOnce = false;
    naver.maps.Event.addListener(this.map, 'tilesloaded', () => {
      if (!isLoadedOnce) {
        isLoadedOnce = true;
        this.map.panBy({ x: controlOption?.panBy?.x || 0, y: controlOption?.panBy?.y || 0 });
      }
    });
  }

  /**
   * 마커 이외의 영역 클릭 시 액티브 마커 해제하도록 설정하는 이벤트 등록 함수
   * @param callback 지도 클릭 이벤트 핸들러
   */
  initMapEventListener(callback: (item?: MapItem) => void): void {
    naver.maps.Event.addListener(this.map, 'click', () => {
      callback();
    });
  }

  /**
   * 마커 리스트 생성 함수
   * @param items 상품 정보 리스트
   * @param callback 마커 클릭 이벤트 핸들러
   * @reference naver.maps.Marker
   * https://navermaps.github.io/maps.js.ncp/docs/naver.maps.Marker.html
   */
  makeMarkers(items: Array<MapItem>): void {
    // 기존 마커들 삭제
    this.markers.forEach((marker) => marker.setMap(null));
    this.markers = [];

    if (items.length === 0) {
      return;
    }

    items.forEach((item) => {
      // 네이버 기본 마커 생성
      const marker = new naver.maps.Marker({
        position: getPosition(item.position),
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
      const positions = items.map((item) => getPosition(item.position));
      // 줌이 경계 객체에 알맞게 조정된다
      this.setBounds(positions);
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
  getZoom(): number {
    return this.map.getZoom();
  }

  /**
   * 지도 센터 위치 Set 함수
   * @param center 센터로 지정할 위치
   */
  setCenter(center: naver.maps.Coord): void {
    this.map.setCenter(center);
  }

  /**
   * 지도 센터 위치 Get 함수
   * @returns 센터로 지정된 위치
   */
  getCenter(): naver.maps.Coord {
    return this.map.getCenter();
  }

  /**
   * 지도 경계 객체 위치 정보 Set 함수
   * @param positions 위치 정보 리스트
   */
  setBounds(positions: Array<naver.maps.LatLng>): void {
    this.map.fitBounds(positions);
  }

  /**
   * 지도 경계 객체 Get 함수
   * @returns 경계 객체
   */
  getBounds(): naver.maps.Bounds {
    return this.map.getBounds();
  }
}

export default NaverMapService;
