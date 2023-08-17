import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import StaticMap from './StaticMap';
import { Town } from '@maps-directions/maps-directions';
import PdfColumn from './PdfColumn';
import { getStaticMapDimensions } from '../utils/static-map-query-params';

interface Props {
  staticMapQueryParams: string;
  towns: Town[];
  totalDistance: string | undefined;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MAX_TOWNS_PER_COLUMN = 35;

const getGroupedTowns = (towns: Town[]): Town[][] => {
  let index = 0;
  const indexToTowns = towns.reduce((acc, town, i) => {
    if (i % MAX_TOWNS_PER_COLUMN === 0) {
      index += 1;
    }

    if (acc[index] == null) {
      acc[index] = [];
    }

    acc[index].push(town);
    return acc;
  }, {} as { [index: number]: Town[] });

  return Object.values(indexToTowns);
};

const Pdf: React.FC<Props> = ({
  staticMapQueryParams,
  towns,
  totalDistance,
}) => {
  const groupedTowns = getGroupedTowns(towns);
  const [width, height] = getStaticMapDimensions(staticMapQueryParams);
  console.log('width', width, height);

  return (
    <Document>
      <Page orientation="landscape" size="A4" style={styles.page}>
        {/* TOFIX: index is not a good key */}
        <View style={{ ...styles.section, flexDirection: 'row', gap: '4px' }}>
          {groupedTowns.map((towns, index) => (
            <PdfColumn
              key={index}
              towns={towns}
              totalDistance={totalDistance}
            />
          ))}
        </View>
      </Page>

      <Page orientation="landscape" size="A4" style={styles.page}>
        <View style={styles.section}>
          <StaticMap queryParams={staticMapQueryParams} mode="pdf" />
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
