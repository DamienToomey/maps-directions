import { ListItem, OrderedList } from '@chakra-ui/react';

interface Props {
  towns: string[];
}

export const TownsList: React.FC<Props> = ({ towns }) => {
  return (
    <OrderedList listStyleType="none" margin={0}>
      {towns.map((town, i) => (
        <ListItem key={`${town}-${i}`}>
          {i}. {town}
        </ListItem>
      ))}
    </OrderedList>
  );
};

export default TownsList;
