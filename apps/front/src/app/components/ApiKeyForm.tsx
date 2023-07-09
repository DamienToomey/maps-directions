import {
  Button,
  FormControl,
  FormLabel,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';

import { useValidateApiKey } from '../queries/validate-api-key.query';
import { PasswordInput } from './PasswordInput';

interface Props {
  onSetApiKey: (apiKey: string) => void;
}

export const ApiKeyForm: React.FC<Props> = ({ onSetApiKey }) => {
  const toast = useToast();
  const [apiKey, setApiKey] = useState('');
  const validateApiKey = useValidateApiKey(apiKey);

  useEffect(() => {
    if (!validateApiKey.isFetched) {
      return;
    }

    const isApiKeyValid = validateApiKey.data?.status === 'ZERO_RESULTS'; // google.maps.DirectionsStatus.ZERO_RESULTS
    if (isApiKeyValid) {
      onSetApiKey(apiKey);
    }

    toast({
      title: isApiKeyValid ? 'Valid API key' : 'Invalid API key',
      status: isApiKeyValid ? 'success' : 'error',
      duration: 2000,
      isClosable: true,
      position: 'top-right',
    });
  }, [validateApiKey, apiKey, onSetApiKey, toast]);

  const onValidateApiKey = useCallback(() => {
    validateApiKey.refetch();
  }, [validateApiKey]);

  const onApiKeyChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setApiKey(event.target.value);
    },
    [setApiKey]
  );

  return (
    <div>
      <FormControl>
        <VStack width="50%" height="50%" alignContent="center">
          <FormLabel>Google Maps API Key</FormLabel>
          <PasswordInput
            placeholder="Enter your API Key"
            onChange={onApiKeyChange}
          />
          <Button mt="2rem" onClick={onValidateApiKey}>
            Validate
          </Button>
        </VStack>
      </FormControl>
    </div>
  );
};

export default ApiKeyForm;
