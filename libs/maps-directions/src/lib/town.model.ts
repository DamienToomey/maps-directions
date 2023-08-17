import { K } from './k.model';

export interface Town {
  latLng: K;
  name: string;
  distance?: string; // km
}

export interface FrontTown extends Town {
  markerLabel?: string;
}
