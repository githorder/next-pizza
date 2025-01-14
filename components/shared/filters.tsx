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

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, toggle, selectedIds } = useFilterIngredients();

  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: String(ingredient.id),
  }));

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
            defaultValue={0}
          />
          <Input
            type="number"
            placeholder="1000"
            min={100}
            max={1000}
            defaultValue={100}
          />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
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
