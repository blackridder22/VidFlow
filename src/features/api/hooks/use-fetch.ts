"use client";

import React from "react";

import { FetchInit, FetchInput } from "@/types/fetch-params";

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
