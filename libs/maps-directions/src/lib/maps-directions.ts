// https://stackoverflow.com/questions/51084724/types-googlemaps-index-d-ts-is-not-a-module
/// <reference types="@types/google.maps" />

import {
  AddressType,
  DirectionsResponseData,
  GeocodeResult,
  LatLngLiteral,
} from '@googlemaps/google-maps-services-js';

import { LatLngTuple, decode } from '@googlemaps/polyline-codec';

type K = LatLngLiteral | google.maps.LatLng;

export abstract class MapsDirections<
  T extends GeocodeResult[] | google.maps.GeocoderResult[],
  U extends DirectionsResponseData | google.maps.DirectionsResult
> {
  public getCoordinates(directionsResponseData: U): K[] {
    const overviewPolyline = directionsResponseData.routes[0].overview_polyline;
    const points = this.getPoints(overviewPolyline);
    return this.getCoordinatesAlongPolyline(points);
  }

  public async getTownNames(latLngs: K[]): Promise<string[]> {
    const arrayOfPromises = latLngs.map(async (latLng) => {
      return await this.getTownName(latLng);
    });
    const fullAddresses = await Promise.all(arrayOfPromises);
    const fileteredFullAddresses = fullAddresses.filter(
      (fullAddress): fullAddress is string => fullAddress != null
    );

    return this.removeDuplicates(fileteredFullAddresses);
  }

  public abstract findRoute(towns: string[]): Promise<U>;

  public abstract main(
    towns: string[]
  ): Promise<{ towns: string[]; status?: unknown }>;

  protected abstract getGeocorderResults(latLng: K): Promise<T>;

  private getPoints(overviewPolyline: string | { points: string }): string {
    let points = '';

    if (typeof overviewPolyline === 'string') {
      // front api
      points = overviewPolyline;
    } else {
      // back api
      points = overviewPolyline.points;
    }

    return points;
  }

  private rad(x: number): number {
    return (x * Math.PI) / 180;
  }

  // https://cloud.google.com/blog/products/maps-platform/how-calculate-distances-map-maps-javascript-api
  private getHaversineDistance(p1: LatLngTuple, p2: LatLngTuple) {
    const [p1Lat, p1Lng] = p1;
    const [p2Lat, p2Lng] = p2;

    const R = 6371007.2; // Radius of the Earth in meters
    const rlat1 = this.rad(p1Lat);
    const rlat2 = this.rad(p2Lat);
    const difflat = rlat2 - rlat1; // Radian difference (latitudes)
    const difflon = this.rad(p2Lng - p1Lng); // Radian difference (longitudes)

    const d =
      2 *
      R *
      Math.asin(
        Math.sqrt(
          Math.sin(difflat / 2) * Math.sin(difflat / 2) +
            Math.cos(rlat1) *
              Math.cos(rlat2) *
              Math.sin(difflon / 2) *
              Math.sin(difflon / 2)
        )
      );
    return d;
  }

  private async getTownName(latLng: K): Promise<string | null> {
    try {
      const results = await this.getGeocorderResults(latLng);

      if (results.length === 0) {
        throw Error();
      }

      const addressComponents = results[0].address_components;
      const townComponent = addressComponents.find((component) =>
        component.types.includes(AddressType.locality)
      );

      if (townComponent) {
        return townComponent.long_name;
      }

      return null;
    } catch (error) {
      throw Error(`Error getting town name:" ${error}`);
    }
  }

  // Warning: this could lead to mistakes if 2 towns have the same name but correspond to
  // 2 different places
  private removeDuplicates(townNames: string[]): string[] {
    // return Array.from(new Set(townNames));
    return townNames.filter(
      (townName, index) => townName !== townNames[index + 1]
    );
  }

  private getCoordinatesAlongPolyline(points: string): K[] {
    const polyline = decode(points, 5);

    const coordinates: K[] = [];

    // threshold at which we add a lat/long point
    const distanceThreshold = 1000; // meters

    let previousPoint: LatLngTuple | undefined;

    let distance = 0;

    for (const point of polyline) {
      if (previousPoint) {
        distance += this.getHaversineDistance(previousPoint, point);

        if (distance >= distanceThreshold) {
          coordinates.push({ lat: previousPoint[0], lng: previousPoint[1] });
          distance = 0;
        }
      }

      previousPoint = point;
    }

    return coordinates;
  }
}
