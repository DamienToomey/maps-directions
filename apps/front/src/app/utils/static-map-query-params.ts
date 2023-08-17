import { FrontTown as Town } from '@maps-directions/maps-directions';
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
  const townsWithMarker = towns.filter((town) => town.markerLabel);

  const coordinates = townsWithMarker.map(({ latLng, markerLabel }) => {
    if (typeof latLng.lat !== 'number' || typeof latLng.lng !== 'number') {
      throw Error('latLng.lat or latLng.lng is not of type number');
    }

    return `markers=color:red%7Clabel:${markerLabel}%7C${latLng.lat},${latLng.lng}`;
  });

  return coordinates.join('&');
};

const getPath = (towns: Town[]) => {
  const coordinates = towns
    .map(({ latLng }, i) => {
      if (typeof latLng.lat !== 'number' || typeof latLng.lng !== 'number') {
        throw Error('latLng.lat or latLng.lng is not of type number');
      }

      return `${latLng.lat},${latLng.lng}`;
    })
    .join('|');

  return `path=color:0x0000ff|weight:5|${coordinates}`;
};

export const getStaticMapQueryParams = ({
  towns,
  apiKey,
  center,
  zoom,
  staticMapWidth,
  staticMapHeight,
}: Props): string => {
  const path = getPath(towns);
  const markers = getMarkers(towns);

  const queryParms = [
    `size=${staticMapWidth}x${staticMapHeight}&maptype=roadmap&key=${apiKey}&format=png`,
  ];

  if (path !== '') {
    queryParms.push(path);
  }

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
