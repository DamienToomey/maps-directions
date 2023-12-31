import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FormContextProvider } from './app/contexts/form.context';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <FormContextProvider>
          <App />
        </FormContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
