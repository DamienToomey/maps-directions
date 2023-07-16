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
dotenv.config();

class BackMapsDirections extends MapsDirections<
  GeocodeResult[],
  DirectionsResponseData
> {
  private client = new Client();

  private getApiKey(): string {
    return process.env['NX_GOOGLE_MAPS_API_KEY'] ?? '';
  }

  public async findRoute(towns: string[]): Promise<DirectionsResponseData> {
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
        mode: TravelMode.bicycling,
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

  public async main(towns: string[]): Promise<{ towns: string[] }> {
    try {
      const mapsDirections = new BackMapsDirections();
      const directionsResult = await mapsDirections.findRoute(towns);

      const coordinates = mapsDirections.getCoordinates(directionsResult);
      const townNames = await mapsDirections.getTownNames(coordinates);
      return { towns: townNames };
    } catch (error) {
      throw Error(`Error" ${error}`);
    }
  }
}

const main = async () => {
  const towns = [
    // "21 rue de l'écho 27400 Louviers, France",
    // 'Pl. du Ralliement, 49100 Angers',
    'Louviers France',
    'Saint Etienne du Vauvray France',
    'Le Mesnil Jourdain France',
    // 'Sommaisne France',
    // 'Bar le duc France',
  ];

  const mapsDirections = new BackMapsDirections();

  const { towns: resTowns } = await mapsDirections.main(towns);

  console.log(resTowns);
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
