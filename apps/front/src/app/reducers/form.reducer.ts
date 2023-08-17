import { FrontTown as Town } from '@maps-directions/maps-directions';
import { Reducer } from 'react';
import { TravelMode } from '../models/travel-mode.model';

export const MARKER_LABELS = 'ABCDEFGHIJ';

/**
 * https://developers.google.com/maps/documentation/maps-static/start
 * specifies a single uppercase alphanumeric character from the set {A-Z, 0-9}.
 * https://stackoverflow.com/questions/36876545/google-static-map-with-custom-icon-and-label
 * "You can use up to five unique custom icons per request"
 */
const getTownsWithMarkerIndexes = (townCount: number) => {
  // Math.min to handle the case where we have fewer towns than MARKER_LABELS.length
  const maxMarkerCount = Math.min(townCount, MARKER_LABELS.length);
  const intervalsCount = maxMarkerCount - 1;
  // TOFIX: only leads to 2 markers instead of 3 when there are only 3 towns
  const intervalSize = Math.round(townCount / intervalsCount);
  const indexes = [];

  for (let i = 0; i < maxMarkerCount; i++) {
    const index = Math.min(i * intervalSize, townCount - 1);
    indexes.push(index);
  }

  return indexes;
};

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
  staticMapWidth: number;
  staticMapHeight: number;
  travelMode: TravelMode;
}

export const INITIAL_FORM_STATE: FormState = {
  apiKey: undefined,
  towns: [],
  totalDistance: undefined,
  inputKeys: [getInputKey(0), getInputKey(1)],
  center: undefined,
  zoom: undefined,
  staticMapWidth: 600,
  staticMapHeight: 600,
  travelMode: TravelMode.BICYCLING,
};

export type FormActionType =
  | 'setApiKey'
  | 'addInput'
  | 'removeInput'
  | 'setTowns'
  | 'setTotalDistance'
  | 'setCenter'
  | 'setZoom'
  | 'setTravelMode';

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
export type SetTravelMode = FormAction<
  'setTravelMode',
  { travelMode: google.maps.TravelMode }
>;

export type FormActions =
  | SetApiKeyAction
  | AddInputAction
  | RemoveInputAction
  | SetTownsAction
  | SetTotalDistanceAction
  | SetCenter
  | SetZoom
  | SetTravelMode;

export const formReducer: Reducer<FormState, FormActions> = (
  state,
  action
): FormState => {
  const { type, payload } = action;
  switch (type) {
    case 'setApiKey': {
      return {
        ...state,
        apiKey: payload.apiKey,
      };
    }
    case 'addInput': {
      return {
        ...state,
        inputKeys: [
          ...state.inputKeys,
          getInputKey(+(state.inputKeys.at(-1)?.split('-').at(-1) ?? '') + 1),
        ],
      };
    }
    case 'removeInput': {
      return {
        ...state,
        inputKeys: state.inputKeys.filter(
          (inputKey) => inputKey !== payload.inputKeyToDelete
        ),
      };
    }
    case 'setTowns': {
      const townsWithMarkerIndexes = getTownsWithMarkerIndexes(
        payload.towns.length
      );
      let markerLetterIndex = 0;
      return {
        ...state,
        towns: payload.towns.map((town, i) => {
          if (townsWithMarkerIndexes.includes(i)) {
            const markerLabel = MARKER_LABELS[markerLetterIndex];
            markerLetterIndex++;
            return { ...town, markerLabel };
          }
          return town;
        }),
      };
    }
    case 'setTotalDistance': {
      return {
        ...state,
        totalDistance: payload.totalDistance,
      };
    }
    case 'setCenter': {
      return {
        ...state,
        center: payload.center,
      };
    }
    case 'setZoom': {
      return {
        ...state,
        zoom: payload.zoom,
      };
    }
    case 'setTravelMode': {
      return {
        ...state,
        travelMode: payload.travelMode,
      };
    }
  }
};
