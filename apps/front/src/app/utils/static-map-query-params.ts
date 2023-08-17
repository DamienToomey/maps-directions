import { Town } from '@maps-directions/maps-directions';
import { INITIAL_FORM_STATE } from '../reducers/form.reducer';

interface Props {
  towns: Town[];
  apiKey: string;
  center: google.maps.LatLng;
  zoom: number;
  staticMapWidth: number;
  staticMapHeight: number;
}

const getMarkers = (towns: Town[]) => {
  const coordinates = towns.map(({ latLng }, i) => {
    if (typeof latLng.lat !== 'number' || typeof latLng.lng !== 'number') {
      throw Error('latLng.lat or latLng.lng is not of type number');
    }

    // https://developers.google.com/maps/documentation/maps-static/start
    // specifies a single uppercase alphanumeric character from the set {A-Z, 0-9}.
    // https://stackoverflow.com/questions/36876545/google-static-map-with-custom-icon-and-label
    // "You can use up to five unique custom icons per request"
    return `markers=color:red%7Clabel:${i}%7C${latLng.lat},${latLng.lng}`;
  });

  return coordinates.join('&');
};

export const getStaticMapQueryParams = ({
  towns,
  apiKey,
  center,
  zoom,
  staticMapWidth,
  staticMapHeight,
}: Props): string => {
  const markers = getMarkers(towns);

  const queryParms = [
    `size=${staticMapWidth}x${staticMapHeight}&maptype=roadmap&key=${apiKey}&format=png`,
  ];

  if (markers !== '') {
    queryParms.push(markers);
  }

  if (center != null) {
    queryParms.push(`center=${`${center.lat()},${center.lng()}`}`);
  }

  if (zoom != null) {
    queryParms.push(`zoom=${zoom}`);
  }

  return queryParms.join('&');
};

export const getStaticMapDimensions = (queryParams: string) => {
  const pattern = /size=(\d+)x(\d+)/;
  const match = queryParams.match(pattern);

  let width = INITIAL_FORM_STATE.staticMapWidth;
  let height = INITIAL_FORM_STATE.staticMapHeight;

  if (match) {
    width = +match[1];
    height = +match[2];
  }

  return [width, height];
};
