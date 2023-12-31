import { Button, FormLabel, Stack, VStack } from '@chakra-ui/react';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { useFormContext, useFormDispatch } from '../contexts/form.context';
import InputForm from './InputsForm';
import { FrontMapsDirections } from '@maps-directions/maps-directions';
import { Radio, RadioGroup } from '@chakra-ui/react';

export const Form: React.FC = () => {
  const { inputKeys, travelMode } = useFormContext();
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

  const onAddTown = useCallback(() => {
    dispatch({ type: 'addInput', payload: undefined });
  }, [dispatch]);

  const setTravelMode = useCallback(
    (travelMode: google.maps.TravelMode) => {
      dispatch({ type: 'setTravelMode', payload: { travelMode } });
    },
    [dispatch]
  );

  const onSubmit = useCallback(
    async (inputKeyToValue: { [inputKey: string]: string }) => {
      const mapsDirections = new FrontMapsDirections();

      const { towns, totalDistance, status } = await mapsDirections.main(
        Object.values(inputKeyToValue),
        travelMode
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
    [dispatch, toast, travelMode]
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: '100%', marginBottom: '2rem' }}
    >
      <VStack align="start">
        <RadioGroup onChange={setTravelMode} value={travelMode}>
          <Stack direction="row">
            <Radio value={google.maps.TravelMode.BICYCLING}>Cycling</Radio>
            <Radio value={google.maps.TravelMode.DRIVING}>Driving</Radio>
            <Radio value={google.maps.TravelMode.WALKING}>Walking</Radio>
          </Stack>
        </RadioGroup>

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
  );
};

export default Form;
