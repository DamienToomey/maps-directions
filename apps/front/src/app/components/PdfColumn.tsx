import { ListItem, OrderedList } from '@chakra-ui/react';
import { Text } from '@react-pdf/renderer';

import { Town } from '@maps-directions/maps-directions';
import { View } from '@react-pdf/renderer';

interface Props {
  towns: Town[];
  totalDistance: string | undefined;
}

export const PdfColumn: React.FC<Props> = ({ towns, totalDistance }) => {
  return (
    <>
      {/* <OrderedList listStyleType="none" margin={0}>
        {towns.map((town, i) => (
          <ListItem key={`${town.name}-${i}`}>
            {i}. {town.name} {town.distance ? `(${town.distance})` : ''}
          </ListItem>
        ))}
      </OrderedList>
      {totalDistance && <Text>Total Distance: {totalDistance}</Text>} */}

      {/* <View style={{ flexDirection: 'column', width: 400 }}> */}

      <View style={{ flexDirection: 'column', gap: 4 }}>
        {towns.map((town, i) => (
          <Text key={`${town.name}-${i}`} style={{ fontSize: '11px' }}>
            {i}. {town.name} {town.distance ? `(${town.distance})` : ''}
          </Text>
        ))}
      </View>
    </>
  );
};

export default PdfColumn;
