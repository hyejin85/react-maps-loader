import { FC, useEffect, PropsWithChildren } from 'react';

const SCRIPT_ID = 'map-loaded';

interface LoadScriptProps extends PropsWithChildren {
  apiKey: string;
  isGoogle: boolean;
  initMap: () => void;
}

/**
 * Maps API CDN 실행 컴포넌트
 * @prop {string} apiKey - API key
 * @prop {boolean} isGoogle - Map 타입
 * @prop {() => void} initMap - script 로드 후 실행 할 콜백 함수
 */
const LoadScript: FC<LoadScriptProps> = ({ apiKey, isGoogle, initMap, children }) => {
  /**
   * Google Map은 API 로드할때 callback 파라메타에 initMap을 지정해줘야 한다.
   * window에 initMap을 먼저 선언해둔다. (window.d.ts 파일 참조)
   * 컴포넌트가 마운트될 때, 부모 컴포넌트에서 구현해둔 initMap을 할당한다.
   */
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) {
      return;
    }

    window.initMap = initMap;

    const script = document.createElement('script');
    script.src = isGoogle
      ? `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&region=KR`
      : `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${apiKey}`;
    script.id = SCRIPT_ID;
    script.onload = () => initMap();

    document.body.appendChild(script);
  }, []);

  return <>{children}</>;
};

export default LoadScript;
