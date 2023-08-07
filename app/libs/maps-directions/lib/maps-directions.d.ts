/// <reference types="@types/google.maps" />
import { DirectionsResponseData, GeocodeResult, TravelMode } from '@googlemaps/google-maps-services-js';
import { K } from './k.model';
import { Town } from './town.model';
export declare abstract class MapsDirections<T extends GeocodeResult[] | google.maps.GeocoderResult[], U extends DirectionsResponseData | google.maps.DirectionsResult, G extends TravelMode | google.maps.TravelMode> {
    getCoordinates(directionsResponseData: U): K[];
    getTowns(latLngs: K[]): Promise<Town[]>;
    private toLagLngTuple;
    private metersToKm;
    private addDistanceAttribute;
    getOutput(latLngs: K[]): Promise<{
        towns: Town[];
        totalDistance: string;
    }>;
    abstract findRoute(towns: string[], travelMode: G): Promise<U>;
    abstract main(townNames: string[], travelMode: G): Promise<{
        towns: Town[];
        status?: unknown;
    }>;
    protected abstract getGeocorderResults(latLng: K): Promise<T>;
    private getPoints;
    private rad;
    private getHaversineDistance;
    private getTown;
    private removeDuplicates;
    private getCoordinatesAlongPolyline;
}
