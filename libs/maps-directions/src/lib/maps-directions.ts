// https://stackoverflow.com/questions/51084724/types-googlemaps-index-d-ts-is-not-a-module
/// <reference types="@types/google.maps" />

import {
  AddressType,
  DirectionsResponseData,
  GeocodeResult,
  TravelMode,
} from '@googlemaps/google-maps-services-js';

import { LatLngTuple, decode } from '@googlemaps/polyline-codec';
import { K } from './k.model';
import { Town } from './town.model';

export abstract class MapsDirections<
  T extends GeocodeResult[] | google.maps.GeocoderResult[],
  U extends DirectionsResponseData | google.maps.DirectionsResult,
  G extends TravelMode | google.maps.TravelMode
> {
  public getCoordinates(directionsResponseData: U): K[] {
    const overviewPolyline = directionsResponseData.routes[0].overview_polyline;
    const points = this.getPoints(overviewPolyline);
    return this.getCoordinatesAlongPolyline(points);
  }

  public async getTowns(latLngs: K[]): Promise<Town[]> {
    const arrayOfPromises = latLngs.map(async (latLng) => {
      return await this.getTown(latLng);
    });
    const towns = await Promise.all(arrayOfPromises);
    const filteredTowns = towns.filter(
      (filteredTown): filteredTown is Town => filteredTown != null
    );

    return this.removeDuplicates(filteredTowns);
  }

  private toLagLngTuple(latLng: K): LatLngTuple {
    if (typeof latLng.lat !== 'number' || typeof latLng.lng !== 'number') {
      throw Error('latLng.lat or latLng.lng is not of type number');
    }
    return [latLng.lat, latLng.lng];
  }

  private metersToKm(meters: number) {
    return meters / 1000;
  }

  private addDistanceAttribute(towns: Town[]): {
    towns: Town[];
    totalDistance: string;
  } {
    let totalDistance = 0;
    const newTowns = towns.map((town, i) => {
      const nextTown = towns[i + 1];

      if (nextTown == null) {
        return town;
      }

      const distance = this.metersToKm(
        this.getHaversineDistance(
          this.toLagLngTuple(town.latLng),
          this.toLagLngTuple(nextTown.latLng)
        )
      );

      totalDistance += distance;

      return {
        ...town,
        distance: `${distance.toFixed(2)}km`,
      };
    });

    return { towns: newTowns, totalDistance: `${totalDistance.toFixed(2)}km` };
  }

  // TOFIX: fix how distances are computed (it should not be how the crow flies)
  public async getOutput(
    latLngs: K[]
  ): Promise<{ towns: Town[]; totalDistance: string }> {
    const towns = await this.getTowns(latLngs);
    return this.addDistanceAttribute(towns);
  }

  public abstract findRoute(towns: string[], travelMode: G): Promise<U>;

  public abstract main(
    townNames: string[],
    travelMode: G
  ): Promise<{ towns: Town[]; status?: unknown }>;

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

  private async getTown(
    latLng: K
  ): Promise<{ latLng: K; name: string } | null> {
    try {
      const results = await this.getGeocorderResults(latLng);

      if (results.length === 0) {
        throw Error();
      }

      const addressComponents = results[0].address_components;
      const components = addressComponents.filter((component) =>
        component.types.some(
          (type) =>
            AddressType.locality === type || AddressType.postal_code === type
        )
      );

      if (components.length === 0) {
        return null;
      }

      return {
        latLng,
        name: components.map(({ long_name }) => long_name).join(', '),
      };
    } catch (error) {
      throw Error(`Error getting town name:" ${error}`);
    }
  }

  // Warning: this could lead to mistakes if 2 towns have the same name but correspond to
  // 2 different places (less of chance with the postal code but if the postal code does not exist, then
  // we could have a bug)
  private removeDuplicates(towns: Town[]): Town[] {
    return towns.filter(({ name }, index) => name !== towns[index + 1]?.name);
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
