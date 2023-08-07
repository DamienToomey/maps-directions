import { Image as PdfImage } from '@react-pdf/renderer';
import { useCallback } from 'react';
import { getStaticMapDimensions } from '../utils/static-map-query-params';

interface Props {
  queryParams: string;
  debug?: boolean;
}

// https://developers.google.com/maps/documentation/maps-static/overview
// https://developers.google.com/maps/documentation/maps-static/start
export const StaticMap: React.FC<Props> = ({ queryParams, debug }) => {
  // I can not use
  // <Image src="https://maps.googleapis.com/maps/api/staticmap?..." />
  // because I get the error "Not valid image extension" from react-pdf
  // so the workaround is to get the image, convert it to base64 and
  // give it to pdf react <Image>
  const loadImageAsync = useCallback((): Promise<string> => {
    return new Promise((resolve, reject) => {
      // const canvas = document.getElementById('mapCanvas') as HTMLCanvasElement;
      const canvas = document.createElement('canvas');
      const [staticMapWidth, staticMapHeight] =
        getStaticMapDimensions(queryParams);
      canvas.width = staticMapWidth;
      canvas.height = staticMapHeight;
      const ctx = canvas.getContext('2d');
      const img = new Image();
      // img.onerror = () => {
      //   console.log('error');
      //   reject();
      // };
      img.onload = () => {
        ctx?.drawImage(img, 0, 0);

        const data = canvas.toDataURL('image/png');
        resolve(data);
      };

      img.crossOrigin = 'anonymous'; // This enables CORS
      img.src = `https://maps.googleapis.com/maps/api/staticmap?${queryParams}`;
    });
  }, [queryParams]);

  return debug ? (
    <img
      src={`https://maps.googleapis.com/maps/api/staticmap?${queryParams}`}
      alt="Error loading debug map"
    ></img>
  ) : (
    <PdfImage source={loadImageAsync} />
  );
};

export default StaticMap;
