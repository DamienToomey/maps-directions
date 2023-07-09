import { HTTP } from '../models/api.model';
import { useCallback } from 'react';

const defaultOptions: RequestInit = {
  headers: [[HTTP.HEADERS.CONTENT_TYPE, HTTP.HEADERS.APPLICATION_JSON]],
};

export type Fetch<T> = (url: RequestInfo, options?: RequestInit) => Promise<T>;

export function useFetch<T>(): Fetch<T> {
  return useCallback(async (url: RequestInfo, options: RequestInit = {}) => {
    const response = await fetch(url, { ...defaultOptions, ...options });
    if (!response.ok) {
      const error = await (async () => {
        try {
          const res = await response.json();
          return { code: res.code, message: res.message };
        } catch (_) {
          return { code: response.status, message: response.statusText };
        }
      })();

      throw new Error(`${error.code} - ${error.message}`);
    }

    return await response.json();
  }, []);
}
