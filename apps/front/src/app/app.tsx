import Form from './components/Form';

import { Spinner } from '@chakra-ui/react';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { useCallback, useState } from 'react';
import ApiKeyForm from './components/ApiKeyForm';
import { FormContextProvider } from './contexts/form.context';

export function App() {
  const [apiKey, setApiKey] = useState('');

  const onSetApiKey = useCallback(
    (apiKey: string) => {
      setApiKey(apiKey);
    },
    [setApiKey]
  );

  const render = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return <Spinner />;
      case Status.FAILURE:
        return <div>Error</div>;
      case Status.SUCCESS:
        return (
          <FormContextProvider>
            <Form />
          </FormContextProvider>
        );
    }
  };

  return apiKey ? (
    <Wrapper apiKey={apiKey} render={render} />
  ) : (
    <ApiKeyForm onSetApiKey={onSetApiKey}></ApiKeyForm>
  );
}

export default App;
