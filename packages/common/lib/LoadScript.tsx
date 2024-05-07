import { FC, useEffect, PropsWithChildren } from 'react';

interface LoadScriptProps {
  /**
   * Maps API key
   */
  apiKey: string;
  /**
   * 구글 지도 여부
   */
  isGoogle: boolean;
  /**
   * script 로드 후 실행 할 콜백 함수
   */
  initMap: () => void;
}

/**
 * Maps API CDN 실행 컴포넌트
 */
const LoadScript: FC<LoadScriptProps & PropsWithChildren> = ({ apiKey, isGoogle, initMap, children }) => {
  const GOOGLE_MAPS_URL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&region=KR`;
  const NAVER_MAPS_URL = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${apiKey}`;

  /**
   * Google Map은 API 로드할 때 callback 파라메타에 initMap을 지정해줘야 한다.
   * window에 initMap을 먼저 선언해둔다. (window.d.ts 파일 참조)
   * 컴포넌트가 마운트될 때, 부모 컴포넌트에서 정의해둔 initMap을 할당한다.
   */
  useEffect(() => {
    window.initMap = initMap;

    const script = document.createElement('script');
    script.src = isGoogle ? GOOGLE_MAPS_URL : NAVER_MAPS_URL;
    script.onload = () => initMap();

    document.body.appendChild(script);
  }, []);

  return <>{children}</>;
};

export default LoadScript;
