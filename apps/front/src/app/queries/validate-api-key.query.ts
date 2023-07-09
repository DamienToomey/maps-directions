import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../constants/query-keys';
import { Fetch, useFetch } from '../hooks/useFetch';
import { API } from '../models/api.model';

interface GeocoderResponse extends google.maps.GeocoderResponse {
  error_message?: string;
  status: google.maps.DirectionsStatus;
}
export const useValidateApiKey = (apiKey: string) => {
  const fetch = useFetch<GeocoderResponse>();

  return useQuery<GeocoderResponse>(
    [QUERY_KEYS.validateApiKey, apiKey],
    whoami(fetch, apiKey),
    {
      enabled: false,
      retry: 0,
    }
  );
};

export const whoami =
  (fetch: Fetch<GeocoderResponse>, apiKey: string) =>
  async (): Promise<GeocoderResponse> => {
    const json = await fetch(API.VALIDATE_API_KEY.replace('apiKey', apiKey));
    return json;
  };
