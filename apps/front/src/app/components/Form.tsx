import { Button, FormLabel, VStack } from '@chakra-ui/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import TownNamesList from './TownNamesList';
import { useFormContext, useFormDispatch } from '../contexts/form.context';
import InputForm from './InputsForm';
import { FrontMapsDirections } from '@maps-directions/maps-directions';
import { Map } from './Map';
import { StaticMap } from './StaticMap';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Pdf from './Pdf';
import { getStaticMapQueryParams } from '../utils/static-map-query-params';

export const Form: React.FC = () => {
  const {
    apiKey,
    center,
    zoom,
    inputKeys,
    towns,
    totalDistance,
    staticMapWidth,
    staticMapHeight,
  } = useFormContext();
  const dispatch = useFormDispatch();
  const [staticMapQueryParams, setStaticMapQueryParams] = useState<
    string | null
  >(null);

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

  useEffect(() => {
    if (
      towns.length > 0 &&
      apiKey != null &&
      center != null &&
      zoom != null &&
      staticMapWidth != null &&
      staticMapHeight
    ) {
      setStaticMapQueryParams(
        getStaticMapQueryParams({
          towns,
          apiKey,
          center,
          zoom,
          staticMapWidth,
          staticMapHeight,
        })
      );
    }
  }, [towns, apiKey, center, zoom, staticMapWidth, staticMapHeight]);

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

      <Map towns={towns}></Map>

      {staticMapQueryParams != null && (
        <>
          <StaticMap queryParams={staticMapQueryParams} debug={true} />
          {/* Note: components passed as document cannot use context as context only use they initial states for some reason */}
          {/* https://github.com/diegomura/react-pdf/issues/522 */}
          {/* https://github.com/facebook/react/issues/17275 */}
          <PDFDownloadLink
            document={<Pdf staticMapQueryParams={staticMapQueryParams} />}
            fileName="somename.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? 'Loading document...' : 'Download now!'
            }
          </PDFDownloadLink>
        </>
      )}
    </>
  );
};

export default Form;
