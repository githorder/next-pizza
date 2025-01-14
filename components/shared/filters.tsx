"use client";

import React from "react";

import { cn } from "@/lib/utils";

import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { RangeSlider } from "./range-slider";
import { Input } from "../ui";
import { FilterCheckoxGroup } from "./filter-checkbox-group";

import { useFilterIngredients } from "@/hooks/useFilterIngredients";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, toggle, selectedIds } = useFilterIngredients();
  const [price, setPrice] = React.useState<PriceProps>({
    priceFrom: 0,
    priceTo: 1000,
  });

  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

  function handlePriceChange(value: number[]) {
    setPrice({
      priceFrom: value[0],
      priceTo: value[1],
    });
  }

  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="Можно собирать" text="Можно собирать" value="1" />
        <FilterCheckbox name="Новинки" text="Новинки" value="2" />
      </div>

      {/* Фильтрация цен */}
      <div className="border-y border-y-neutral-100 mt-5 py-6 pb-7">
        <p className="mb-3 font-bold">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={price.priceFrom}
            onChange={(e) =>
              handlePriceChange([+e.target.value, price.priceTo])
            }
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            value={price.priceTo}
            onChange={(e) =>
              handlePriceChange([price.priceFrom, +e.target.value])
            }
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[price.priceFrom, price.priceTo]}
          onValueChange={handlePriceChange}
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
        selectedIds={selectedIds}
        onClickCheckbox={toggle}
      />
    </div>
  );
};
