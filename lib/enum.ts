enum MapTypeEnum {
  GOOGLE = 'google',
  NAVER = 'naver',
}

enum MapOptionEnum {
  // 지도 생성 시 옵션 값
  ZOOM_SIZE = 14,
  MIN_ZOOM_SIZE = 5,
  MAX_ZOOM_SIZE = 20,

  // 마커/윈도우창 z-index 값
  MARKER_ZINDEX = 0,
  CLICKED_MARKER_ZINDEX = 1,
  HOVERED_MARKER_ZINDEX = 2,
  INFO_WINDOW_ZINDEX = 10,
}

export { MapTypeEnum, MapOptionEnum };
