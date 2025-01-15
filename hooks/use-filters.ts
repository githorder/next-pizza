"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import { useSet } from "react-use";

import { FILTER } from "./constants";

interface PriceProps {
  priceFrom?: number | null;
  priceTo?: number | null;
}

export interface FilterProps {
  selectedSizes: Set<string>;
  selectedTypes: Set<string>;
  selectedPriceRange: PriceProps;
  selectedIngredients: Set<string>;
}

interface ReturnType extends FilterProps {
  setSizes(size: string): void;
  setTypes(type: string): void;
  setIngredients(ingredient: string): void;
  setPrices(prices: number[]): void;
}

export function useFilters(): ReturnType {
  const searchParams = useSearchParams();

  const [selectedSizes, { toggle: setSizes }] = useSet<string>(
    new Set(searchParams.get(FILTER.SIZES)?.split(","))
  );
  const [selectedTypes, { toggle: setTypes }] = useSet<string>(
    new Set(searchParams.get(FILTER.TYPES)?.split(","))
  );
  const [selectedIngredients, { toggle: setIngredients }] = useSet<string>(
    new Set(searchParams.get(FILTER.INGREDIENTS)?.split(","))
  );
  const [selectedPriceRange, handlePriceChange] = React.useState<PriceProps>(
    searchParams.get(FILTER.PRICEFROM) && searchParams.get(FILTER.PRICETO)
      ? {
          [FILTER.PRICEFROM]: Number(searchParams.get(FILTER.PRICEFROM)),
          [FILTER.PRICETO]: Number(searchParams.get(FILTER.PRICETO)),
        }
      : {}
  );

  function setPrices(prices: number[]) {
    handlePriceChange({
      priceFrom: prices[0],
      priceTo: prices[1],
    });
  }

  return {
    selectedSizes,
    selectedTypes,
    selectedPriceRange,
    selectedIngredients,
    setIngredients,
    setSizes,
    setTypes,
    setPrices,
  };
}
