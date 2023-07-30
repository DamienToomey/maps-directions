/// <reference types="@types/google.maps" />
import { DirectionsResponseData, GeocodeResult, LatLngLiteral } from '@googlemaps/google-maps-services-js';
type K = LatLngLiteral | google.maps.LatLng;
interface Town {
    latLng: K;
    name: string;
}
export declare abstract class MapsDirections<T extends GeocodeResult[] | google.maps.GeocoderResult[], U extends DirectionsResponseData | google.maps.DirectionsResult> {
    getCoordinates(directionsResponseData: U): K[];
    getTowns(latLngs: K[]): Promise<Town[]>;
    abstract findRoute(towns: string[]): Promise<U>;
    abstract main(townNames: string[]): Promise<{
        townNames: string[];
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
export {};
