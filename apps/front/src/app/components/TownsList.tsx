import { ListItem, OrderedList } from '@chakra-ui/react';

interface Props {
  towns: string[];
}

export const TownsList: React.FC<Props> = ({ towns }) => {
  return (
    <OrderedList>
      {towns.map((town, i) => (
        <ListItem key={`${town}-${i}`}>{town}</ListItem>
      ))}
    </OrderedList>
  );
};

export default TownsList;
