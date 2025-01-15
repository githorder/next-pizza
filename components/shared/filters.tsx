"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { Title } from "./title";
import { RangeSlider } from "./range-slider";
import { Input } from "../ui";
import { FilterCheckoxGroup } from "./filter-checkbox-group";

import { useFilters, useIngredients, useQueryFilters } from "@/hooks";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients } = useIngredients();

  const {
    setTypes,
    setPrices,
    setSizes,
    setIngredients,
    selectedIngredients,
    selectedPriceRange,
    selectedSizes,
    selectedTypes,
  } = useFilters();

  useQueryFilters({
    selectedIngredients,
    selectedPriceRange,
    selectedSizes,
    selectedTypes,
  });

  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <FilterCheckoxGroup
        name="types"
        title="Тип теста"
        className="mt-5"
        items={[
          { text: "Тонкое", value: "1" },
          { text: "Традиционное", value: "2" },
        ]}
        selected={selectedTypes}
        onClickCheckbox={setTypes}
      />

      <FilterCheckoxGroup
        name="sizes"
        title="Размеры"
        className="mt-5"
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
        selected={selectedSizes}
        onClickCheckbox={setSizes}
      />

      {/* Фильтрация цен */}
      <div className="border-y border-y-neutral-100 mt-5 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={selectedPriceRange?.priceFrom ?? 0}
            onChange={(e) =>
              setPrices([+e.target.value, selectedPriceRange?.priceTo ?? 1000])
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={selectedPriceRange?.priceTo ?? 1000}
            onChange={(e) =>
              setPrices([selectedPriceRange?.priceFrom ?? 0, +e.target.value])
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[
            selectedPriceRange?.priceFrom ?? 0,
            selectedPriceRange?.priceTo ?? 1000,
          ]}
          onValueChange={setPrices}
        />
      </div>

      {/* Фильтрация ингредиентов */}
      <FilterCheckoxGroup
        name="ingredients"
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        items={items}
        defaultItems={items.slice(0, 6)}
        selected={selectedIngredients}
        onClickCheckbox={setIngredients}
      />
    </div>
  );
};
