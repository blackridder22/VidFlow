"use client";

// Removed unused imports

export function useFetch() {
  const fetchData = async (url: string, options?: RequestInit) => {
    const headers = {
      "Content-Type": "application/json",
      "x-custom-lang": "en",
      ...options?.headers,
    };

    return fetch(url, {
      ...options,
      headers,
    });
  };

  return {
    fetchData,
  };
};

export const useFetchDeps = () => {
  return [];
};
