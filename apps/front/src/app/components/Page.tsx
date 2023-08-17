import { useEffect, useState } from 'react';
import TownNamesList from './TownNamesList';
import { useFormContext } from '../contexts/form.context';
import { Map } from './Map';
import { StaticMap } from './StaticMap';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Pdf from './Pdf';
import { getStaticMapQueryParams } from '../utils/static-map-query-params';
import Form from './Form';

export const Page: React.FC = () => {
  const {
    apiKey,
    center,
    zoom,
    towns,
    totalDistance,
    staticMapWidth,
    staticMapHeight,
  } = useFormContext();
  const [staticMapQueryParams, setStaticMapQueryParams] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (
      towns.length > 0 &&
      apiKey != null &&
      center != null &&
      zoom != null &&
      staticMapWidth != null &&
      staticMapHeight
    ) {
      setStaticMapQueryParams(
        getStaticMapQueryParams({
          towns,
          apiKey,
          center,
          zoom,
          staticMapWidth,
          staticMapHeight,
        })
      );
    }
  }, [towns, apiKey, center, zoom, staticMapWidth, staticMapHeight]);

  return (
    <>
      <Form />

      <TownNamesList towns={towns} totalDistance={totalDistance} />

      <Map towns={towns} />

      {staticMapQueryParams != null &&
        towns.length > 0 &&
        totalDistance != null && (
          <>
            <StaticMap queryParams={staticMapQueryParams} mode="web" />
            {/* Note: components passed as document cannot use context as context only use they initial states for some reason */}
            {/* https://github.com/diegomura/react-pdf/issues/522 */}
            {/* https://github.com/facebook/react/issues/17275 */}
            <PDFDownloadLink
              document={
                <Pdf
                  staticMapQueryParams={staticMapQueryParams}
                  towns={towns}
                  totalDistance={totalDistance}
                />
              }
              fileName="somename.pdf"
            >
              {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Download now!'
              }
            </PDFDownloadLink>
          </>
        )}
    </>
  );
};

export default Page;
