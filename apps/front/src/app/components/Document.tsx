import { useEffect, useMemo, useState } from 'react';
import { useFormContext } from '../contexts/form.context';
import { Town } from '@maps-directions/maps-directions';

interface Props {
  towns: Town[];
}

// https://developers.google.com/maps/documentation/maps-static/overview
export const Document: React.FC<Props> = ({ towns }) => {
  const { apiKey, center, zoom } = useFormContext();
  const [queryParams, setQueryParams] = useState('');

  const markers = useMemo(() => {
    const coordinates = towns.map(({ latLng }, i) => {
      if (typeof latLng.lat !== 'number' || typeof latLng.lng !== 'number') {
        throw Error('latLng.lat or latLng.lng is not of type number');
      }
      return `markers=color:red%7Clabel:${i}%7C${latLng.lat},${latLng.lng}`;
    });

    return coordinates.join('&');
  }, [towns]);

  useEffect(() => {
    const res = [`size=600x600&maptype=roadmap&key=${apiKey}`, markers];

    if (center != null) {
      res.push(`center=${`${center.lat()},${center.lng()}`}`);
    }

    if (zoom != null) {
      res.push(`zoom=${zoom}`);
    }

    setQueryParams(res.join('&'));
  }, [apiKey, center, zoom, markers]);

  return (
    <img
      src={`https://maps.googleapis.com/maps/api/staticmap?${queryParams}`}
      alt="No map"
    ></img>
  );
};

export default Document;
