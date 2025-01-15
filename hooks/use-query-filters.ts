"use client";

import { useRouter } from "next/navigation";
import React from "react";

import QueryString from "qs";

import { FilterProps } from "./use-filters";

import { FILTER } from "./constants";

export function useQueryFilters(queryParams: FilterProps): void {
  const router = useRouter();

  React.useEffect(() => {
    const filters = {
      [FILTER.TYPES]: Array.from(queryParams.selectedTypes),
      [FILTER.SIZES]: Array.from(queryParams.selectedSizes),
      [FILTER.INGREDIENTS]: Array.from(queryParams.selectedIngredients),
      [FILTER.PRICEFROM]: queryParams.selectedPriceRange?.priceFrom,
      [FILTER.PRICETO]: queryParams.selectedPriceRange?.priceTo,
    };

    const query = QueryString.stringify(filters, { arrayFormat: "comma" });

    router.push(`?${query}`, { scroll: false });
  }, [
    queryParams.selectedSizes,
    queryParams.selectedTypes,
    queryParams.selectedIngredients,
    queryParams.selectedPriceRange,
  ]);
}
