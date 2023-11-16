import { useEffect, useRef, useState } from 'react';

export default function useFetch<T>(url: string, options: RequestInit = {}) {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchRef = useRef<AbortController>();

  useEffect(() => {
    return () => {
      const controller = fetchRef.current;
      if (controller) controller.abort();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      fetchRef.current = new AbortController();
      setIsLoading(true);
      try {
        const res = await fetch(url, {
          ...options,
          signal: fetchRef.current.signal,
        });
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        if (error instanceof Error) setError(error);
      }
      fetchRef.current = undefined;
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { response, error, isLoading };
}
