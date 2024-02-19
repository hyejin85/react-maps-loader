import { isEqual } from 'lodash-es';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { MapType, MapItem, ControlOption } from './types';
import { MapTypeEnum } from './enum';
import GoogleMap from '../../google/lib/GoogleMapService';
import NaverMap from '../../naver/lib/NaverMapService';
import LoadScript from './LoadScript';

interface ReactMapsProps {
  type: MapType;
  apiKey: string;
  controlOption?: ControlOption;
  items: Array<MapItem>;
  selectedItem?: MapItem;
  onClickMarker?: (item?: MapItem) => void;
}

/**
 * @prop {MapType} type - 구글/네이버 지도 타입
 * @prop {string} apiKey - 지도 API Key
 * @prop {ControlOption} controlOption - 지도 컨트롤 옵션 값
 * @prop {Array<MapItem>} items - 마커로 생성할 위치 정보 리스트
 * @prop {MapItem} selectedItem - 액티브 상태로 표시할 마커 위치 정보
 * @prop {(item: MapItem) => void} onClickMarker - 마커 클릭 이벤트 리스너
 */
const ReactMaps: FC<ReactMapsProps> = ({ type, apiKey, controlOption, items, selectedItem, onClickMarker }) => {
  /**
   * 지도 객체가 올라가는 Element
   */
  const mapRef = useRef<HTMLDivElement>(null);

  /**
   * 구글/네이버 지도 타입
   */
  const isGoogle = type === MapTypeEnum.GOOGLE;

  /**
   * 지도 객체
   */
  const [mapInstance, setMapInstance] = useState<NaverMap | GoogleMap>();

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

    let map: GoogleMap | NaverMap;
    if (isGoogle) {
      map = new GoogleMap(mapElement, controlOption);
    } else {
      map = new NaverMap(mapElement, controlOption);
    }

    setMapInstance(map);
  }, []);

  /**
   * 지도 마커 이외의 영역 클릭 이벤트 핸들러
   * @param item 액티브 마커 상태의 상품 정보
   */
  const mapClickHandler = (item?: MapItem) => {
    setActiveMarker(item);

    if (onClickMarker) {
      onClickMarker(item);
    }
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
   * 지도의 밖에서 이벤트가 발생했을때 해당 아이템을 할당했을 때 실행된다.
   * (예를 들어 LP 필터 리스트 항목에서 아이템을 클릭했을 경우)
   * 현재 액티브 마커로 등록한다.
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

export default ReactMaps;
