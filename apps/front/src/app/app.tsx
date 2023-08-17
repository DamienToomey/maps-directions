import Page from './components/Page';

import { Spinner } from '@chakra-ui/react';
import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { useCallback } from 'react';
import ApiKeyForm from './components/ApiKeyForm';
import { useFormContext, useFormDispatch } from './contexts/form.context';

export function App() {
  const { apiKey } = useFormContext();
  const dispatch = useFormDispatch();

  const onSetApiKey = useCallback(
    (apiKey: string) => {
      dispatch({
        type: 'setApiKey',
        payload: { apiKey },
      });
    },
    [dispatch]
  );

  const render = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return <Spinner />;
      case Status.FAILURE:
        return <div>Error</div>;
      case Status.SUCCESS:
        return <Page />;
    }
  };

  return apiKey ? (
    <Wrapper apiKey={apiKey} render={render} />
  ) : (
    <ApiKeyForm onSetApiKey={onSetApiKey}></ApiKeyForm>
  );
}

export default App;
