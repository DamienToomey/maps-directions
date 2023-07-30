import { ListItem, OrderedList, Text } from '@chakra-ui/react';
import { Town } from '@maps-directions/maps-directions';

interface Props {
  towns: Town[];
  totalDistance: string | undefined;
}

export const TownNamesList: React.FC<Props> = ({ towns, totalDistance }) => {
  return (
    <>
      <OrderedList listStyleType="none" margin={0}>
        {towns.map((town, i) => (
          <ListItem key={`${town.name}-${i}`}>
            {i}. {town.name} {town.distance ? `(${town.distance})` : ''}
          </ListItem>
        ))}
      </OrderedList>
      {totalDistance && <Text>Total Distance: {totalDistance}</Text>}
    </>
  );
};

export default TownNamesList;
