/// <reference types="@types/google.maps" />
import { DirectionsResponseData, GeocodeResult, LatLngLiteral } from '@googlemaps/google-maps-services-js';
type K = LatLngLiteral | google.maps.LatLng;
export declare abstract class MapsDirections<T extends GeocodeResult[] | google.maps.GeocoderResult[], U extends DirectionsResponseData | google.maps.DirectionsResult> {
    getCoordinates(directionsResponseData: U): K[];
    getTownNames(latLngs: K[]): Promise<string[]>;
    protected abstract getGeocorderResults(latLng: K): Promise<T>;
    abstract findRoute(towns: string[]): Promise<U>;
    abstract main(towns: string[]): Promise<{
        towns: string[];
        status?: unknown;
    }>;
    private rad;
    private getHaversineDistance;
    private getTownName;
    private removeDuplicates;
    private getCoordinatesAlongPolyline;
}
export {};
