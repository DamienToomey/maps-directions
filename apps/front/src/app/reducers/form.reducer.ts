import { Town } from '@maps-directions/maps-directions';
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
  towns: Town[];
  totalDistance: string | undefined;
  inputKeys: string[];
}

export const INITIAL_FORM_STATE: FormState = {
  towns: [],
  totalDistance: undefined,
  inputKeys: [getInputKey(0), getInputKey(1)],
};

export type FormActionType =
  | 'addInput'
  | 'removeInput'
  | 'setTowns'
  | 'setTotalDistance';

export interface FormAction<T extends FormActionType, P> {
  type: T;
  payload: P;
}

export type AddInputAction = FormAction<'addInput', undefined>;
export type RemoveInputAction = FormAction<
  'removeInput',
  { inputKeyToDelete: string }
>;
export type SetTownsAction = FormAction<'setTowns', { towns: Town[] }>;
export type setTotalDistanceAction = FormAction<
  'setTotalDistance',
  { totalDistance: string }
>;

export type FormActions =
  | AddInputAction
  | RemoveInputAction
  | SetTownsAction
  | setTotalDistanceAction;

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
    case 'setTowns':
      return {
        ...state,
        towns: payload.towns,
      };
    case 'setTotalDistance':
      return {
        ...state,
        totalDistance: payload.totalDistance,
      };
  }
};
