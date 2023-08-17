import { Text } from '@react-pdf/renderer';

import { Town } from '@maps-directions/maps-directions';
import { View } from '@react-pdf/renderer';

interface Props {
  towns: Town[];
  totalDistance: string | undefined;
  columnOffset: number;
}

const getTownIndex = (i: number, columnOffset: number) => {
  return i + columnOffset;
};

export const PdfColumn: React.FC<Props> = ({ towns, columnOffset }) => {
  return (
    <View style={{ flexDirection: 'column', gap: 4 }}>
      {/* TOFIX: index is not a good key */}
      {towns.map((town, i) => (
        <Text
          key={`${town.name}-${getTownIndex(i, columnOffset)}`}
          style={{ fontSize: '11px' }}
        >
          {getTownIndex(i, columnOffset)}. {town.name}{' '}
          {town.distance ? `(${town.distance})` : ''}
        </Text>
      ))}
    </View>
  );
};

export default PdfColumn;
