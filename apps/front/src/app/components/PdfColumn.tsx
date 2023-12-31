import { Font, Text } from '@react-pdf/renderer';

import { FrontTown as Town } from '@maps-directions/maps-directions';
import { View } from '@react-pdf/renderer';

interface Props {
  towns: Town[];
  townIndexOffset: number;
}

const getTownIndex = (i: number, columnOffset: number) => {
  return i + columnOffset;
};

// https://github.com/diegomura/react-pdf/issues/796
Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-700.ttf',
      fontWeight: 700,
    },
  ],
});

export const PdfColumn: React.FC<Props> = ({ towns, townIndexOffset }) => {
  return (
    <View style={{ flexDirection: 'column', gap: 4 }}>
      {/* TOFIX: index is not a good key */}
      {towns.map((town, i) => {
        const townIndex = getTownIndex(i, townIndexOffset);
        const prefix = town.markerLabel ? `(${town.markerLabel})` : '';
        return (
          <View
            key={`${town.name}-${townIndex}`}
            style={{ flexDirection: 'row' }}
          >
            <Text style={{ fontSize: '11px' }}>
              {townIndex}. {town.name}
              {/* TOFIX: I am commenting out the distance feature for now as the distances are incorrect (as the crow flies I think) */}
              {/* {town.distance ? `(${town.distance})` : ''}{' '} */}
            </Text>
            <Text
              style={{
                fontFamily: 'Open Sans',
                fontSize: '11px',
                fontWeight: 'bold',
              }}
            >
              {prefix}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default PdfColumn;
