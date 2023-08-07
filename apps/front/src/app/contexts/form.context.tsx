import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';
import {
  FormActions,
  FormState,
  INITIAL_FORM_STATE,
  formReducer,
} from '../reducers/form.reducer';

const FormContext = createContext<FormState>(INITIAL_FORM_STATE);
// eslint-disable-next-line @typescript-eslint/no-empty-function
const FormDispatchContext = createContext<Dispatch<FormActions>>(() => {
  throw new Error(
    'Form dispatch context is not initialized, please wrap with <FormContextProvider />'
  );
});

export const FormContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_FORM_STATE);

  return (
    <FormContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        {props.children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};

export const useFormDispatch = () => {
  return useContext(FormDispatchContext);
};
