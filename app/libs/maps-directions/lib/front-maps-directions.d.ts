/// <reference types="@types/google.maps" />
import { MapsDirections } from './maps-directions';
export declare class FrontMapsDirections extends MapsDirections<google.maps.GeocoderResult[], google.maps.DirectionsResult> {
    protected getGeocorderResults(latLng: google.maps.LatLng): Promise<google.maps.GeocoderResult[]>;
    findRoute(towns: string[]): Promise<google.maps.DirectionsResult>;
    main(towns: string[]): Promise<{
        towns: string[];
        status: google.maps.DirectionsStatus;
    }>;
}
