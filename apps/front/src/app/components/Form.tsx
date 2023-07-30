import { Button, FormLabel, VStack } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import TownNamesList from './TownNamesList';
import { useFormContext, useFormDispatch } from '../contexts/form.context';
import InputForm from './InputsForm';
import { FrontMapsDirections } from '@maps-directions/maps-directions';

export const Form: React.FC = () => {
  const { inputKeys, towns, totalDistance } = useFormContext();
  const dispatch = useFormDispatch();

  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors, dirtyFields },
  } = useForm<{ [key: string]: string }>({
    shouldUnregister: true,
    mode: 'all',
  });

  const isEveryFieldDirty =
    inputKeys.length === Object.keys(dirtyFields).length;

  // // https://stackoverflow.com/questions/53170920/using-google-maps-with-react-how-to-create-onerror-message-if-map-cannot-load
  // (window as any).gm_authFailure = useCallback(() => {
  //   setIsApiKeyValid(false);
  // }, []);

  const mapsDirections = useMemo(() => new FrontMapsDirections(), []);

  const onAddTown = useCallback(() => {
    dispatch({ type: 'addInput', payload: undefined });
  }, [dispatch]);

  const onSubmit = useCallback(
    async (inputKeyToValue: { [inputKey: string]: string }) => {
      const { towns, totalDistance, status } = await mapsDirections.main(
        Object.values(inputKeyToValue)
      );
      dispatch({ type: 'setTotalDistance', payload: { totalDistance } });
      dispatch({ type: 'setTowns', payload: { towns } });
      toast({
        title: `Towns search status: ${status}`,
        status:
          status === google.maps.DirectionsStatus.OK ? 'success' : 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    },
    [mapsDirections, dispatch, toast]
  );

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: '100%', marginBottom: '2rem' }}
      >
        <VStack align="start">
          <FormLabel>Fill the form to get directions</FormLabel>

          <InputForm register={register} errors={errors}></InputForm>

          <Button
            leftIcon={<AddIcon />}
            onClick={onAddTown}
            aria-label="Add town"
          >
            Add town
          </Button>

          <Button
            type="submit"
            isLoading={isSubmitting}
            isDisabled={Object.keys(errors).length > 0 || !isEveryFieldDirty}
          >
            Find route
          </Button>
        </VStack>
      </form>

      <TownNamesList
        towns={towns}
        totalDistance={totalDistance}
      ></TownNamesList>
    </>
  );
};

export default Form;
