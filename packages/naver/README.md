<div align="center">

# React Maps Loader Naver

</div>

`react-maps-loader-naver` is a component written over a small set of the Naver Maps API. It allows you to render any React component on the Naver Map.

## Installation

npm:

```bash
npm install --save react-maps-loader-naver
```

yarn:

```bash
yarn add react-maps-loader-naver
```

## Usage

```javascript
import NaverMap from 'react-maps-loader-naver';

<div style={{ height: '100vh', width: '100%' }}>
  <NaverMap
    apiKey=/* YOUR KEY HERE */
    options={{
      zoomControl: true,
      zoomControlOptions: {
        style: 2,
        position: 7,
      },
      ...
    }}
    items={[
      {
        id: 1,
        position: {
          lat: 37.541,
          lng: 126.986,
        },
      },
      ...
    ]}
  />
</div>
```

### My map doesn't appear!

- Make sure the container element has width and height. The map will try to fill the parent container, but if the container has no size, the map will collapse to 0 width / height. This is not a requirement for `react-maps-loader-naver`, [its a requirement for naver-maps in general](https://navermaps.github.io/maps.js.ncp/docs/tutorial-2-Getting-Started.html).

## Features

- Load the Naver Maps API while the first usage of the react component.
- Create a map by adding map control options with the data specified in `options`.
- Create markers with the data specified in `items`.
