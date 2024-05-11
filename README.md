<div align="center">

# react-maps-loader organization root

</div>

구글 및 네이버 Maps API를 래핑하여 각각 NPM 리액트 컴포넌트로 제공하는 모노 레파지토리의 루트입니다.

상세 모듈 설명과 사용법은 [react-maps-loader-google](https://github.com/hyejin85/react-maps-loader/tree/main/packages/google) 및 [react-maps-loader-naver](https://github.com/hyejin85/react-maps-loader/tree/main/packages/naver) 각각을 참고해주시길 바랍니다.

## Getting Started

### 개발 환경

- Node v18.17.0 이상

### 패키지 빌드 & 배포

```bash
# install packages
$ npm install

# build repositories with vite
$ npm run build

# clean up and build
$ npm run prepare

# publish repositories with lerna
$ lerna publish
```

## 작업 리스트 정리

- [x] 개발 환경 설정 (Lerna, React, Vite, ESLint 등)
- [x] 필요 모듈 설정 (구글 및 네이버 지도 타입 제공 모듈)
- [x] TS config 설정
- [x] 패키지 구조 설계
- [x] 모노 레포 생성
  - [x] [공통] 컴포넌트 패키지 설정
  - [x] [구글] 지도 패키지 설정
  - [x] [네이버] 지도 패키지 설정
- [ ] 개발 및 테스트
  - [x] 구글 지도 서비스 구현부 생성
  - [x] 네이버 지도 서비스 구현부 생성
  - [x] 지도 제공 리액트 컴포넌트 생성
  - [x] NPM 배포 및 지도 생성 테스트
  - [x] 컨트롤 옵션 설정 기능 개발
    - [x] 컨트롤 옵션에 따른 구글/네이버 지도 객체 생성
    - [x] 리액트 컴포넌트 컨트롤 옵션 prop 제공
  - [x] 마커 생성 기능 개발
    - [x] 구글/네이버 지도 마커 생성 구현
    - [ ] 구글/네이버 지도 마커 이벤트 리스너 제공
    - [ ] 구글/네이버 지도 커스텀 마커 생성 구현
    - [ ] 구글/네이버 지도 커스텀 마커 이벤트 리스너 제공
    - [x] 리액트 컴포넌트 마커 위치 정보 prop 제공
    - [ ] 리액트 컴포넌트 마커 이벤트 리스너 prop 제공
  - [ ] 윈도우 창 생성 기능 개발
    - [ ] 구글/네이버 지도 윈도우 창 생성 구현
    - [ ] 리액트 컴포넌트 윈도우 창 prop 제공
    - [ ] 리액트 컴포넌트 윈도우 창 이벤트 리스너 prop 제공
  - [ ] 지도 이벤트 리스너 개발
    - [ ] 구글/네이버 지도 이벤트 리스너 제공
    - [ ] 리액트 컴포넌트 지도 이벤트 리스너 prop 제공
- [x] README.md 작성
