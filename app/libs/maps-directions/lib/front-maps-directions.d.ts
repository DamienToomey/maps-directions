/// <reference types="@types/google.maps" />
import { MapsDirections } from './maps-directions';
import { Town } from './town.model';
export declare class FrontMapsDirections extends MapsDirections<google.maps.GeocoderResult[], google.maps.DirectionsResult> {
    protected getGeocorderResults(latLng: google.maps.LatLng): Promise<google.maps.GeocoderResult[]>;
    findRoute(towns: string[]): Promise<google.maps.DirectionsResult>;
    main(townNames: string[]): Promise<{
        towns: Town[];
        totalDistance: string;
        status: google.maps.DirectionsStatus;
    }>;
}
