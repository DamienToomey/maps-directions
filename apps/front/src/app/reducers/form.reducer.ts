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
  apiKey: string | undefined;
  towns: Town[];
  totalDistance: string | undefined;
  inputKeys: string[];
  center: google.maps.LatLng | undefined;
  zoom: number | undefined;
}

export const INITIAL_FORM_STATE: FormState = {
  apiKey: undefined,
  towns: [],
  totalDistance: undefined,
  inputKeys: [getInputKey(0), getInputKey(1)],
  center: undefined,
  zoom: undefined,
};

export type FormActionType =
  | 'setApiKey'
  | 'addInput'
  | 'removeInput'
  | 'setTowns'
  | 'setTotalDistance'
  | 'setCenter'
  | 'setZoom';

export interface FormAction<T extends FormActionType, P> {
  type: T;
  payload: P;
}

export type SetApiKeyAction = FormAction<'setApiKey', { apiKey: string }>;
export type AddInputAction = FormAction<'addInput', undefined>;
export type RemoveInputAction = FormAction<
  'removeInput',
  { inputKeyToDelete: string }
>;
export type SetTownsAction = FormAction<'setTowns', { towns: Town[] }>;
export type SetTotalDistanceAction = FormAction<
  'setTotalDistance',
  { totalDistance: string }
>;
export type SetCenter = FormAction<'setCenter', { center: google.maps.LatLng }>;
export type SetZoom = FormAction<'setZoom', { zoom: number }>;

export type FormActions =
  | SetApiKeyAction
  | AddInputAction
  | RemoveInputAction
  | SetTownsAction
  | SetTotalDistanceAction
  | SetCenter
  | SetZoom;

export const formReducer: Reducer<FormState, FormActions> = (
  state,
  action
): FormState => {
  const { type, payload } = action;
  switch (type) {
    case 'setApiKey':
      return {
        ...state,
        apiKey: payload.apiKey,
      };
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
    case 'setCenter':
      return {
        ...state,
        center: payload.center,
      };
    case 'setZoom':
      return {
        ...state,
        zoom: payload.zoom,
      };
  }
};
