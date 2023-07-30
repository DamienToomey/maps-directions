import { Reducer } from 'react';

/**
 * WARNING: we need to remove the default and user created
 * <input> when selecting a route via the dropdown in order
 * to unregister the input for useForm
 */
const getInputKey = (index: number) => {
  return `town-${index}`;
};

export interface FormState {
  townNames: string[];
  inputKeys: string[];
}

export const INITIAL_FORM_STATE: FormState = {
  townNames: [],
  inputKeys: [getInputKey(0), getInputKey(1)],
};

export type FormActionType = 'addInput' | 'removeInput' | 'setTownNames';

export interface FormAction<T extends FormActionType, P> {
  type: T;
  payload: P;
}

export type AddInputAction = FormAction<'addInput', undefined>;
export type RemoveInputAction = FormAction<
  'removeInput',
  { inputKeyToDelete: string }
>;
export type SetTownsAction = FormAction<
  'setTownNames',
  { townNames: string[] }
>;

export type FormActions = AddInputAction | RemoveInputAction | SetTownsAction;

export const formReducer: Reducer<FormState, FormActions> = (
  state,
  action
): FormState => {
  const { type, payload } = action;
  switch (type) {
    case 'addInput':
      return {
        ...state,
        inputKeys: [
          ...state.inputKeys,
          getInputKey(+(state.inputKeys.at(-1)?.split('-').at(-1) ?? '') + 1),
        ],
      };
    case 'removeInput':
      return {
        ...state,
        inputKeys: state.inputKeys.filter(
          (inputKey) => inputKey !== payload.inputKeyToDelete
        ),
      };
    case 'setTownNames':
      return {
        ...state,
        townNames: payload.townNames,
      };
  }
};
