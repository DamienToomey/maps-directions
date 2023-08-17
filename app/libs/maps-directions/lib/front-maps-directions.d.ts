/// <reference types="@types/google.maps" />
import { MapsDirections } from './maps-directions';
import { FrontTown } from './town.model';
export declare class FrontMapsDirections extends MapsDirections<google.maps.GeocoderResult[], google.maps.DirectionsResult, google.maps.TravelMode> {
    protected getGeocorderResults(latLng: google.maps.LatLng): Promise<google.maps.GeocoderResult[]>;
    findRoute(towns: string[], travelMode: google.maps.TravelMode): Promise<google.maps.DirectionsResult>;
    main(townNames: string[], travelMode: google.maps.TravelMode): Promise<{
        towns: FrontTown[];
        totalDistance: string;
        status: google.maps.DirectionsStatus;
    }>;
}
