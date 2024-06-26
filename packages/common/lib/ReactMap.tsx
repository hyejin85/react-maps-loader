import { isEqual } from 'lodash-es';
import { useCallback, useEffect, useRef, useState } from 'react';
import GoogleService, { type GoogleOptions } from '@/google/lib/GoogleService';
import NaverService, { type NaverOptions } from '@/naver/lib/NaverService';
import { MapType, MapItem, MapOptions, isGoogleMap } from './index';
import LoadScript from './LoadScript';

export interface ReactMapProps<T extends MapType> {
  /**
   * 구글/네이버 지도 타입
   */
  type: T;
  /**
   * 지도 API Key
   */
  apiKey: string;
  /**
   * 지도 컨트롤 옵션 값
   */
  options?: MapOptions<T>;
  /**
   * 마커로 생성할 위치 정보 리스트
   */
  items: Array<MapItem>;
  /**
   * 액티브 상태로 표시할 마커 위치 정보
   */
  selectedItem?: MapItem;
  /**
   * 마커 클릭 이벤트 리스너
   */
  // onClickMarker?: (item: MapItem) => void;
}

const ReactMap = <T extends MapType>({
  type,
  apiKey,
  options,
  items,
  selectedItem,
  // onClickMarker,
}: ReactMapProps<T>) => {
  /**
   * 지도 객체가 올라가는 Element
   */
  const mapRef = useRef<HTMLDivElement>(null);

  /**
   * 구글/네이버 지도 타입
   */
  const isGoogle = isGoogleMap(type);

  /**
   * 지도 객체
   */
  const [mapInstance, setMapInstance] = useState<NaverService | GoogleService>();

  /**
   * 마커로 표시 할 상품 리스트
   */
  const [itemList, setItemList] = useState<Array<MapItem>>(items);

  /**
   * 현재 Active 상태의 마커로 설정하려는 아이템
   */
  const [activeMarker, setActiveMarker] = useState<MapItem>();

  /**
   * LoadScript에서 Map API를 가져온 후에 실행될 콜백 함수
   */
  const initMap = useCallback(() => {
    const mapElement = mapRef.current;
    if (!mapElement) {
      return;
    }

    let map;
    if (isGoogle) {
      map = new GoogleService(mapElement, options as GoogleOptions);
    } else {
      map = new NaverService(mapElement, options as NaverOptions);
    }

    setMapInstance(map);
  }, []);

  /**
   * 지도 마커 이외의 영역 클릭 이벤트 핸들러
   */
  const mapClickHandler = () => {
    setActiveMarker(undefined);
  };

  /**
   * 지도 인스턴스가 생성된 이후 가장 먼저 실행된다.
   * 지도의 상품 리스트를 마커로 생성한다.
   */
  useEffect(() => {
    if (!mapInstance) {
      return;
    }

    // 지도 클릭 이벤트 리스너 등록
    mapInstance.initMapEventListener(mapClickHandler);

    // 마커 생성
    mapInstance.makeMarkers(itemList);
  }, [mapInstance, itemList]);

  /**
   * 지도에 표시할 상품 리스트가 변경됐을 때 실행된다.
   */
  useEffect(() => {
    if (!isEqual(items, itemList)) {
      setItemList(items);
    }
  }, [items]);

  /**
   * 지도의 밖에서 액티브 상태의 등록할 마커가 할당됐을 때 실행된다.
   */
  useEffect(() => {
    if (selectedItem === activeMarker) {
      return;
    }

    setActiveMarker(selectedItem);
  }, [selectedItem]);

  return (
    <LoadScript
      apiKey={apiKey}
      isGoogle={isGoogle}
      initMap={initMap}
    >
      <div
        ref={mapRef}
        style={{ width: '100%', height: '100%' }}
      />
    </LoadScript>
  );
};

export default ReactMap;
