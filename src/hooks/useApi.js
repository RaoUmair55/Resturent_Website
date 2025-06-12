import { useState, useCallback } from 'react';
import { config } from '../config';

export const useApi = (endpoint) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (options = {}) => {
    setLoading(true);
    setError(null);

    try {
      const { method = 'GET', body, params, headers = {} } = options;

      // Build URL with query parameters
      let url = `${config.api.baseUrl}${endpoint}`;
      if (params) {
        const queryString = new URLSearchParams(params).toString();
        url += `?${queryString}`;
      }

      // Prepare request options
      const requestOptions = {
        method,
        headers: {
          ...config.api.headers,
          ...headers,
        },
      };

      // Add body for non-GET requests
      if (body && method !== 'GET') {
        requestOptions.body = JSON.stringify(body);
      }

      // Make the request
      const response = await fetch(url, requestOptions);

      // Handle non-200 responses
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Parse response
      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  // Convenience methods for common HTTP methods
  const get = useCallback((params) => request({ method: 'GET', params }), [request]);
  const post = useCallback((body) => request({ method: 'POST', body }), [request]);
  const put = useCallback((body) => request({ method: 'PUT', body }), [request]);
  const patch = useCallback((body) => request({ method: 'PATCH', body }), [request]);
  const del = useCallback(() => request({ method: 'DELETE' }), [request]);

  return {
    data,
    error,
    loading,
    request,
    get,
    post,
    put,
    patch,
    delete: del,
  };
}; 