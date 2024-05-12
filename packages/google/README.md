<div align="center">

# React Maps Loader Google

</div>

`react-maps-loader-google` is a component written over a small set of the Google Maps API. It allows you to render any React component on the Google Map.

## Installation

npm:

```bash
npm install --save react-maps-loader-google
```

yarn:

```bash
yarn add react-maps-loader-google
```

## Usage

```javascript
import GoogleMap from 'react-maps-loader-google';

<div style={{ height: '100vh', width: '100%' }}>
  <GoogleMap
    apiKey=/* YOUR KEY HERE */
    options={{
      zoomControl: true,
      zoomControlOptions: {
        position: 23,
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

- Make sure the container element has width and height. The map will try to fill the parent container, but if the container has no size, the map will collapse to 0 width / height. This is not a requirement for `react-maps-loader-google`, [its a requirement for google-maps in general](https://developers.google.com/maps/documentation/javascript/tutorial).

## Features

- Load the Google Maps API while the first usage of the react component.
- Create a map by adding map control options with the data specified in `options`.
- Create markers with the data specified in `items`.
