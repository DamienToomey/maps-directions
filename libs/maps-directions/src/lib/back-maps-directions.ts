import {
  Client,
  DirectionsResponseData,
  LatLngLiteral,
  TravelMode,
  DirectionsRequest,
  GeocodeResult,
} from '@googlemaps/google-maps-services-js';
import { MapsDirections } from './maps-directions';

import * as dotenv from 'dotenv';
import { Town } from './town.model';
dotenv.config();

class BackMapsDirections extends MapsDirections<
  GeocodeResult[],
  DirectionsResponseData,
  TravelMode
> {
  private client = new Client();

  private getApiKey(): string {
    return process.env['NX_GOOGLE_MAPS_API_KEY'] ?? '';
  }

  public async findRoute(
    towns: string[],
    travelMode: TravelMode
  ): Promise<DirectionsResponseData> {
    const origin = towns[0];
    const destination: string = towns[towns.length - 1];

    const waypoints: DirectionsRequest['params']['waypoints'] = towns.slice(
      1,
      towns.length
    );

    const response = await this.client.directions({
      params: {
        origin,
        destination,
        key: this.getApiKey(),
        mode: travelMode,
        waypoints,
      },
    });

    return response.data;
  }

  protected async getGeocorderResults(
    latLng: LatLngLiteral
  ): Promise<GeocodeResult[]> {
    const response = await this.client.reverseGeocode({
      params: {
        latlng: latLng,
        key: this.getApiKey(),
      },
    });
    return response.data.results;
  }

  public async main(
    townNames: string[],
    travelMode: TravelMode
  ): Promise<{ towns: Town[]; totalDistance: string }> {
    try {
      const mapsDirections = new BackMapsDirections();
      const directionsResult = await mapsDirections.findRoute(
        townNames,
        travelMode
      );

      const coordinates = mapsDirections.getCoordinates(directionsResult);
      const { towns, totalDistance } = await mapsDirections.getOutput(
        coordinates
      );
      return { towns, totalDistance };
    } catch (error) {
      throw Error(`Error" ${error}`);
    }
  }
}

const main = async () => {
  const townNames = [
    // "21 rue de l'écho 27400 Louviers, France",
    // 'Pl. du Ralliement, 49100 Angers',
    'Louviers France',
    'Saint Etienne du Vauvray France',
    'Le Mesnil Jourdain France',
    // 'Sommaisne France',
    // 'Bar le duc France',
  ];

  const travelMode = TravelMode.bicycling;

  const mapsDirections = new BackMapsDirections();

  const { towns, totalDistance } = await mapsDirections.main(
    townNames,
    travelMode
  );

  for (let i = 0; i < towns.length; i++) {
    const { name, distance } = towns[i];
    console.log(name, distance ? distance : '');
  }

  console.log('Total distance', totalDistance);
};

main();

// Test

// const directionsResult = await findRoute(
//   "21 rue de l'écho 27400 Louviers, France",
//   "27110 Ecquetot"
// );

// const step = leg.steps[9]; // distance: { text: '10.6 km', value: 10615 },
// cumulated sum of distances between each point of the polyline: 10620.76895125762 meters

// ---

// interesting to keep
// const getRouteDetails = (
//   directionsResponseData: DirectionsResponseData
// ): void => {
//   directionsResponseData.routes[0].legs.forEach((leg) => {
//     leg.steps.forEach((step, index) => {
//       console.log(
//         `${index + 1}. ${step.distance.text}, ${step.duration.text}: ${
//           step.html_instructions
//         }`
//       );
//     });
//   });
// };
