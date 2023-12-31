import { MapsDirections } from './maps-directions';
import { FrontTown } from './town.model';

export class FrontMapsDirections extends MapsDirections<
  google.maps.GeocoderResult[],
  google.maps.DirectionsResult,
  google.maps.TravelMode
> {
  protected async getGeocorderResults(
    latLng: google.maps.LatLng
  ): Promise<google.maps.GeocoderResult[]> {
    const geocoder = new google.maps.Geocoder();

    const response = await geocoder.geocode({ location: latLng });

    return response.results;
  }

  public async findRoute(
    towns: string[],
    travelMode: google.maps.TravelMode
  ): Promise<google.maps.DirectionsResult> {
    const directionsService = new google.maps.DirectionsService();
    const request: google.maps.DirectionsRequest = {
      origin: towns[0],
      destination: towns[towns.length - 1],
      travelMode: travelMode,
      waypoints: towns
        .slice(1, towns.length - 1)
        .map((town) => ({ location: town })),
      avoidHighways: true,
      avoidTolls: true,
    };

    return await directionsService.route(request);
  }

  public async main(
    townNames: string[],
    travelMode: google.maps.TravelMode
  ): Promise<{
    towns: FrontTown[];
    totalDistance: string;
    status: google.maps.DirectionsStatus;
  }> {
    try {
      const directionsResult = await this.findRoute(townNames, travelMode);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const status: google.maps.DirectionsStatus = (directionsResult as any)
        .status;

      const frontRoute = new FrontMapsDirections();
      const coordinates = frontRoute.getCoordinates(directionsResult);
      const { towns } = await frontRoute.getOutput(coordinates);

      const legs = directionsResult.routes[0].legs;
      const totalDistance = legs
        .map((a) => (a.distance?.value ?? 0) / 1000)
        .reduce((a, b) => a + b, 0);

      return {
        towns,
        // TOFIX: use totalDistance from getOutput when fixed
        totalDistance: `${totalDistance} km`,
        status,
      };
    } catch (error) {
      throw Error(`Error finding route:" ${error}`);
    }
  }
}
