import { ListItem, OrderedList } from '@chakra-ui/react';

interface Props {
  townNames: string[];
}

export const TownNamesList: React.FC<Props> = ({ townNames }) => {
  return (
    <OrderedList listStyleType="none" margin={0}>
      {townNames.map((townName, i) => (
        <ListItem key={`${townName}-${i}`}>
          {i}. {townName}
        </ListItem>
      ))}
    </OrderedList>
  );
};

export default TownNamesList;
