import React from 'react';
import { Page, View, Document, Text } from '@react-pdf/renderer';
import StaticMap from './StaticMap';
import { FrontTown as Town } from '@maps-directions/maps-directions';
import PdfColumn from './PdfColumn';

interface Props {
  staticMapQueryParams: string;
  towns: Town[];
  totalDistance: string | undefined;
}

const MAX_COLUMNS_PER_PAGE = 3;
const MAX_TOWNS_PER_COLUMN = 35;

function splitArray<T>(towns: T[], n: number): T[][] {
  let index = 0;
  const indexToTowns = towns.reduce((acc, town, i) => {
    if (i % n === 0) {
      index += 1;
    }

    if (acc[index] == null) {
      acc[index] = [];
    }

    acc[index].push(town);
    return acc;
  }, {} as { [index: number]: T[] });

  return Object.values(indexToTowns);
}

const Pdf: React.FC<Props> = ({
  staticMapQueryParams,
  towns,
  totalDistance,
}) => {
  const columnsPerPage = splitArray(towns, MAX_TOWNS_PER_COLUMN);
  const pages = splitArray(columnsPerPage, MAX_COLUMNS_PER_PAGE);

  return (
    <Document>
      {/* TOFIX: index is not a good key */}
      {pages.map((columns, pageIndex) => (
        <Page
          key={`page-${pageIndex}`}
          orientation="landscape"
          size="A4"
          style={{ margin: 10 }}
        >
          {/* TOFIX: index is not a good key */}
          <View style={{ flexDirection: 'row', gap: '4px' }}>
            {columns.map((column, columnIndex) => {
              const pageOffset =
                MAX_TOWNS_PER_COLUMN * MAX_COLUMNS_PER_PAGE * pageIndex;
              const columnOffset = MAX_TOWNS_PER_COLUMN * columnIndex;
              return (
                <PdfColumn
                  key={`page-${pageIndex}-column-${columnIndex}`}
                  towns={column}
                  townIndexOffset={pageOffset + columnOffset}
                />
              );
            })}
          </View>
        </Page>
      ))}

      <Page orientation="landscape" size="A4">
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            flex: 1,
          }}
        >
          <StaticMap queryParams={staticMapQueryParams} mode="pdf" />
          <Text style={{ fontSize: '11px' }}>
            Total Distance: {totalDistance}
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
